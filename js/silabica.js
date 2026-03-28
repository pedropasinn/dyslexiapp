// silabica.js — Consciência Silábica
// Baseado em Goldsworthy Sourcebook Vol. III — intervenções ao nível silábico
// Sub-exercícios: contagem, segmentação, deleção, substituição

// ─────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────
let silabicaModule = 0;
let silabicaItemIdx = 0;
let silabicaScore = { correct: 0, total: 0 };
let silabicaAnswered = false;  // impede dupla resposta no item atual

// ─────────────────────────────────────────
// MÓDULO
// ─────────────────────────────────────────
function setSilabicaModule(idx) {
  silabicaModule = idx;
  silabicaItemIdx = 0;
  silabicaScore = { correct: 0, total: 0 };
  silabicaAnswered = false;
  document.querySelectorAll('#silabica-modules .module-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.index) === idx);
  });
  renderSilabica();
}

// ─────────────────────────────────────────
// RENDER PRINCIPAL (despacha por tipo)
// ─────────────────────────────────────────
function renderSilabica() {
  const mod = SILABICA_MODULES[silabicaModule];
  silabicaAnswered = false;

  _updateSilabicaInfoBox(mod);
  _updateSilabicaScoreDisplay();

  const items = mod.words || mod.items;
  const total = items.length;
  const progEl = document.getElementById('silabica-progress');
  if (progEl) progEl.textContent = `${silabicaItemIdx + 1} / ${total}`;

  if (mod.type === 'contagem')     _renderContagem(mod);
  if (mod.type === 'segmentacao')  _renderSegmentacao(mod);
  if (mod.type === 'delecao')      _renderDelecao(mod);
  if (mod.type === 'substituicao') _renderSubstituicao(mod);

  // Botões de controle
  const verBtn = document.getElementById('silabica-verify-btn');
  const nxtBtn = document.getElementById('silabica-next-btn');
  if (verBtn) verBtn.style.display = mod.type === 'contagem' ? 'none' : '';
  if (nxtBtn) nxtBtn.style.display = 'none';
}

// ─────────────────────────────────────────
// INFO BOX POR TIPO
// ─────────────────────────────────────────
function _updateSilabicaInfoBox(mod) {
  const box = document.getElementById('silabica-info');
  if (!box) return;
  const infos = {
    contagem:     '<strong>Instrução:</strong> Clique no número que corresponde à quantidade de sílabas da palavra exibida.',
    segmentacao:  '<strong>Instrução:</strong> Digite as sílabas da palavra separadas por hífen. Ex.: <em>fi-lo-so-fi-a</em>',
    delecao:      '<strong>Instrução:</strong> A sílaba destacada será removida. Digite o que sobra da palavra.',
    substituicao: '<strong>Instrução:</strong> Substitua a sílaba indicada pela nova sílaba e escreva a palavra resultante.',
  };
  box.innerHTML = infos[mod.type] || '';
}

// ─────────────────────────────────────────
// SCORE DISPLAY
// ─────────────────────────────────────────
function _updateSilabicaScoreDisplay() {
  const el = document.getElementById('silabica-score-display');
  if (!el) return;
  if (silabicaScore.total === 0) { el.style.display = 'none'; return; }
  el.style.display = '';
  const pct = Math.round(silabicaScore.correct / silabicaScore.total * 100);
  el.innerHTML = `<span class="score-num">${silabicaScore.correct}</span><span class="score-total"> / ${silabicaScore.total}</span> <span class="sil-pct">(${pct}%)</span>`;
}

// ─────────────────────────────────────────
// CONTAGEM
// ─────────────────────────────────────────
function _renderContagem(mod) {
  const item = mod.words[silabicaItemIdx];
  const area = document.getElementById('silabica-word-area');
  const answerArea = document.getElementById('silabica-answer-area');
  if (!area || !answerArea) return;

  area.innerHTML = `<div class="sil-word-display">${item.word}</div>`;

  // Botões 1–10
  let btns = '<div class="sil-count-buttons">';
  for (let i = 1; i <= 10; i++) {
    btns += `<button class="sil-count-btn" data-num="${i}" onclick="checkContagem(${i})">${i}</button>`;
  }
  btns += '</div>';
  btns += '<div class="sil-syllable-breakdown" id="sil-breakdown" style="display:none"></div>';
  answerArea.innerHTML = btns;
}

