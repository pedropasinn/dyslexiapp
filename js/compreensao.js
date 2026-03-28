// compreensao.js — Compreensão Ativa: protocolo guiado antes/durante/depois
// Baseado em Shaywitz cap. 19 — 7 estratégias do leitor proficiente

// ─────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────
let compreensaoModule = 0;
let compreensaoPhase = 'antes'; // 'antes' | 'durante' | 'depois'
let compreensaoStrategyIdx = 0; // índice da estratégia durante (0=visualizar, 1=questionar, 2=monitorar)
let compreensaoTimerInterval = null;
let compreensaoElapsed = 0;
let compreensaoSummaryRevealed = false;

const COMP_STRATEGIES = ['visualize', 'question', 'monitor'];
const COMP_STRATEGY_META = {
  visualize: { icon: '👁', label: 'Visualizar' },
  question:  { icon: '?', label: 'Questionar' },
  monitor:   { icon: '↺', label: 'Monitorar' },
};

// ─────────────────────────────────────────
// SETTERS
// ─────────────────────────────────────────
function setCompreensaoModule(idx) {
  compreensaoModule = idx;
  document.querySelectorAll('#compreensao-modules .module-btn').forEach(b =>
    b.classList.toggle('active', parseInt(b.dataset.index) === idx)
  );
  // Reiniciar estado
  compreensaoPhase = 'antes';
  compreensaoStrategyIdx = 0;
  compreensaoSummaryRevealed = false;
  _stopCompreensaoTimer();
  compreensaoElapsed = 0;
  renderCompreensao();
}

// ─────────────────────────────────────────
// TIMER interno
// ─────────────────────────────────────────
function _startCompreensaoTimer() {
  _stopCompreensaoTimer();
  const start = Date.now() - compreensaoElapsed;
  compreensaoTimerInterval = setInterval(() => {
    compreensaoElapsed = Date.now() - start;
    const el = document.getElementById('comp-timer-display');
    if (el) el.textContent = _formatCompTime(compreensaoElapsed);
  }, 200);
}

function _stopCompreensaoTimer() {
  if (compreensaoTimerInterval) {
    clearInterval(compreensaoTimerInterval);
    compreensaoTimerInterval = null;
  }
}

function _formatCompTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
}

// ─────────────────────────────────────────
// FASES — ANTES
// ─────────────────────────────────────────
function renderCompreensao() {
  compreensaoPhase = 'antes';
  compreensaoStrategyIdx = 0;
  compreensaoSummaryRevealed = false;
  _stopCompreensaoTimer();
  compreensaoElapsed = 0;

  const mod = COMPREENSAO_MODULES[compreensaoModule];

  _updatePhaseIndicator('antes');
  _showPhase('antes');

  document.getElementById('comp-title').textContent = mod.title;
  document.getElementById('comp-topic-hint').textContent = mod.topic_hint;
  document.getElementById('comp-knowledge-prompt').textContent = mod.before.knowledge;
  document.getElementById('comp-prediction-prompt').textContent = mod.before.prediction;
  document.getElementById('comp-knowledge-area').value = '';
  document.getElementById('comp-prediction-area').value = '';

  // Esconder fases seguintes
  document.getElementById('comp-durante').style.display = 'none';
  document.getElementById('comp-depois').style.display = 'none';
}

// ─────────────────────────────────────────
// FASES — DURANTE
// ─────────────────────────────────────────
function startCompreensaoReading() {
  const mod = COMPREENSAO_MODULES[compreensaoModule];

  compreensaoPhase = 'durante';
  compreensaoStrategyIdx = 0;
  _updatePhaseIndicator('durante');
  _showPhase('durante');

  // Mostrar texto
  document.getElementById('comp-text-display').textContent = mod.text;

  // Contar palavras
  const wordCount = mod.text.split(/\s+/).length;
  document.getElementById('comp-word-count').textContent = wordCount + ' palavras';

  // Iniciar timer
  _startCompreensaoTimer();

  // Renderizar primeira estratégia
  _renderCurrentStrategy();
}

