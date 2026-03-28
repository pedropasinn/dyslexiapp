// historico.js — History display, export, and clear functions

// ─── Helpers ────────────────────────────────────────────────────────────────

function _fmt(n) {
  return n != null ? n : '—';
}

function _pct(correct, total) {
  if (!total) return 0;
  return Math.round(correct / total * 100);
}

function _dateLabel(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

// Build a generic bar chart HTML
// items: [{ value, label, title, extraClass, annotate }]
// options: { title, unit, maxValue, metaValue, metaLabel, invertColors }
function _buildBarChart(items, options = {}) {
  if (!items.length) return '';
  const vals = items.map(i => i.value).filter(v => v > 0);
  if (!vals.length) return '';
  const maxVal = options.maxValue != null ? options.maxValue : Math.max(...vals);
  if (!maxVal) return '';

  const metaValue = options.metaValue;
  // Chart bars area is 120px tall (from .history-chart height in style.css)
  const CHART_H = 120;
  const metaPx = metaValue ? Math.round(metaValue / maxVal * CHART_H) : null;

  let html = `<div class="hist-chart-wrap">
    <h3 class="hist-chart-title">${options.title || 'Evolução'}</h3>
    <div class="hist-chart-area">`;

  // Meta line (dashed horizontal) — positioned in px to align with bar heights
  if (metaPx != null && metaPx <= CHART_H) {
    html += `<div class="hist-meta-line" style="bottom:${metaPx}px">
      <span class="hist-meta-label">${options.metaLabel || 'Meta'}: ${metaValue}${options.unit || ''}</span>
    </div>`;
  }

  html += '<div class="history-chart">';
  items.forEach(item => {
    const pct = maxVal > 0 ? Math.round(item.value / maxVal * 100) : 0;
    const extraClass = item.extraClass || '';
    const annotate = item.annotate ? `<span class="hist-bar-annotate">${item.annotate}</span>` : '';
    html += `<div class="hist-bar-col">
      ${annotate}
      <div class="history-bar ${extraClass}" style="height:${pct}%" data-label="${item.label}" title="${item.title || item.value + (options.unit || '')}"></div>
    </div>`;
  });
  html += '</div>'; // .history-chart
  html += '</div>'; // .hist-chart-area
  html += '</div>'; // .hist-chart-wrap
  return html;
}

// ─── Summary Dashboard ───────────────────────────────────────────────────────

function _buildDashboard() {
  const all = {
    ran:            Storage.get('fluencia_ran'),
    precisao:       Storage.get('fluencia_precisao'),
    fluencia:       Storage.get('fluencia_fluencia'),
    texto:          Storage.get('fluencia_texto'),
    memoria:        Storage.get('fluencia_memoria'),
    tracking:       Storage.get('fluencia_tracking'),
    inibicao:       Storage.get('fluencia_inibicao'),
    morfologia:    Storage.get('fluencia_morfologia'),
    discriminacao: Storage.get('fluencia_discriminacao'),
    vocabulario:   Storage.get('fluencia_vocabulario'),
    prosodia:      Storage.get('fluencia_prosodia'),
    silabica:      Storage.get('fluencia_silabica'),
    compreensao:   Storage.get('fluencia_compreensao'),
    estrutura:     Storage.get('fluencia_estrutura'),
  };

  const totalSessions = Object.values(all).reduce((s, arr) => s + arr.length, 0);
  if (totalSessions === 0) return '';

  // Last 7 days
  const now = Date.now();
  const cutoff = now - 7 * 24 * 60 * 60 * 1000;
  const last7 = Object.values(all)
    .flat()
    .filter(e => new Date(e.date).getTime() >= cutoff).length;

  // Best WPM from texto
  const wpmVals = all.texto.map(e => e.wpm).filter(Boolean);
  const bestWpm = wpmVals.length ? Math.max(...wpmVals) : null;

  // Best RAN time (lowest > 0)
  const ranTimes = all.ran.map(e => e.time).filter(t => t > 0);
  const bestRan = ranTimes.length ? Math.min(...ranTimes) : null;
  const bestRanEntry = bestRan != null ? all.ran.find(e => e.time === bestRan) : null;

  // Best memory span
  const spanVals = all.memoria.map(e => e.maxSpan).filter(Boolean);
  const bestSpan = spanVals.length ? Math.max(...spanVals) : null;

  const stat = (label, value, sub) =>
    `<div class="hist-stat-card">
      <div class="hist-stat-value">${value}</div>
      <div class="hist-stat-label">${label}</div>
      ${sub ? `<div class="hist-stat-sub">${sub}</div>` : ''}
    </div>`;

  return `<div class="hist-dashboard">
    <div class="hist-dashboard-title">Visão geral do progresso</div>
    <div class="hist-stat-row">
      ${stat('Sessões totais', totalSessions, '')}
      ${stat('Últimos 7 dias', last7, 'sessões')}
      ${bestWpm != null ? stat('Melhor PPM', bestWpm, 'leitura de texto') : ''}
      ${bestRanEntry != null ? stat('Melhor RAN', bestRanEntry.timeFormatted, 'tempo mais rápido') : ''}
      ${bestSpan != null ? stat('Span máx.', bestSpan, 'memória de trabalho') : ''}
    </div>
  </div>`;
}

// ─── Chart builders per type ─────────────────────────────────────────────────

function _chartRan(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.time,
    label: _dateLabel(e.date),
    title: e.timeFormatted,
  }));
  return _buildBarChart(items, { title: 'Evolução do tempo (RAN)', unit: 's' });
}