function checkContagem(chosen) {
  if (silabicaAnswered) return;
  silabicaAnswered = true;

  const mod = SILABICA_MODULES[silabicaModule];
  const item = mod.words[silabicaItemIdx];
  const correct = item.count;
  const isRight = chosen === correct;

  silabicaScore.total++;
  if (isRight) silabicaScore.correct++;
  _updateSilabicaScoreDisplay();

  // Highlight buttons
  document.querySelectorAll('.sil-count-btn').forEach(b => {
    const n = parseInt(b.dataset.num);
    if (n === correct) b.classList.add('correct');
    else if (n === chosen && !isRight) b.classList.add('wrong');
    b.disabled = true;
  });

  // Mostrar divisão silábica
  const breakdown = document.getElementById('sil-breakdown');
  if (breakdown) {
    breakdown.style.display = 'flex';
    breakdown.innerHTML = item.syllables.map((s, i) =>
      `<span class="sil-syllable">${s}</span>${i < item.syllables.length - 1 ? '<span class="sil-sep">·</span>' : ''}`
    ).join('');
  }

  // Mostrar feedback e botão próximo
  _showSilabicaFeedback(isRight, isRight ? 'Correto!' : `Errado — eram ${correct} sílabas.`);
  _showNextOrFinish(mod);
}

// ─────────────────────────────────────────
// SEGMENTAÇÃO
// ─────────────────────────────────────────
function _renderSegmentacao(mod) {
  const item = mod.words[silabicaItemIdx];
  const area = document.getElementById('silabica-word-area');
  const answerArea = document.getElementById('silabica-answer-area');
  if (!area || !answerArea) return;

  area.innerHTML = `<div class="sil-word-display">${item.word}</div>`;
  answerArea.innerHTML = `
    <input class="sil-input" id="sil-seg-input" type="text"
      placeholder="ex.: trans-cen-den-tal"
      autocomplete="off" autocorrect="off" spellcheck="false"
      onkeydown="if(event.key==='Enter') checkSilabica()">
    <div class="sil-syllable-breakdown" id="sil-breakdown" style="display:none"></div>
  `;
  setTimeout(() => {
    const inp = document.getElementById('sil-seg-input');
    if (inp) inp.focus();
  }, 50);
}

// ─────────────────────────────────────────
// DELEÇÃO
// ─────────────────────────────────────────
function _renderDelecao(mod) {
  const item = mod.items[silabicaItemIdx];
  const area = document.getElementById('silabica-word-area');
  const answerArea = document.getElementById('silabica-answer-area');
  if (!area || !answerArea) return;

  // Palavra com sílaba a remover destacada
  const wordHtml = _buildDelecaoWordHtml(item);
  area.innerHTML = `
    <div class="sil-word-display sil-word-delecao">${wordHtml}</div>
    <div class="sil-del-label">Retire a sílaba destacada: o que fica?</div>
  `;

  answerArea.innerHTML = `
    <input class="sil-input" id="sil-del-input" type="text"
      placeholder="Digite o que sobra..."
      autocomplete="off" autocorrect="off" spellcheck="false"
      onkeydown="if(event.key==='Enter') checkSilabica()">
    <div class="sil-syllable-breakdown" id="sil-breakdown" style="display:none"></div>
  `;
  setTimeout(() => {
    const inp = document.getElementById('sil-del-input');
    if (inp) inp.focus();
  }, 50);
}

function _buildDelecaoWordHtml(item) {
  const w = item.word;
  const rm = item.remove;
  if (item.position === 'inicio') {
    return `<span class="sil-target">${rm}</span>${w.slice(rm.length)}`;
  } else {
    return `${w.slice(0, w.length - rm.length)}<span class="sil-target">${rm}</span>`;
  }
}

