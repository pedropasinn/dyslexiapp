// tracking.js — Rastreamento Ocular (trilha numerica, alternada, leitura guiada)

let trackingLevel = 0; // 0=numerica, 1=alternada, 2=leitura
let trackingTimer = null;
let trackingNext = 1;
let trackingTotal = 0;
let trackingErrors = 0;
let trackingStarted = false;

const TRACKING_TEXTS = [
  'A razão humana, desde os primórdios da filosofia grega, busca compreender o fundamento último da realidade. Platão concebia um mundo inteligível de formas perfeitas, enquanto Aristóteles insistia na primazia da experiência sensível como ponto de partida do conhecimento. Esta tensão entre racionalismo e empirismo atravessa toda a história do pensamento ocidental.',
  'A economia política clássica, inaugurada por Adam Smith, propunha que a riqueza das nações dependia não do acúmulo de metais preciosos, mas da produtividade do trabalho humano e da extensão da divisão do trabalho. David Ricardo aprofundou esta análise ao formular a teoria das vantagens comparativas no comércio internacional.',
  'O conceito de graça na teologia cristã representa um dos temas mais debatidos ao longo dos séculos. Agostinho de Hipona defendia a primazia absoluta da graça divina sobre o mérito humano, enquanto Pelágio sustentava a capacidade natural do homem para a virtude. Este debate encontrou nova expressão na Reforma Protestante.'
];

function initTracking() {
  trackingNext = 1;
  trackingErrors = 0;
  trackingStarted = false;
  document.getElementById('tracking-errors').textContent = '0';
  document.getElementById('tracking-save-row').style.display = 'none';
  if (!trackingTimer) {
    trackingTimer = createTimer('tracking-timer');
  }
  trackingTimer.reset();
  document.getElementById('tracking-start-btn').textContent = 'Iniciar';
  renderTrackingArea();
  renderTrackingHistory();
}

function setTrackingLevel(level) {
  trackingLevel = level;
  document.querySelectorAll('#tracking-levels .module-btn').forEach((b, i) => {
    b.classList.toggle('active', i === level);
  });

  const info = document.getElementById('tracking-info');
  if (level === 0) {
    info.innerHTML = '<strong>Instrução:</strong> Encontre e clique nos números em <strong>ordem crescente</strong> (1, 2, 3...) o mais rápido possível.';
  } else if (level === 1) {
    info.innerHTML = '<strong>Instrução:</strong> Alterne entre números e letras em ordem: <strong>1-A-2-B-3-C...</strong> Clique na sequência correta.';
  } else {
    info.innerHTML = '<strong>Instrução:</strong> Leia o texto em voz alta seguindo cada linha com os olhos. Clique em cada <strong>marcador de linha</strong> conforme avança.';
  }

  initTracking();
}

function renderTrackingArea() {
  const area = document.getElementById('tracking-area');

  if (trackingLevel === 2) {
    // Leitura guiada
    const text = TRACKING_TEXTS[Math.floor(Math.random() * TRACKING_TEXTS.length)];
    const words = text.split(' ');
    const linesApprox = Math.ceil(words.length / 10);
    let html = '<div class="tracking-text">';
    for (let line = 0; line < linesApprox; line++) {
      const start = line * 10;
      const end = Math.min(start + 10, words.length);
      const lineWords = words.slice(start, end).join(' ');
      const lineClass = line % 2 === 0 ? 'line-even' : 'line-odd';
      html += `<span class="${lineClass}"><span class="line-marker" data-line="${line + 1}" onclick="clickTrackingLine(${line + 1})">[${line + 1}]</span>${lineWords} </span>`;
    }
    html += '</div>';
    area.innerHTML = html;
    trackingTotal = linesApprox;
  } else {
    // Trilha numerica ou alternada
    const count = trackingLevel === 0 ? 25 : 20;
    trackingTotal = count;
    let targets = [];

    if (trackingLevel === 0) {
      // Numeros 1-25
      for (let i = 1; i <= count; i++) targets.push({ label: String(i), order: i });
    } else {
      // Alternada: 1,A,2,B,...
      const letters = 'ABCDEFGHIJ';
      for (let i = 0; i < 10; i++) {
        targets.push({ label: String(i + 1), order: i * 2 + 1 });
        targets.push({ label: letters[i], order: i * 2 + 2 });
      }
    }

    // Posicionar aleatoriamente sem sobreposição
    const positions = generateNonOverlappingPositions(targets.length, 44);
    let html = '<div class="tracking-grid">';
    targets.forEach((t, i) => {
      const { x, y } = positions[i];
      html += `<div class="tracking-target" style="left:${x}%;top:${y}%" data-order="${t.order}" onclick="clickTrackingTarget(this, ${t.order})">${t.label}</div>`;
    });
    html += '</div>';
    area.innerHTML = html;
  }
}

