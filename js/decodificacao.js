// decodificacao.js — Decodificacao progressiva (progressive decoding) functions

const decodeTimerCtrl = createTimer('decode-timer');

function setDecodeModule(idx) {
  decodeModule = idx;
  document.querySelectorAll('#decode-modules .module-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.index) === idx));
  renderDecode();
  decodeTimerCtrl.reset();
  document.getElementById('decode-start-btn').textContent = 'Iniciar';
}

function renderDecode() {
  const mod = DECODE_MODULES[decodeModule];
  const table = document.getElementById('decode-table');
  table.innerHTML = '';
  mod.words.forEach((w, idx) => {
    const row = document.createElement('div');
    row.className = 'decode-row';
    row.dataset.step = '0';
    row.onclick = () => advanceDecode(row);
    row.innerHTML = `
      <div class="decode-num">${idx + 1}</div>
      <div class="decode-robot">${w.robot}</div>
      <div class="decode-orator">${w.word}</div>
      <div class="decode-upper">${w.word.toUpperCase()}</div>
    `;
    table.appendChild(row);
  });
}

function advanceDecode(row) {
  const step = parseInt(row.dataset.step);
  if (step >= 3) return;
  const newStep = step + 1;
  row.dataset.step = newStep;
  row.className = `decode-row step-${newStep}`;
}

function toggleDecodeTimer() {
  const btn = document.getElementById('decode-start-btn');
  if (decodeTimerCtrl.toggle()) btn.textContent = 'Parar';
  else btn.textContent = 'Iniciar';
}

function resetDecode() {
  decodeTimerCtrl.reset();
  document.getElementById('decode-start-btn').textContent = 'Iniciar';
  renderDecode();
}
