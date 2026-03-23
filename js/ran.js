// ran.js — RAN (Rapid Automatized Naming) functions

const ranTimerCtrl = createTimer('ran-timer');

function setRanLevel(level) {
  ranLevel = level;
  document.querySelectorAll('#ran-levels .module-btn').forEach((b, i) => b.classList.toggle('active', i === level));
  generateRan();
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
}

function generateRan() {
  const stimuli = RAN_LEVELS[ranLevel];
  const grid = document.getElementById('ran-grid');
  grid.innerHTML = '';
  for (let row = 0; row < 10; row++) {
    const shuffled = [...stimuli].sort(() => Math.random() - 0.5);
    shuffled.forEach(num => {
      const cell = document.createElement('div');
      cell.className = 'ran-cell';
      cell.textContent = num;
      grid.appendChild(cell);
    });
  }
  renderRanHistory();
}

function toggleRanTimer() {
  const btn = document.getElementById('ran-start-btn');
  if (ranTimerCtrl.toggle()) {
    btn.textContent = 'Parar';
  } else {
    btn.textContent = 'Iniciar';
  }
}

function adjustCounter(id, delta) {
  const el = document.getElementById(id);
  const val = Math.max(0, parseInt(el.textContent) + delta);
  el.textContent = val;
}

function saveRanAttempt() {
  const elapsed = ranTimerCtrl.getElapsed();
  if (elapsed === 0) return;
  const entry = {
    date: new Date().toISOString(),
    level: ranLevel + 1,
    time: elapsed,
    timeFormatted: formatTime(elapsed),
    errors: parseInt(document.getElementById('ran-errors').textContent),
    autocorrections: parseInt(document.getElementById('ran-autocorr').textContent),
  };
  const history = JSON.parse(localStorage.getItem('fluencia_ran') || '[]');
  history.push(entry);
  localStorage.setItem('fluencia_ran', JSON.stringify(history));
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
  generateRan();
  renderRanHistory();
}

function renderRanHistory() {
  const container = document.getElementById('ran-history');
  const history = JSON.parse(localStorage.getItem('fluencia_ran') || '[]');
  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty">Nenhuma tentativa registrada ainda.</div>';
    return;
  }
  const recent = history.slice(-10).reverse();
  let html = '<h3>Últimas tentativas</h3><table class="history-table"><thead><tr><th>Data</th><th>Nível</th><th>Tempo</th><th>Erros</th><th>Autocorr.</th></tr></thead><tbody>';
  recent.forEach(e => {
    const d = new Date(e.date);
    html += `<tr><td>${d.toLocaleDateString('pt-BR')}</td><td>${e.level}</td><td>${e.timeFormatted}</td><td>${e.errors}</td><td>${e.autocorrections}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