// ─────────────────────────────────────────
// SUBSTITUIÇÃO
// ─────────────────────────────────────────
function _renderSubstituicao(mod) {
  const item = mod.items[silabicaItemIdx];
  const area = document.getElementById('silabica-word-area');
  const answerArea = document.getElementById('silabica-answer-area');
  if (!area || !answerArea) return;

  area.innerHTML = `
    <div class="sil-word-display">${item.word}</div>
    <div class="sil-subst-instruction">
      Troque <span class="sil-target">${item.target}</span>
      <span class="sil-arrow">→</span>
      <span class="sil-replacement">${item.replacement}</span>
    </div>
  `;

  answerArea.innerHTML = `
    <input class="sil-input" id="sil-sub-input" type="text"
      placeholder="Digite a palavra resultante..."
      autocomplete="off" autocorrect="off" spellcheck="false"
      onkeydown="if(event.key==='Enter') checkSilabica()">
    <div class="sil-syllable-breakdown" id="sil-breakdown" style="display:none"></div>
  `;
  setTimeout(() => {
    const inp = document.getElementById('sil-sub-input');
    if (inp) inp.focus();
  }, 50);
}

// ─────────────────────────────────────────
// VERIFICAR (segmentação, deleção, substituição)
// ─────────────────────────────────────────
function checkSilabica() {
  if (silabicaAnswered) return;

  const mod = SILABICA_MODULES[silabicaModule];

  if (mod.type === 'segmentacao') _checkSegmentacao(mod);
  if (mod.type === 'delecao')     _checkDelecao(mod);
  if (mod.type === 'substituicao')_checkSubstituicao(mod);
}

function _normalize(str) {
  return str.trim().toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[·—–\s]/g, '-');
}

function _checkSegmentacao(mod) {
  silabicaAnswered = true;
  const item = mod.words[silabicaItemIdx];
  const inp = document.getElementById('sil-seg-input');
  if (!inp) return;

  const userRaw = inp.value.trim();
  const userParts = userRaw.split('-').map(s => s.trim().toLowerCase()).filter(Boolean);
  const correctParts = item.syllables.map(s => s.toLowerCase());

  const isRight = JSON.stringify(userParts) === JSON.stringify(correctParts);
  silabicaScore.total++;
  if (isRight) silabicaScore.correct++;
  _updateSilabicaScoreDisplay();

  // Mostrar divisão com cores
  const breakdown = document.getElementById('sil-breakdown');
  if (breakdown) {
    breakdown.style.display = 'flex';
    breakdown.innerHTML = correctParts.map((syl, i) => {
      const userSyl = userParts[i] || '';
      const cls = userSyl === syl ? 'sil-syllable correct' : 'sil-syllable wrong';
      return `<span class="${cls}">${syl}</span>${i < correctParts.length - 1 ? '<span class="sil-sep">·</span>' : ''}`;
    }).join('');
  }

  inp.disabled = true;
  _showSilabicaFeedback(isRight, isRight ? 'Correto!' : `Resposta correta: ${item.syllables.join('-')}`);
  _showNextOrFinish(mod);
}

function _checkDelecao(mod) {
  silabicaAnswered = true;
  const item = mod.items[silabicaItemIdx];
  const inp = document.getElementById('sil-del-input');
  if (!inp) return;

  const userVal = _normalize(inp.value);
  const correctVal = _normalize(item.answer);
  const isRight = userVal === correctVal;

  silabicaScore.total++;
  if (isRight) silabicaScore.correct++;
  _updateSilabicaScoreDisplay();

  const breakdown = document.getElementById('sil-breakdown');
  if (breakdown) {
    breakdown.style.display = 'flex';
    breakdown.innerHTML = `<span class="sil-syllable ${isRight ? 'correct' : 'wrong'}">${item.answer}</span>`;
  }

  inp.disabled = true;
  _showSilabicaFeedback(isRight, isRight ? 'Correto!' : `Resposta correta: <strong>${item.answer}</strong>`);
  _showNextOrFinish(mod);
}

function _checkSubstituicao(mod) {
  silabicaAnswered = true;
  const item = mod.items[silabicaItemIdx];
  const inp = document.getElementById('sil-sub-input');
  if (!inp) return;

  const userVal = _normalize(inp.value);
  const correctVal = _normalize(item.answer);
  const isRight = userVal === correctVal;

  silabicaScore.total++;
  if (isRight) silabicaScore.correct++;
  _updateSilabicaScoreDisplay();

  const breakdown = document.getElementById('sil-breakdown');
  if (breakdown) {
    breakdown.style.display = 'flex';
    breakdown.innerHTML = `<span class="sil-syllable ${isRight ? 'correct' : 'wrong'}">${item.answer}</span>`;
  }

  inp.disabled = true;
  _showSilabicaFeedback(isRight, isRight ? 'Correto!' : `Resposta correta: <strong>${item.answer}</strong>`);
  _showNextOrFinish(mod);
}

