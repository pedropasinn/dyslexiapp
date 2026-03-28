// app.js — State variables, navigation, sidebar, module selectors, and init

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let currentSection = 'home';
let ranLevel = 0;
let ranType = 'numeros'; // 'numeros' | 'cores' | 'letras'
let ranTimer = null, ranStartTime = null, ranElapsed = 0;
let decodeModule = 0, decodeTimer = null, decodeStartTime = null, decodeElapsed = 0;
let precisaoModule = 0, precisaoAnswered = 0, precisaoCorrect = 0;
let fluenciaModule = 0, fluenciaTimer = null, fluenciaStartTime = null, fluenciaElapsed = 0, fluenciaAttempt = 0;
let textoModule = 0, textoTimer = null, textoStartTime = null, textoElapsed = 0;

// ─────────────────────────────────────────
// SIDEBAR NAVIGATION
// ─────────────────────────────────────────
function toggleExSidebar() {
  const sidebar = document.getElementById('ex-sidebar');
  const overlay = document.getElementById('ex-sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');

  // Atualizar sidebar
  document.querySelectorAll('#ex-sidebar .sidebar-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === id);
  });

  currentSection = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fechar sidebar no mobile
  const sidebar = document.getElementById('ex-sidebar');
  const overlay = document.getElementById('ex-sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');

  if (id === 'home') Progressao.renderProgressCard('progress-overview');
  if (id === 'ran') generateRan();
  if (id === 'precisao') renderPrecisao();
  if (id === 'decodificacao') renderDecode();
  if (id === 'fluencia') renderFluencia();
  if (id === 'texto') renderTexto();
  if (id === 'historico') showHistory('ran');
  if (id === 'memoria') initMemoria();
  if (id === 'tracking') initTracking();
  if (id === 'inibicao') initInibicao();
  if (id === 'latim-quiz') initLatimQuiz();
  if (id === 'morfologia') renderMorfologia();
  if (id === 'discriminacao') renderDiscriminacao();
  if (id === 'prosodia') renderProsodia();
  if (id === 'vocabulario') initVocabulario();
  if (id === 'silabica') renderSilabica();
  if (id === 'compreensao') renderCompreensao();
  if (id === 'estrutura')   renderEstrutura();
}

// ─────────────────────────────────────────
// DYNAMIC MODULE SELECTORS
// ─────────────────────────────────────────
function populateModuleButtons(containerId, dataArray, setterFn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  // Agrupar modulos por idioma (merge mesmo idioma nao-contíguo)
  const groupMap = new Map();
  const groupOrder = [];
  dataArray.forEach((mod, i) => {
    let lang;
    if (mod.name.startsWith('PT ')) lang = 'Português';
    else if (mod.name.startsWith('EN ')) lang = 'English';
    else if (mod.name.toLowerCase().startsWith('latim')) lang = 'Latim';
    else lang = 'Outros';

    if (!groupMap.has(lang)) {
      groupMap.set(lang, []);
      groupOrder.push(lang);
    }
    groupMap.get(lang).push({ mod, index: i });
  });

  // Se so tem um grupo, nao precisa separar
  if (groupOrder.length <= 1) {
    dataArray.forEach((mod, i) => {
      const btn = document.createElement('button');
      btn.className = 'module-btn' + (i === 0 ? ' active' : '');
      btn.dataset.index = i;
      btn.textContent = mod.name;
      btn.onclick = () => setterFn(i);
      container.appendChild(btn);
    });
    return;
  }

  groupOrder.forEach(lang => {
    const items = groupMap.get(lang);
    const section = document.createElement('div');
    section.className = 'module-group';

    const label = document.createElement('div');
    label.className = 'module-group-label';
    label.textContent = lang;
    section.appendChild(label);

    const btns = document.createElement('div');
    btns.className = 'module-group-buttons';
    items.forEach(({ mod, index }) => {
      const btn = document.createElement('button');
      btn.className = 'module-btn' + (index === 0 ? ' active' : '');
      btn.dataset.index = index;
      let btnLabel = mod.name;
      if (btnLabel.startsWith('PT ')) btnLabel = btnLabel.slice(3);
      else if (btnLabel.startsWith('EN ')) btnLabel = btnLabel.slice(3);
      btn.textContent = btnLabel;
      btn.onclick = () => setterFn(index);
      btns.appendChild(btn);
    });
    section.appendChild(btns);
    container.appendChild(section);
  });
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar acessibilidade (aplica prefs salvas antes de renderizar)
  if (typeof Acessibilidade !== 'undefined') Acessibilidade.init();

  // Inicializar sugestão de sessão guiada
  if (typeof Sessao !== 'undefined') Sessao.renderSuggestion('sessao-area');

  // Populate module selectors dynamically
  populateModuleButtons('precisao-modules', PRECISAO_MODULES, setPrecisaoModule);
  populateModuleButtons('decode-modules', DECODE_MODULES, setDecodeModule);
  populateModuleButtons('fluencia-modules', FLUENCIA_MODULES, setFluenciaModule);
  populateModuleButtons('texto-modules', TEXTO_MODULES, setTextoModule);
  populateModuleButtons('morfologia-modules', MORFOLOGIA_MODULES, setMorfologiaModule);
  populateModuleButtons('prosodia-modules', PROSODIA_MODULES, setProsodiaModule);
  populateModuleButtons('discriminacao-modules', DISCRIMINACAO_MODULES, setDiscriminacaoModule);
  populateModuleButtons('vocabulario-modules', VOCABULARIO_MODULES, setVocabularioModule);
  populateModuleButtons('silabica-modules', SILABICA_MODULES, setSilabicaModule);
  populateModuleButtons('compreensao-modules', COMPREENSAO_MODULES, setCompreensaoModule);
  populateModuleButtons('estrutura-modules',  ESTRUTURA_MODULES,  setEstruturaModule);

  // Renderizar badges de mestria em todos os seletores de módulo
  Progressao.renderMasteryBadges('precisao-modules',      'precisao',      'fluencia_precisao');
  Progressao.renderMasteryBadges('discriminacao-modules', 'discriminacao', 'fluencia_discriminacao');
  Progressao.renderMasteryBadges('morfologia-modules',    'morfologia',    'fluencia_morfologia');
  Progressao.renderMasteryBadges('vocabulario-modules',   'vocabulario',   'fluencia_vocabulario');
  Progressao.renderMasteryBadges('silabica-modules',      'silabica',      'fluencia_silabica');
  Progressao.renderMasteryBadges('texto-modules',         'texto',         'fluencia_texto');
  Progressao.renderMasteryBadges('prosodia-modules',      'prosodia',      'fluencia_prosodia');
  Progressao.renderMasteryBadges('compreensao-modules',   'compreensao',   'fluencia_compreensao');
  Progressao.renderMasteryBadges('estrutura-modules',     'estrutura',     'fluencia_estrutura');

  // Renderizar card de progresso na home
  Progressao.renderProgressCard('progress-overview');

  // Inicializar campo de meta WPM com valor salvo
  const wpmMetaInput = document.getElementById('wpm-meta-input');
  if (wpmMetaInput) {
    const savedMeta = Storage.get('wpm_meta', 150);
    wpmMetaInput.value = savedMeta;
  }

  // Entry animations
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + i * 80);
  });
});
