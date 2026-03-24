// inibicao.js — Controle Inibitorio (pseudopalavras, pares minimos, caca-erros)

let inibicaoLevel = 0; // 0=pseudo, 1=pares, 2=caca-erros
let inibicaoTimer = null;
let inibicaoStarted = false;
let inibicaoCorrect = 0;
let inibicaoTotal = 0;

// Pseudopalavras (inventadas, mas fonotacticamente validas em portugues)
const PSEUDO_WORDS = [
  'brastina', 'corvelha', 'dusmente', 'felogria', 'gantivo',
  'juspério', 'larqueza', 'molteiro', 'nufrágio', 'pelvante',
  'quêndalo', 'rastível', 'sulpício', 'tramonte', 'voldique',
  'xêntrico', 'zarpento', 'clivosa', 'drêmpalo', 'fustinga',
  'grotável', 'helvisco', 'impórneo', 'jelvanto', 'krustina',
  'lopência', 'marvesto', 'nolprite', 'orvístico', 'prelvado'
];

// Pares minimos (palavra real vs pseudopalavra similar)
const PARES_MINIMOS = [
  { real: 'consciência', falso: 'consiciência', dica: 'sc vs sic' },
  { real: 'exceção', falso: 'excessão', dica: 'ção vs são' },
  { real: 'privilégio', falso: 'previlégio', dica: 'pri vs pre' },
  { real: 'perspectiva', falso: 'prespectiva', dica: 'per vs pre' },
  { real: 'meritocracia', falso: 'meritocrássia', dica: 'cia vs ssia' },
  { real: 'meteorologia', falso: 'metereologia', dica: 'eoro vs ereo' },
  { real: 'reivindicar', falso: 'reinvindicar', dica: 'vi vs nvi' },
  { real: 'beneficente', falso: 'beneficiente', dica: 'cen vs cien' },
  { real: 'empecilho', falso: 'impecilho', dica: 'em vs im' },
  { real: 'disenteria', falso: 'dissenteria', dica: 'sen vs ssen' },
  { real: 'sobrancelha', falso: 'sombrancelha', dica: 'bra vs mbra' },
  { real: 'lagartixa', falso: 'largatixa', dica: 'gar vs rga' },
  { real: 'estupro', falso: 'estrupo', dica: 'tu vs tru' },
  { real: 'cabeleireiro', falso: 'cabelereiro', dica: 'lei vs le' },
  { real: 'mortadela', falso: 'mortandela', dica: 'de vs nde' },
];

// Textos com erros escondidos (caca-erros)
const CACA_ERROS_TEXTOS = [
  {
    titulo: 'Filosofia Antiga',
    texto: 'A filosofia grega represanta um marco fundamental na história do pensamento ocidental. Sócrates, ao afirmar que "só sei que nada sei", inaugurou uma tradição de questionamemto radical. Seu discípulo Platão desenvolveu a teoria das Formas, postulando um mundo intelegível superior ao sensível. Aristóteles, por sua vez, prefiriu investigar a natureza a partir da observação empírica.',
    erros: { 'represanta': 'representa', 'questionamemto': 'questionamento', 'intelegível': 'inteligível', 'prefiriu': 'preferiu' }
  },
  {
    titulo: 'Economia Clássica',
    texto: 'Adam Smith concebeu o mercado como um sistema auto-regulado pela "mão envisível". A compitição entre produtores levaria naturalmente ao equilíbrio entre oferta e demanda. David Ricardo aprofondou essa análise ao demonstrar que o comércio internacional beneficia todas as nações, mesmo quando uma delas é mais eficiente em tudo.',
    erros: { 'envisível': 'invisível', 'compitição': 'competição', 'aprofondou': 'aprofundou' }
  },
  {
    titulo: 'Teologia Medieval',
    texto: 'Tomás de Aquino buscou consiliar a filosofia aristotélica com a fé cristã. Em sua Suma Teológica, apresentou as cinco vias para a existência de Deus, partindo da observasão do movimento, da causalidade e da contingencia dos seres. Sua obra permanece como fundamento da tradissão escolástica até os dias atuais.',
    erros: { 'consiliar': 'conciliar', 'observasão': 'observação', 'contingencia': 'contingência', 'tradissão': 'tradição' }
  }
];

