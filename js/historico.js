// historico.js — History display, export, and clear functions

function showHistory(type) {
  ['ran','precisao','fluencia','texto'].forEach(t => {
    const btn = document.getElementById(`hist-btn-${t}`);
    if (btn) btn.classList.toggle('active', t === type);
  });

  const container = document.getElementById('historico-content');
  const data = JSON.parse(localStorage.getItem(`fluencia_${type}`) || '[]');

  if (data.length === 0) {
    container.innerHTML = '<div class="history-empty">Nenhum registro encontrado para esta categoria.</div>';
    return;
  }

  let html = '';

  // Chart
  if (type === 'ran' || type === 'texto') {
    const recent = data.slice(-20);
    const maxTime = Math.max(...recent.map(e => e.time));
    html += '<div style="margin-bottom:2rem"><h3 style="margin-bottom:1rem">Evolução do tempo</h3><div class="history-chart">';
    recent.forEach((e, i) => {
      const pct = maxTime > 0 ? (e.time / maxTime * 100) : 0;
      const d = new Date(e.date);
      html += `<div class="history-bar" style="height:${pct}%" data-label="${d.toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit'})}" title="${e.timeFormatted}"></div>`;
    });
    html += '</div></div>';
  }

  // Table
  html += '<table class="history-table"><thead><tr><th>Data</th>';
  if (type === 'ran') html += '<th>Nível</th><th>Tempo</th><th>Erros</th><th>Autocorr.</th>';
  if (type === 'precisao') html += '<th>Módulo</th><th>Acertos</th><th>Total</th><th>%</th>';
  if (type === 'fluencia') html += '<th>Módulo</th><th>Tent. 1</th><th>Tent. 2</th><th>Tent. 3</th>';
  if (type === 'texto') html += '<th>Módulo</th><th>Tempo</th><th>Palavras</th><th>PPM</th>';
  html += '</tr></thead><tbody>';

  data.slice().reverse().slice(0, 30).forEach(e => {
    const d = new Date(e.date);
    const dateStr = d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
    html += `<tr><td>${dateStr}</td>`;
    if (type === 'ran') html += `<td>${e.level}</td><td>${e.timeFormatted}</td><td>${e.errors}</td><td>${e.autocorrections}</td>`;
    if (type === 'precisao') html += `<td>${e.module}</td><td>${e.correct}</td><td>${e.total}</td><td>${Math.round(e.correct/e.total*100)}%</td>`;
    if (type === 'fluencia') html += `<td>${e.module}</td><td>${e.attempts[0]}</td><td>${e.attempts[1]}</td><td>${e.attempts[2]}</td>`;
    if (type === 'texto') html += `<td>${e.module}</td><td>${e.timeFormatted}</td><td>${e.words}</td><td>${e.wpm}</td>`;
    html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

function exportData() {
  const data = {
    ran: JSON.parse(localStorage.getItem('fluencia_ran') || '[]'),
    precisao: JSON.parse(localStorage.getItem('fluencia_precisao') || '[]'),
    fluencia: JSON.parse(localStorage.getItem('fluencia_fluencia') || '[]'),
    texto: JSON.parse(localStorage.getItem('fluencia_texto') || '[]'),
    checklist: JSON.parse(localStorage.getItem('fluencia_checklist') || '[]'),
    exported: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fluencia-dados-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearHistory() {
  if (!confirm('Deseja realmente limpar todo o histórico? Esta ação não pode ser desfeita.')) return;
  ['fluencia_ran','fluencia_precisao','fluencia_fluencia','fluencia_texto','fluencia_checklist'].forEach(k => localStorage.removeItem(k));
  showHistory('ran');
}