function _renderCurrentStrategy() {
  const mod = COMPREENSAO_MODULES[compreensaoModule];
  const key = COMP_STRATEGIES[compreensaoStrategyIdx];
  const meta = COMP_STRATEGY_META[key];

  const container = document.getElementById('comp-strategy-area');
  container.innerHTML = '';

  const total = COMP_STRATEGIES.length;
  const card = document.createElement('div');
  card.className = 'comp-strategy-card';
  card.innerHTML = `
    <div class="comp-strategy-header">
      <span class="comp-strategy-icon">${meta.icon}</span>
      <span class="comp-strategy-name">${meta.label}</span>
      <span class="comp-strategy-progress">${compreensaoStrategyIdx + 1} / ${total}</span>
    </div>
    <div class="comp-strategy-prompt">${mod.during[key]}</div>
    <textarea class="comp-textarea" id="comp-strategy-note-${compreensaoStrategyIdx}"
      placeholder="Escreva suas anotações aqui..." rows="3"></textarea>
  `;
  container.appendChild(card);

  // Atualizar botões de navegação
  const prevBtn = document.getElementById('comp-strategy-prev');
  const nextBtn = document.getElementById('comp-strategy-next');
  const finishBtn = document.getElementById('comp-finish-reading-btn');

  if (prevBtn) prevBtn.style.display = compreensaoStrategyIdx > 0 ? 'inline-flex' : 'none';

  const isLast = compreensaoStrategyIdx === total - 1;
  if (nextBtn) nextBtn.style.display = isLast ? 'none' : 'inline-flex';
  if (finishBtn) finishBtn.style.display = isLast ? 'inline-flex' : 'none';
}

function nextCompreensaoStrategy() {
  if (compreensaoStrategyIdx < COMP_STRATEGIES.length - 1) {
    compreensaoStrategyIdx++;
    _renderCurrentStrategy();
  }
}

function prevCompreensaoStrategy() {
  if (compreensaoStrategyIdx > 0) {
    compreensaoStrategyIdx--;
    _renderCurrentStrategy();
  }
}

// ─────────────────────────────────────────
// FASES — DEPOIS
// ─────────────────────────────────────────
function finishCompreensaoReading() {
  _stopCompreensaoTimer();
  compreensaoPhase = 'depois';
  _updatePhaseIndicator('depois');

  // Guardar tempo final
  const timeSpent = compreensaoElapsed;
  const timerEl = document.getElementById('comp-timer-display');
  if (timerEl) timerEl.textContent = _formatCompTime(timeSpent);

  _showPhase('depois');
  renderCompreensaoAfter();
}

function renderCompreensaoAfter() {
  const mod = COMPREENSAO_MODULES[compreensaoModule];

  // Prompt de resumo
  document.getElementById('comp-summary-prompt').textContent = mod.after.summary_prompt;
  document.getElementById('comp-summary-area').value = '';
  document.getElementById('comp-summary-key').style.display = 'none';
  document.getElementById('comp-summary-key-text').textContent = mod.after.summary_key;
  document.getElementById('comp-reveal-key-btn').style.display = 'inline-flex';
  compreensaoSummaryRevealed = false;

  // Prompt de conexão
  document.getElementById('comp-connect-prompt').textContent = mod.after.connect;
  document.getElementById('comp-connect-area').value = '';

  // Comparação predição vs. realidade
  const predNote = document.getElementById('comp-prediction-area')?.value?.trim();
  const predComparison = document.getElementById('comp-prediction-comparison');
  if (predComparison) {
    predComparison.innerHTML = `
      <div class="comp-comparison-label">Sua predição (antes da leitura):</div>
      <div class="comp-comparison-text">${predNote || '<em>Nenhuma anotação registrada.</em>'}</div>
      <div class="comp-comparison-hint">Compare com o que você realmente encontrou no texto. A predição foi confirmada, parcialmente correta ou surpreendida?</div>
    `;
  }

  // Questões de compreensão
  const qContainer = document.getElementById('comp-questions');
  qContainer.innerHTML = '<h3 class="comp-section-title">Questões de compreensão</h3>';

  mod.after.questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'question-item';
    const levelBadge = q.level ? `<span class="question-level question-level-${q.level}">${q.level}</span>` : '';
    const optionsHtml = q.options.map((opt, oi) =>
      `<div class="question-option" data-qi="comp-${i}" data-oi="${oi}" data-correct="${opt === q.a}" onclick="answerCompreensaoQuestion(this)">${opt}</div>`
    ).join('');
    item.innerHTML = `
      <div class="question-text">${levelBadge}${i + 1}. ${q.q}</div>
      <div class="question-options" id="comp-q-options-${i}">${optionsHtml}</div>
    `;
    qContainer.appendChild(item);
  });

  // Score inicial
  _updateCompScore();

  // Botão salvar — oculto até pelo menos uma questão ser respondida
  document.getElementById('comp-save-btn').style.display = 'none';
}