function initInibicao() {
  inibicaoCorrect = 0;
  inibicaoTotal = 0;
  inibicaoStarted = false;
  if (!inibicaoTimer) {
    inibicaoTimer = createTimer('inibicao-timer');
  }
  inibicaoTimer.reset();
  document.getElementById('inibicao-start-btn').textContent = 'Iniciar';
  document.getElementById('inibicao-score').classList.add('hidden');
  document.getElementById('inibicao-save-row').style.display = 'none';
  renderInibicaoArea();
  renderInibicaoHistory();
}

function setInibicaoLevel(level) {
  inibicaoLevel = level;
  document.querySelectorAll('#inibicao-levels .module-btn').forEach((b, i) => {
    b.classList.toggle('active', i === level);
  });

  const info = document.getElementById('inibicao-info');
  if (level === 0) {
    info.innerHTML = '<strong>Instrução:</strong> Leia cada pseudopalavra em voz alta, sílaba por sílaba. Clique após ler para marcar como lida.';
  } else if (level === 1) {
    info.innerHTML = '<strong>Instrução:</strong> Em cada par, clique na palavra que está escrita <strong>corretamente</strong>. Não adivinhe — decodifique!';
  } else {
    info.innerHTML = '<strong>Instrução:</strong> Leia o texto com atenção e <strong>clique nas palavras com erro</strong> ortográfico.';
  }

  initInibicao();
}

function toggleInibicaoTimer() {
  if (!inibicaoTimer) inibicaoTimer = createTimer('inibicao-timer');
  const running = inibicaoTimer.toggle();
  inibicaoStarted = true;
  document.getElementById('inibicao-start-btn').textContent = running ? 'Parar' : 'Continuar';
}

function renderInibicaoArea() {
  const area = document.getElementById('inibicao-area');

  if (inibicaoLevel === 0) {
    renderPseudopalavras(area);
  } else if (inibicaoLevel === 1) {
    renderParesMinimos(area);
  } else {
    renderCacaErros(area);
  }
}

function renderPseudopalavras(area) {
  const shuffled = [...PSEUDO_WORDS].sort(() => Math.random() - 0.5).slice(0, 16);
  inibicaoTotal = shuffled.length;
  let html = '<div class="pseudo-grid">';
  shuffled.forEach((w, i) => {
    html += `<div class="pseudo-word" id="pseudo-${i}" onclick="clickPseudo(${i})">${w}</div>`;
  });
  html += '</div>';
  area.innerHTML = html;
}

function clickPseudo(idx) {
  if (!inibicaoStarted) return;
  const el = document.getElementById('pseudo-' + idx);
  if (el.classList.contains('read')) return;
  el.classList.add('read');
  inibicaoCorrect++;
  updateInibicaoScore();

  if (inibicaoCorrect >= inibicaoTotal) {
    inibicaoTimer.stop();
    document.getElementById('inibicao-start-btn').textContent = 'Concluído';
    document.getElementById('inibicao-save-row').style.display = '';
  }
}

function renderParesMinimos(area) {
  const shuffled = [...PARES_MINIMOS].sort(() => Math.random() - 0.5).slice(0, 10);
  inibicaoTotal = shuffled.length;
  inibicaoCorrect = 0;

  let html = '<div class="pares-grid">';
  shuffled.forEach((par, i) => {
    // Randomizar posicao (esq/dir)
    const leftIsReal = Math.random() > 0.5;
    const left = leftIsReal ? par.real : par.falso;
    const right = leftIsReal ? par.falso : par.real;
    html += `<div class="par-item" id="par-${i}">
      <div class="par-option" onclick="clickPar(${i}, this, ${leftIsReal})">${left}</div>
      <div class="par-option" onclick="clickPar(${i}, this, ${!leftIsReal})">${right}</div>
    </div>`;
  });
  html += '</div>';
  area.innerHTML = html;
}

