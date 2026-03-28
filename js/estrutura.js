// estrutura.js — Estrutura Textual: Identificar, Organizador Gráfico, Resumo
// Baseado em Shaywitz cap. 19 — estruturas de textos informativos/expositivos

// ─────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────
let estruturaModule   = 0;
let estruturaItemIdx  = 0;
let estruturaScore    = 0;
let estruturaAnswered = false; // item atual já respondido?

// Estado do organizador
let orgSelectedEl   = null;   // elemento chip selecionado
let orgSlotValues   = [];     // string preenchida em cada slot (ou null)
let orgElements     = [];     // lista de { text, used }

// ─────────────────────────────────────────
// SETTERS
// ─────────────────────────────────────────
function setEstruturaModule(idx) {
  estruturaModule  = idx;
  estruturaItemIdx = 0;
  estruturaScore   = 0;
  estruturaAnswered = false;
  document.querySelectorAll('#estrutura-modules .module-btn').forEach(b =>
    b.classList.toggle('active', parseInt(b.dataset.index) === idx)
  );
  renderEstrutura();
}

// ─────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────
function renderEstrutura() {
  const mod = ESTRUTURA_MODULES[estruturaModule];
  estruturaItemIdx = 0;
  estruturaScore   = 0;
  estruturaAnswered = false;

  _updateEstruturaInfoBox(mod);
  _renderEstruturaItem();
}

function _updateEstruturaInfoBox(mod) {
  const box = document.getElementById('estrutura-info');
  if (!box) return;
  const descriptions = {
    identificar: 'Leia o parágrafo e identifique qual estrutura o autor usou para organizar as informações.',
    organizador: 'Leia o texto e arranje os elementos nos espaços corretos do organizador gráfico.',
    resumo: 'Leia o texto e escreva um resumo em uma única frase. Depois compare com o modelo.'
  };
  const typeLabel = {
    identificar: 'Identificar Estrutura',
    organizador: 'Organizador Gráfico',
    resumo: 'Resumo em Uma Frase'
  };
  box.innerHTML = `<strong>${typeLabel[mod.type] || mod.type}:</strong> ${descriptions[mod.type] || ''}`;
}

function _renderEstruturaItem() {
  const mod  = ESTRUTURA_MODULES[estruturaModule];
  const item = mod.items[estruturaItemIdx];
  estruturaAnswered = false;

  // Contador de progresso
  const counter = document.getElementById('estrutura-counter');
  if (counter) counter.textContent = `Item ${estruturaItemIdx + 1} de ${mod.items.length}`;

  // Texto
  const textEl = document.getElementById('estrutura-text');
  if (textEl) textEl.textContent = item.text;

  // Área de exercício
  const area = document.getElementById('estrutura-area');
  if (!area) return;

  if (mod.type === 'identificar') _renderIdentificar(area, item);
  if (mod.type === 'organizador') _renderOrganizador(area, item);
  if (mod.type === 'resumo')      _renderResumo(area, item);

  // Controles
  _updateEstruturaControls();
}

function _updateEstruturaControls() {
  const mod = ESTRUTURA_MODULES[estruturaModule];
  const verificarBtn = document.getElementById('estrutura-verificar');
  const proximoBtn   = document.getElementById('estrutura-proximo');
  const scoreEl      = document.getElementById('estrutura-score');

  if (verificarBtn) {
    verificarBtn.style.display = (mod.type === 'organizador' || mod.type === 'resumo') && !estruturaAnswered
      ? 'inline-flex' : 'none';
  }
  if (proximoBtn) {
    proximoBtn.style.display = estruturaAnswered ? 'inline-flex' : 'none';
    const isLast = estruturaItemIdx >= mod.items.length - 1;
    proximoBtn.textContent = isLast ? 'Finalizar' : 'Próximo';
  }
  if (scoreEl) scoreEl.style.display = 'none';
}

// ─────────────────────────────────────────
// SUB-TIPO 1: IDENTIFICAR
// ─────────────────────────────────────────
const STRUCTURE_META = {
  'causa-efeito':     { icon: '→',   desc: 'Um evento provoca outro',             color: 'est-card-causal' },
  'comparação':       { icon: '↔',   desc: 'Dois elementos são contrastados',      color: 'est-card-comp' },
  'problema-solução': { icon: '!✓',  desc: 'Um problema é apresentado e resolvido', color: 'est-card-prob' },
  'sequência':        { icon: '1,2,3', desc: 'Eventos em ordem cronológica',        color: 'est-card-seq' },
  'descrição':        { icon: '≡',   desc: 'Características de um conceito',       color: 'est-card-desc' },
};

