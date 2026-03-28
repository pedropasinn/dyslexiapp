// prosodia.js — Treino de prosódia: pausas, entonação e pontuação
// Baseado em Shaywitz cap. 18 e 21: precisão + velocidade + PROSÓDIA = fluência

// ─────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────
let prosodiaModule = 0;
let prosodiaTimer = null;
let prosodiaStartTime = null;
let prosodiaElapsed = 0;

// Estado por tipo
// pausas
let pausasSentIdx = 0;
let pausasUserClicks = [];   // array de word-gap indices onde usuário clicou
let pausasVerified = false;

// entonacao
let entonacaoSentIdx = 0;
let entonacaoDone = [];      // set de modes já marcados como lidos

// pontuacao
let pontuacaoTextIdx = 0;
let pontuacaoInserted = [];  // array de { gapIdx, mark } inseridos pelo usuário
let pontuacaoVerified = false;
let pontuacaoSelectedMark = '.';

// score geral da sessão
let prosodiaScore = { correct: 0, total: 0 };

// ─────────────────────────────────────────
// MÓDULO
// ─────────────────────────────────────────
function setProsodiaModule(idx) {
  prosodiaModule = idx;
  pausasSentIdx = 0;
  entonacaoSentIdx = 0;
  pontuacaoTextIdx = 0;
  prosodiaScore = { correct: 0, total: 0 };
  document.querySelectorAll('#prosodia-modules .module-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.index) === idx);
  });
  renderProsodia();
}

function renderProsodia() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  updateProsodiaInfoBox(mod);
  updateProsodiaScore();

  if (mod.type === 'pausas')    renderPausas();
  if (mod.type === 'entonacao') renderEntonacao();
  if (mod.type === 'pontuacao') renderPontuacao();
}

function updateProsodiaInfoBox(mod) {
  const box = document.getElementById('prosodia-info');
  if (!box) return;
  const infos = {
    pausas:    '<strong>Instrução:</strong> Clique nos espaços entre palavras onde você faria uma <strong>pausa natural</strong> ao ler em voz alta. Depois clique em "Verificar".',
    entonacao: '<strong>Instrução:</strong> Leia cada variação da frase em voz alta com a entonação indicada. Clique em "Li em voz alta" ao terminar cada uma.',
    pontuacao: '<strong>Instrução:</strong> Selecione um sinal de pontuação e clique nos espaços onde ele deve ser inserido. Depois clique em "Verificar".',
  };
  box.innerHTML = infos[mod.type] || '';
}

// ─────────────────────────────────────────
// SCORE DISPLAY
// ─────────────────────────────────────────
function updateProsodiaScore() {
  const el = document.getElementById('prosodia-score-display');
  if (!el) return;
  if (prosodiaScore.total === 0) { el.style.display = 'none'; return; }
  el.style.display = '';
  const pct = Math.round(prosodiaScore.correct / prosodiaScore.total * 100);
  el.innerHTML = `<span class="score-num">${prosodiaScore.correct}</span><span class="score-total">/ ${prosodiaScore.total}</span> <span class="prosodia-pct">(${pct}%)</span>`;
}

// ─────────────────────────────────────────
// TIMER (usado na entonação)
// ─────────────────────────────────────────
function startProsodiaTimer() {
  if (prosodiaTimer) return;
  prosodiaStartTime = Date.now() - prosodiaElapsed;
  prosodiaTimer = setInterval(() => {
    prosodiaElapsed = Date.now() - prosodiaStartTime;
    const el = document.getElementById('prosodia-timer');
    if (el) el.textContent = _formatProsodiaTime(prosodiaElapsed);
  }, 100);
}

function stopProsodiaTimer() {
  clearInterval(prosodiaTimer);
  prosodiaTimer = null;
}

function resetProsodiaTimer() {
  stopProsodiaTimer();
  prosodiaElapsed = 0;
  const el = document.getElementById('prosodia-timer');
  if (el) el.textContent = '00:00.0';
}

