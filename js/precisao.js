// precisao.js — Precisao (accuracy) exercise functions

// Array com timestamps de exibição de cada item (para tempo de reação)
let precisaoStartTimes = [];

function setPrecisaoModule(idx) {
  precisaoModule = idx;
  document.querySelectorAll('#precisao-modules .module-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.index) === idx));
  resetPrecisao();
}

function renderPrecisao() {
  precisaoAnswered = 0;
  precisaoCorrect = 0;
  precisaoStartTimes = [];

  const mod = PRECISAO_MODULES[precisaoModule];
  const grid = document.getElementById('precisao-grid');
  grid.innerHTML = '';
  document.getElementById('precisao-score').classList.add('hidden');

  // Exibir label de contraste fonêmico
  const contrastEl = document.getElementById('precisao-contrast');
  if (contrastEl) {
    contrastEl.textContent = `Contraste: ${mod.options.join(' vs ')}`;
  }

  // Limpar tempo médio anterior
  const rtEl = document.getElementById('precisao-reaction-time');
  if (rtEl) rtEl.textContent = '';

  const agora = Date.now();

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

    // Registrar timestamp de exibição de cada item
    precisaoStartTimes[idx] = agora;
  });
}

function handlePrecisaoAnswer(idx, chosen, correct, btnEl) {
  const item = document.getElementById(`prec-item-${idx}`);
  if (item.classList.contains('correct') || item.classList.contains('wrong')) return;

  // Calcular tempo de reação para este item
  const agora = Date.now();
  const reactionMs = agora - (precisaoStartTimes[idx] || agora);
  // Armazenar o tempo de reação no array (reutilizando o slot)
  precisaoStartTimes[idx] = reactionMs;

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
    // Calcular tempo médio de reação (apenas itens respondidos, em segundos)
    const tempos = precisaoStartTimes.filter(t => typeof t === 'number' && t > 0);
    const mediaMs = tempos.length > 0
      ? tempos.reduce((acc, t) => acc + t, 0) / tempos.length
      : 0;
    const mediaSeg = (mediaMs / 1000).toFixed(2);

    document.getElementById('precisao-score').classList.remove('hidden');
    document.getElementById('precisao-correct').textContent = precisaoCorrect;
    document.getElementById('precisao-total').textContent = mod.words.length;

    // Exibir tempo médio de reação
    const rtEl = document.getElementById('precisao-reaction-time');
    if (rtEl) rtEl.textContent = `Tempo médio: ${mediaSeg}s`;

    Storage.push('fluencia_precisao', {
      date: new Date().toISOString(),
      module: mod.name,
      correct: precisaoCorrect,
      total: mod.words.length,
      avgReactionTimeSec: parseFloat(mediaSeg),
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
