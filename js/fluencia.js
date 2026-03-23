// fluencia.js — Fluencia de palavras (word fluency) functions

const fluenciaTimerCtrl = createTimer('fluencia-timer');

function setFluenciaModule(idx) {
  fluenciaModule = idx;
  document.querySelectorAll('#fluencia-modules .module-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  fluenciaAttempt = 0;
  renderFluencia();
  fluenciaTimerCtrl.reset();
  document.getElementById('fluencia-start-btn').textContent = 'Iniciar';
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`fluencia-t${i}`).textContent = '—';
    document.getElementById(`fluencia-s${i}`).textContent = '';
  }
  updateFluenciaAttemptCards();
}

function renderFluencia() {
  const mod = FLUENCIA_MODULES[fluenciaModule];
  const cols = document.getElementById('fluencia-columns');
  cols.innerHTML = '';

  const headers = ['Maiúsculas · Mono', 'Minúsculas · Serifa', 'Minúsculas · Itálico'];
  headers.forEach((h, ci) => {
    const col = document.createElement('div');
    col.className = 'fluencia-col';
    col.innerHTML = `<div class="fluencia-col-header">${h}</div>`;
    mod.words.forEach(w => {
      const wd = document.createElement('div');
      wd.className = 'fluencia-word';
      wd.textContent = w;
      col.appendChild(wd);
    });
    cols.appendChild(col);
  });
}

function toggleFluenciaTimer() {
  const btn = document.getElementById('fluencia-start-btn');
  if (fluenciaTimerCtrl.toggle()) btn.textContent = 'Parar';
  else btn.textContent = 'Iniciar';
}

function saveFluenciaAttempt() {
  if (fluenciaAttempt >= 3) return;
  const elapsed = fluenciaTimerCtrl.getElapsed();
  if (elapsed === 0) return;

  fluenciaAttempt++;
  document.getElementById(`fluencia-t${fluenciaAttempt}`).textContent = formatTime(elapsed);

  // Stars based on which attempt
  if (fluenciaAttempt >= 2) {
    const prev = document.getElementById(`fluencia-t${fluenciaAttempt - 1}`).textContent;
    // Simple star logic
    document.getElementById(`fluencia-s${fluenciaAttempt}`).textContent = elapsed < parseTimeStr(prev) ? '★★★' : '★';
  }

  fluenciaTimerCtrl.reset();
  document.getElementById('fluencia-start-btn').textContent = 'Iniciar';
  updateFluenciaAttemptCards();

  if (fluenciaAttempt === 3) {
    const mod = FLUENCIA_MODULES[fluenciaModule];
    const times = [];
    for (let i = 1; i <= 3; i++) {
      times.push(document.getElementById(`fluencia-t${i}`).textContent);
    }
    Storage.push('fluencia_fluencia', { date: new Date().toISOString(), module: mod.name, attempts: times });
  }
}

function parseTimeStr(str) {
  if (!str || str === '—') return Infinity;
  const [minSec, tenths] = str.split('.');
  const [min, sec] = minSec.split(':').map(Number);
  return (min * 60 + sec) * 1000 + (parseInt(tenths) || 0) * 100;
}

function updateFluenciaAttemptCards() {
  const cards = document.querySelectorAll('#fluencia-attempts .attempt-card');
  cards.forEach((c, i) => c.classList.toggle('active', i === fluenciaAttempt));
}
