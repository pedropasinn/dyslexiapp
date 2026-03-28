// discriminacao.js — Discriminação Fonêmica: pares mínimos cronometrados

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let discModule = 0;
let discPairs = [];
let discIndex = 0;
let discStartTime = null;
let discReactionTimes = [];
let discResults = [];   // { word1, word2, answer, response, correct, rt, position }
let discRunning = false;

// ─────────────────────────────────────────
// MODULE SELECTION
// ─────────────────────────────────────────
function setDiscriminacaoModule(idx) {
  discModule = idx;
  // Atualizar botões ativos
  document.querySelectorAll('#discriminacao-modules .module-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.index) === idx);
  });
  renderDiscriminacao();
}

// ─────────────────────────────────────────
// RENDER — Configura o exercício
// ─────────────────────────────────────────
function renderDiscriminacao() {
  const mod = DISCRIMINACAO_MODULES[discModule];
  if (!mod) return;

  // Resetar estado
  discPairs = [...mod.pairs];
  // Embaralhar pares
  for (let i = discPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [discPairs[i], discPairs[j]] = [discPairs[j], discPairs[i]];
  }
  discIndex = 0;
  discResults = [];
  discReactionTimes = [];
  discRunning = false;

  // Atualizar label de contraste
  const contrastEl = document.getElementById('disc-contrast-label');
  if (contrastEl) contrastEl.textContent = mod.contrast;

  // Mostrar área inicial, esconder resultados e par
  const pairArea = document.getElementById('discriminacao-pair');
  const resultsEl = document.getElementById('discriminacao-results');
  const scoreEl = document.getElementById('disc-score');
  const btnArea = document.getElementById('disc-btn-area');
  const startBtn = document.getElementById('disc-start-btn');

  if (pairArea) pairArea.innerHTML = '';
  if (resultsEl) { resultsEl.innerHTML = ''; resultsEl.style.display = 'none'; }
  if (scoreEl) { scoreEl.classList.add('hidden'); }
  if (btnArea) btnArea.style.display = 'none';
  if (startBtn) startBtn.style.display = 'inline-block';

  // Atualizar progresso
  _discUpdateProgress();
}

// ─────────────────────────────────────────
// START
// ─────────────────────────────────────────
function startDiscriminacao() {
  discRunning = true;
  const startBtn = document.getElementById('disc-start-btn');
  if (startBtn) startBtn.style.display = 'none';

  const btnArea = document.getElementById('disc-btn-area');
  if (btnArea) btnArea.style.display = 'flex';

  showNextPair();
}

// ─────────────────────────────────────────
// SHOW NEXT PAIR
// ─────────────────────────────────────────
function showNextPair() {
  if (discIndex >= discPairs.length) {
    finishDiscriminacao();
    return;
  }

  const pair = discPairs[discIndex];
  const pairArea = document.getElementById('discriminacao-pair');
  if (!pairArea) return;

  pairArea.innerHTML = `
    <div class="disc-pair-display">
      <span class="disc-word">${pair.word1}</span>
      <span class="disc-vs">—</span>
      <span class="disc-word">${pair.word2}</span>
    </div>`;

  _discUpdateProgress();

  // Registrar tempo de início para esta pergunta
  discStartTime = performance.now();
}

// ─────────────────────────────────────────
// ANSWER
// ─────────────────────────────────────────
function answerDiscriminacao(response) {
  if (!discRunning || discIndex >= discPairs.length) return;

  const rt = discStartTime ? Math.round(performance.now() - discStartTime) : 0;
  const pair = discPairs[discIndex];
  const correct = response === pair.answer;

  discResults.push({
    word1:    pair.word1,
    word2:    pair.word2,
    answer:   pair.answer,
    response: response,
    correct:  correct,
    rt:       rt,
    position: pair.position,
  });
  discReactionTimes.push(rt);

  // Feedback visual
  _discShowFeedback(correct);

  discIndex++;

  setTimeout(() => {
    _discClearFeedback();
    if (discIndex < discPairs.length) {
      showNextPair();
    } else {
      finishDiscriminacao();
    }
  }, 600);
}

