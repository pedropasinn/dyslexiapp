// sessao.js — Sessão guiada: warm-up → principal → revisão com cronômetro

const Sessao = (() => {
  // ─────────────────────────────────────────
  // ESTADO
  // ─────────────────────────────────────────
  let sessaoActive = false;
  let sessaoStartTime = null;
  let sessaoExercises = [];
  let sessaoTimerInterval = null;
  let sessaoCurrentStep = -1;
  let sessaoRotina = null;

  // ─────────────────────────────────────────
  // ROTINAS SUGERIDAS
  // ─────────────────────────────────────────
  const ROTINAS = {
    rapida: {
      label: 'Rápida',
      duracao: '10 min',
      descricao: 'Aquecimento rápido e leitura de texto.',
      passos: [
        { exercise: 'ran',      section: 'ran',      duracao: '2 min', descricao: 'Nomeação Automática Rápida — aquecimento visuo-fonológico' },
        { exercise: 'precisao', section: 'precisao', duracao: '3 min', descricao: 'Precisão fonêmica — completar fonemas' },
        { exercise: 'texto',    section: 'texto',    duracao: '5 min', descricao: 'Fluência Textual — leitura com cronômetro' },
      ]
    },
    padrao: {
      label: 'Padrão',
      duracao: '20 min',
      descricao: 'Sequência completa com checklist.',
      passos: [
        { exercise: 'ran',          section: 'ran',          duracao: '2 min', descricao: 'RAN — aquecimento' },
        { exercise: 'precisao',     section: 'precisao',     duracao: '5 min', descricao: 'Precisão fonêmica' },
        { exercise: 'decodificacao',section: 'decodificacao',duracao: '5 min', descricao: 'Decodificação Progressiva' },
        { exercise: 'texto',        section: 'texto',        duracao: '5 min', descricao: 'Fluência Textual' },
        { exercise: 'historico',    section: 'historico',    duracao: '3 min', descricao: 'Checklist & Revisão de progresso' },
      ]
    },
    completa: {
      label: 'Completa',
      duracao: '30 min',
      descricao: 'Sessão profunda com todos os componentes.',
      passos: [
        { exercise: 'ran',          section: 'ran',          duracao: '2 min', descricao: 'RAN — aquecimento' },
        { exercise: 'discriminacao',section: 'discriminacao',duracao: '3 min', descricao: 'Discriminação Fonêmica' },
        { exercise: 'precisao',     section: 'precisao',     duracao: '5 min', descricao: 'Precisão fonêmica' },
        { exercise: 'decodificacao',section: 'decodificacao',duracao: '5 min', descricao: 'Decodificação Progressiva' },
        { exercise: 'fluencia',     section: 'fluencia',     duracao: '5 min', descricao: 'Fluência de Palavras' },
        { exercise: 'texto',        section: 'texto',        duracao: '7 min', descricao: 'Fluência Textual + Compreensão' },
        { exercise: 'historico',    section: 'historico',    duracao: '3 min', descricao: 'Checklist metacognitivo & progresso' },
      ]
    }
  };

  // ─────────────────────────────────────────
  // FUNÇÕES PÚBLICAS
  // ─────────────────────────────────────────

  function start(rotinaKey) {
    sessaoActive = true;
    sessaoStartTime = Date.now();
    sessaoExercises = [];
    sessaoCurrentStep = 0;
    sessaoRotina = ROTINAS[rotinaKey] || ROTINAS.padrao;

    _showBar();
    _startTimer();
    _renderSuggestedArea();
    _updateBar();
  }

  function logExercise(type, module, metrics) {
    if (!sessaoActive) return;
    sessaoExercises.push({
      type,
      module: module || '',
      metrics: metrics || {},
      ts: Date.now()
    });
  }

  function getSuggestedRoutine(rotinaKey) {
    return ROTINAS[rotinaKey] || null;
  }

  function finish() {
    if (!sessaoActive) return;
    sessaoActive = false;
    clearInterval(sessaoTimerInterval);

    const duracao = Math.round((Date.now() - sessaoStartTime) / 1000);
    const sessao = {
      data: new Date().toISOString(),
      duracaoSegundos: duracao,
      rotina: sessaoRotina ? sessaoRotina.label : '—',
      exercicios: sessaoExercises
    };

    Storage.push('sessoes', sessao);
    _hideBar();
    _showSummary(sessao);
    _renderSuggestedArea();

    sessaoStartTime = null;
    sessaoExercises = [];
    sessaoCurrentStep = -1;
    sessaoRotina = null;
  }

  function isActive() {
    return sessaoActive;
  }

  function goToStep(index) {
    if (!sessaoRotina) return;
    sessaoCurrentStep = index;
    const passo = sessaoRotina.passos[index];
    if (passo && typeof showSection === 'function') {
      showSection(passo.section);
    }
    _updateBar();
    _renderSuggestedArea();
  }

  function renderSuggestion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (sessaoActive) {
      _renderSuggestedArea();
      return;
    }

    container.innerHTML = `
      <div class="sessao-start-block">
        <div class="sessao-start-header">
          <span class="sessao-start-icon">▶</span>
          <div>
            <div class="sessao-start-title">Iniciar sessão guiada</div>
            <div class="sessao-start-desc">Escolha uma rotina e siga os passos com orientação.</div>
          </div>
        </div>
        <div class="sessao-routine-selector">
          ${Object.entries(ROTINAS).map(([key, r]) => `
            <div class="sessao-routine-card" onclick="Sessao.start('${key}')">
              <div class="sessao-card-duracao">${r.duracao}</div>
              <div class="sessao-card-label">${r.label}</div>
              <div class="sessao-card-desc">${r.descricao}</div>
              <div class="sessao-card-passos">${r.passos.map(p => p.exercise).join(' → ')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────
  // PRIVADOS
  // ─────────────────────────────────────────

  function _showBar() {
    const bar = document.getElementById('sessao-bar');
    if (bar) bar.style.display = 'flex';
    // Adicionar padding extra ao body para não sobrepor conteúdo
    document.body.style.paddingBottom = '60px';
  }

  function _hideBar() {
    const bar = document.getElementById('sessao-bar');
    if (bar) bar.style.display = 'none';
    document.body.style.paddingBottom = '';
  }

  function _startTimer() {
    clearInterval(sessaoTimerInterval);
    sessaoTimerInterval = setInterval(_updateBar, 1000);
  }

  function _formatTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  }

  function _updateBar() {
    const elapsed = sessaoStartTime ? _formatTime(Date.now() - sessaoStartTime) : '00:00';
    const timerEl = document.getElementById('sessao-bar-timer');
    if (timerEl) timerEl.textContent = elapsed;

    const stepEl = document.getElementById('sessao-bar-step');
    if (stepEl && sessaoRotina) {
      const passo = sessaoRotina.passos[sessaoCurrentStep];
      if (passo) {
        const total = sessaoRotina.passos.length;
        stepEl.textContent = `Passo ${sessaoCurrentStep + 1}/${total}: ${passo.descricao}`;
      } else {
        stepEl.textContent = sessaoRotina.label;
      }
    }
  }

  function _renderSuggestedArea() {
    const container = document.getElementById('sessao-area');
    if (!container) return;

    if (!sessaoActive || !sessaoRotina) {
      renderSuggestion('sessao-area');
      return;
    }

    const passos = sessaoRotina.passos;

    container.innerHTML = `
      <div class="sessao-active-block">
        <div class="sessao-active-header">
          <span class="sessao-active-title">Sessão ${sessaoRotina.label} em andamento</span>
          <button class="btn btn-outline btn-sm" onclick="Sessao.finish()" style="margin-left:auto">Encerrar</button>
        </div>
        <div class="sessao-steps">
          ${passos.map((p, i) => {
            const done = i < sessaoCurrentStep;
            const active = i === sessaoCurrentStep;
            const cls = done ? 'sessao-step done' : active ? 'sessao-step active' : 'sessao-step pending';
            const icon = done ? '✓' : active ? '▶' : String(i + 1);
            return `
              <div class="${cls}">
                <span class="sessao-step-icon">${icon}</span>
                <div class="sessao-step-info">
                  <span class="sessao-step-name">${p.descricao}</span>
                  <span class="sessao-step-dur">${p.duracao}</span>
                </div>
                ${active || !done ? `<button class="btn btn-gold btn-sm sessao-step-ir" onclick="Sessao.goToStep(${i})">Ir</button>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function _showSummary(sessao) {
    const duracao = _formatTime(sessao.duracaoSegundos * 1000);
    const exercCount = sessao.exercicios.length;

    const overlay = document.createElement('div');
    overlay.className = 'sessao-summary';
    overlay.innerHTML = `
      <div class="sessao-summary-modal">
        <div class="sessao-summary-title">Sessão concluída</div>
        <div class="sessao-summary-grid">
          <div class="sessao-summary-stat">
            <span class="sessao-summary-num">${duracao}</span>
            <span class="sessao-summary-label">Duração total</span>
          </div>
          <div class="sessao-summary-stat">
            <span class="sessao-summary-num">${exercCount}</span>
            <span class="sessao-summary-label">Exercícios salvos</span>
          </div>
          <div class="sessao-summary-stat">
            <span class="sessao-summary-num">${sessao.rotina}</span>
            <span class="sessao-summary-label">Rotina</span>
          </div>
        </div>
        ${exercCount > 0 ? `
          <div class="sessao-summary-list">
            <div class="sessao-summary-list-title">Exercícios completados:</div>
            ${sessao.exercicios.map(e => `
              <div class="sessao-summary-item">
                <span class="sessao-summary-item-type">${e.type}</span>
                ${e.module ? `<span class="sessao-summary-item-module">${e.module}</span>` : ''}
              </div>
            `).join('')}
          </div>
        ` : '<p style="color:var(--text-muted);font-size:0.9rem;text-align:center">Nenhum exercício foi salvo nesta sessão.</p>'}
        <div style="display:flex;justify-content:center;margin-top:1.5rem">
          <button class="btn btn-primary" onclick="this.closest('.sessao-summary').remove()">Fechar</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Navegar para home para mostrar novo botão de sessão
    if (typeof showSection === 'function') showSection('home');
  }

  // Expor publicamente
  return { start, logExercise, getSuggestedRoutine, finish, isActive, goToStep, renderSuggestion };
})();
