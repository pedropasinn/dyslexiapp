// vocabulario.js — Modulo de Vocabulario Tier 2 (Beck's Three-Tier Framework)

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let vocabularioModule = 0;
let vocabularioWordIdx = 0;
let vocabularioExerciseIdx = 0; // 0 ou 1 (dois exercicios por palavra)
let vocabularioPhase = 'apresentacao'; // 'apresentacao' | 'exercicio' | 'revisao'
let vocabularioScore = { correct: 0, total: 0, wordsSeen: 0 };

// ─────────────────────────────────────────
// MODULE SELECTION
// ─────────────────────────────────────────
function setVocabularioModule(idx) {
  vocabularioModule = idx;
  vocabularioWordIdx = 0;
  vocabularioExerciseIdx = 0;
  vocabularioPhase = 'apresentacao';
  vocabularioScore = { correct: 0, total: 0, wordsSeen: 0 };

  document.querySelectorAll('#vocabulario-modules .module-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.index) === idx);
  });

  renderVocabulario();
}

// ─────────────────────────────────────────
// MAIN RENDER DISPATCHER
// ─────────────────────────────────────────
function renderVocabulario() {
  const mod = VOCABULARIO_MODULES[vocabularioModule];

  // Atualizar indicador de fase
  updateVocabPhaseIndicator();

  // Atualizar progresso
  updateVocabProgress();

  if (vocabularioPhase === 'apresentacao') {
    renderWordPresentation(mod.words[vocabularioWordIdx]);
  } else if (vocabularioPhase === 'exercicio') {
    renderWordExercise(mod.words[vocabularioWordIdx]);
  } else if (vocabularioPhase === 'revisao') {
    renderVocabularioRevisao();
  }
}

// ─────────────────────────────────────────
// PHASE INDICATOR
// ─────────────────────────────────────────
function updateVocabPhaseIndicator() {
  const el = document.getElementById('vocab-phase-indicator');
  if (!el) return;
  const phases = ['Apresentação', 'Exercício', 'Revisão'];
  const current = vocabularioPhase === 'apresentacao' ? 0
    : vocabularioPhase === 'exercicio' ? 1 : 2;
  el.innerHTML = phases.map((p, i) =>
    `<span class="vocab-phase-step ${i === current ? 'active' : i < current ? 'done' : ''}">${p}</span>`
  ).join('<span class="vocab-phase-sep">›</span>');
}

// ─────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────
function updateVocabProgress() {
  const mod = VOCABULARIO_MODULES[vocabularioModule];
  const total = mod.words.length;
  const current = vocabularioWordIdx + 1;

  const bar = document.getElementById('vocab-progress-bar');
  const label = document.getElementById('vocab-progress-label');
  if (bar) bar.style.width = `${Math.round((vocabularioWordIdx / total) * 100)}%`;
  if (label) {
    if (vocabularioPhase === 'revisao') {
      label.textContent = `Revisão — ${total} palavras`;
    } else {
      label.textContent = `Palavra ${current} de ${total}`;
    }
  }

  // Score display
  updateVocabScore();
}

// ─────────────────────────────────────────
// SCORE DISPLAY
// ─────────────────────────────────────────
function updateVocabScore() {
  const el = document.getElementById('vocabulario-score');
  if (!el) return;
  if (vocabularioScore.total > 0) {
    el.style.display = 'flex';
    el.querySelector('.score-num').textContent = vocabularioScore.correct;
    el.querySelector('.score-total span').textContent = vocabularioScore.total;
  } else {
    el.style.display = 'none';
  }
}

