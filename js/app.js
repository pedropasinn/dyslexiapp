// app.js — State variables, navigation, module selectors, and init

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let currentSection = 'home';
let ranLevel = 0;
let ranTimer = null, ranStartTime = null, ranElapsed = 0;
let decodeModule = 0, decodeTimer = null, decodeStartTime = null, decodeElapsed = 0;
let precisaoModule = 0, precisaoAnswered = 0, precisaoCorrect = 0;
let fluenciaModule = 0, fluenciaTimer = null, fluenciaStartTime = null, fluenciaElapsed = 0, fluenciaAttempt = 0;
let textoModule = 0, textoTimer = null, textoStartTime = null, textoElapsed = 0;

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelectorAll('#main-nav button').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`#main-nav button[data-section="${id}"]`);
  if (navBtn) navBtn.classList.add('active');
  currentSection = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (id === 'ran') generateRan();
  if (id === 'precisao') renderPrecisao();
  if (id === 'decodificacao') renderDecode();
  if (id === 'fluencia') renderFluencia();
  if (id === 'texto') renderTexto();
  if (id === 'historico') showHistory('ran');
}

// ─────────────────────────────────────────
// DYNAMIC MODULE SELECTORS
// ─────────────────────────────────────────
function populateModuleButtons(containerId, dataArray, setterFn) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  // Agrupar módulos por idioma
  const groups = [];
  let currentGroup = null;
  dataArray.forEach((mod, i) => {
    let lang;
    if (mod.name.startsWith('PT ')) lang = 'Português';
    else if (mod.name.startsWith('EN ')) lang = 'English';
    else if (mod.name.toLowerCase().startsWith('latim')) lang = 'Latim';
    else lang = 'Outros';

    if (!currentGroup || currentGroup.lang !== lang) {
      currentGroup = { lang, items: [] };
      groups.push(currentGroup);
    }
    currentGroup.items.push({ mod, index: i });
  });

  // Se só tem um grupo, não precisa separar
  if (groups.length <= 1) {
    dataArray.forEach((mod, i) => {
      const btn = document.createElement('button');
      btn.className = 'module-btn' + (i === 0 ? ' active' : '');
      btn.textContent = mod.name;
      btn.onclick = () => setterFn(i);
      container.appendChild(btn);
    });
    return;
  }

  groups.forEach(group => {
    const section = document.createElement('div');
    section.className = 'module-group';

    const label = document.createElement('div');
    label.className = 'module-group-label';
    label.textContent = group.lang;
    section.appendChild(label);

    const btns = document.createElement('div');
    btns.className = 'module-group-buttons';
    group.items.forEach(({ mod, index }) => {
      const btn = document.createElement('button');
      btn.className = 'module-btn' + (index === 0 ? ' active' : '');
      // Remover prefixo do idioma no botão (já está no header)
      let label = mod.name;
      if (label.startsWith('PT ')) label = label.slice(3);
      else if (label.startsWith('EN ')) label = label.slice(3);
      btn.textContent = label;
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
  // Populate module selectors dynamically
  populateModuleButtons('precisao-modules', PRECISAO_MODULES, setPrecisaoModule);
  populateModuleButtons('decode-modules', DECODE_MODULES, setDecodeModule);
  populateModuleButtons('fluencia-modules', FLUENCIA_MODULES, setFluenciaModule);
  populateModuleButtons('texto-modules', TEXTO_MODULES, setTextoModule);

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