// ─────────────────────────────────────────
// FEEDBACK FLASH
// ─────────────────────────────────────────
function _discShowFeedback(correct) {
  const pairArea = document.getElementById('discriminacao-pair');
  const btnIgual = document.getElementById('disc-btn-igual');
  const btnDif   = document.getElementById('disc-btn-diferente');
  if (!pairArea) return;

  if (correct) {
    pairArea.classList.add('disc-feedback-correct');
    if (btnIgual) btnIgual.classList.add('disc-btn-flash-correct');
    if (btnDif)   btnDif.classList.add('disc-btn-flash-correct');
  } else {
    pairArea.classList.add('disc-feedback-wrong');
    if (btnIgual) btnIgual.classList.add('disc-btn-flash-wrong');
    if (btnDif)   btnDif.classList.add('disc-btn-flash-wrong');
  }
}

function _discClearFeedback() {
  const pairArea = document.getElementById('discriminacao-pair');
  const btnIgual = document.getElementById('disc-btn-igual');
  const btnDif   = document.getElementById('disc-btn-diferente');
  if (pairArea) {
    pairArea.classList.remove('disc-feedback-correct', 'disc-feedback-wrong');
  }
  if (btnIgual) btnIgual.classList.remove('disc-btn-flash-correct', 'disc-btn-flash-wrong');
  if (btnDif)   btnDif.classList.remove('disc-btn-flash-correct', 'disc-btn-flash-wrong');
}

// ─────────────────────────────────────────
// UPDATE PROGRESS
// ─────────────────────────────────────────
function _discUpdateProgress() {
  const el = document.getElementById('disc-progress');
  if (el) {
    const total = discPairs.length;
    const current = discRunning ? discIndex + 1 : 1;
    el.textContent = discRunning ? `${Math.min(current, total)} / ${total}` : `0 / ${total}`;
  }
}