function generateNonOverlappingPositions(count, size) {
  const positions = [];
  const margin = 6; // percent
  const maxAttempts = 200;

  for (let i = 0; i < count; i++) {
    let placed = false;
    for (let a = 0; a < maxAttempts; a++) {
      const x = margin + Math.random() * (100 - 2 * margin - 5);
      const y = margin + Math.random() * (100 - 2 * margin - 5);
      let ok = true;
      for (const p of positions) {
        const dx = x - p.x;
        const dy = y - p.y;
        if (Math.sqrt(dx * dx + dy * dy) < 10) { ok = false; break; }
      }
      if (ok) { positions.push({ x, y }); placed = true; break; }
    }
    if (!placed) {
      positions.push({ x: margin + (i % 5) * 18, y: margin + Math.floor(i / 5) * 20 });
    }
  }
  return positions;
}

function toggleTrackingTimer() {
  if (!trackingTimer) trackingTimer = createTimer('tracking-timer');
  const running = trackingTimer.toggle();
  trackingStarted = true;
  document.getElementById('tracking-start-btn').textContent = running ? 'Parar' : 'Continuar';
}

function clickTrackingTarget(el, order) {
  if (!trackingStarted) return;
  if (order === trackingNext) {
    el.classList.add('found');
    trackingNext++;
    if (trackingNext > trackingTotal) {
      trackingTimer.stop();
      document.getElementById('tracking-save-row').style.display = '';
      document.getElementById('tracking-start-btn').textContent = 'Concluído';
    } else {
      // Hint proximo
      document.querySelectorAll('.tracking-target.next-hint').forEach(e => e.classList.remove('next-hint'));
    }
  } else {
    el.classList.add('wrong');
    trackingErrors++;
    document.getElementById('tracking-errors').textContent = trackingErrors;
    setTimeout(() => el.classList.remove('wrong'), 400);
  }
}

function clickTrackingLine(lineNum) {
  if (!trackingStarted) return;
  const marker = document.querySelector(`.line-marker[data-line="${lineNum}"]`);
  if (lineNum === trackingNext) {
    if (marker) marker.style.color = 'var(--green)';
    trackingNext++;
    if (trackingNext > trackingTotal) {
      trackingTimer.stop();
      document.getElementById('tracking-save-row').style.display = '';
      document.getElementById('tracking-start-btn').textContent = 'Concluído';
    }
  } else if (lineNum > trackingNext) {
    trackingErrors++;
    document.getElementById('tracking-errors').textContent = trackingErrors;
    if (marker) {
      marker.style.color = 'var(--rose)';
      setTimeout(() => marker.style.color = '', 400);
    }
  }
}

function resetTracking() {
  initTracking();
}

function saveTrackingAttempt() {
  const levels = ['numérica', 'alternada', 'leitura'];
  Storage.push('fluencia_tracking', {
    date: new Date().toISOString(),
    level: levels[trackingLevel],
    time: trackingTimer.getElapsed(),
    timeFormatted: formatTime(trackingTimer.getElapsed()),
    errors: trackingErrors,
    total: trackingTotal
  });
  renderTrackingHistory();
  document.getElementById('tracking-save-row').style.display = 'none';
}

function renderTrackingHistory() {
  const container = document.getElementById('tracking-history');
  const data = Storage.get('fluencia_tracking', []);
  if (!data.length) {
    container.innerHTML = '<div class="history-empty">Nenhuma sessão registrada ainda.</div>';
    return;
  }

  const recent = data.slice(-10).reverse();
  let html = '<h3>Sessões Anteriores</h3><table class="history-table"><thead><tr><th>Data</th><th>Tipo</th><th>Tempo</th><th>Erros</th></tr></thead><tbody>';
  recent.forEach(r => {
    const d = new Date(r.date);
    html += `<tr><td>${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'})}</td><td>${r.level}</td><td>${r.timeFormatted}</td><td>${r.errors}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}
