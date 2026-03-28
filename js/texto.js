// texto.js — Fluencia textual (text fluency), leitura repetida, compreensao e checklist

const textoTimerCtrl = createTimer('texto-timer');

// Estado da leitura repetida
let textoRepeatedMode = false;
let textoRepeatAttempt = 0;  // 0, 1, 2
let textoRepeatResults = []; // [{wpm, time, words}]

function setTextoModule(idx) {
  textoModule = idx;
  document.querySelectorAll('#texto-modules .module-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.index) === idx));
  textoRepeatAttempt = 0;
  textoRepeatResults = [];
  renderTexto();
  textoTimerCtrl.reset();
  document.getElementById('texto-start-btn').textContent = 'Iniciar leitura';
  document.getElementById('texto-stats').style.display = 'none';
  document.getElementById('checklist-section').style.display = 'none';
  document.getElementById('texto-wpm-chart').innerHTML = '';
  hideRepeatComparison();
}

// ── META WPM ──

function setWpmMeta(val) {
  const n = parseInt(val, 10);
  if (isNaN(n) || n < 1) return;
  Storage.set('wpm_meta', n);
  // Atualizar campo se chamado programaticamente
  const input = document.getElementById('wpm-meta-input');
  if (input && parseInt(input.value, 10) !== n) input.value = n;
}

function renderTexto() {
  const mod = TEXTO_MODULES[textoModule];
  document.getElementById('texto-passage').textContent = mod.text;

  // Renderizar preview de vocabulario antes da leitura
  renderVocabularyPreview(mod);

  const qContainer = document.getElementById('texto-questions');
  qContainer.innerHTML = '<h3 style="margin-bottom:1rem;">Compreensao</h3>';
  qContainer.classList.remove('visible');

  mod.questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'question-item';

    // Verificar se tem opcoes (multipla escolha) ou e texto livre
    if (q.options && q.options.length > 0) {
      const levelBadge = q.level ? `<span class="question-level question-level-${q.level}">${q.level}</span>` : '';
      let optionsHtml = q.options.map((opt, oi) =>
        `<div class="question-option" data-qi="${i}" data-oi="${oi}" data-correct="${opt === q.a}" onclick="selectQuestionOption(this)">${opt}</div>`
      ).join('');

      item.innerHTML = `
        <div class="question-text">${levelBadge}${i + 1}. ${q.q}</div>
        <div class="question-options" id="q-options-${i}">${optionsHtml}</div>
      `;
    } else {
      item.innerHTML = `
        <div class="question-text">${i + 1}. ${q.q}</div>
        <input type="text" class="question-input" placeholder="Sua resposta..." data-answer="${q.a}">
      `;
    }
    qContainer.appendChild(item);
  });

  // Renderizar modo de leitura repetida se ativo
  renderRepeatTracker();
  renderChecklist();
}

function selectQuestionOption(el) {
  const qi = el.dataset.qi;
  const container = document.getElementById('q-options-' + qi);
  if (container.classList.contains('answered')) return;
  container.classList.add('answered');

  const isCorrect = el.dataset.correct === 'true';
  if (isCorrect) {
    el.classList.add('correct-pick');
  } else {
    el.classList.add('wrong-pick');
    // Mostrar a resposta correta
    container.querySelectorAll('.question-option[data-correct="true"]').forEach(opt => {
      opt.classList.add('show-correct');
    });
  }

  // Atualizar score de compreensao
  updateCompreensaoScore();
}

function updateCompreensaoScore() {
  const answered = document.querySelectorAll('.question-options.answered');
  const correct = document.querySelectorAll('.question-options.answered .correct-pick');
  const scoreEl = document.getElementById('texto-compreensao-score');
  if (scoreEl) {
    scoreEl.style.display = 'flex';
    scoreEl.querySelector('.score-num').textContent = correct.length;
    scoreEl.querySelector('.score-total span').textContent = document.querySelectorAll('.question-options').length;
  }
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

  // Mostrar comparacao com meta
  showWpmBenchmark(wpm);

  if (textoRepeatedMode) {
    // Modo leitura repetida
    textoRepeatResults.push({ wpm, time: elapsed, words: wordCount });
    updateRepeatTracker();

    if (textoRepeatAttempt < 2) {
      // Preparar proxima tentativa
      textoRepeatAttempt++;
      textoTimerCtrl.reset();
      document.getElementById('texto-start-btn').textContent = `Iniciar leitura ${textoRepeatAttempt + 1}`;
      // Nao mostrar perguntas ainda
    } else {
      // Terceira leitura concluida — mostrar comparacao e perguntas
      showRepeatComparison();
      document.getElementById('texto-questions').classList.add('visible');
      document.getElementById('checklist-section').style.display = 'block';
      saveTextoRepeatAttempt();
      renderWpmMiniChart();
    }
  } else {
    // Modo leitura unica (original)
    document.getElementById('texto-questions').classList.add('visible');
    document.getElementById('checklist-section').style.display = 'block';

    Storage.push('fluencia_texto', {
      date: new Date().toISOString(),
      module: mod.name,
      time: elapsed,
      timeFormatted: formatTime(elapsed),
      wpm: wpm,
      words: wordCount,
    });

    renderWpmMiniChart();
  }
}