// ─────────────────────────────────────────
// APRESENTACAO — Cartao de apresentacao da palavra
// ─────────────────────────────────────────
function renderWordPresentation(wordData) {
  const presentationEl = document.getElementById('vocabulario-presentation');
  const exerciseEl = document.getElementById('vocabulario-exercise');
  const reviewEl = document.getElementById('vocabulario-review');

  if (presentationEl) presentationEl.style.display = 'block';
  if (exerciseEl) exerciseEl.style.display = 'none';
  if (reviewEl) reviewEl.style.display = 'none';

  if (!presentationEl) return;

  // Destacar a palavra no exemplo
  const exampleHighlighted = wordData.example; // Ja tem <strong> no dado

  presentationEl.innerHTML = `
    <div class="vocab-card">
      <div class="vocab-card-word">${wordData.word}</div>
      <div class="vocab-card-def">${wordData.definition}</div>
      <div class="vocab-card-example">${exampleHighlighted}</div>
      <div class="vocab-card-etym">${wordData.etymology}</div>
      <div class="vocab-card-actions">
        <button class="btn btn-primary" onclick="proceedFromPresentation()">Entendi — Próxima</button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────
// TRANSICAO: apresentacao → exercicio
// ─────────────────────────────────────────
function proceedFromPresentation() {
  vocabularioScore.wordsSeen++;
  vocabularioPhase = 'exercicio';
  vocabularioExerciseIdx = 0;
  renderVocabulario();
}

// ─────────────────────────────────────────
// EXERCICIO — Completar lacuna (multipla escolha)
// ─────────────────────────────────────────
function renderWordExercise(wordData) {
  const presentationEl = document.getElementById('vocabulario-presentation');
  const exerciseEl = document.getElementById('vocabulario-exercise');
  const reviewEl = document.getElementById('vocabulario-review');

  if (presentationEl) presentationEl.style.display = 'none';
  if (exerciseEl) exerciseEl.style.display = 'block';
  if (reviewEl) reviewEl.style.display = 'none';

  if (!exerciseEl) return;

  const ex = wordData.exercises[vocabularioExerciseIdx];
  const typeLabel = ex.type === 'contexto' ? 'Contexto' : 'Uso';
  const typeDesc = ex.type === 'contexto'
    ? 'Escolha a palavra que melhor se encaixa no contexto.'
    : 'Complete a frase com a palavra correta.';

  // Substituir ___ pela lacuna visual
  const sentenceDisplay = ex.sentence.replace('___', '<span class="vocab-blank">___</span>');

  const choicesHTML = ex.choices.map(choice =>
    `<button class="vocab-choice" onclick="answerVocabulario('${choice}', this)">${choice}</button>`
  ).join('');

  exerciseEl.innerHTML = `
    <div class="vocab-exercise">
      <div class="vocab-exercise-type">
        <span class="vocab-type-tag">${typeLabel}</span>
        <span class="vocab-type-desc">${typeDesc}</span>
      </div>
      <div class="vocab-exercise-num">Exercício ${vocabularioExerciseIdx + 1} de ${wordData.exercises.length}</div>
      <div class="vocab-exercise-sentence">${sentenceDisplay}</div>
      <div class="vocab-choices" id="vocab-choices-row">
        ${choicesHTML}
      </div>
      <div class="vocab-feedback" id="vocab-feedback" style="display:none"></div>
      <div class="vocab-exercise-actions" id="vocab-ex-actions" style="display:none">
        <button class="btn btn-primary" onclick="nextVocabularioWord()">Continuar →</button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────
// RESPOSTA — verificar e mostrar feedback
// ─────────────────────────────────────────
function answerVocabulario(choice, btn) {
  const mod = VOCABULARIO_MODULES[vocabularioModule];
  const wordData = mod.words[vocabularioWordIdx];
  const ex = wordData.exercises[vocabularioExerciseIdx];

  // Desabilitar todos os botoes
  document.querySelectorAll('#vocab-choices-row .vocab-choice').forEach(b => {
    b.disabled = true;
    b.style.pointerEvents = 'none';
  });

  const isCorrect = choice === ex.correct;
  vocabularioScore.total++;
  if (isCorrect) vocabularioScore.correct++;

  // Feedback visual nos botoes
  document.querySelectorAll('#vocab-choices-row .vocab-choice').forEach(b => {
    if (b.textContent === ex.correct) b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  // Substituir ___ pela resposta na frase
  const sentenceEl = document.querySelector('.vocab-exercise-sentence');
  if (sentenceEl) {
    const filled = wordData.exercises[vocabularioExerciseIdx].sentence.replace(
      '___',
      `<strong class="${isCorrect ? 'vocab-answer-correct' : 'vocab-answer-wrong'}">${choice}</strong>`
    );
    sentenceEl.innerHTML = filled;
  }

  // Feedback textual
  const feedbackEl = document.getElementById('vocab-feedback');
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    if (isCorrect) {
      feedbackEl.innerHTML = `<span class="vocab-feedback-correct">Correto!</span> A palavra certa é <strong>${ex.correct}</strong>.`;
    } else {
      feedbackEl.innerHTML = `<span class="vocab-feedback-wrong">Incorreto.</span> A resposta correta é <strong>${ex.correct}</strong>.`;
    }
  }

  // Mostrar botao continuar
  const actionsEl = document.getElementById('vocab-ex-actions');
  if (actionsEl) actionsEl.style.display = 'flex';

  updateVocabScore();
}

// ─────────────────────────────────────────
// AVANCO — proximo exercicio ou proxima palavra
// ─────────────────────────────────────────
function nextVocabularioWord() {
  const mod = VOCABULARIO_MODULES[vocabularioModule];
  const wordData = mod.words[vocabularioWordIdx];

  // Ha mais exercicios para esta palavra?
  if (vocabularioExerciseIdx < wordData.exercises.length - 1) {
    vocabularioExerciseIdx++;
    renderVocabulario();
    return;
  }

  // Ha mais palavras?
  if (vocabularioWordIdx < mod.words.length - 1) {
    vocabularioWordIdx++;
    vocabularioExerciseIdx = 0;
    vocabularioPhase = 'apresentacao';
    renderVocabulario();
    return;
  }

  // Todas as palavras completas — ir para revisao
  finishVocabulario();
}

// ─────────────────────────────────────────
// CONCLUSAO — salvar e ir para revisao
// ─────────────────────────────────────────
function finishVocabulario() {
  saveVocabularioAttempt();
  vocabularioPhase = 'revisao';
  renderVocabulario();
}

// ─────────────────────────────────────────
// SALVAR TENTATIVA
// ─────────────────────────────────────────
function saveVocabularioAttempt() {
  const mod = VOCABULARIO_MODULES[vocabularioModule];
  Storage.push('fluencia_vocabulario', {
    date: new Date().toISOString(),
    module: mod.name,
    wordsSeen: vocabularioScore.wordsSeen,
    correct: vocabularioScore.correct,
    total: vocabularioScore.total,
    pct: vocabularioScore.total > 0
      ? Math.round((vocabularioScore.correct / vocabularioScore.total) * 100)
      : 0,
  });
}

// ─────────────────────────────────────────
// REVISAO — flashcards flip
// ─────────────────────────────────────────
function renderVocabularioRevisao() {
  const mod = VOCABULARIO_MODULES[vocabularioModule];
  const presentationEl = document.getElementById('vocabulario-presentation');
  const exerciseEl = document.getElementById('vocabulario-exercise');
  const reviewEl = document.getElementById('vocabulario-review');

  if (presentationEl) presentationEl.style.display = 'none';
  if (exerciseEl) exerciseEl.style.display = 'none';
  if (reviewEl) reviewEl.style.display = 'block';

  if (!reviewEl) return;

  const pct = vocabularioScore.total > 0
    ? Math.round((vocabularioScore.correct / vocabularioScore.total) * 100) : 0;

  const scoreClass = pct >= 80 ? 'vocab-score-great' : pct >= 60 ? 'vocab-score-ok' : 'vocab-score-low';

  const flashcardsHTML = mod.words.map((w, i) => `
    <div class="vocab-flashcard" onclick="flipCard(this)" title="Clique para virar">
      <div class="vocab-flashcard-inner">
        <div class="vocab-flashcard-front">
          <div class="vocab-flashcard-word">${w.word}</div>
          <div class="vocab-flashcard-hint">Clique para ver a definição</div>
        </div>
        <div class="vocab-flashcard-back">
          <div class="vocab-flashcard-def">${w.definition}</div>
          <div class="vocab-flashcard-etym">${w.etymology}</div>
        </div>
      </div>
    </div>
  `).join('');

  reviewEl.innerHTML = `
    <div class="vocab-results">
      <div class="vocab-results-score ${scoreClass}">
        <div class="vocab-results-num">${vocabularioScore.correct}<span class="vocab-results-sep">/</span>${vocabularioScore.total}</div>
        <div class="vocab-results-pct">${pct}% de acertos</div>
        <div class="vocab-results-words">${vocabularioScore.wordsSeen} palavras estudadas</div>
      </div>
    </div>

    <div class="vocab-review-title">Revisão — clique nos cartões para ver as definições</div>
    <div class="vocab-flashcards-grid">
      ${flashcardsHTML}
    </div>

    <div class="controls" style="margin-top:2rem; justify-content:center">
      <button class="btn btn-outline" onclick="restartVocabulario()">Reiniciar módulo</button>
      <button class="btn btn-gold btn-sm" onclick="showSection('historico')">Ver histórico</button>
    </div>
  `;
}

// ─────────────────────────────────────────
// FLIP CARD
// ─────────────────────────────────────────
function flipCard(cardEl) {
  cardEl.classList.toggle('flipped');
}

// ─────────────────────────────────────────
// REINICIAR
// ─────────────────────────────────────────
function restartVocabulario() {
  vocabularioWordIdx = 0;
  vocabularioExerciseIdx = 0;
  vocabularioPhase = 'apresentacao';
  vocabularioScore = { correct: 0, total: 0, wordsSeen: 0 };
  renderVocabulario();
}

// ─────────────────────────────────────────
// INIT (chamado pelo showSection)
// ─────────────────────────────────────────
function initVocabulario() {
  restartVocabulario();
}