function _renderIdentificar(area, item) {
  let html = `<div class="est-structure-cards" id="est-cards">`;
  item.options.forEach(opt => {
    const meta = STRUCTURE_META[opt] || { icon: '?', desc: '', color: '' };
    html += `<div class="est-structure-card ${meta.color}" onclick="answerIdentificar('${opt}')" data-opt="${opt}">
      <div class="est-card-icon">${meta.icon}</div>
      <div class="est-card-name">${opt}</div>
      <div class="est-card-desc">${meta.desc}</div>
    </div>`;
  });
  html += `</div>`;
  html += `<div class="est-explanation" id="est-explanation" style="display:none"></div>`;
  area.innerHTML = html;
}

function answerIdentificar(choice) {
  if (estruturaAnswered) return;
  estruturaAnswered = true;

  const mod  = ESTRUTURA_MODULES[estruturaModule];
  const item = mod.items[estruturaItemIdx];
  const correct = choice === item.structure;

  if (correct) estruturaScore++;

  // Marcar cards
  document.querySelectorAll('.est-structure-card').forEach(card => {
    const opt = card.dataset.opt;
    card.style.pointerEvents = 'none';
    if (opt === item.structure) card.classList.add('correct');
    if (opt === choice && !correct) card.classList.add('wrong');
  });

  // Mostrar explicação
  const expEl = document.getElementById('est-explanation');
  if (expEl) {
    expEl.style.display = 'block';
    expEl.innerHTML = `<strong>${correct ? 'Correto!' : 'Incorreto.'}</strong> ${item.explanation}`;
    expEl.className = 'est-explanation ' + (correct ? 'est-exp-correct' : 'est-exp-wrong');
  }

  _updateEstruturaControls();
  // Para identificar, "próximo" aparece direto (sem verificar)
  const proximoBtn = document.getElementById('estrutura-proximo');
  if (proximoBtn) proximoBtn.style.display = 'inline-flex';
}

// ─────────────────────────────────────────
// SUB-TIPO 2: ORGANIZADOR GRÁFICO
// ─────────────────────────────────────────
function _renderOrganizador(area, item) {
  // Inicializar estado
  orgSlotValues = item.slots.map(() => null);
  orgSelectedEl = null;

  // Criar lista de todos os elementos (corretos + distractors), embaralhar
  const allElements = [
    ...item.slots.map(s => s.correct),
    ...(item.distractors || [])
  ];
  _shuffle(allElements);
  orgElements = allElements.map(t => ({ text: t, used: false }));

  let html = `<div class="est-org-wrap">`;

  // Slots
  html += `<div class="est-org-slots">`;
  item.slots.forEach((slot, i) => {
    html += `<div class="est-org-slot" id="org-slot-${i}" onclick="placeOrgElement(${i})">
      <span class="est-org-slot-label">${slot.label}</span>
      <span class="est-org-slot-value" id="org-slot-val-${i}">Clique para colocar aqui</span>
    </div>`;
  });
  html += `</div>`;

  // Elementos disponíveis
  html += `<div class="est-org-elements" id="org-elements">`;
  orgElements.forEach((el, i) => {
    html += `<div class="est-org-element" id="org-el-${i}" onclick="selectOrgElement(${i})">${el.text}</div>`;
  });
  html += `</div>`;

  html += `</div>`;
  area.innerHTML = html;
}

function selectOrgElement(elIdx) {
  if (estruturaAnswered) return;
  const elEl = document.getElementById(`org-el-${elIdx}`);
  if (!elEl || orgElements[elIdx].used) return;

  // Desmarcar seleção anterior
  if (orgSelectedEl !== null) {
    const prev = document.getElementById(`org-el-${orgSelectedEl}`);
    if (prev) prev.classList.remove('selected');
  }

  if (orgSelectedEl === elIdx) {
    // Clique duplo deseleciona
    orgSelectedEl = null;
  } else {
    orgSelectedEl = elIdx;
    elEl.classList.add('selected');
  }
}