function clickPar(idx, el, isCorrect) {
  if (!inibicaoStarted) return;
  const parItem = document.getElementById('par-' + idx);
  if (parItem.classList.contains('answered')) return;
  parItem.classList.add('answered');

  const options = parItem.querySelectorAll('.par-option');
  if (isCorrect) {
    el.classList.add('correct-pick');
    inibicaoCorrect++;
  } else {
    el.classList.add('wrong-pick');
    // Mostrar a correta
    options.forEach(opt => {
      if (opt !== el) opt.classList.add('show-correct');
    });
  }

  updateInibicaoScore();

  const answered = document.querySelectorAll('.par-item.answered').length;
  if (answered >= inibicaoTotal) {
    inibicaoTimer.stop();
    document.getElementById('inibicao-start-btn').textContent = 'Concluído';
    document.getElementById('inibicao-save-row').style.display = '';
  }
}

function renderCacaErros(area) {
  const texto = CACA_ERROS_TEXTOS[Math.floor(Math.random() * CACA_ERROS_TEXTOS.length)];
  const erroWords = Object.keys(texto.erros);
  inibicaoTotal = erroWords.length;
  inibicaoCorrect = 0;

  // Tokenizar o texto preservando espacos
  const words = texto.texto.split(/(\s+)/);
  let html = `<h3 style="margin-bottom:1rem;color:var(--navy)">${texto.titulo}</h3>`;
  html += '<div class="erro-text">';
  let wordIdx = 0;
  words.forEach(token => {
    if (token.trim() === '') {
      html += token;
    } else {
      const isError = erroWords.includes(token);
      html += `<span class="erro-word" data-idx="${wordIdx}" data-error="${isError}" onclick="clickErroWord(this)">${token}</span>`;
      wordIdx++;
    }
  });
  html += '</div>';
  html += `<p class="text-sm text-muted mt-2">Encontre os ${inibicaoTotal} erros ortográficos no texto.</p>`;
  area.innerHTML = html;
}

function clickErroWord(el) {
  if (!inibicaoStarted) return;
  if (el.classList.contains('found-error') || el.classList.contains('false-alarm')) return;

  const isError = el.dataset.error === 'true';
  if (isError) {
    el.classList.add('found-error');
    inibicaoCorrect++;
    updateInibicaoScore();

    if (inibicaoCorrect >= inibicaoTotal) {
      inibicaoTimer.stop();
      document.getElementById('inibicao-start-btn').textContent = 'Concluído';
      document.getElementById('inibicao-save-row').style.display = '';
      // Revelar nao encontrados
      document.querySelectorAll('.erro-word[data-error="true"]:not(.found-error)').forEach(w => {
        w.classList.add('missed-error');
      });
    }
  } else {
    el.classList.add('false-alarm');
  }
}

function updateInibicaoScore() {
  const scoreEl = document.getElementById('inibicao-score');
  scoreEl.classList.remove('hidden');
  document.getElementById('inibicao-correct').textContent = inibicaoCorrect;
  document.getElementById('inibicao-total').textContent = inibicaoTotal;
}

function resetInibicao() {
  initInibicao();
}

function saveInibicaoAttempt() {
  const levels = ['pseudopalavras', 'pares mínimos', 'caça-erros'];
  Storage.push('fluencia_inibicao', {
    date: new Date().toISOString(),
    level: levels[inibicaoLevel],
    correct: inibicaoCorrect,
    total: inibicaoTotal,
    time: inibicaoTimer.getElapsed(),
    timeFormatted: formatTime(inibicaoTimer.getElapsed())
  });
  renderInibicaoHistory();
  document.getElementById('inibicao-save-row').style.display = 'none';
}

function renderInibicaoHistory() {
  const container = document.getElementById('inibicao-history');
  if (!container) return;
  const data = Storage.get('fluencia_inibicao', []);
  if (!data.length) {
    container.innerHTML = '<div class="history-empty">Nenhuma sessão registrada ainda.</div>';
    return;
  }

  const recent = data.slice(-10).reverse();
  let html = '<h3>Sessões Anteriores</h3><table class="history-table"><thead><tr><th>Data</th><th>Tipo</th><th>Acertos</th><th>Tempo</th></tr></thead><tbody>';
  recent.forEach(r => {
    const d = new Date(r.date);
    html += `<tr><td>${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'})}</td><td>${r.level}</td><td>${r.correct}/${r.total}</td><td>${r.timeFormatted}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
