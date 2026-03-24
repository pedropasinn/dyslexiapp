// latim-quiz.js — Latin translation quiz (words and phrases)

let latimQuizLevel = 3; // default: all
let latimQuizItems = [];
let latimQuizCurrent = 0;
let latimQuizCorrect = 0;
let latimQuizTotal = 0;
let latimQuizMode = 'lat-to-pt'; // 'lat-to-pt' or 'pt-to-lat'
let latimQuizTimer = null;

function initLatimQuiz() {
  latimQuizCurrent = 0;
  latimQuizCorrect = 0;
  latimQuizTotal = 0;
  if (!latimQuizTimer) {
    latimQuizTimer = createTimer('latim-quiz-timer');
  }
  latimQuizTimer.reset();
  document.getElementById('latim-quiz-start-btn').textContent = 'Iniciar';
  document.getElementById('latim-quiz-score').classList.add('hidden');
  document.getElementById('latim-quiz-save-row').style.display = 'none';
  generateLatimQuiz();
  renderLatimQuizHistory();
}

function setLatimQuizLevel(level) {
  latimQuizLevel = level;
  document.querySelectorAll('#latim-quiz-levels .module-btn').forEach((b, i) => b.classList.toggle('active', i === level));
  initLatimQuiz();
}

function setLatimQuizMode(mode) {
  latimQuizMode = mode;
  document.querySelectorAll('#latim-quiz-modes .module-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  initLatimQuiz();
}

function generateLatimQuiz() {
  const levelDef = LATIM_QUIZ_LEVELS[latimQuizLevel];
  const pool = LATIM_QUIZ_WORDS.filter(levelDef.filter);
  // Shuffle and pick 20 questions
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  latimQuizItems = shuffled.slice(0, 20);
  latimQuizTotal = latimQuizItems.length;
  latimQuizCurrent = 0;
  latimQuizCorrect = 0;
  renderLatimQuizQuestion();
}

function renderLatimQuizQuestion() {
  const area = document.getElementById('latim-quiz-area');

  if (latimQuizCurrent >= latimQuizItems.length) {
    // Quiz completo
    latimQuizTimer.stop();
    document.getElementById('latim-quiz-start-btn').textContent = 'Concluído';
    document.getElementById('latim-quiz-save-row').style.display = '';
    updateLatimQuizScore();
    area.innerHTML = `<div class="quiz-complete">
      <h3>Quiz Completo!</h3>
      <p>${latimQuizCorrect} de ${latimQuizTotal} corretas (${Math.round(latimQuizCorrect / latimQuizTotal * 100)}%)</p>
      <button class="btn btn-primary" onclick="initLatimQuiz()">Novo Quiz</button>
    </div>`;
    return;
  }

  const item = latimQuizItems[latimQuizCurrent];
  const isLatToPt = latimQuizMode === 'lat-to-pt';
  const question = isLatToPt ? item.latin : item.pt;
  const answer = isLatToPt ? item.pt : item.latin;
  const questionLabel = isLatToPt ? 'Latim' : 'Português';
  const answerLabel = isLatToPt ? 'Português' : 'Latim';

  // Generate 4 options (1 correct + 3 wrong)
  const wrongPool = LATIM_QUIZ_WORDS.filter(w => w !== item);
  const shuffledWrong = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [
    { text: answer, correct: true },
    ...shuffledWrong.map(w => ({ text: isLatToPt ? w.pt : w.latin, correct: false }))
  ].sort(() => Math.random() - 0.5);

  area.innerHTML = `
    <div class="quiz-progress">
      <span class="quiz-progress-text">${latimQuizCurrent + 1} / ${latimQuizTotal}</span>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${(latimQuizCurrent / latimQuizTotal) * 100}%"></div>
      </div>
    </div>
    <div class="quiz-card">
      <div class="quiz-lang-label">${questionLabel}</div>
      <div class="quiz-question">${question}</div>
      <div class="quiz-lang-label" style="margin-top:1.5rem">${answerLabel}</div>
      <div class="quiz-options">
        ${options.map((opt, i) => `<button class="quiz-option" onclick="answerLatimQuiz(this, ${opt.correct})" data-answer="${encodeURIComponent(answer)}">${opt.text}</button>`).join('')}
      </div>
    </div>`;
}

function answerLatimQuiz(btnEl, isCorrect) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(b => {
    b.disabled = true;
    b.onclick = null;
    const correctAnswer = decodeURIComponent(b.dataset.answer);
    if (b.textContent === correctAnswer) {
      b.classList.add('correct-pick');
    }
  });

  if (isCorrect) {
    btnEl.classList.add('correct-pick');
    latimQuizCorrect++;
  } else {
    btnEl.classList.add('wrong-pick');
  }

  updateLatimQuizScore();

  // Avançar após delay
  setTimeout(() => {
    latimQuizCurrent++;
    renderLatimQuizQuestion();
  }, 1200);
}

function toggleLatimQuizTimer() {
  if (!latimQuizTimer) latimQuizTimer = createTimer('latim-quiz-timer');
  const running = latimQuizTimer.toggle();
  document.getElementById('latim-quiz-start-btn').textContent = running ? 'Parar' : 'Continuar';
}

function updateLatimQuizScore() {
  const scoreEl = document.getElementById('latim-quiz-score');
  scoreEl.classList.remove('hidden');
  document.getElementById('latim-quiz-correct').textContent = latimQuizCorrect;
  document.getElementById('latim-quiz-total').textContent = latimQuizTotal;
}

function saveLatimQuizAttempt() {
  Storage.push('fluencia_latim_quiz', {
    date: new Date().toISOString(),
    mode: latimQuizMode,
    level: LATIM_QUIZ_LEVELS[latimQuizLevel].name,
    correct: latimQuizCorrect,
    total: latimQuizTotal,
    time: latimQuizTimer.getElapsed(),
    timeFormatted: formatTime(latimQuizTimer.getElapsed())
  });
  renderLatimQuizHistory();
  document.getElementById('latim-quiz-save-row').style.display = 'none';
}

function renderLatimQuizHistory() {
  const container = document.getElementById('latim-quiz-history');
  if (!container) return;
  const data = Storage.get('fluencia_latim_quiz', []);
  if (!data.length) {
    container.innerHTML = '<div class="history-empty">Nenhuma sessão registrada ainda.</div>';
    return;
  }
  const recent = data.slice(-10).reverse();
  let html = '<h3>Sessões Anteriores</h3><table class="history-table"><thead><tr><th>Data</th><th>Modo</th><th>Nível</th><th>Acertos</th><th>Tempo</th></tr></thead><tbody>';
  recent.forEach(r => {
    const d = new Date(r.date);
    const modeLabel = r.mode === 'lat-to-pt' ? 'LAT→PT' : 'PT→LAT';
    html += `<tr><td>${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'})}</td><td>${modeLabel}</td><td>${r.level}</td><td>${r.correct}/${r.total}</td><td>${r.timeFormatted}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