// ─────────────────────────────────────────
// FINISH — Mostrar resultados
// ─────────────────────────────────────────
function finishDiscriminacao() {
  discRunning = false;

  const pairArea = document.getElementById('discriminacao-pair');
  if (pairArea) pairArea.innerHTML = '';

  const btnArea = document.getElementById('disc-btn-area');
  if (btnArea) btnArea.style.display = 'none';

  const mod = DISCRIMINACAO_MODULES[discModule];
  const total   = discResults.length;
  const correct = discResults.filter(r => r.correct).length;
  const pct     = total ? Math.round(correct / total * 100) : 0;
  const avgRt   = discReactionTimes.length
    ? Math.round(discReactionTimes.reduce((a, b) => a + b, 0) / discReactionTimes.length)
    : 0;

  // Score header
  const scoreEl = document.getElementById('disc-score');
  if (scoreEl) {
    scoreEl.classList.remove('hidden');
    document.getElementById('disc-score-num').textContent = correct;
    document.getElementById('disc-score-total').textContent = total;
    document.getElementById('disc-score-pct').textContent = pct + '%';
    document.getElementById('disc-score-rt').textContent = avgRt + ' ms';
  }

  // Resultados detalhados por posição
  const positions = ['inicial', 'medial', 'final'];
  const byPos = {};
  positions.forEach(p => {
    const subset = discResults.filter(r => r.position === p);
    byPos[p] = {
      total:   subset.length,
      correct: subset.filter(r => r.correct).length,
      avgRt:   subset.length
        ? Math.round(subset.reduce((a, r) => a + r.rt, 0) / subset.length)
        : 0,
    };
  });

  let posTable = '';
  positions.forEach(p => {
    const d = byPos[p];
    if (!d.total) return;
    const p2 = Math.round(d.correct / d.total * 100);
    const barW = p2;
    posTable += `
      <tr>
        <td style="font-family:var(--font-mono); font-size:0.85rem; text-transform:capitalize">${p}</td>
        <td>${d.correct}/${d.total}</td>
        <td>
          <div class="disc-rt-bar-wrap">
            <div class="disc-rt-bar" style="width:${barW}%"></div>
            <span class="disc-rt-bar-label">${p2}%</span>
          </div>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.85rem">${d.avgRt} ms</td>
      </tr>`;
  });

  // Tabela de todos os pares respondidos
  let detailRows = '';
  discResults.forEach(r => {
    const icon = r.correct ? '✓' : '✗';
    const cls  = r.correct ? 'disc-result-correct' : 'disc-result-wrong';
    detailRows += `
      <tr class="${cls}">
        <td>${r.word1}</td>
        <td>${r.word2}</td>
        <td>${r.answer === 'igual' ? 'Igual' : 'Diferente'}</td>
        <td>${r.response === 'igual' ? 'Igual' : 'Diferente'}</td>
        <td style="font-family:var(--font-mono)">${icon}</td>
        <td style="font-family:var(--font-mono); font-size:0.8rem">${r.rt} ms</td>
      </tr>`;
  });

  const resultsEl = document.getElementById('discriminacao-results');
  if (resultsEl) {
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = `
      <div class="disc-results">
        <h3 class="disc-results-title">Resultados — ${mod.name}</h3>

        <div class="disc-stats-row">
          <div class="disc-stat-card">
            <span class="disc-stat-value">${pct}%</span>
            <span class="disc-stat-label">Precisão</span>
          </div>
          <div class="disc-stat-card">
            <span class="disc-stat-value">${correct}/${total}</span>
            <span class="disc-stat-label">Acertos</span>
          </div>
          <div class="disc-stat-card">
            <span class="disc-stat-value">${avgRt} ms</span>
            <span class="disc-stat-label">Tempo médio</span>
          </div>
        </div>

        <h4 class="disc-results-subtitle">Por posição fonêmica</h4>
        <table class="disc-pos-table">
          <thead><tr><th>Posição</th><th>Acertos</th><th>Precisão</th><th>TR médio</th></tr></thead>
          <tbody>${posTable}</tbody>
        </table>

        <h4 class="disc-results-subtitle" style="margin-top:1.5rem">Detalhe por par</h4>
        <div class="disc-detail-table-wrap">
          <table class="disc-detail-table">
            <thead><tr><th>Palavra 1</th><th>Palavra 2</th><th>Correto</th><th>Resposta</th><th></th><th>TR</th></tr></thead>
            <tbody>${detailRows}</tbody>
          </table>
        </div>

        <div class="controls" style="margin-top:1.5rem; justify-content:center; gap:0.75rem">
          <button class="btn btn-gold btn-sm" onclick="saveDiscriminacaoAttempt()">Salvar tentativa</button>
          <button class="btn btn-outline btn-sm" onclick="renderDiscriminacao()">Tentar novamente</button>
        </div>
      </div>`;
  }

  saveDiscriminacaoAttempt();
}

// ─────────────────────────────────────────
// SAVE
// ─────────────────────────────────────────
function saveDiscriminacaoAttempt() {
  if (!discResults.length) return;
  const mod     = DISCRIMINACAO_MODULES[discModule];
  const total   = discResults.length;
  const correct = discResults.filter(r => r.correct).length;
  const avgRt   = discReactionTimes.length
    ? Math.round(discReactionTimes.reduce((a, b) => a + b, 0) / discReactionTimes.length)
    : 0;

  const entry = {
    date:    new Date().toISOString(),
    module:  mod.name,
    correct: correct,
    total:   total,
    pct:     Math.round(correct / total * 100),
    avgRt:   avgRt,
  };
  Storage.push('fluencia_discriminacao', entry);
}
