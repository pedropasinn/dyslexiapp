// memoria.js — Memoria de Trabalho (digit span, inverse span, word span)

let memoriaLevel = 0; // 0=direto, 1=inverso, 2=palavras
let memoriaSpan = 3;
let memoriaSeq = [];
let memoriaPhase = 'idle'; // idle, showing, input
let memoriaTrials = 0;
let memoriaCorrect = 0;
let memoriaMaxSpan = 0;
let memoriaShowTimeout = null;

const MEMORIA_WORDS = [
  'alma', 'logos', 'graça', 'fé', 'luz', 'cruz', 'rei', 'paz', 'dom', 'lei',
  'razão', 'ser', 'virtude', 'honra', 'culto', 'dever', 'ethos', 'forma',
  'juízo', 'nexo', 'pleno', 'saber', 'tese', 'voto', 'zelo', 'rito',
  'norma', 'mito', 'óbolo', 'credo', 'dogma', 'prece', 'verbo', 'hino'
];

function initMemoria() {
  memoriaSpan = 3;
  memoriaTrials = 0;
  memoriaCorrect = 0;
  memoriaMaxSpan = 0;
  memoriaPhase = 'idle';
  renderMemoriaProgress();
  document.getElementById('memoria-display').innerHTML = '<span class="memoria-ready">Pressione "Iniciar" para começar</span>';
  document.getElementById('memoria-inputs').innerHTML = '';
  document.getElementById('memoria-start-btn').style.display = '';
  document.getElementById('memoria-check-btn').style.display = 'none';
  document.getElementById('memoria-stats').style.display = 'none';
  renderMemoriaHistory();
}

function setMemoriaLevel(level) {
  memoriaLevel = level;
  document.querySelectorAll('#memoria-levels .module-btn').forEach((b, i) => {
    b.classList.toggle('active', i === level);
  });

  // Atualizar instrucao
  const info = document.getElementById('memoria-info');
  if (level === 0) {
    info.innerHTML = '<strong>Instrução:</strong> Observe a sequência que aparecerá. Quando ela desaparecer, digite os dígitos <strong>na mesma ordem</strong>.';
  } else if (level === 1) {
    info.innerHTML = '<strong>Instrução:</strong> Observe a sequência que aparecerá. Quando ela desaparecer, digite os dígitos <strong>na ordem inversa</strong> (do último ao primeiro).';
  } else {
    info.innerHTML = '<strong>Instrução:</strong> Observe as palavras que aparecerão. Quando desaparecerem, digite-as <strong>na mesma ordem</strong>.';
  }

  initMemoria();
}

function renderMemoriaProgress() {
  const container = document.getElementById('memoria-progress');
  let html = '';
  for (let i = 3; i <= 9; i++) {
    let cls = 'span-dot';
    if (i < memoriaSpan) cls += ' passed';
    else if (i === memoriaSpan) cls += ' active';
    html += `<div class="${cls}" title="Span ${i}"></div>`;
  }
  container.innerHTML = html;
}

function generateMemoriaSeq() {
  memoriaSeq = [];
  if (memoriaLevel === 2) {
    // Palavras
    const shuffled = [...MEMORIA_WORDS].sort(() => Math.random() - 0.5);
    for (let i = 0; i < memoriaSpan; i++) {
      memoriaSeq.push(shuffled[i]);
    }
  } else {
    // Digitos (sem repeticao consecutiva)
    for (let i = 0; i < memoriaSpan; i++) {
      let d;
      do { d = Math.floor(Math.random() * 9) + 1; }
      while (i > 0 && d === memoriaSeq[i - 1]);
      memoriaSeq.push(d);
    }
  }
}

function startMemoria() {
  if (memoriaPhase === 'showing') return;

  generateMemoriaSeq();
  memoriaPhase = 'showing';
  memoriaTrials++;

  const display = document.getElementById('memoria-display');
  const inputRow = document.getElementById('memoria-inputs');
  const startBtn = document.getElementById('memoria-start-btn');
  const checkBtn = document.getElementById('memoria-check-btn');

  startBtn.style.display = 'none';
  checkBtn.style.display = 'none';
  inputRow.innerHTML = '';

  // Mostrar itens um a um
  let idx = 0;
  const showDelay = memoriaLevel === 2 ? 1200 : 900;

  function showNext() {
    if (idx < memoriaSeq.length) {
      const item = memoriaSeq[idx];
      const isWord = memoriaLevel === 2;
      display.innerHTML = `<span class="memoria-item${isWord ? ' word' : ''}">${item}</span>`;
      idx++;
      memoriaShowTimeout = setTimeout(showNext, showDelay);
    } else {
      // Limpar e mostrar inputs
      display.innerHTML = '<span class="memoria-ready">Digite a sequência</span>';
      memoriaPhase = 'input';
      showMemoriaInputs();
      checkBtn.style.display = '';
    }
  }

  showNext();
}

