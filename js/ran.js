// ran.js — RAN (Rapid Automatized Naming) functions

const ranTimerCtrl = createTimer('ran-timer');

// Total de itens na grade (10 linhas × 5 itens)
const RAN_TOTAL_ITEMS = 50;

function setRanType(type) {
  ranType = type;
  document.querySelectorAll('#ran-types .module-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });

  // Mostrar/ocultar seletor de nível conforme o tipo
  const levelSelector = document.getElementById('ran-levels');
  const letterSelector = document.getElementById('ran-letter-levels');
  if (type === 'numeros') {
    levelSelector.style.display = '';
    letterSelector.style.display = 'none';
    // Atualizar instrução
    document.getElementById('ran-instrucao').textContent =
      'Leia cada número da esquerda para a direita, linha por linha, o mais rápido que puder.';
  } else if (type === 'cores') {
    levelSelector.style.display = 'none';
    letterSelector.style.display = 'none';
    document.getElementById('ran-instrucao').textContent =
      'Nomeie cada cor da esquerda para a direita, linha por linha, o mais rápido que puder.';
  } else {
    levelSelector.style.display = 'none';
    letterSelector.style.display = '';
    document.getElementById('ran-instrucao').textContent =
      'Leia cada letra da esquerda para a direita, linha por linha, o mais rápido que puder.';
  }

  generateRan();
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
  document.getElementById('ran-ipm').textContent = '';
}

function setRanLevel(level) {
  ranLevel = level;
  document.querySelectorAll('#ran-levels .module-btn').forEach((b, i) => b.classList.toggle('active', i === level));
  generateRan();
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
  document.getElementById('ran-ipm').textContent = '';
}

function setRanLetterLevel(level) {
  ranLevel = level;
  document.querySelectorAll('#ran-letter-levels .module-btn').forEach((b, i) => b.classList.toggle('active', i === level));
  generateRan();
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
  document.getElementById('ran-ipm').textContent = '';
}

function generateRan() {
  const grid = document.getElementById('ran-grid');
  grid.innerHTML = '';

  if (ranType === 'numeros') {
    const stimuli = RAN_LEVELS[ranLevel];
    for (let row = 0; row < 10; row++) {
      const shuffled = [...stimuli].sort(() => Math.random() - 0.5);
      shuffled.forEach(num => {
        const cell = document.createElement('div');
        cell.className = 'ran-cell';
        cell.textContent = num;
        grid.appendChild(cell);
      });
    }
  } else if (ranType === 'cores') {
    const colors = [...RAN_COLORS];
    for (let row = 0; row < 10; row++) {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      shuffled.forEach(cor => {
        const cell = document.createElement('div');
        cell.className = 'ran-cell ran-cell-color';
        const circle = document.createElement('div');
        circle.className = 'ran-color-circle';
        circle.style.backgroundColor = cor.hex;
        circle.title = cor.nome;
        cell.appendChild(circle);
        grid.appendChild(cell);
      });
    }
  } else if (ranType === 'letras') {
    const stimuli = RAN_LETTERS[ranLevel] || RAN_LETTERS[0];
    for (let row = 0; row < 10; row++) {
      const shuffled = [...stimuli].sort(() => Math.random() - 0.5);
      shuffled.forEach(letra => {
        const cell = document.createElement('div');
        cell.className = 'ran-cell ran-cell-letter';
        cell.textContent = letra;
        grid.appendChild(cell);
      });
    }
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

  // Calcular itens por minuto
  const ipm = elapsed > 0 ? Math.round((RAN_TOTAL_ITEMS / elapsed) * 60) : 0;

  // Mostrar itens/min
  const ipmEl = document.getElementById('ran-ipm');
  if (ipmEl) ipmEl.textContent = `${ipm} itens/min`;

  // Determinar label do nível conforme o tipo
  let nivelLabel;
  if (ranType === 'numeros') {
    nivelLabel = `Números N${ranLevel + 1}`;
  } else if (ranType === 'cores') {
    nivelLabel = 'Cores';
  } else {
    nivelLabel = `Letras N${ranLevel + 1}`;
  }

  const entry = {
    date: new Date().toISOString(),
    tipo: ranType,
    level: ranLevel + 1,
    nivelLabel,
    time: elapsed,
    timeFormatted: formatTime(elapsed),
    ipm,
    errors: parseInt(document.getElementById('ran-errors').textContent),
    autocorrections: parseInt(document.getElementById('ran-autocorr').textContent),
  };
  Storage.push('fluencia_ran', entry);
  ranTimerCtrl.reset();
  document.getElementById('ran-start-btn').textContent = 'Iniciar';
  document.getElementById('ran-errors').textContent = '0';
  document.getElementById('ran-autocorr').textContent = '0';
  generateRan();
  renderRanHistory();
}

function renderRanHistory() {
  const container = document.getElementById('ran-history');
  const history = Storage.get('fluencia_ran');
  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty">Nenhuma tentativa registrada ainda.</div>';
    return;
  }
  const recent = history.slice(-10).reverse();
  let html = '<h3>Últimas tentativas</h3><table class="history-table"><thead><tr><th>Data</th><th>Tipo / Nível</th><th>Tempo</th><th>Itens/min</th><th>Erros</th><th>Autocorr.</th></tr></thead><tbody>';
  recent.forEach(e => {
    const d = new Date(e.date);
    // Compatibilidade com entradas antigas (sem campo tipo/nivelLabel)
    const nivelLabel = e.nivelLabel || `N${e.level}`;
    const ipm = e.ipm != null ? e.ipm : '—';
    html += `<tr>
      <td>${d.toLocaleDateString('pt-BR')}</td>
      <td>${nivelLabel}</td>
      <td>${e.timeFormatted}</td>
      <td>${ipm}</td>
      <td>${e.errors}</td>
      <td>${e.autocorrections}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