function _chartTracking(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.time,
    label: _dateLabel(e.date),
    title: e.timeFormatted,
  }));
  return _buildBarChart(items, { title: 'Evolução do tempo (Tracking)', unit: 's' });
}

function _chartTexto(data) {
  const recent = data.slice(-20);
  const meta = parseInt(localStorage.getItem('fluencia_wpm_meta') || '150', 10);
  const maxWpm = Math.max(meta, ...recent.map(e => e.wpm || 0));
  const items = recent.map(e => {
    const wpm = e.wpm || 0;
    const aboveMeta = wpm >= meta;
    let annotate = null;
    if (e.mode === 'repetida' && e.improvement) {
      annotate = (e.improvement > 0 ? '+' : '') + e.improvement + '%';
    }
    return {
      value: wpm,
      label: _dateLabel(e.date),
      title: `${wpm} PPM${e.mode === 'repetida' ? ' (repetida)' : ''}`,
      extraClass: aboveMeta ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
      annotate,
    };
  });
  return _buildBarChart(items, {
    title: 'Palavras por Minuto (PPM)',
    unit: ' PPM',
    maxValue: Math.ceil(maxWpm * 1.1),
    metaValue: meta,
    metaLabel: 'Meta',
  });
}

function _chartPrecisao(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${_pct(e.correct, e.total)}% (${e.correct}/${e.total})`,
    extraClass: _pct(e.correct, e.total) >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Precisão por sessão (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function _chartInibicao(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${_pct(e.correct, e.total)}% (${e.correct}/${e.total})`,
    extraClass: _pct(e.correct, e.total) >= 75 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Inibição (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 75,
    metaLabel: 'Meta',
  });
}