function _formatProsodiaTime(ms) {
  const s = ms / 1000;
  const m = Math.floor(s / 60);
  const sec = (s % 60).toFixed(1);
  return String(m).padStart(2, '0') + ':' + String(sec).padStart(4, '0');
}

// ─────────────────────────────────────────
// PAUSAS
// ─────────────────────────────────────────
function renderPausas() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const sent = mod.sentences[pausasSentIdx];

  pausasUserClicks = [];
  pausasVerified = false;

  const area = document.getElementById('prosodia-area');

  // Progress indicator
  const total = mod.sentences.length;
  const progressHtml = `<div class="prosodia-progress">${pausasSentIdx + 1} / ${total}</div>`;

  // Build clickable word-gap text
  const words = sent.text.split(' ');
  let textHtml = '<div class="pause-text" id="pause-text-area">';
  words.forEach((word, i) => {
    textHtml += `<span class="pause-word">${word}</span>`;
    if (i < words.length - 1) {
      // gap between words (index = i, meaning "after word i")
      textHtml += `<span class="pause-gap" data-gap="${i}" onclick="togglePauseGap(this, ${i})">&nbsp;</span>`;
    }
  });
  textHtml += '</div>';

  // Punctuated reference (hidden until verify)
  const referenceHtml = `<div class="pause-reference hidden" id="pause-reference">
    <div class="pause-reference-label">Leitura com pontuação sugerida:</div>
    <div class="pause-reference-text">${sent.punctuated}</div>
  </div>`;

  area.innerHTML = progressHtml + textHtml + referenceHtml;

  // Controls
  document.getElementById('prosodia-verify-btn').style.display = 'inline-flex';
  document.getElementById('prosodia-next-btn').style.display = 'none';
  document.getElementById('prosodia-verify-btn').onclick = checkPausas;
}

function togglePauseGap(el, gapIdx) {
  if (pausasVerified) return;
  const alreadyIdx = pausasUserClicks.indexOf(gapIdx);
  if (alreadyIdx !== -1) {
    pausasUserClicks.splice(alreadyIdx, 1);
    el.classList.remove('pause-marker');
    el.innerHTML = '&nbsp;';
  } else {
    pausasUserClicks.push(gapIdx);
    el.classList.add('pause-marker');
    el.innerHTML = '<span class="pause-bar">|</span>';
  }
}

function checkPausas() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const sent = mod.sentences[pausasSentIdx];
  pausasVerified = true;

  // Build set of correct gap indices from character positions
  // We need to map char positions to word-gap indices
  const words = sent.text.split(' ');
  const correctGapIndices = _charPosToGapIndices(sent.text, sent.pauses, words);

  // Score: for each correct gap user clicked + for each user click that's correct
  let sessionCorrect = 0;
  let sessionTotal = correctGapIndices.length;

  // Mark all gaps with feedback
  document.querySelectorAll('#pause-text-area .pause-gap').forEach(el => {
    const gapIdx = parseInt(el.dataset.gap);
    const userMarked = pausasUserClicks.includes(gapIdx);
    const isCorrect = correctGapIndices.includes(gapIdx);

    el.classList.remove('pause-marker');
    el.innerHTML = '';

    if (userMarked && isCorrect) {
      el.classList.add('pause-marker', 'correct');
      el.innerHTML = '<span class="pause-bar">|</span>';
      sessionCorrect++;
    } else if (userMarked && !isCorrect) {
      el.classList.add('pause-marker', 'wrong');
      el.innerHTML = '<span class="pause-bar">|</span>';
    } else if (!userMarked && isCorrect) {
      el.classList.add('pause-marker', 'missed');
      el.innerHTML = '<span class="pause-bar">|</span>';
    } else {
      el.innerHTML = '&nbsp;';
    }
  });

  // Show reference
  document.getElementById('pause-reference').classList.remove('hidden');

  // Update session score
  prosodiaScore.correct += sessionCorrect;
  prosodiaScore.total += sessionTotal;
  updateProsodiaScore();

  // Feedback message
  const pct = sessionTotal > 0 ? Math.round(sessionCorrect / sessionTotal * 100) : 0;
  _showProsodiaFeedback(pct);

  // Switch buttons
  document.getElementById('prosodia-verify-btn').style.display = 'none';
  const nextBtn = document.getElementById('prosodia-next-btn');
  nextBtn.style.display = 'inline-flex';
  const hasMore = pausasSentIdx < mod.sentences.length - 1;
  nextBtn.textContent = hasMore ? 'Próxima →' : 'Finalizar';
  nextBtn.onclick = hasMore ? nextPausas : finishProsodia;
}