function showMemoriaInputs() {
  const container = document.getElementById('memoria-inputs');
  const isWord = memoriaLevel === 2;
  let html = '';
  for (let i = 0; i < memoriaSeq.length; i++) {
    const cls = isWord ? 'memoria-input word-input' : 'memoria-input';
    const maxLen = isWord ? 20 : 1;
    html += `<input type="${isWord ? 'text' : 'tel'}" class="${cls}" maxlength="${maxLen}" id="mem-input-${i}" autocomplete="off">`;
  }
  container.innerHTML = html;

  // Focus no primeiro e avançar automaticamente
  const inputs = container.querySelectorAll('input');
  if (inputs.length) inputs[0].focus();

  inputs.forEach((inp, i) => {
    inp.addEventListener('input', () => {
      if (!isWord && inp.value.length >= 1 && i < inputs.length - 1) {
        inputs[i + 1].focus();
      }
    });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkMemoria();
    });
  });
}

function checkMemoria() {
  if (memoriaPhase !== 'input') return;
  memoriaPhase = 'idle';

  const isInverse = memoriaLevel === 1;
  const expectedSeq = isInverse ? [...memoriaSeq].reverse() : memoriaSeq;
  let allCorrect = true;

  for (let i = 0; i < expectedSeq.length; i++) {
    const inp = document.getElementById('mem-input-' + i);
    const expected = String(expectedSeq[i]).toLowerCase().trim();
    const given = inp.value.toLowerCase().trim();
    if (given === expected) {
      inp.classList.add('correct');
    } else {
      inp.classList.add('wrong');
      allCorrect = false;
    }
    inp.disabled = true;
  }

  if (allCorrect) {
    memoriaCorrect++;
    if (memoriaSpan > memoriaMaxSpan) memoriaMaxSpan = memoriaSpan;
    // Avançar span
    if (memoriaSpan < 9) memoriaSpan++;
  } else {
    // Falhou — marcar dot como failed
    if (memoriaSpan > memoriaMaxSpan) memoriaMaxSpan = memoriaSpan - 1;
  }

  renderMemoriaProgress();
  updateMemoriaStats();

  // Botao para proxima rodada
  const startBtn = document.getElementById('memoria-start-btn');
  const checkBtn = document.getElementById('memoria-check-btn');
  checkBtn.style.display = 'none';
  startBtn.style.display = '';
  startBtn.textContent = allCorrect ? 'Próximo (span ' + memoriaSpan + ')' : 'Tentar novamente';

  // Salvar tentativa
  if (!allCorrect || memoriaSpan >= 9) {
    saveMemoriaAttempt();
  }
}

function updateMemoriaStats() {
  document.getElementById('memoria-stats').style.display = '';
  document.getElementById('mem-span-max').textContent = memoriaMaxSpan || memoriaSpan;
  document.getElementById('mem-acertos').textContent = memoriaCorrect;
  document.getElementById('mem-tentativas').textContent = memoriaTrials;
}

function saveMemoriaAttempt() {
  const levels = ['direto', 'inverso', 'palavras'];
  Storage.push('fluencia_memoria', {
    date: new Date().toISOString(),
    level: levels[memoriaLevel],
    maxSpan: memoriaMaxSpan || memoriaSpan,
    correct: memoriaCorrect,
    trials: memoriaTrials
  });
  renderMemoriaHistory();
}

function renderMemoriaHistory() {
  const container = document.getElementById('memoria-history');
  const data = Storage.get('fluencia_memoria', []);
  if (!data.length) {
    container.innerHTML = '<div class="history-empty">Nenhuma sessão registrada ainda.</div>';
    return;
  }

  const recent = data.slice(-10).reverse();
  let html = '<h3>Sessões Anteriores</h3><table class="history-table"><thead><tr><th>Data</th><th>Tipo</th><th>Span Máx</th><th>Acertos</th><th>Tentativas</th></tr></thead><tbody>';
  recent.forEach(r => {
    const d = new Date(r.date);
    html += `<tr><td>${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'})}</td><td>${r.level}</td><td>${r.maxSpan}</td><td>${r.correct}</td><td>${r.trials}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