function _chartMorfologia(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => {
    const p = e.pct != null ? e.pct : _pct(e.correct, e.total);
    return {
      value: p,
      label: _dateLabel(e.date),
      title: `${p}% (${e.correct}/${e.total})`,
      extraClass: p >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
    };
  });
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Morfologia (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function _chartFluencia(data) {
  const recent = data.slice(-20);
  // For fluencia, attempt 1 and attempt 3 times (seconds as strings "mm:ss" or numbers)
  const parseSecs = v => {
    if (!v) return 0;
    if (typeof v === 'number') return v;
    const parts = String(v).split(':');
    if (parts.length === 2) return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    return parseFloat(v) || 0;
  };

  // Show attempt 1 and attempt 3 as paired columns using time
  const allVals = recent.flatMap(e => [parseSecs(e.attempts?.[0]), parseSecs(e.attempts?.[2])]).filter(v => v > 0);
  if (!allVals.length) return '';
  const maxVal = Math.max(...allVals);

  let html = `<div class="hist-chart-wrap">
    <h3 class="hist-chart-title">Fluência — Tentativa 1 vs. 3 (tempo)</h3>
    <div class="hist-chart-area">
    <div class="history-chart hist-chart-fluencia">`;

  recent.forEach(e => {
    const t1 = parseSecs(e.attempts?.[0]);
    const t3 = parseSecs(e.attempts?.[2]);
    const p1 = maxVal > 0 ? Math.round(t1 / maxVal * 100) : 0;
    const p3 = maxVal > 0 ? Math.round(t3 / maxVal * 100) : 0;
    // improvement: if t3 < t1, user got faster
    const improved = t1 > 0 && t3 > 0 && t3 < t1;
    const label = _dateLabel(e.date);
    html += `<div class="hist-bar-pair">
      <div class="hist-bar-pair-label">${label}</div>
      <div class="hist-bar-pair-bars">
        <div class="history-bar hist-bar-t1" style="height:${p1}%" title="Tent.1: ${e.attempts?.[0] || '—'}"></div>
        <div class="history-bar hist-bar-t3 ${improved ? 'hist-bar-above-meta' : ''}" style="height:${p3}%" title="Tent.3: ${e.attempts?.[2] || '—'}"></div>
      </div>
    </div>`;
  });

  html += '</div></div></div>';
  return html;
}

function _chartMemoria(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.maxSpan || 0,
    label: _dateLabel(e.date),
    title: `Span máx: ${e.maxSpan}`,
    extraClass: (e.maxSpan || 0) >= 5 ? 'hist-bar-above-meta' : '',
  }));
  return _buildBarChart(items, {
    title: 'Span máximo de memória',
    unit: '',
    metaValue: 5,
    metaLabel: 'Ref.',
  });
}


function _chartProsodia(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => {
    const p = e.pct != null ? e.pct : _pct(e.correct, e.total);
    return {
      value: p,
      label: _dateLabel(e.date),
      title: `${p}% (${e.correct}/${e.total}) — ${e.type || ''}`,
      extraClass: p >= 75 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
    };
  });
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Prosódia (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 75,
    metaLabel: 'Meta',
  });
}

// ─── Main showHistory ────────────────────────────────────────────────────────

