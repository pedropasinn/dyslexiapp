// memoria.js — Memoria de Trabalho (digit span, inverse span, word span, reading span)

let memoriaLevel = 0; // 0=direto, 1=inverso, 2=palavras, 3=reading-span
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

  // Restaurar elementos que o reading span pode ter ocultado
  document.getElementById('span-progress-row').style.display = '';
  const rspanBtn = document.getElementById('rspan-start-btn');
  if (rspanBtn) rspanBtn.remove();

  renderMemoriaProgress();
  document.getElementById('memoria-display').innerHTML = '<span class="memoria-ready">Pressione "Iniciar" para começar</span>';
  document.getElementById('memoria-inputs').innerHTML = '';
  document.getElementById('memoria-start-btn').style.display = '';
  document.getElementById('memoria-check-btn').style.display = 'none';
  document.getElementById('memoria-check-btn').onclick = checkMemoria;
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
  } else if (level === 2) {
    info.innerHTML = '<strong>Instrução:</strong> Observe as palavras que aparecerão. Quando desaparecerem, digite-as <strong>na mesma ordem</strong>.';
  } else {
    info.innerHTML = '<strong>Instrução:</strong> Leia cada frase em voz alta. Após cada conjunto, informe a <strong>última palavra</strong> de cada frase, na ordem em que apareceram.';
  }

  if (level === 3) {
    initReadingSpan();
  } else {
    initMemoria();
  }
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
  const levels = ['direto', 'inverso', 'palavras', 'reading-span'];
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

// ═══════════════════════════════════════════════════════════════════════════
// READING SPAN TEST  (Daneman & Carpenter, 1980)
// Span aumenta de 2 a 6; 2 conjuntos por span; falhar os 2 → encerra o teste
// ═══════════════════════════════════════════════════════════════════════════

let rsSpanIdx = 0;      // índice em READING_SPAN_SETS (0 = span 2)
let rsSetIdx = 0;       // 0 ou 1 (dois conjuntos por span)
let rsSentIdx = 0;      // sentença atual dentro do conjunto
let rsSetsPassedAtSpan = 0; // quantos conjuntos corretos no span atual
let rsMaxSpan = 0;
let rsTotalTrials = 0;
let rsTotalCorrect = 0;
let rsFinished = false;

function initReadingSpan() {
  rsSpanIdx = 0;
  rsSetIdx = 0;
  rsSentIdx = 0;
  rsSetsPassedAtSpan = 0;
  rsMaxSpan = 0;
  rsTotalTrials = 0;
  rsTotalCorrect = 0;
  rsFinished = false;

  // Ocultar controles padrão e substituir pela UI do reading span
  document.getElementById('memoria-start-btn').style.display = 'none';
  document.getElementById('memoria-check-btn').style.display = 'none';
  document.getElementById('span-progress-row').style.display = 'none';
  document.getElementById('memoria-stats').style.display = 'none';
  document.getElementById('memoria-inputs').innerHTML = '';

  document.getElementById('memoria-display').innerHTML =
    '<span class="memoria-ready">Pressione "Iniciar" para começar o Reading Span</span>';

  // Mostrar botão de início específico
  renderRSpanStartBtn('Iniciar Reading Span');
  renderMemoriaHistory();
}

function renderRSpanStartBtn(label) {
  const controls = document.querySelector('#sec-memoria .controls');
  // Remover botão anterior se existir
  const old = document.getElementById('rspan-start-btn');
  if (old) old.remove();
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = 'rspan-start-btn';
  btn.textContent = label;
  btn.onclick = startRSpanSet;
  controls.appendChild(btn);
}

function startRSpanSet() {
  const startBtn = document.getElementById('rspan-start-btn');
  if (startBtn) startBtn.remove();

  document.getElementById('memoria-inputs').innerHTML = '';

  const spanData = READING_SPAN_SETS[rsSpanIdx];
  const set = spanData.sets[rsSetIdx];
  rsSentIdx = 0;
  rsTotalTrials++;

  // Mostrar cabeçalho
  document.getElementById('memoria-display').innerHTML =
    `<div class="rspan-header">Span ${spanData.span} — Conjunto ${rsSetIdx + 1} de 2</div>`;

  // Pequena pausa antes de mostrar a primeira frase
  setTimeout(showRSpanSentence, 700);
}

function showRSpanSentence() {
  const spanData = READING_SPAN_SETS[rsSpanIdx];
  const set = spanData.sets[rsSetIdx];
  const sent = set.sentences[rsSentIdx];

  const display = document.getElementById('memoria-display');
  display.innerHTML = `
    <div class="rspan-sentence-wrap">
      <div class="rspan-sentence-num">Frase ${rsSentIdx + 1} de ${set.sentences.length}</div>
      <div class="rspan-sentence">${sent.text}</div>
      <button class="btn rspan-li-btn" id="rspan-li-btn" onclick="advanceRSpanSentence()">Li ✓</button>
    </div>
  `;
}

function advanceRSpanSentence() {
  const spanData = READING_SPAN_SETS[rsSpanIdx];
  const set = spanData.sets[rsSetIdx];

  rsSentIdx++;
  if (rsSentIdx < set.sentences.length) {
    // Breve flash de transição antes da próxima frase
    document.getElementById('memoria-display').innerHTML =
      '<span class="memoria-ready">Próxima frase...</span>';
    setTimeout(showRSpanSentence, 400);
  } else {
    // Todas as frases lidas — mostrar tela de recordação
    showRSpanRecall();
  }
}