function _charPosToGapIndices(text, pauseCharPositions, words) {
  // Build cumulative char lengths per word gap
  // gapIndex i = space after words[i]
  const cumLengths = [];
  let cum = 0;
  words.forEach((w, i) => {
    cum += w.length;
    if (i < words.length - 1) {
      cumLengths.push(cum); // position of the space after word i
      cum += 1; // for the space itself
    }
  });

  const TOLERANCE = 4;
  return pauseCharPositions.map(pos => {
    // find which gap is closest to this position
    let bestIdx = 0;
    let bestDist = Infinity;
    cumLengths.forEach((cl, gi) => {
      const dist = Math.abs(cl - pos);
      if (dist < bestDist) { bestDist = dist; bestIdx = gi; }
    });
    return bestDist <= (TOLERANCE + 2) ? bestIdx : bestIdx; // always map to nearest gap
  }).filter((v, i, arr) => arr.indexOf(v) === i); // deduplicate
}

function nextPausas() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  if (pausasSentIdx < mod.sentences.length - 1) {
    pausasSentIdx++;
    renderPausas();
    _clearFeedback();
  }
}

// ─────────────────────────────────────────
// ENTONAÇÃO
// ─────────────────────────────────────────
function renderEntonacao() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const sent = mod.sentences[entonacaoSentIdx];

  entonacaoDone = [];

  const area = document.getElementById('prosodia-area');
  const total = mod.sentences.length;

  const modeColors = {
    declarativa: 'entonacao-declarativa',
    interrogativa: 'entonacao-interrogativa',
    exclamativa: 'entonacao-exclamativa',
  };
  const modeLabels = {
    declarativa: 'Declarativa',
    interrogativa: 'Interrogativa',
    exclamativa: 'Exclamativa',
  };

  let html = `<div class="prosodia-progress">${entonacaoSentIdx + 1} / ${total}</div>`;
  html += `<div class="entonacao-base">Frase-base: <em>${sent.base}</em></div>`;
  html += `<div class="entonacao-cards" id="entonacao-cards">`;

  sent.variations.forEach((v, vi) => {
    const colorClass = modeColors[v.mode] || '';
    html += `<div class="entonacao-card ${colorClass}" id="entonacao-card-${vi}">
      <div class="entonacao-mode-badge">${modeLabels[v.mode] || v.mode}</div>
      <div class="entonacao-text">${v.text}</div>
      <div class="entonacao-hint">${v.hint}</div>
      <button class="btn btn-sm entonacao-read-btn" id="entonacao-btn-${vi}" onclick="markEntonacaoDone(${vi})">
        Li em voz alta
      </button>
    </div>`;
  });

  html += `</div>`;
  html += `<div class="entonacao-progress-dots" id="entonacao-dots">`;
  sent.variations.forEach((_, vi) => {
    html += `<span class="entonacao-dot" id="entonacao-dot-${vi}"></span>`;
  });
  html += `</div>`;

  area.innerHTML = html;

  // Hide verify; show after all done
  document.getElementById('prosodia-verify-btn').style.display = 'none';
  document.getElementById('prosodia-next-btn').style.display = 'none';

  // Start timer on first render
  startProsodiaTimer();
}