function _chartDiscriminacao(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.pct != null ? e.pct : _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${e.pct != null ? e.pct : _pct(e.correct, e.total)}% — TR: ${e.avgRt != null ? e.avgRt + ' ms' : '—'}`,
    extraClass: (e.pct != null ? e.pct : _pct(e.correct, e.total)) >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Discriminação Fonêmica (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function _chartVocabulario(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.pct != null ? e.pct : _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${e.pct != null ? e.pct : _pct(e.correct, e.total)}% (${e.correct}/${e.total}) — ${e.wordsSeen} palavras`,
    extraClass: (e.pct != null ? e.pct : _pct(e.correct, e.total)) >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Vocabulário (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function _chartCompreensao(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.pct != null ? e.pct : _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${e.pct != null ? e.pct : _pct(e.correct, e.total)}% (${e.correct}/${e.total}) — ${e.module || ''}`,
    extraClass: (e.pct != null ? e.pct : _pct(e.correct, e.total)) >= 67 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Questões de compreensão por sessão (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 67,
    metaLabel: 'Meta',
  });
}

function _chartSilabica(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => {
    const p = e.pct != null ? e.pct : _pct(e.correct, e.total);
    return {
      value: p,
      label: _dateLabel(e.date),
      title: `${p}% (${e.correct}/${e.total}) — ${e.type || ''}`,
      extraClass: p >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
    };
  });
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Consciência Silábica (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function _chartEstrutura(data) {
  const recent = data.slice(-20);
  const items = recent.map(e => ({
    value: e.pct != null ? e.pct : _pct(e.correct, e.total),
    label: _dateLabel(e.date),
    title: `${e.pct != null ? e.pct : _pct(e.correct, e.total)}% (${e.correct}/${e.total}) — ${e.type || ''} — ${e.module || ''}`,
    extraClass: (e.pct != null ? e.pct : _pct(e.correct, e.total)) >= 80 ? 'hist-bar-above-meta' : 'hist-bar-below-meta',
  }));
  return _buildBarChart(items, {
    title: 'Precisão por sessão — Estrutura Textual (%)',
    unit: '%',
    maxValue: 100,
    metaValue: 80,
    metaLabel: 'Meta',
  });
}

function showHistory(type) {
  ['ran','precisao','fluencia','texto','memoria','tracking','inibicao','morfologia','discriminacao','vocabulario','prosodia','silabica','compreensao','estrutura'].forEach(t => {
    const btn = document.getElementById(`hist-btn-${t}`);
    if (btn) btn.classList.toggle('active', t === type);
  });

  const container = document.getElementById('historico-content');
  const data = Storage.get(`fluencia_${type}`);

  // Dashboard always shown at top (only when there's some data somewhere)
  const dashboard = _buildDashboard();

  if (data.length === 0) {
    container.innerHTML = (dashboard ? dashboard + '<div style="margin-top:1.5rem"></div>' : '') +
      '<div class="history-empty">Nenhum registro encontrado para esta categoria.</div>';
    return;
  }

  let html = dashboard ? dashboard + '<div style="margin-top:2rem"></div>' : '';

  // Chart section per type
  if (type === 'ran')        html += _chartRan(data);
  if (type === 'tracking')   html += _chartTracking(data);
  if (type === 'texto')      html += _chartTexto(data);
  if (type === 'precisao')   html += _chartPrecisao(data);
  if (type === 'inibicao')   html += _chartInibicao(data);
  if (type === 'morfologia')    html += _chartMorfologia(data);
  if (type === 'fluencia')      html += _chartFluencia(data);
  if (type === 'memoria')       html += _chartMemoria(data);
  if (type === 'discriminacao') html += _chartDiscriminacao(data);
  if (type === 'vocabulario')   html += _chartVocabulario(data);
  if (type === 'prosodia')      html += _chartProsodia(data);
  if (type === 'silabica')      html += _chartSilabica(data);
  if (type === 'compreensao')   html += _chartCompreensao(data);
  if (type === 'estrutura')     html += _chartEstrutura(data);

  // Table
  html += '<table class="history-table"><thead><tr><th>Data</th>';
  if (type === 'ran')        html += '<th>Nível</th><th>Tempo</th><th>Erros</th><th>Autocorr.</th>';
  if (type === 'precisao')   html += '<th>Módulo</th><th>Acertos</th><th>Total</th><th>%</th>';
  if (type === 'fluencia')   html += '<th>Módulo</th><th>Tent. 1</th><th>Tent. 2</th><th>Tent. 3</th>';
  if (type === 'texto')      html += '<th>Módulo</th><th>Tempo</th><th>Palavras</th><th>PPM</th>';
  if (type === 'memoria')    html += '<th>Tipo</th><th>Span Máx</th><th>Acertos</th><th>Tentativas</th>';
  if (type === 'tracking')   html += '<th>Tipo</th><th>Tempo</th><th>Erros</th>';
  if (type === 'inibicao')   html += '<th>Tipo</th><th>Acertos</th><th>Tempo</th>';
  if (type === 'morfologia')    html += '<th>Módulo</th><th>Acertos</th><th>Total</th><th>%</th>';
  if (type === 'discriminacao') html += '<th>Módulo</th><th>Acertos</th><th>Total</th><th>%</th><th>TR médio</th>';
  if (type === 'vocabulario')   html += '<th>Módulo</th><th>Palavras</th><th>Acertos</th><th>Total</th><th>%</th>';
  if (type === 'prosodia')      html += '<th>Módulo</th><th>Tipo</th><th>Acertos</th><th>Total</th><th>%</th><th>Tempo</th>';
  if (type === 'silabica')      html += '<th>Módulo</th><th>Tipo</th><th>Acertos</th><th>Total</th><th>%</th>';
  if (type === 'compreensao')   html += '<th>Módulo</th><th>Fase</th><th>Acertos</th><th>Total</th><th>%</th><th>Tempo</th>';
  if (type === 'estrutura')     html += '<th>Módulo</th><th>Tipo</th><th>Acertos</th><th>Total</th><th>%</th>';
  html += '</tr></thead><tbody>';

  data.slice().reverse().slice(0, 30).forEach(e => {
    const d = new Date(e.date);
    const dateStr = d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    html += `<tr><td>${dateStr}</td>`;
    if (type === 'ran')        html += `<td>${_fmt(e.level)}</td><td>${_fmt(e.timeFormatted)}</td><td>${_fmt(e.errors)}</td><td>${_fmt(e.autocorrections)}</td>`;
    if (type === 'precisao')   html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${_pct(e.correct, e.total)}%</td>`;
    if (type === 'fluencia')   html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.attempts?.[0])}</td><td>${_fmt(e.attempts?.[1])}</td><td>${_fmt(e.attempts?.[2])}</td>`;
    if (type === 'texto')      html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.timeFormatted)}</td><td>${_fmt(e.words)}</td><td>${_fmt(e.wpm)}</td>`;
    if (type === 'memoria')    html += `<td>${_fmt(e.level)}</td><td>${_fmt(e.maxSpan)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.trials)}</td>`;
    if (type === 'tracking')   html += `<td>${_fmt(e.level)}</td><td>${_fmt(e.timeFormatted)}</td><td>${_fmt(e.errors)}</td>`;
    if (type === 'inibicao')   html += `<td>${_fmt(e.level)}</td><td>${_fmt(e.correct)}/${_fmt(e.total)}</td><td>${_fmt(e.timeFormatted)}</td>`;
    if (type === 'morfologia')    html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${e.pct != null ? e.pct : _pct(e.correct, e.total)}%</td>`;
    if (type === 'discriminacao') html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${e.pct != null ? e.pct : _pct(e.correct, e.total)}%</td><td>${_fmt(e.avgRt) !== '—' ? e.avgRt + ' ms' : '—'}</td>`;
    if (type === 'vocabulario')   html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.wordsSeen)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${e.pct != null ? e.pct : _pct(e.correct, e.total)}%</td>`;
    if (type === 'prosodia')      html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.type)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${_fmt(e.pct)}%</td><td>${_fmt(e.timeFormatted)}</td>`;
    if (type === 'silabica')      html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.type)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${e.pct != null ? e.pct : _pct(e.correct, e.total)}%</td>`;
    if (type === 'compreensao')   html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.phase)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${_fmt(e.pct)}%</td><td>${_fmt(e.timeFormatted)}</td>`;
    if (type === 'estrutura')     html += `<td>${_fmt(e.module)}</td><td>${_fmt(e.type)}</td><td>${_fmt(e.correct)}</td><td>${_fmt(e.total)}</td><td>${e.pct != null ? e.pct : _pct(e.correct, e.total)}%</td>`;
    html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