// ─────────────────────────────────────────
// FEEDBACK
// ─────────────────────────────────────────
function _showSilabicaFeedback(isRight, msg) {
  const fb = document.getElementById('silabica-feedback');
  if (!fb) return;
  fb.style.display = '';
  fb.className = 'sil-feedback ' + (isRight ? 'sil-feedback-correct' : 'sil-feedback-wrong');
  fb.innerHTML = msg;
}

function _clearSilabicaFeedback() {
  const fb = document.getElementById('silabica-feedback');
  if (fb) { fb.style.display = 'none'; fb.innerHTML = ''; }
}

// ─────────────────────────────────────────
// PRÓXIMO / FINALIZAR
// ─────────────────────────────────────────
function _showNextOrFinish(mod) {
  const items = mod.words || mod.items;
  const isLast = silabicaItemIdx >= items.length - 1;

  const verBtn = document.getElementById('silabica-verify-btn');
  const nxtBtn = document.getElementById('silabica-next-btn');
  if (verBtn) verBtn.style.display = 'none';
  if (nxtBtn) {
    nxtBtn.style.display = '';
    nxtBtn.textContent = isLast ? 'Ver resultado' : 'Próxima →';
  }
}

function nextSilabica() {
  const mod = SILABICA_MODULES[silabicaModule];
  const items = mod.words || mod.items;

  if (silabicaItemIdx >= items.length - 1) {
    finishSilabica();
    return;
  }

  silabicaItemIdx++;
  _clearSilabicaFeedback();
  renderSilabica();
}

// ─────────────────────────────────────────
// RESULTADO FINAL
// ─────────────────────────────────────────
function finishSilabica() {
  const mod = SILABICA_MODULES[silabicaModule];
  const pct = silabicaScore.total
    ? Math.round(silabicaScore.correct / silabicaScore.total * 100)
    : 0;

  saveSilabicaAttempt(pct);

  const area = document.getElementById('silabica-word-area');
  const answerArea = document.getElementById('silabica-answer-area');
  const controls = document.getElementById('silabica-controls');
  const info = document.getElementById('silabica-info');
  const prog = document.getElementById('silabica-progress');

  if (info) info.style.display = 'none';
  if (prog) prog.style.display = 'none';

  const emoji = pct >= 80 ? '🎯' : pct >= 60 ? '👍' : '📚';
  const msg = pct >= 80 ? 'Excelente domínio silábico!'
            : pct >= 60 ? 'Bom progresso — continue praticando.'
            : 'Continue treinando — a consciência silábica se constrói com prática.';

  if (area) area.innerHTML = `
    <div class="sil-result">
      <div class="sil-result-icon">${emoji}</div>
      <div class="sil-result-score">${silabicaScore.correct} / ${silabicaScore.total}</div>
      <div class="sil-result-pct">${pct}%</div>
      <div class="sil-result-msg">${msg}</div>
    </div>
  `;
  if (answerArea) answerArea.innerHTML = '';
  if (controls) controls.innerHTML = `
    <button class="btn btn-primary" onclick="setSilabicaModule(${silabicaModule})">Repetir módulo</button>
    <button class="btn btn-outline" onclick="showSection('home')">Início</button>
  `;
  _clearSilabicaFeedback();
}

// ─────────────────────────────────────────
// SALVAR
// ─────────────────────────────────────────
function saveSilabicaAttempt(pct) {
  const mod = SILABICA_MODULES[silabicaModule];
  const entry = {
    date:    new Date().toISOString(),
    module:  mod.name,
    type:    mod.type,
    correct: silabicaScore.correct,
    total:   silabicaScore.total,
    pct:     pct != null ? pct : (silabicaScore.total ? Math.round(silabicaScore.correct / silabicaScore.total * 100) : 0),
  };
  const history = Storage.get('fluencia_silabica');
  history.push(entry);
  Storage.set('fluencia_silabica', history);
}