function markEntonacaoDone(vi) {
  if (entonacaoDone.includes(vi)) return;
  entonacaoDone.push(vi);

  const card = document.getElementById(`entonacao-card-${vi}`);
  const btn = document.getElementById(`entonacao-btn-${vi}`);
  const dot = document.getElementById(`entonacao-dot-${vi}`);

  if (card) card.classList.add('entonacao-done');
  if (btn) { btn.textContent = '✓ Lida'; btn.disabled = true; }
  if (dot) dot.classList.add('active');

  const mod = PROSODIA_MODULES[prosodiaModule];
  const sent = mod.sentences[entonacaoSentIdx];

  if (entonacaoDone.length >= sent.variations.length) {
    // All variations done
    stopProsodiaTimer();
    prosodiaScore.correct += sent.variations.length;
    prosodiaScore.total += sent.variations.length;
    updateProsodiaScore();
    _showProsodiaFeedback(100);

    const nextBtn = document.getElementById('prosodia-next-btn');
    nextBtn.style.display = 'inline-flex';
    const hasMore = entonacaoSentIdx < mod.sentences.length - 1;
    nextBtn.textContent = hasMore ? 'Próxima →' : 'Finalizar';
    nextBtn.onclick = hasMore ? nextEntonacao : finishProsodia;
  }
}

function nextEntonacao() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  if (entonacaoSentIdx < mod.sentences.length - 1) {
    entonacaoSentIdx++;
    resetProsodiaTimer();
    renderEntonacao();
    _clearFeedback();
  }
}

// ─────────────────────────────────────────
// PONTUAÇÃO
// ─────────────────────────────────────────
function renderPontuacao() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const text = mod.texts[pontuacaoTextIdx];

  pontuacaoInserted = [];
  pontuacaoVerified = false;
  pontuacaoSelectedMark = '.';

  const area = document.getElementById('prosodia-area');
  const total = mod.texts.length;

  // Build words array with clickable gaps
  const words = text.stripped.split(' ');

  let textHtml = '<div class="punct-text" id="punct-text-area">';
  words.forEach((word, i) => {
    textHtml += `<span class="punct-word">${word}</span>`;
    if (i < words.length - 1) {
      textHtml += `<span class="punct-gap" data-gap="${i}" onclick="togglePunctGap(this, ${i})"><span class="punct-gap-inner">·</span></span>`;
    }
  });
  textHtml += '</div>';

  // Punctuation buttons
  const marks = ['.', ',', ';', ':', '!', '?', '—'];
  let btnsHtml = '<div class="punct-buttons">';
  marks.forEach(m => {
    btnsHtml += `<button class="punct-mark-btn${m === '.' ? ' active' : ''}" data-mark="${m}" onclick="selectPunctMark(this, '${m}')">${m}</button>`;
  });
  btnsHtml += '</div>';

  // Reference (hidden)
  const refHtml = `<div class="pause-reference hidden" id="punct-reference">
    <div class="pause-reference-label">Pontuação correta sugerida:</div>
    <div class="pause-reference-text">${text.correct}</div>
  </div>`;

  const progressHtml = `<div class="prosodia-progress">${pontuacaoTextIdx + 1} / ${total}</div>`;

  area.innerHTML = progressHtml + btnsHtml + textHtml + refHtml;

  document.getElementById('prosodia-verify-btn').style.display = 'inline-flex';
  document.getElementById('prosodia-next-btn').style.display = 'none';
  document.getElementById('prosodia-verify-btn').onclick = checkPontuacao;
}

