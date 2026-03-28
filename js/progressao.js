// progressao.js — Motor de progressão adaptativa baseado no critério de mestria de Goldsworthy
// Mestria = 80% de acerto em média nas últimas 3 sessões

const Progressao = (() => {

  // ─────────────────────────────────────────
  // MAPEAMENTO: tipo de exercício → chave de storage + módulos
  // ─────────────────────────────────────────
  const EXERCISE_MAP = {
    precisao:      { key: 'fluencia_precisao',      modules: () => typeof PRECISAO_MODULES !== 'undefined' ? PRECISAO_MODULES : [],      section: 'precisao',      label: 'Precisão' },
    discriminacao: { key: 'fluencia_discriminacao',  modules: () => typeof DISCRIMINACAO_MODULES !== 'undefined' ? DISCRIMINACAO_MODULES : [], section: 'discriminacao', label: 'Discriminação Fonêmica' },
    morfologia:    { key: 'fluencia_morfologia',     modules: () => typeof MORFOLOGIA_MODULES !== 'undefined' ? MORFOLOGIA_MODULES : [],    section: 'morfologia',    label: 'Morfologia' },
    vocabulario:   { key: 'fluencia_vocabulario',    modules: () => typeof VOCABULARIO_MODULES !== 'undefined' ? VOCABULARIO_MODULES : [],   section: 'vocabulario',   label: 'Vocabulário Tier 2' },
    silabica:      { key: 'fluencia_silabica',       modules: () => typeof SILABICA_MODULES !== 'undefined' ? SILABICA_MODULES : [],       section: 'silabica',      label: 'Consciência Silábica' },
    texto:         { key: 'fluencia_texto',          modules: () => typeof TEXTO_MODULES !== 'undefined' ? TEXTO_MODULES : [],             section: 'texto',         label: 'Fluência Textual' },
    ran:           { key: 'fluencia_ran',            modules: null,                                                                         section: 'ran',           label: 'RAN — Nomeação Rápida' },
    prosodia:      { key: 'fluencia_prosodia',       modules: () => typeof PROSODIA_MODULES !== 'undefined' ? PROSODIA_MODULES : [],       section: 'prosodia',      label: 'Prosódia' },
    compreensao:   { key: 'fluencia_compreensao',    modules: () => typeof COMPREENSAO_MODULES !== 'undefined' ? COMPREENSAO_MODULES : [],  section: 'compreensao',   label: 'Compreensão Ativa' },
  };

  // Número mínimo de sessões para calcular mestria (critério de Goldsworthy: 2; usamos 3 para robustez)
  const MIN_SESSIONS = 3;
  const MASTERY_THRESHOLD = 80;
  const WEAK_THRESHOLD = 60;

  // ─────────────────────────────────────────
  // EXTRAÇÃO DE ACURÁCIA POR ENTRADA
  // ─────────────────────────────────────────
  function _extractAccuracy(entry, exerciseType) {
    if (!entry) return null;

    switch (exerciseType) {
      case 'texto': {
        // Mestria = WPM ≥ meta salva (padrão 150)
        const meta = Storage.get('wpm_meta', 150);
        if (entry.wpm == null) return null;
        return entry.wpm >= meta ? 100 : Math.round((entry.wpm / meta) * 100);
      }
      case 'ran': {
        // Mestria = erros < 2; acurácia estimada por erros
        if (entry.errors == null) return null;
        if (entry.errors === 0) return 100;
        if (entry.errors === 1) return 85;
        if (entry.errors <= 3) return 65;
        return 40;
      }
      default: {
        // Exercícios com correct/total ou pct
        if (entry.pct != null) return entry.pct;
        if (entry.correct != null && entry.total != null && entry.total > 0) {
          return Math.round((entry.correct / entry.total) * 100);
        }
        return null;
      }
    }
  }

  // ─────────────────────────────────────────
  // calcMastery — calcula mestria de um módulo específico
  // ─────────────────────────────────────────
  function calcMastery(storageKey, moduleName, exerciseType) {
    const all = Storage.get(storageKey, []);

    // Filtrar por módulo (se fornecido); RAN não tem módulo
    const entries = moduleName
      ? all.filter(e => e.module === moduleName)
      : all;

    if (entries.length === 0) {
      return { mastered: false, avgAccuracy: 0, sessions: 0, trend: 'stable' };
    }

    // Últimas 3 sessões
    const recent = entries.slice(-MIN_SESSIONS);
    const accuracies = recent
      .map(e => _extractAccuracy(e, exerciseType))
      .filter(v => v !== null);

    if (accuracies.length === 0) {
      return { mastered: false, avgAccuracy: 0, sessions: entries.length, trend: 'stable' };
    }

    const avg = Math.round(accuracies.reduce((s, v) => s + v, 0) / accuracies.length);
    const mastered = avg >= MASTERY_THRESHOLD && accuracies.length >= 2;

    // Tendência (compara primeira metade vs segunda metade das sessões disponíveis)
    let trend = 'stable';
    if (accuracies.length >= 3) {
      const mid = Math.floor(accuracies.length / 2);
      const older = accuracies.slice(0, mid);
      const newer = accuracies.slice(mid);
      const avgOlder = older.reduce((s, v) => s + v, 0) / older.length;
      const avgNewer = newer.reduce((s, v) => s + v, 0) / newer.length;
      if (avgNewer - avgOlder > 5) trend = 'up';
      else if (avgOlder - avgNewer > 5) trend = 'down';
    } else if (accuracies.length === 2) {
      if (accuracies[1] - accuracies[0] > 5) trend = 'up';
      else if (accuracies[0] - accuracies[1] > 5) trend = 'down';
    }

    return { mastered, avgAccuracy: avg, sessions: entries.length, trend };
  }

  // ─────────────────────────────────────────
  // getModuleMastery — mapa nome→mestria para todo exercício
  // ─────────────────────────────────────────
  function getModuleMastery(exerciseType) {
    const config = EXERCISE_MAP[exerciseType];
    if (!config) return {};

    const result = {};

    if (!config.modules) {
      // Exercício sem módulos (ex: RAN)
      result['_default'] = calcMastery(config.key, null, exerciseType);
    } else {
      const mods = config.modules();
      mods.forEach(mod => {
        result[mod.name] = calcMastery(config.key, mod.name, exerciseType);
      });
    }
    return result;
  }

  // ─────────────────────────────────────────
  // getOverallProgress — resumo geral
  // ─────────────────────────────────────────
  function getOverallProgress() {
    let totalModules = 0;
    let mastered = 0;
    let inProgress = 0;
    const weakAreas = [];

    Object.keys(EXERCISE_MAP).forEach(exType => {
      const config = EXERCISE_MAP[exType];
      if (!config.modules) {
        // Exercício único (RAN)
        totalModules++;
        const m = calcMastery(config.key, null, exType);
        if (m.mastered) mastered++;
        else if (m.sessions > 0) {
          inProgress++;
          if (m.avgAccuracy < WEAK_THRESHOLD && m.sessions > 0) {
            weakAreas.push({ exerciseType: exType, moduleName: null, avgAccuracy: m.avgAccuracy, label: config.label });
          }
        }
      } else {
        const mods = config.modules();
        mods.forEach(mod => {
          totalModules++;
          const m = calcMastery(config.key, mod.name, exType);
          if (m.mastered) mastered++;
          else if (m.sessions > 0) {
            inProgress++;
            if (m.avgAccuracy < WEAK_THRESHOLD) {
              weakAreas.push({ exerciseType: exType, moduleName: mod.name, avgAccuracy: m.avgAccuracy, label: `${config.label}: ${mod.name}` });
            }
          }
        });
      }
    });

    const notStarted = totalModules - mastered - inProgress;

    // Ordenar áreas fracas por acurácia crescente
    weakAreas.sort((a, b) => a.avgAccuracy - b.avgAccuracy);

    return { totalModules, mastered, inProgress, notStarted, weakAreas };
  }

  // ─────────────────────────────────────────
  // getRecommendation — próximo passo recomendado
  // ─────────────────────────────────────────
  function getRecommendation() {
    const progress = getOverallProgress();

    // 1. Prioridade: área fraca (< 60%)
    if (progress.weakAreas.length > 0) {
      const weak = progress.weakAreas[0];
      return {
        exercise: weak.exerciseType,
        module: weak.moduleName,
        reason: `Área fraca: ${weak.label} (${weak.avgAccuracy}% — abaixo de 60%)`,
        priority: 'high',
      };
    }

    // 2. Em progresso (iniciado mas não dominado)
    if (progress.inProgress > 0) {
      // Encontrar módulo em progresso com maior potencial (mais próximo de 80%)
      let best = null;
      let bestAccuracy = -1;

      Object.keys(EXERCISE_MAP).forEach(exType => {
        const config = EXERCISE_MAP[exType];
        if (!config.modules) {
          const m = calcMastery(config.key, null, exType);
          if (!m.mastered && m.sessions > 0 && m.avgAccuracy >= WEAK_THRESHOLD && m.avgAccuracy > bestAccuracy) {
            bestAccuracy = m.avgAccuracy;
            best = { exercise: exType, module: null, label: config.label, accuracy: m.avgAccuracy };
          }
        } else {
          config.modules().forEach(mod => {
            const m = calcMastery(config.key, mod.name, exType);
            if (!m.mastered && m.sessions > 0 && m.avgAccuracy >= WEAK_THRESHOLD && m.avgAccuracy > bestAccuracy) {
              bestAccuracy = m.avgAccuracy;
              best = { exercise: exType, module: mod.name, label: `${config.label}: ${mod.name}`, accuracy: m.avgAccuracy };
            }
          });
        }
      });

      if (best) {
        return {
          exercise: best.exercise,
          module: best.module,
          reason: `Quase lá: ${best.label} (${best.accuracy}% — próximo da mestria)`,
          priority: 'medium',
        };
      }
    }

    // 3. Tudo dominado — sugerir um não iniciado
    if (progress.notStarted > 0) {
      // Encontrar primeiro não iniciado seguindo a ordem canônica
      const order = ['ran', 'precisao', 'discriminacao', 'silabica', 'morfologia', 'vocabulario', 'prosodia', 'texto', 'compreensao'];
      for (const exType of order) {
        const config = EXERCISE_MAP[exType];
        if (!config) continue;
        if (!config.modules) {
          const m = calcMastery(config.key, null, exType);
          if (m.sessions === 0) {
            return {
              exercise: exType,
              module: null,
              reason: `Novo exercício: ${config.label}`,
              priority: 'low',
            };
          }
        } else {
          const mods = config.modules();
          for (const mod of mods) {
            const m = calcMastery(config.key, mod.name, exType);
            if (m.sessions === 0) {
              return {
                exercise: exType,
                module: mod.name,
                reason: `Novo módulo: ${config.label} — ${mod.name}`,
                priority: 'low',
              };
            }
          }
        }
      }
    }

    // Tudo dominado
    return {
      exercise: null,
      module: null,
      reason: 'Parabéns! Todos os módulos dominados. Continue praticando para manter a fluência.',
      priority: 'complete',
    };
  }

  // ─────────────────────────────────────────
  // renderMasteryBadges — adiciona badges nos botões de módulo
  // ─────────────────────────────────────────
  function renderMasteryBadges(containerId, exerciseType, storageKey) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const config = EXERCISE_MAP[exerciseType];
    if (!config) return;

    // Remover badges anteriores
    container.querySelectorAll('.mastery-badge').forEach(b => b.remove());

    const mods = config.modules ? config.modules() : null;
    if (!mods) return;

    const btns = container.querySelectorAll('.module-btn');
    btns.forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      if (isNaN(idx) || !mods[idx]) return;

      const modName = mods[idx].name;
      const mastery = calcMastery(storageKey, modName, exerciseType);

      // Remover badge existente neste botão
      const existingBadge = btn.querySelector('.mastery-badge');
      if (existingBadge) existingBadge.remove();

      if (mastery.mastered) {
        const badge = document.createElement('span');
        badge.className = 'mastery-badge mastered';
        badge.title = `Dominado (${mastery.avgAccuracy}% de acerto médio)`;
        badge.textContent = '★';
        btn.appendChild(badge);
      } else if (mastery.sessions > 0) {
        const badge = document.createElement('span');
        badge.className = 'mastery-badge in-progress';
        badge.title = `Em progresso (${mastery.avgAccuracy}% de acerto médio, ${mastery.sessions} sessão${mastery.sessions > 1 ? 'ões' : ''})`;
        badge.textContent = '●';
        btn.appendChild(badge);
      }
    });
  }

  // ─────────────────────────────────────────
  // renderProgressCard — card de visão geral na seção home
  // ─────────────────────────────────────────
  function renderProgressCard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const progress = getOverallProgress();
    const rec = getRecommendation();

    const masteryPct = progress.totalModules > 0
      ? Math.round((progress.mastered / progress.totalModules) * 100)
      : 0;

    const priorityClass = {
      high: 'rec-high',
      medium: 'rec-medium',
      low: 'rec-low',
      complete: 'rec-complete',
    }[rec.priority] || 'rec-low';

    const priorityIcon = {
      high: '⚠',
      medium: '◆',
      low: '→',
      complete: '✓',
    }[rec.priority] || '→';

    let recClickAttr = '';
    if (rec.exercise) {
      recClickAttr = `onclick="showSection('${rec.exercise}')"`;
    }

    container.innerHTML = `
      <div class="progress-overview-inner">
        <div class="progress-overview-header">
          <span class="progress-overview-title">Seu Progresso</span>
          <span class="progress-overview-subtitle">Critério de mestria: ≥80% em 3 sessões (Goldsworthy)</span>
        </div>

        <div class="progress-stats-row">
          <div class="progress-stat">
            <span class="progress-stat-value">${progress.mastered}</span>
            <span class="progress-stat-label">Dominados</span>
          </div>
          <div class="progress-stat progress-stat-mid">
            <span class="progress-stat-value">${progress.inProgress}</span>
            <span class="progress-stat-label">Em progresso</span>
          </div>
          <div class="progress-stat">
            <span class="progress-stat-value">${progress.notStarted}</span>
            <span class="progress-stat-label">Não iniciados</span>
          </div>
        </div>

        <div class="progress-bar-mini-wrap">
          <div class="progress-bar-mini">
            <div class="progress-bar-mini-fill" style="width: ${masteryPct}%"></div>
          </div>
          <span class="progress-bar-mini-label">${progress.mastered} de ${progress.totalModules} módulos dominados</span>
        </div>

        ${rec.exercise || rec.priority === 'complete' ? `
        <div class="progress-recommendation ${priorityClass}" ${recClickAttr} style="${rec.exercise ? 'cursor:pointer' : ''}">
          <span class="progress-rec-icon">${priorityIcon}</span>
          <div class="progress-rec-content">
            <span class="progress-rec-label">Próximo passo</span>
            <span class="progress-rec-text">${rec.reason}</span>
          </div>
          ${rec.exercise ? '<span class="progress-rec-arrow">›</span>' : ''}
        </div>
        ` : ''}

        ${progress.weakAreas.length > 1 ? `
        <div class="progress-weak-list">
          <span class="progress-weak-title">Áreas para reforço:</span>
          ${progress.weakAreas.slice(0, 3).map(w => `
            <button class="progress-weak-item" onclick="showSection('${w.exerciseType}')">
              <span class="progress-weak-name">${w.label}</span>
              <span class="progress-weak-pct">${w.avgAccuracy}%</span>
            </button>
          `).join('')}
        </div>
        ` : ''}
      </div>
    `;
  }

  // ─────────────────────────────────────────
  // API pública
  // ─────────────────────────────────────────
  return {
    calcMastery,
    getModuleMastery,
    getOverallProgress,
    getRecommendation,
    renderMasteryBadges,
    renderProgressCard,
    EXERCISE_MAP,
  };
})();
