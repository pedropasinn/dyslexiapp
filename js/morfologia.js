// morfologia.js — Consciencia morfologica: decomposicao e familias de palavras

let morfologiaModule = 0;
let morfologiaExIdx = 0;
let morfologiaSlotValues = [];  // o que o usuario preencheu em cada slot
let morfologiaScore = { correct: 0, total: 0 };

function setMorfologiaModule(idx) {
  morfologiaModule = idx;
  morfologiaExIdx = 0;
  morfologiaScore = { correct: 0, total: 0 };
  document.querySelectorAll('#morfologia-modules .module-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.index) === idx));
  renderMorfologia();
}

function renderMorfologia() {
  const mod = MORFOLOGIA_MODULES[morfologiaModule];
  const ex = mod.exercises[morfologiaExIdx];

  // Progresso
  const progEl = document.getElementById('morfologia-progress');
  progEl.textContent = `${morfologiaExIdx + 1} / ${mod.exercises.length}`;

  // Palavra grande
  document.getElementById('morfologia-word').textContent = ex.word;

  // Raiz etimologica
  const rootEl = document.getElementById('morfologia-root');
  rootEl.innerHTML = `
    <div class="morfologia-root-word">${ex.root.word}</div>
    <div class="morfologia-root-meaning">${ex.root.meaning}</div>
  `;

  // Slots
  morfologiaSlotValues = new Array(ex.morphemes.length).fill(null);
  const slotsEl = document.getElementById('morfologia-slots');
  slotsEl.innerHTML = '';
  ex.morphemes.forEach((_, i) => {
    const slot = document.createElement('div');
    slot.className = 'morfema-slot';
    slot.id = 'morf-slot-' + i;
    slot.dataset.idx = i;
    slot.innerHTML = `<span class="slot-label" style="font-size:0.65rem;color:var(--text-light);display:block">${ex.slots[i]}</span><span class="slot-value">?</span>`;
    slot.onclick = () => clearSlot(i);
    slotsEl.appendChild(slot);
  });

  // Opcoes (morfemas + distratores, embaralhados)
  const allChoices = [...ex.morphemes, ...ex.distractors];
  shuffleArray(allChoices);
  const choicesEl = document.getElementById('morfologia-choices');
  choicesEl.innerHTML = '';
  allChoices.forEach((ch, ci) => {
    const btn = document.createElement('div');
    btn.className = 'morfema-choice';
    btn.textContent = ch;
    btn.dataset.value = ch;
    btn.onclick = () => pickMorfema(btn);
    choicesEl.appendChild(btn);
  });

  // Familia de palavras (escondida ate verificar)
  document.getElementById('morfologia-family').style.display = 'none';
  document.getElementById('morfologia-check-btn').style.display = 'inline-flex';
  document.getElementById('morfologia-next-btn').style.display = 'none';

  // Score
  updateMorfologiaScore();
}

function pickMorfema(btn) {
  if (btn.classList.contains('used')) return;

  // Encontrar proximo slot vazio
  const emptyIdx = morfologiaSlotValues.findIndex(v => v === null);
  if (emptyIdx === -1) return;

  morfologiaSlotValues[emptyIdx] = btn.dataset.value;
  btn.classList.add('used');
  btn.dataset.slotIdx = emptyIdx;

  const slot = document.getElementById('morf-slot-' + emptyIdx);
  slot.querySelector('.slot-value').textContent = btn.dataset.value;
  slot.classList.add('filled');
}

function clearSlot(idx) {
  if (morfologiaSlotValues[idx] === null) return;

  const val = morfologiaSlotValues[idx];
  morfologiaSlotValues[idx] = null;

  const slot = document.getElementById('morf-slot-' + idx);
  slot.querySelector('.slot-value').textContent = '?';
  slot.classList.remove('filled', 'correct', 'wrong');

  // Reativar o botao correspondente
  document.querySelectorAll('#morfologia-choices .morfema-choice').forEach(btn => {
    if (btn.dataset.value === val && btn.dataset.slotIdx === String(idx)) {
      btn.classList.remove('used');
      btn.dataset.slotIdx = '';
    }
  });
}

function checkMorfologia() {
  const mod = MORFOLOGIA_MODULES[morfologiaModule];
  const ex = mod.exercises[morfologiaExIdx];
  let allCorrect = true;

  ex.morphemes.forEach((correct, i) => {
    const slot = document.getElementById('morf-slot-' + i);
    if (morfologiaSlotValues[i] === correct) {
      slot.classList.add('correct');
      slot.classList.remove('wrong');
    } else {
      slot.classList.add('wrong');
      slot.classList.remove('correct');
      allCorrect = false;
      // Mostrar resposta correta no slot
      setTimeout(() => {
        slot.querySelector('.slot-value').textContent = correct;
        slot.classList.remove('wrong');
        slot.classList.add('correct');
      }, 1200);
    }
  });

  if (allCorrect) morfologiaScore.correct++;
  morfologiaScore.total++;
  updateMorfologiaScore();

  // Mostrar familia de palavras
  showWordFamily(ex);

  document.getElementById('morfologia-check-btn').style.display = 'none';
  document.getElementById('morfologia-next-btn').style.display = 'inline-flex';

  // Desativar choices
  document.querySelectorAll('#morfologia-choices .morfema-choice').forEach(b => b.style.pointerEvents = 'none');
}

function showWordFamily(ex) {
  const familyEl = document.getElementById('morfologia-family');
  familyEl.style.display = 'block';
  familyEl.innerHTML = '<h4 style="font-size:0.85rem; color:var(--text-light); margin-bottom:0.5rem">Familia de palavras</h4>';

  const tree = document.createElement('div');
  tree.className = 'word-tree';

  ex.family.forEach(w => {
    const item = document.createElement('div');
    item.className = 'word-tree-item';
    item.textContent = w;
    if (w.toLowerCase() === ex.word.toLowerCase()) {
      item.classList.add('revealed');
    } else {
      item.onclick = () => item.classList.add('revealed');
    }
    tree.appendChild(item);
  });

  familyEl.appendChild(tree);
}

function nextMorfologia() {
  const mod = MORFOLOGIA_MODULES[morfologiaModule];
  if (morfologiaExIdx < mod.exercises.length - 1) {
    morfologiaExIdx++;
    renderMorfologia();
  } else {
    // Modulo completo — salvar
    saveMorfologiaAttempt();
    // Mostrar resultado final
    const area = document.getElementById('morfologia-word');
    area.textContent = `Modulo concluido! ${morfologiaScore.correct}/${morfologiaScore.total}`;
    document.getElementById('morfologia-root').innerHTML = '';
    document.getElementById('morfologia-slots').innerHTML = '';
    document.getElementById('morfologia-choices').innerHTML = '';
    document.getElementById('morfologia-family').style.display = 'none';
    document.getElementById('morfologia-check-btn').style.display = 'none';
    document.getElementById('morfologia-next-btn').style.display = 'none';
  }
}

function updateMorfologiaScore() {
  const scoreEl = document.getElementById('morfologia-score');
  if (!scoreEl) return;
  if (morfologiaScore.total > 0) {
    scoreEl.style.display = 'flex';
    scoreEl.querySelector('.score-num').textContent = morfologiaScore.correct;
    scoreEl.querySelector('.score-total span').textContent = morfologiaScore.total;
  } else {
    scoreEl.style.display = 'none';
  }
}

function saveMorfologiaAttempt() {
  Storage.push('fluencia_morfologia', {
    date: new Date().toISOString(),
    module: MORFOLOGIA_MODULES[morfologiaModule].name,
    correct: morfologiaScore.correct,
    total: morfologiaScore.total,
    pct: Math.round((morfologiaScore.correct / morfologiaScore.total) * 100),
  });
}

// Utilitario
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