function selectPunctMark(btn, mark) {
  pontuacaoSelectedMark = mark;
  document.querySelectorAll('.punct-mark-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function togglePunctGap(el, gapIdx) {
  if (pontuacaoVerified) return;

  const existing = pontuacaoInserted.find(p => p.gapIdx === gapIdx);

  if (existing) {
    if (existing.mark === pontuacaoSelectedMark) {
      // Remove
      pontuacaoInserted = pontuacaoInserted.filter(p => p.gapIdx !== gapIdx);
      el.classList.remove('punct-has-mark');
      el.querySelector('.punct-gap-inner').textContent = '·';
      el.dataset.inserted = '';
    } else {
      // Replace with new mark
      existing.mark = pontuacaoSelectedMark;
      el.querySelector('.punct-gap-inner').textContent = pontuacaoSelectedMark;
      el.dataset.inserted = pontuacaoSelectedMark;
    }
  } else {
    pontuacaoInserted.push({ gapIdx, mark: pontuacaoSelectedMark });
    el.classList.add('punct-has-mark');
    el.querySelector('.punct-gap-inner').textContent = pontuacaoSelectedMark;
    el.dataset.inserted = pontuacaoSelectedMark;
  }
}

function checkPontuacao() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const text = mod.texts[pontuacaoTextIdx];
  pontuacaoVerified = true;

  // Build correct gaps from correct text vs stripped text
  const correctGaps = _extractCorrectPunctGaps(text.stripped, text.correct);

  let sessionCorrect = 0;
  const sessionTotal = correctGaps.length;

  document.querySelectorAll('#punct-text-area .punct-gap').forEach(el => {
    const gapIdx = parseInt(el.dataset.gap);
    const userEntry = pontuacaoInserted.find(p => p.gapIdx === gapIdx);
    const correctEntry = correctGaps.find(g => g.gapIdx === gapIdx);

    const inner = el.querySelector('.punct-gap-inner');

    if (userEntry && correctEntry) {
      if (userEntry.mark === correctEntry.mark) {
        el.classList.add('punct-correct');
        inner.textContent = userEntry.mark;
        sessionCorrect++;
      } else {
        el.classList.add('punct-wrong');
        inner.textContent = userEntry.mark + ' ✗';
      }
    } else if (!userEntry && correctEntry) {
      el.classList.add('punct-missed');
      inner.textContent = correctEntry.mark;
    } else if (userEntry && !correctEntry) {
      el.classList.add('punct-wrong');
      inner.textContent = userEntry.mark + ' ✗';
    } else {
      inner.textContent = '';
    }
  });

  // Show reference
  const refEl = document.getElementById('punct-reference');
  if (refEl) refEl.classList.remove('hidden');

  prosodiaScore.correct += sessionCorrect;
  prosodiaScore.total += sessionTotal;
  updateProsodiaScore();

  const pct = sessionTotal > 0 ? Math.round(sessionCorrect / sessionTotal * 100) : 0;
  _showProsodiaFeedback(pct);

  document.getElementById('prosodia-verify-btn').style.display = 'none';
  const nextBtn = document.getElementById('prosodia-next-btn');
  nextBtn.style.display = 'inline-flex';
  const hasMore = pontuacaoTextIdx < mod.texts.length - 1;
  nextBtn.textContent = hasMore ? 'Próximo →' : 'Finalizar';
  nextBtn.onclick = hasMore ? nextPontuacao : finishProsodia;
}