function checkCompreensaoSummary() {
  compreensaoSummaryRevealed = true;
  document.getElementById('comp-summary-key').style.display = 'block';
  document.getElementById('comp-reveal-key-btn').style.display = 'none';
}

function answerCompreensaoQuestion(el) {
  const qi = el.dataset.qi;
  const container = document.getElementById('comp-q-options-' + qi.replace('comp-', ''));
  if (!container || container.classList.contains('answered')) return;
  container.classList.add('answered');

  const isCorrect = el.dataset.correct === 'true';
  if (isCorrect) {
    el.classList.add('correct-pick');
  } else {
    el.classList.add('wrong-pick');
    container.querySelectorAll('.question-option[data-correct="true"]').forEach(opt => {
      opt.classList.add('show-correct');
    });
  }

  _updateCompScore();

  // Verificar se todas as questões foram respondidas
  const mod = COMPREENSAO_MODULES[compreensaoModule];
  const totalQ = mod.after.questions.length;
  const answeredQ = document.querySelectorAll('#comp-questions .question-options.answered').length;
  if (answeredQ >= totalQ) {
    document.getElementById('comp-save-btn').style.display = 'inline-flex';
  }
}

function _updateCompScore() {
  const answered = document.querySelectorAll('#comp-questions .question-options.answered');
  const correct = document.querySelectorAll('#comp-questions .question-options.answered .correct-pick');
  const scoreEl = document.getElementById('comp-score-display');
  if (scoreEl) {
    if (answered.length > 0) {
      scoreEl.style.display = 'flex';
      scoreEl.querySelector('.score-num').textContent = correct.length;
      scoreEl.querySelector('.score-total span').textContent =
        document.querySelectorAll('#comp-questions .question-options').length;
    } else {
      scoreEl.style.display = 'none';
    }
  }
}

// ─────────────────────────────────────────
// SALVAR
// ─────────────────────────────────────────
function finishCompreensao() {
  saveCompreensaoAttempt();
}

function saveCompreensaoAttempt() {
  const mod = COMPREENSAO_MODULES[compreensaoModule];

  const answered = document.querySelectorAll('#comp-questions .question-options.answered');
  const correct = document.querySelectorAll('#comp-questions .question-options.answered .correct-pick');
  const total = mod.after.questions.length;
  const pct = total > 0 ? Math.round(correct.length / total * 100) : 0;

  Storage.push('fluencia_compreensao', {
    date: new Date().toISOString(),
    module: mod.name,
    phase: compreensaoPhase,
    timeElapsed: compreensaoElapsed,
    timeFormatted: _formatCompTime(compreensaoElapsed),
    correct: correct.length,
    total: total,
    pct: pct,
    summaryRevealed: compreensaoSummaryRevealed,
  });

  const btn = document.getElementById('comp-save-btn');
  if (btn) {
    btn.textContent = 'Salvo!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Salvar sessão';
      btn.disabled = false;
    }, 2000);
  }
}

// ─────────────────────────────────────────
// HELPERS DE NAVEGAÇÃO INTERNA
// ─────────────────────────────────────────
function _showPhase(phase) {
  const phases = ['antes', 'durante', 'depois'];
  phases.forEach(p => {
    const el = document.getElementById('comp-' + p);
    if (el) el.style.display = p === phase ? 'block' : 'none';
  });
}

function _updatePhaseIndicator(activePhase) {
  const phases = ['antes', 'durante', 'depois'];
  phases.forEach(p => {
    const el = document.getElementById('comp-phase-' + p);
    if (!el) return;
    el.classList.remove('active', 'done');
    const idx = phases.indexOf(p);
    const activeIdx = phases.indexOf(activePhase);
    if (p === activePhase) el.classList.add('active');
    else if (idx < activeIdx) el.classList.add('done');
  });
}