function placeOrgElement(slotIdx) {
  if (estruturaAnswered) return;
  const slotEl    = document.getElementById(`org-slot-${slotIdx}`);
  const slotValEl = document.getElementById(`org-slot-val-${slotIdx}`);
  if (!slotEl || !slotValEl) return;

  if (orgSlotValues[slotIdx] !== null) {
    // Slot já preenchido: devolve elemento ao pool
    const currentText = orgSlotValues[slotIdx];
    const elIdx = orgElements.findIndex(e => e.text === currentText);
    if (elIdx >= 0) {
      orgElements[elIdx].used = false;
      const elEl = document.getElementById(`org-el-${elIdx}`);
      if (elEl) elEl.classList.remove('used');
    }
    orgSlotValues[slotIdx] = null;
    slotEl.classList.remove('filled');
    slotValEl.textContent = 'Clique para colocar aqui';
  }

  if (orgSelectedEl === null) return;

  // Colocar elemento selecionado no slot
  const el = orgElements[orgSelectedEl];
  orgSlotValues[slotIdx] = el.text;
  el.used = true;

  const elEl = document.getElementById(`org-el-${orgSelectedEl}`);
  if (elEl) {
    elEl.classList.remove('selected');
    elEl.classList.add('used');
  }

  slotEl.classList.add('filled');
  slotValEl.textContent = el.text;
  orgSelectedEl = null;
}

function clearOrgSlot(slotIdx) {
  // Alias (mantido para compatibilidade, mas a lógica está em placeOrgElement)
  placeOrgElement(slotIdx);
}

function checkOrganizador() {
  if (estruturaAnswered) return;
  // Verificar se todos os slots estão preenchidos
  if (orgSlotValues.some(v => v === null)) {
    alert('Preencha todos os espaços antes de verificar.');
    return;
  }

  estruturaAnswered = true;
  const mod  = ESTRUTURA_MODULES[estruturaModule];
  const item = mod.items[estruturaItemIdx];
  let correct = 0;

  item.slots.forEach((slot, i) => {
    const slotEl = document.getElementById(`org-slot-${i}`);
    if (!slotEl) return;
    if (orgSlotValues[i] === slot.correct) {
      slotEl.classList.add('correct');
      correct++;
    } else {
      slotEl.classList.add('wrong');
      // Mostrar o correto abaixo
      const hint = document.createElement('div');
      hint.className = 'est-org-slot-hint';
      hint.textContent = `Correto: ${slot.correct}`;
      slotEl.appendChild(hint);
    }
  });

  if (correct === item.slots.length) estruturaScore++;

  // Desabilitar interação
  document.querySelectorAll('.est-org-element').forEach(el => {
    el.style.pointerEvents = 'none';
  });
  document.querySelectorAll('.est-org-slot').forEach(el => {
    el.style.pointerEvents = 'none';
  });

  _updateEstruturaControls();
}

// ─────────────────────────────────────────
// SUB-TIPO 3: RESUMO
// ─────────────────────────────────────────
function _renderResumo(area, item) {
  let html = `<div class="est-resumo-wrap">
    <label class="est-resumo-label" for="est-resumo-input">Escreva seu resumo em uma única frase:</label>
    <textarea class="est-resumo-textarea" id="est-resumo-input" rows="3" placeholder="Use suas próprias palavras para capturar a ideia principal..."></textarea>
    <div class="est-resumo-model" id="est-resumo-model" style="display:none">
      <div class="est-resumo-model-title">Resumo modelo</div>
      <div class="est-resumo-model-text" id="est-resumo-model-text"></div>
      <div class="est-keyword-section">
        <div class="est-keyword-label">Palavras-chave abordadas:</div>
        <div class="est-keyword-list" id="est-keyword-list"></div>
        <div class="est-keyword-score" id="est-keyword-score"></div>
      </div>
    </div>
  </div>`;
  area.innerHTML = html;
}

