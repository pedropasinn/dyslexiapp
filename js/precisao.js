// precisao.js — Precisao (accuracy) exercise functions

function setPrecisaoModule(idx) {
  precisaoModule = idx;
  document.querySelectorAll('#precisao-modules .module-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  resetPrecisao();
}

function renderPrecisao() {
  precisaoAnswered = 0;
  precisaoCorrect = 0;
  const mod = PRECISAO_MODULES[precisaoModule];
  const grid = document.getElementById('precisao-grid');
  grid.innerHTML = '';
  document.getElementById('precisao-score').classList.add('hidden');

  mod.words.forEach((w, idx) => {
    const item = document.createElement('div');
    item.className = 'precisao-item';
    item.id = `prec-item-${idx}`;

    const wordEl = document.createElement('div');
    wordEl.className = 'precisao-word';
    wordEl.innerHTML = w.display.replace('_', '<span class="blank">&nbsp;</span>');

    const opts = document.createElement('div');
    opts.className = 'precisao-options';

    mod.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'precisao-opt';
      btn.textContent = opt;
      btn.onclick = () => handlePrecisaoAnswer(idx, opt, w.answer, btn);
      opts.appendChild(btn);
    });

    item.appendChild(wordEl);
    item.appendChild(opts);
    grid.appendChild(item);
  });
}

function handlePrecisaoAnswer(idx, chosen, correct, btnEl) {
  const item = document.getElementById(`prec-item-${idx}`);
  if (item.classList.contains('correct') || item.classList.contains('wrong')) return;

  const buttons = item.querySelectorAll('.precisao-opt');
  buttons.forEach(b => b.disabled = true);

  if (chosen === correct) {
    item.classList.add('correct');
    btnEl.classList.add('correct-answer');
    precisaoCorrect++;
  } else {
    item.classList.add('wrong');
    btnEl.classList.add('wrong-answer');
    buttons.forEach(b => { if (b.textContent === correct) b.classList.add('correct-answer'); });
  }

  precisaoAnswered++;
  const mod = PRECISAO_MODULES[precisaoModule];
  if (precisaoAnswered === mod.words.length) {
    document.getElementById('precisao-score').classList.remove('hidden');
    document.getElementById('precisao-correct').textContent = precisaoCorrect;
    document.getElementById('precisao-total').textContent = mod.words.length;

    Storage.push('fluencia_precisao', {
      date: new Date().toISOString(),
      module: mod.name,
      correct: precisaoCorrect,
      total: mod.words.length,
    });
  }
}

function resetPrecisao() { renderPrecisao(); }

function showPrecisaoAnswers() {
  const mod = PRECISAO_MODULES[precisaoModule];
  mod.words.forEach((w, idx) => {
    const item = document.getElementById(`prec-item-${idx}`);
    if (!item.classList.contains('correct') && !item.classList.contains('wrong')) {
      const buttons = item.querySelectorAll('.precisao-opt');
      buttons.forEach(b => {
        b.disabled = true;
        if (b.textContent === w.answer) b.classList.add('correct-answer');
      });
      item.classList.add('correct');
    }
  });
  document.getElementById('precisao-score').classList.remove('hidden');
  document.getElementById('precisao-correct').textContent = precisaoCorrect;
  document.getElementById('precisao-total').textContent = mod.words.length;
}