function showRSpanRecall() {
  const spanData = READING_SPAN_SETS[rsSpanIdx];
  const set = spanData.sets[rsSetIdx];
  const n = set.sentences.length;

  document.getElementById('memoria-display').innerHTML =
    '<div class="rspan-recall-prompt">Quais eram as <strong>últimas palavras</strong> de cada frase?<br><span class="rspan-recall-hint">(na ordem em que apareceram)</span></div>';

  let html = '<div class="rspan-recall-row">';
  for (let i = 0; i < n; i++) {
    html += `
      <div class="rspan-recall-item">
        <span class="rspan-recall-label">Frase ${i + 1}</span>
        <input type="text" class="memoria-input word-input rspan-recall-input" id="rspan-inp-${i}"
               autocomplete="off" autocorrect="off" spellcheck="false"
               placeholder="última palavra…">
      </div>`;
  }
  html += '</div>';
  document.getElementById('memoria-inputs').innerHTML = html;

  // Focus no primeiro input
  const first = document.getElementById('rspan-inp-0');
  if (first) first.focus();

  // Enter avança entre inputs ou confirma no último
  for (let i = 0; i < n; i++) {
    const inp = document.getElementById(`rspan-inp-${i}`);
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (i < n - 1) document.getElementById(`rspan-inp-${i + 1}`).focus();
        else checkRSpanRecall();
      }
    });
  }

  // Mostrar botão verificar
  const checkBtn = document.getElementById('memoria-check-btn');
  checkBtn.style.display = '';
  checkBtn.textContent = 'Verificar';
  checkBtn.onclick = checkRSpanRecall;
}

function checkRSpanRecall() {
  const spanData = READING_SPAN_SETS[rsSpanIdx];
  const set = spanData.sets[rsSetIdx];
  const sentences = set.sentences;

  document.getElementById('memoria-check-btn').style.display = 'none';

  let allCorrect = true;
  sentences.forEach((sent, i) => {
    const inp = document.getElementById(`rspan-inp-${i}`);
    if (!inp) return;
    const given = inp.value.toLowerCase().trim()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');  // remover acentos
    const expected = sent.lastWord.toLowerCase().trim()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const ok = given === expected;
    inp.classList.add(ok ? 'correct' : 'wrong');
    inp.disabled = true;
    if (!ok) allCorrect = false;
  });

  if (allCorrect) {
    rsTotalCorrect++;
    rsSetsPassedAtSpan++;
    if (spanData.span > rsMaxSpan) rsMaxSpan = spanData.span;
  }

  // Decidir próxima ação após pequena pausa
  setTimeout(advanceRSpanState, 1200);
}

function advanceRSpanState() {
  document.getElementById('memoria-inputs').innerHTML = '';

  const spanData = READING_SPAN_SETS[rsSpanIdx];
  rsSetIdx++;

  // Ainda há um segundo conjunto neste span?
  if (rsSetIdx < spanData.sets.length) {
    // Houve falha no primeiro conjunto — mas ainda tentamos o segundo
    renderRSpanStartBtn(`Próximo conjunto (Span ${spanData.span})`);
    document.getElementById('memoria-display').innerHTML =
      `<span class="memoria-ready">Conjunto ${rsSetIdx + 1} de 2 — Span ${spanData.span}</span>`;
    return;
  }

  // Ambos os conjuntos deste span foram tentados
  const bothFailed = rsSetsPassedAtSpan === 0;
  const advanceToNext = rsSpanIdx + 1 < READING_SPAN_SETS.length;

  if (bothFailed || !advanceToNext) {
    // Encerrar teste
    finishReadingSpan();
  } else {
    // Avançar para o próximo span
    rsSpanIdx++;
    rsSetIdx = 0;
    rsSetsPassedAtSpan = 0;
    const nextSpan = READING_SPAN_SETS[rsSpanIdx].span;
    renderRSpanStartBtn(`Próximo nível — Span ${nextSpan}`);
    document.getElementById('memoria-display').innerHTML =
      `<span class="memoria-ready">Span ${nextSpan} — pronto?</span>`;
  }
}

function finishReadingSpan() {
  rsFinished = true;

  document.getElementById('memoria-display').innerHTML = `
    <div class="rspan-result">
      <div class="rspan-result-label">Seu Reading Span</div>
      <div class="rspan-result-value">${rsMaxSpan}</div>
      <div class="rspan-result-sub">conjuntos corretos: ${rsTotalCorrect} / ${rsTotalTrials}</div>
    </div>
  `;
  document.getElementById('memoria-inputs').innerHTML = '';

  const old = document.getElementById('rspan-start-btn');
  if (old) old.remove();

  // Botão reiniciar
  const controls = document.querySelector('#sec-memoria .controls');
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = 'rspan-start-btn';
  btn.textContent = 'Refazer teste';
  btn.onclick = initReadingSpan;
  controls.appendChild(btn);

  // Salvar histórico
  Storage.push('fluencia_memoria', {
    date: new Date().toISOString(),
    level: 'reading-span',
    maxSpan: rsMaxSpan,
    correct: rsTotalCorrect,
    trials: rsTotalTrials
  });
  renderMemoriaHistory();
}