function checkResumo() {
  if (estruturaAnswered) return;
  const input = document.getElementById('est-resumo-input');
  if (!input || !input.value.trim()) {
    alert('Escreva seu resumo antes de verificar.');
    return;
  }

  estruturaAnswered = true;
  const mod  = ESTRUTURA_MODULES[estruturaModule];
  const item = mod.items[estruturaItemIdx];
  const userText = input.value.toLowerCase();

  // Avaliar palavras-chave
  const found = item.keywords.filter(kw => userText.includes(kw.toLowerCase()));
  const pct   = Math.round(found.length / item.keywords.length * 100);

  if (pct >= 50) estruturaScore++;

  // Mostrar modelo e keywords
  const modelEl = document.getElementById('est-resumo-model');
  const modelText = document.getElementById('est-resumo-model-text');
  const kwList  = document.getElementById('est-keyword-list');
  const kwScore = document.getElementById('est-keyword-score');

  if (modelEl)   modelEl.style.display = 'block';
  if (modelText) modelText.textContent = item.model_summary;
  if (kwList) {
    kwList.innerHTML = item.keywords.map(kw => {
      const iFound = found.includes(kw);
      return `<span class="est-keyword ${iFound ? 'found' : 'missing'}">${kw}</span>`;
    }).join('');
  }
  if (kwScore) {
    kwScore.innerHTML = `Você mencionou <strong>${found.length}/${item.keywords.length}</strong> palavras-chave (${pct}%)`;
  }

  // Desabilitar textarea
  if (input) input.disabled = true;

  _updateEstruturaControls();
}

// ─────────────────────────────────────────
// NAVEGAÇÃO COMUM
// ─────────────────────────────────────────
function nextEstrutura() {
  const mod = ESTRUTURA_MODULES[estruturaModule];
  if (estruturaItemIdx >= mod.items.length - 1) {
    finishEstrutura();
    return;
  }
  estruturaItemIdx++;
  estruturaAnswered = false;
  _renderEstruturaItem();
  window.scrollTo({ top: document.getElementById('sec-estrutura')?.offsetTop || 0, behavior: 'smooth' });
}

function finishEstrutura() {
  const mod   = ESTRUTURA_MODULES[estruturaModule];
  const total = mod.items.length;
  const pct   = Math.round(estruturaScore / total * 100);

  saveEstruturaAttempt(mod, total, pct);

  const area    = document.getElementById('estrutura-area');
  const textEl  = document.getElementById('estrutura-text');
  const counter = document.getElementById('estrutura-counter');
  if (textEl)  textEl.textContent = '';
  if (counter) counter.textContent = '';

  if (area) {
    area.innerHTML = `<div class="est-final">
      <div class="est-final-score">${estruturaScore}<span class="est-final-total">/${total}</span></div>
      <div class="est-final-pct">${pct}%</div>
      <div class="est-final-msg">${_estFinalMsg(pct)}</div>
    </div>`;
  }

  const verificarBtn = document.getElementById('estrutura-verificar');
  const proximoBtn   = document.getElementById('estrutura-proximo');
  const scoreEl      = document.getElementById('estrutura-score');
  if (verificarBtn) verificarBtn.style.display = 'none';
  if (proximoBtn)   proximoBtn.style.display   = 'none';
  if (scoreEl) {
    scoreEl.style.display = 'block';
    scoreEl.innerHTML = `<span class="score-num">${estruturaScore}</span><span class="score-total">/ ${total}</span>`;
  }
}

function _estFinalMsg(pct) {
  if (pct >= 90) return 'Excelente domínio das estruturas textuais!';
  if (pct >= 75) return 'Bom trabalho — continue praticando para consolidar.';
  if (pct >= 50) return 'Progresso razoável. Revise os padrões e tente novamente.';
  return 'Continue praticando — reconhecer estruturas é uma habilidade que se treina.';
}

function saveEstruturaAttempt(mod, total, pct) {
  const record = {
    date:    new Date().toISOString(),
    module:  mod.name,
    type:    mod.type,
    correct: estruturaScore,
    total,
    pct,
  };
  const key  = 'fluencia_estrutura';
  const data = Storage.get(key);
  data.push(record);
  Storage.set(key, data);
}

// ─────────────────────────────────────────
// DISPATCHER — botão Verificar
// ─────────────────────────────────────────
function estruturaVerificar() {
  const mod = ESTRUTURA_MODULES[estruturaModule];
  if (mod.type === 'organizador') checkOrganizador();
  if (mod.type === 'resumo')      checkResumo();
}

// ─────────────────────────────────────────
// UTIL
// ─────────────────────────────────────────
function _shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
