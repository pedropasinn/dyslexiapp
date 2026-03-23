// texto.js — Fluencia textual (text fluency) and checklist functions

const textoTimerCtrl = createTimer('texto-timer');

function setTextoModule(idx) {
  textoModule = idx;
  document.querySelectorAll('#texto-modules .module-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  renderTexto();
  textoTimerCtrl.reset();
  document.getElementById('texto-start-btn').textContent = 'Iniciar leitura';
  document.getElementById('texto-stats').style.display = 'none';
  document.getElementById('checklist-section').style.display = 'none';
}

function renderTexto() {
  const mod = TEXTO_MODULES[textoModule];
  document.getElementById('texto-passage').textContent = mod.text;

  const qContainer = document.getElementById('texto-questions');
  qContainer.innerHTML = '<h3 style="margin-bottom:1rem;">Compreensão</h3>';
  qContainer.classList.remove('visible');

  mod.questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'question-item';
    item.innerHTML = `
      <div class="question-text">${i + 1}. ${q.q}</div>
      <input type="text" class="question-input" placeholder="Sua resposta..." data-answer="${q.a}">
    `;
    qContainer.appendChild(item);
  });

  // Checklist
  renderChecklist();
}

function toggleTextoTimer() {
  const btn = document.getElementById('texto-start-btn');
  if (textoTimerCtrl.toggle()) btn.textContent = 'Pausar';
  else btn.textContent = 'Continuar';
}

function finishTextoReading() {
  textoTimerCtrl.stop();
  const elapsed = textoTimerCtrl.getElapsed();
  if (elapsed === 0) return;

  document.getElementById('texto-start-btn').textContent = 'Iniciar leitura';

  const mod = TEXTO_MODULES[textoModule];
  const wordCount = mod.text.split(/\s+/).length;
  const minutes = elapsed / 60000;
  const wpm = Math.round(wordCount / minutes);

  document.getElementById('texto-stats').style.display = 'flex';
  document.getElementById('texto-wpm').textContent = wpm;
  document.getElementById('texto-words').textContent = wordCount;
  document.getElementById('texto-time-final').textContent = formatTime(elapsed);

  document.getElementById('texto-questions').classList.add('visible');
  document.getElementById('checklist-section').style.display = 'block';

  const history = JSON.parse(localStorage.getItem('fluencia_texto') || '[]');
  history.push({
    date: new Date().toISOString(),
    module: mod.name,
    time: elapsed,
    timeFormatted: formatTime(elapsed),
    wpm: wpm,
    words: wordCount,
  });
  localStorage.setItem('fluencia_texto', JSON.stringify(history));
}

// ─────────────────────────────────────────
// CHECKLIST
// ─────────────────────────────────────────
function renderChecklist() {
  const container = document.getElementById('checklist-items');
  container.innerHTML = '';
  CHECKLIST_ITEMS.forEach((text, idx) => {
    const item = document.createElement('div');
    item.className = 'checklist-item';
    item.innerHTML = `
      <div class="checklist-text">${text}</div>
      <div class="checklist-options">
        ${CHECKLIST_LABELS.map((label, li) => `<div class="checklist-opt" onclick="selectChecklist(this, ${idx}, ${li})" data-idx="${idx}" data-level="${li}">${label}</div>`).join('')}
      </div>
    `;
    container.appendChild(item);
  });
}

function selectChecklist(el, idx, level) {
  const siblings = el.parentElement.querySelectorAll('.checklist-opt');
  siblings.forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function saveChecklist() {
  const results = [];
  CHECKLIST_ITEMS.forEach((text, idx) => {
    const selected = document.querySelector(`.checklist-opt[data-idx="${idx}"].selected`);
    results.push({
      item: text,
      level: selected ? parseInt(selected.dataset.level) : -1,
      label: selected ? CHECKLIST_LABELS[parseInt(selected.dataset.level)] : 'N/A',
    });
  });
  const history = JSON.parse(localStorage.getItem('fluencia_checklist') || '[]');
  history.push({ date: new Date().toISOString(), results });
  localStorage.setItem('fluencia_checklist', JSON.stringify(history));
  alert('Autoavaliação salva!');
}