// ─── Export / Clear ──────────────────────────────────────────────────────────

function exportData() {
  const data = {
    ran:        Storage.get('fluencia_ran'),
    precisao:   Storage.get('fluencia_precisao'),
    fluencia:   Storage.get('fluencia_fluencia'),
    texto:      Storage.get('fluencia_texto'),
    checklist:  Storage.get('fluencia_checklist'),
    memoria:    Storage.get('fluencia_memoria'),
    tracking:   Storage.get('fluencia_tracking'),
    inibicao:   Storage.get('fluencia_inibicao'),
    morfologia:    Storage.get('fluencia_morfologia'),
    discriminacao: Storage.get('fluencia_discriminacao'),
    vocabulario:   Storage.get('fluencia_vocabulario'),
    prosodia:      Storage.get('fluencia_prosodia'),
    silabica:      Storage.get('fluencia_silabica'),
    compreensao:   Storage.get('fluencia_compreensao'),
    estrutura:     Storage.get('fluencia_estrutura'),
    exported:      new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fluencia-dados-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearHistory() {
  if (!confirm('Deseja realmente limpar todo o histórico? Esta ação não pode ser desfeita.')) return;
  ['fluencia_ran','fluencia_precisao','fluencia_fluencia','fluencia_texto','fluencia_checklist','fluencia_memoria','fluencia_tracking','fluencia_inibicao','fluencia_morfologia','fluencia_discriminacao','fluencia_vocabulario','fluencia_prosodia','fluencia_silabica','fluencia_compreensao','fluencia_estrutura']
    .forEach(k => Storage.remove(k));
  showHistory('ran');
}