function _extractCorrectPunctGaps(stripped, correct) {
  // Compare words in stripped and correct to find where punctuation was added
  // Strategy: tokenize correct into words+marks, then map marks to gap positions in stripped
  const strippedWords = stripped.split(' ');
  const gaps = [];

  // Simple heuristic: look for punctuation characters after words in the correct string
  // by splitting correct on whitespace and tracking attached punctuation
  const correctTokens = correct.split(/\s+/);
  let wordIdx = 0;
  const PUNCT_RE = /[.,;:!?—"]+$/;

  correctTokens.forEach((token, ti) => {
    // Strip leading punctuation/quotes
    const cleaned = token.replace(/^["«]/, '');
    const match = cleaned.match(PUNCT_RE);
    if (match && wordIdx < strippedWords.length - 1) {
      const marks = match[0].replace(/['"»]/g, '').split('');
      // Take the primary punctuation mark (last meaningful one before space)
      const primaryMark = marks.find(m => '.,;:!?—'.includes(m));
      if (primaryMark) {
        gaps.push({ gapIdx: wordIdx, mark: primaryMark });
      }
    }
    // Advance stripped word pointer
    const bareToken = cleaned.replace(PUNCT_RE, '').replace(/^["«»]/g, '');
    if (bareToken && wordIdx < strippedWords.length) {
      wordIdx++;
    }
  });

  return gaps;
}

function nextPontuacao() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  if (pontuacaoTextIdx < mod.texts.length - 1) {
    pontuacaoTextIdx++;
    renderPontuacao();
    _clearFeedback();
  }
}

// ─────────────────────────────────────────
// FEEDBACK
// ─────────────────────────────────────────
function _showProsodiaFeedback(pct) {
  const el = document.getElementById('prosodia-feedback');
  if (!el) return;
  let msg = '', cls = '';
  if (pct >= 80) {
    msg = `Excelente! ${pct}% de acertos.`;
    cls = 'feedback-correct';
  } else if (pct >= 50) {
    msg = `Bom! ${pct}% de acertos. Continue praticando.`;
    cls = 'feedback-partial';
  } else {
    msg = `${pct}% de acertos. Leia a versão corrigida em voz alta.`;
    cls = 'feedback-wrong';
  }
  el.textContent = msg;
  el.className = 'prosodia-feedback ' + cls;
  el.style.display = 'block';
}

function _clearFeedback() {
  const el = document.getElementById('prosodia-feedback');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

// ─────────────────────────────────────────
// FINALIZAR
// ─────────────────────────────────────────
function finishProsodia() {
  stopProsodiaTimer();
  saveProsodiaAttempt();

  const mod = PROSODIA_MODULES[prosodiaModule];
  const pct = prosodiaScore.total > 0
    ? Math.round(prosodiaScore.correct / prosodiaScore.total * 100)
    : 0;

  const area = document.getElementById('prosodia-area');
  area.innerHTML = `<div class="prosodia-finish">
    <div class="prosodia-finish-icon">✦</div>
    <h3>Módulo concluído!</h3>
    <p><strong>${mod.name}</strong></p>
    <div class="prosodia-finish-score">${prosodiaScore.correct} / ${prosodiaScore.total} <span class="prosodia-pct">(${pct}%)</span></div>
    <p class="prosodia-finish-msg">${_finishMessage(pct)}</p>
    <button class="btn btn-primary" onclick="setProsodiaModule(prosodiaModule)">Repetir módulo</button>
  </div>`;

  document.getElementById('prosodia-verify-btn').style.display = 'none';
  document.getElementById('prosodia-next-btn').style.display = 'none';
  updateProsodiaScore();
}

function _finishMessage(pct) {
  if (pct >= 90) return 'Excelente prosódia! Você demonstra sensibilidade às estruturas rítmicas do texto.';
  if (pct >= 70) return 'Bom desempenho. A prática regular tornará sua leitura cada vez mais expressiva.';
  if (pct >= 50) return 'Você está no caminho certo. Releia os textos com atenção às pausas e entonação.';
  return 'Continue praticando. Ouvir leituras em voz alta ajuda a internalizar os padrões prosódicos.';
}

function saveProsodiaAttempt() {
  const mod = PROSODIA_MODULES[prosodiaModule];
  const pct = prosodiaScore.total > 0
    ? Math.round(prosodiaScore.correct / prosodiaScore.total * 100)
    : 0;

  const entry = {
    date: new Date().toISOString(),
    module: mod.name,
    type: mod.type,
    correct: prosodiaScore.correct,
    total: prosodiaScore.total,
    pct,
    timeMs: prosodiaElapsed,
    timeFormatted: _formatProsodiaTime(prosodiaElapsed),
  };
  Storage.push('fluencia_prosodia', entry);
}