function showWpmBenchmark(wpm) {
  // Meta padrao para adulto: 150 WPM (Shaywitz cap. 18)
  const meta = Storage.get('wpm_meta', 150);
  let benchEl = document.getElementById('texto-wpm-bench');
  if (!benchEl) {
    benchEl = document.createElement('div');
    benchEl.id = 'texto-wpm-bench';
    benchEl.className = 'wpm-benchmark';
    document.getElementById('texto-stats').appendChild(benchEl);
  }
  const pct = Math.round((wpm / meta) * 100);
  const icon = wpm >= meta ? '★' : (wpm >= meta * 0.8 ? '↗' : '→');
  benchEl.innerHTML = `<span class="wpm-bench-icon">${icon}</span><span class="wpm-bench-text">${pct}% da meta (${meta} PPM)</span>`;
  benchEl.className = 'wpm-benchmark' + (wpm >= meta ? ' wpm-reached' : '');
}

// ── MINI-GRAFICO WPM ──

function renderWpmMiniChart() {
  const container = document.getElementById('texto-wpm-chart');
  if (!container) return;

  const modName = TEXTO_MODULES[textoModule].name;
  const allRecords = Storage.get('fluencia_texto', []);

  // Filtrar registros do modulo atual e pegar os ultimos 10
  const modRecords = allRecords
    .filter(r => r.module === modName && r.wpm && r.wpm > 0)
    .slice(-10);

  if (modRecords.length < 2) {
    container.innerHTML = '';
    return;
  }

  const wpms = modRecords.map(r => r.wpm);
  const maxWpm = Math.max(...wpms);
  const minWpm = Math.min(...wpms);
  const avgWpm = Math.round(wpms.reduce((a, b) => a + b, 0) / wpms.length);
  const lastWpm = wpms[wpms.length - 1];
  const bestWpm = maxWpm;
  const range = maxWpm - minWpm || 1; // evitar divisao por zero

  const barsHtml = wpms.map((w, i) => {
    const heightPct = 20 + Math.round(((w - minWpm) / range) * 75); // 20%–95%
    const isBest = w === maxWpm;
    const isCurrent = i === wpms.length - 1;
    const cls = isCurrent ? 'wpm-mini-bar wpm-bar-current' : (isBest ? 'wpm-mini-bar wpm-bar-best' : 'wpm-mini-bar');
    return `
      <div class="wpm-mini-bar-wrap" title="${w} PPM">
        <div class="${cls}" style="height:${heightPct}%"></div>
        <div class="wpm-mini-bar-label">${w}</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="wpm-mini-chart">
      <div class="wpm-mini-chart-title">Evolucao PPM — ${modName} (ultimas ${wpms.length} leituras)</div>
      <div class="wpm-mini-chart-bars">${barsHtml}</div>
      <div class="wpm-mini-chart-stats">
        <span class="wpm-mini-stat">Atual: <strong>${lastWpm} PPM</strong></span>
        <span class="wpm-mini-stat">Melhor: <strong>${bestWpm} PPM</strong></span>
        <span class="wpm-mini-stat">Media: <strong>${avgWpm} PPM</strong></span>
      </div>
    </div>`;
}

// ── PREVIEW DE VOCABULARIO ──

function renderVocabularyPreview(mod) {
  const container = document.getElementById('texto-vocab-preview');
  if (!container) return;

  if (!mod.vocabulary || mod.vocabulary.length === 0) {
    container.innerHTML = '';
    return;
  }

  const itemsHtml = mod.vocabulary.map(v => `
    <div class="vocab-item">
      <span class="vocab-word">${v.word}</span>
      <span class="vocab-def">${v.definition}</span>
    </div>`).join('');

  container.innerHTML = `
    <div class="vocab-preview" id="vocab-preview-box">
      <button class="vocab-preview-toggle" onclick="toggleVocabPreview()" type="button">
        <span>
          <span class="vocab-preview-label">Preview de vocabulario</span>
          <span class="vocab-preview-count">${mod.vocabulary.length} palavras</span>
        </span>
        <span class="vocab-preview-chevron">&#9660;</span>
      </button>
      <div class="vocab-preview-body">
        <div class="vocab-list">${itemsHtml}</div>
      </div>
    </div>`;
}

function toggleVocabPreview() {
  const box = document.getElementById('vocab-preview-box');
  if (box) box.classList.toggle('open');
}

// ── LEITURA REPETIDA ──

function toggleRepeatedMode() {
  textoRepeatedMode = !textoRepeatedMode;
  const btn = document.getElementById('texto-repeat-toggle');
  if (btn) {
    btn.classList.toggle('active', textoRepeatedMode);
    btn.textContent = textoRepeatedMode ? 'Modo: Leitura Repetida (3x)' : 'Modo: Leitura Unica';
  }
  textoRepeatAttempt = 0;
  textoRepeatResults = [];
  renderRepeatTracker();
  textoTimerCtrl.reset();
  document.getElementById('texto-start-btn').textContent = 'Iniciar leitura';
  document.getElementById('texto-stats').style.display = 'none';
  hideRepeatComparison();
}

function renderRepeatTracker() {
  let tracker = document.getElementById('texto-repeat-tracker');
  if (!tracker) return;

  if (!textoRepeatedMode) {
    tracker.style.display = 'none';
    return;
  }

  tracker.style.display = 'flex';
  for (let i = 0; i < 3; i++) {
    const card = tracker.children[i];
    if (!card) continue;
    const timeEl = card.querySelector('.attempt-time');
    const active = i === textoRepeatAttempt;
    card.classList.toggle('active', active);
    card.classList.toggle('done', i < textoRepeatAttempt);
    if (textoRepeatResults[i]) {
      timeEl.textContent = textoRepeatResults[i].wpm + ' PPM';
    } else {
      timeEl.textContent = '—';
    }
  }
}

function updateRepeatTracker() {
  renderRepeatTracker();
}

function showRepeatComparison() {
  let comp = document.getElementById('texto-repeat-comparison');
  if (!comp) return;

  if (textoRepeatResults.length < 2) { comp.style.display = 'none'; return; }

  const first = textoRepeatResults[0].wpm;
  const last = textoRepeatResults[textoRepeatResults.length - 1].wpm;
  const improvement = Math.round(((last - first) / first) * 100);

  let stars = '';
  if (improvement >= 20) stars = '★★★';
  else if (improvement >= 10) stars = '★★';
  else if (improvement > 0) stars = '★';

  comp.style.display = 'block';
  comp.innerHTML = `
    <div class="repeat-comparison-inner">
      <div class="repeat-stat">
        <span class="repeat-stat-label">1a leitura</span>
        <span class="repeat-stat-value">${first} PPM</span>
      </div>
      <div class="repeat-arrow">→</div>
      <div class="repeat-stat">
        <span class="repeat-stat-label">3a leitura</span>
        <span class="repeat-stat-value">${last} PPM</span>
      </div>
      <div class="repeat-improvement ${improvement > 0 ? 'positive' : 'negative'}">
        ${improvement > 0 ? '+' : ''}${improvement}% ${stars}
      </div>
    </div>
  `;
}

function hideRepeatComparison() {
  const comp = document.getElementById('texto-repeat-comparison');
  if (comp) comp.style.display = 'none';
}

function saveTextoRepeatAttempt() {
  const mod = TEXTO_MODULES[textoModule];
  Storage.push('fluencia_texto', {
    date: new Date().toISOString(),
    module: mod.name,
    mode: 'repetida',
    attempts: textoRepeatResults.map(r => ({ wpm: r.wpm, time: r.time, timeFormatted: formatTime(r.time) })),
    wpm: textoRepeatResults[textoRepeatResults.length - 1].wpm,
    wpmFirst: textoRepeatResults[0].wpm,
    improvement: Math.round(((textoRepeatResults[2].wpm - textoRepeatResults[0].wpm) / textoRepeatResults[0].wpm) * 100),
    words: textoRepeatResults[0].words,
    time: textoRepeatResults.reduce((s, r) => s + r.time, 0),
    timeFormatted: formatTime(textoRepeatResults.reduce((s, r) => s + r.time, 0)),
  });
}

// ── CHECKLIST ──

function renderChecklist() {
  const container = document.getElementById('checklist-items');
  container.innerHTML = '';

  if (typeof CHECKLIST_CATEGORIES !== 'undefined') {
    // Renderizar por categoria
    let globalIdx = 0;
    CHECKLIST_CATEGORIES.forEach(cat => {
      const catDiv = document.createElement('div');
      catDiv.className = 'checklist-category';
      catDiv.innerHTML = `<div class="checklist-category-title">${cat.name}</div>`;

      cat.items.forEach(text => {
        const item = document.createElement('div');
        item.className = 'checklist-item';
        item.innerHTML = `
          <div class="checklist-text">${text}</div>
          <div class="checklist-options">
            ${CHECKLIST_LABELS.map((label, li) => `<div class="checklist-opt" onclick="selectChecklist(this, ${globalIdx}, ${li})" data-idx="${globalIdx}" data-level="${li}">${label}</div>`).join('')}
          </div>
        `;
        catDiv.appendChild(item);
        globalIdx++;
      });

      container.appendChild(catDiv);
    });
  } else {
    // Fallback: lista simples
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
  Storage.push('fluencia_checklist', { date: new Date().toISOString(), results });
  alert('Autoavaliacao salva!');
}
