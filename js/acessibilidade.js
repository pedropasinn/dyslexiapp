// acessibilidade.js — Painel de configurações para leitura acessível (dislexia)

const Acessibilidade = (() => {
  // ─────────────────────────────────────────
  // PADRÕES
  // ─────────────────────────────────────────
  const DEFAULTS = {
    fontFamily: 'padrao',    // 'padrao' | 'dyslexic' | 'sans'
    fontSize: 16,            // 14–24px
    lineHeight: 1.7,         // 1.4–2.4
    wordSpacing: 0,          // 0–0.3em
    letterSpacing: 0,        // 0–0.1em
    colorScheme: 'padrao',   // 'padrao' | 'alto-contraste' | 'sepia' | 'escuro'
    ruler: false             // régua de leitura on/off
  };

  let prefs = { ...DEFAULTS };
  let rulerEl = null;

  // ─────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────
  function init() {
    const saved = Storage.get('acessibilidade_prefs', null);
    if (saved) {
      prefs = { ...DEFAULTS, ...saved };
    }
    _injectCSS();
    _buildPanel();
    apply(prefs);
    _bindRuler();
  }

  // ─────────────────────────────────────────
  // TOGGLE PAINEL
  // ─────────────────────────────────────────
  function toggle() {
    const panel = document.getElementById('a11y-panel');
    if (!panel) return;
    panel.classList.toggle('open');
    _syncPanelValues();
  }

  // ─────────────────────────────────────────
  // APLICAR PREFERÊNCIAS
  // ─────────────────────────────────────────
  function apply(p) {
    prefs = { ...prefs, ...p };
    const root = document.documentElement;

    // Fonte
    const fontMap = {
      padrao:   "'Lora', Georgia, serif",
      dyslexic: "'OpenDyslexic', 'Comic Sans MS', sans-serif",
      sans:     "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    };
    root.style.setProperty('--font-body', fontMap[prefs.fontFamily] || fontMap.padrao);
    document.body.style.fontFamily = fontMap[prefs.fontFamily] || fontMap.padrao;

    // Tamanho, entrelinha, espaçamentos
    document.body.style.fontSize      = prefs.fontSize + 'px';
    document.body.style.lineHeight    = prefs.lineHeight;
    document.body.style.wordSpacing   = prefs.wordSpacing + 'em';
    document.body.style.letterSpacing = prefs.letterSpacing + 'em';

    // Esquema de cores
    _applyColorScheme(prefs.colorScheme);

    // Régua
    _applyRuler(prefs.ruler);

    // Atualizar preview se painel estiver montado
    _updatePreview();
  }

  // ─────────────────────────────────────────
  // SALVAR
  // ─────────────────────────────────────────
  function save(p) {
    prefs = { ...prefs, ...p };
    Storage.set('acessibilidade_prefs', prefs);
    apply(prefs);
  }

  // ─────────────────────────────────────────
  // RESETAR
  // ─────────────────────────────────────────
  function reset() {
    prefs = { ...DEFAULTS };
    Storage.remove('acessibilidade_prefs');
    apply(prefs);
    _syncPanelValues();
  }

  // ─────────────────────────────────────────
  // CSS PARA OPENDYSLEXIC (via CDN woff2)
  // ─────────────────────────────────────────
  function _injectCSS() {
    if (document.getElementById('a11y-font-face')) return;
    const style = document.createElement('style');
    style.id = 'a11y-font-face';
    style.textContent = `
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  // ─────────────────────────────────────────
  // ESQUEMAS DE CORES
  // ─────────────────────────────────────────
  function _applyColorScheme(scheme) {
    // Remover classes anteriores
    document.body.classList.remove('scheme-padrao', 'scheme-alto-contraste', 'scheme-sepia', 'scheme-escuro');
    document.body.classList.add('scheme-' + scheme);

    const root = document.documentElement;

    if (scheme === 'padrao') {
      root.style.removeProperty('--cream');
      root.style.removeProperty('--text');
      root.style.removeProperty('--text-muted');
      root.style.removeProperty('--cream-dark');
      root.style.removeProperty('--cream-deeper');
      root.style.setProperty('--a11y-bg', 'var(--cream)');
      root.style.setProperty('--a11y-text', 'var(--text)');
      document.body.style.background = '';
      document.body.style.color = '';
    } else if (scheme === 'alto-contraste') {
      root.style.setProperty('--cream', '#ffffff');
      root.style.setProperty('--cream-dark', '#e0e0e0');
      root.style.setProperty('--cream-deeper', '#cccccc');
      root.style.setProperty('--text', '#000000');
      root.style.setProperty('--text-muted', '#333333');
      root.style.setProperty('--a11y-bg', '#ffffff');
      root.style.setProperty('--a11y-text', '#000000');
      document.body.style.background = '#ffffff';
      document.body.style.color = '#000000';
    } else if (scheme === 'sepia') {
      root.style.setProperty('--cream', '#f5e6c8');
      root.style.setProperty('--cream-dark', '#e8d5a8');
      root.style.setProperty('--cream-deeper', '#d9c090');
      root.style.setProperty('--text', '#3d2b1f');
      root.style.setProperty('--text-muted', '#6b4e3d');
      root.style.setProperty('--a11y-bg', '#f5e6c8');
      root.style.setProperty('--a11y-text', '#3d2b1f');
      document.body.style.background = '#f5e6c8';
      document.body.style.color = '#3d2b1f';
    } else if (scheme === 'escuro') {
      root.style.setProperty('--cream', '#1a1a2e');
      root.style.setProperty('--cream-dark', '#25253a');
      root.style.setProperty('--cream-deeper', '#2f2f4a');
      root.style.setProperty('--text', '#e8dfc8');
      root.style.setProperty('--text-muted', '#b8a898');
      root.style.setProperty('--a11y-bg', '#1a1a2e');
      root.style.setProperty('--a11y-text', '#e8dfc8');
      document.body.style.background = '#1a1a2e';
      document.body.style.color = '#e8dfc8';
    }
  }

  // ─────────────────────────────────────────
  // RÉGUA DE LEITURA
  // ─────────────────────────────────────────
  function _bindRuler() {
    document.addEventListener('mousemove', e => {
      if (!prefs.ruler || !rulerEl) return;
      rulerEl.style.top = (e.clientY - 15) + 'px';
    });
  }

  function _applyRuler(on) {
    if (on) {
      if (!rulerEl) {
        rulerEl = document.createElement('div');
        rulerEl.className = 'reading-ruler';
        document.body.appendChild(rulerEl);
      }
      rulerEl.style.display = 'block';
    } else {
      if (rulerEl) rulerEl.style.display = 'none';
    }
  }

  // ─────────────────────────────────────────
  // CONSTRUIR PAINEL
  // ─────────────────────────────────────────
  function _buildPanel() {
    if (document.getElementById('a11y-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'a11y-panel';
    panel.className = 'a11y-panel';
    panel.innerHTML = `
      <div class="a11y-panel-header">
        <span class="a11y-panel-title">Acessibilidade</span>
        <button class="a11y-panel-close" onclick="Acessibilidade.toggle()" aria-label="Fechar">✕</button>
      </div>

      <div class="a11y-body">

        <!-- Fonte -->
        <div class="a11y-section-label">Fonte</div>
        <div class="a11y-option a11y-font-row">
          <button class="a11y-font-btn ${prefs.fontFamily === 'padrao' ? 'active' : ''}"
            data-font="padrao" onclick="Acessibilidade._setFont('padrao')" style="font-family:'Lora',serif">Aa Lora</button>
          <button class="a11y-font-btn ${prefs.fontFamily === 'dyslexic' ? 'active' : ''}"
            data-font="dyslexic" onclick="Acessibilidade._setFont('dyslexic')" style="font-family:'OpenDyslexic',sans-serif">Aa OpenDyslexic</button>
          <button class="a11y-font-btn ${prefs.fontFamily === 'sans' ? 'active' : ''}"
            data-font="sans" onclick="Acessibilidade._setFont('sans')" style="font-family:system-ui,sans-serif">Aa Sans</button>
        </div>

        <!-- Tamanho da fonte -->
        <div class="a11y-section-label">Tamanho da letra</div>
        <div class="a11y-option">
          <div class="a11y-slider-row">
            <span class="a11y-slider-min">A</span>
            <input type="range" class="a11y-slider" id="a11y-font-size"
              min="14" max="24" step="1" value="${prefs.fontSize}"
              oninput="Acessibilidade._setFontSize(this.value)">
            <span class="a11y-slider-max">A</span>
            <span class="a11y-slider-val" id="a11y-font-size-val">${prefs.fontSize}px</span>
          </div>
        </div>

        <!-- Entrelinha -->
        <div class="a11y-section-label">Entrelinha</div>
        <div class="a11y-option">
          <div class="a11y-slider-row">
            <span class="a11y-slider-min">≡</span>
            <input type="range" class="a11y-slider" id="a11y-line-height"
              min="1.4" max="2.4" step="0.1" value="${prefs.lineHeight}"
              oninput="Acessibilidade._setLineHeight(this.value)">
            <span class="a11y-slider-max">≡</span>
            <span class="a11y-slider-val" id="a11y-line-height-val">${prefs.lineHeight}</span>
          </div>
        </div>

        <!-- Espaçamento entre palavras -->
        <div class="a11y-section-label">Espaço entre palavras</div>
        <div class="a11y-option">
          <div class="a11y-slider-row">
            <span class="a11y-slider-min">w</span>
            <input type="range" class="a11y-slider" id="a11y-word-spacing"
              min="0" max="0.3" step="0.05" value="${prefs.wordSpacing}"
              oninput="Acessibilidade._setWordSpacing(this.value)">
            <span class="a11y-slider-max">w</span>
            <span class="a11y-slider-val" id="a11y-word-spacing-val">${prefs.wordSpacing}em</span>
          </div>
        </div>

        <!-- Espaçamento entre letras -->
        <div class="a11y-section-label">Espaço entre letras</div>
        <div class="a11y-option">
          <div class="a11y-slider-row">
            <span class="a11y-slider-min">l</span>
            <input type="range" class="a11y-slider" id="a11y-letter-spacing"
              min="0" max="0.1" step="0.01" value="${prefs.letterSpacing}"
              oninput="Acessibilidade._setLetterSpacing(this.value)">
            <span class="a11y-slider-max">l</span>
            <span class="a11y-slider-val" id="a11y-letter-spacing-val">${prefs.letterSpacing}em</span>
          </div>
        </div>

        <!-- Esquema de cores -->
        <div class="a11y-section-label">Esquema de cores</div>
        <div class="a11y-option a11y-scheme-row">
          <button class="a11y-scheme-btn scheme-padrao-btn ${prefs.colorScheme === 'padrao' ? 'active' : ''}"
            onclick="Acessibilidade._setScheme('padrao')">Padrão</button>
          <button class="a11y-scheme-btn scheme-contraste-btn ${prefs.colorScheme === 'alto-contraste' ? 'active' : ''}"
            onclick="Acessibilidade._setScheme('alto-contraste')">Alto contraste</button>
          <button class="a11y-scheme-btn scheme-sepia-btn ${prefs.colorScheme === 'sepia' ? 'active' : ''}"
            onclick="Acessibilidade._setScheme('sepia')">Sépia</button>
          <button class="a11y-scheme-btn scheme-escuro-btn ${prefs.colorScheme === 'escuro' ? 'active' : ''}"
            onclick="Acessibilidade._setScheme('escuro')">Escuro</button>
        </div>

        <!-- Régua de leitura -->
        <div class="a11y-section-label">Régua de leitura</div>
        <div class="a11y-option">
          <label class="a11y-toggle-label">
            <input type="checkbox" id="a11y-ruler" ${prefs.ruler ? 'checked' : ''}
              onchange="Acessibilidade._setRuler(this.checked)">
            <span class="a11y-toggle-track"></span>
            <span class="a11y-toggle-text">Acompanhar cursor com linha guia</span>
          </label>
        </div>

        <!-- Preview -->
        <div class="a11y-section-label">Pré-visualização</div>
        <div class="a11y-preview" id="a11y-preview">
          A fluência leitora é a capacidade de ler com precisão, velocidade e expressão adequadas.
          <em>Em itálico: termos técnicos e filosóficos.</em>
        </div>

        <!-- Botão resetar -->
        <div class="a11y-option" style="margin-top:0.5rem">
          <button class="btn btn-outline btn-sm" onclick="Acessibilidade.reset()">Restaurar padrões</button>
        </div>
      </div>
    `;

    document.body.appendChild(panel);
  }

  // ─────────────────────────────────────────
  // SETTERS INTERNOS (chamados pelo HTML inline)
  // ─────────────────────────────────────────
  function _setFont(f) {
    save({ fontFamily: f });
    document.querySelectorAll('.a11y-font-btn').forEach(b => b.classList.toggle('active', b.dataset.font === f));
  }

  function _setFontSize(v) {
    const val = parseFloat(v);
    save({ fontSize: val });
    const el = document.getElementById('a11y-font-size-val');
    if (el) el.textContent = val + 'px';
  }

  function _setLineHeight(v) {
    const val = parseFloat(v);
    save({ lineHeight: val });
    const el = document.getElementById('a11y-line-height-val');
    if (el) el.textContent = val;
  }

  function _setWordSpacing(v) {
    const val = parseFloat(v);
    save({ wordSpacing: val });
    const el = document.getElementById('a11y-word-spacing-val');
    if (el) el.textContent = val + 'em';
  }

  function _setLetterSpacing(v) {
    const val = parseFloat(v);
    save({ letterSpacing: val });
    const el = document.getElementById('a11y-letter-spacing-val');
    if (el) el.textContent = val + 'em';
  }

  function _setScheme(s) {
    save({ colorScheme: s });
    document.querySelectorAll('.a11y-scheme-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('onclick').includes(`'${s}'`));
    });
  }

  function _setRuler(on) {
    save({ ruler: on });
  }

  // ─────────────────────────────────────────
  // SINCRONIZAR VALORES DO PAINEL COM PREFS ATUAIS
  // ─────────────────────────────────────────
  function _syncPanelValues() {
    const fsSlider = document.getElementById('a11y-font-size');
    if (fsSlider) fsSlider.value = prefs.fontSize;
    const fsVal = document.getElementById('a11y-font-size-val');
    if (fsVal) fsVal.textContent = prefs.fontSize + 'px';

    const lhSlider = document.getElementById('a11y-line-height');
    if (lhSlider) lhSlider.value = prefs.lineHeight;
    const lhVal = document.getElementById('a11y-line-height-val');
    if (lhVal) lhVal.textContent = prefs.lineHeight;

    const wsSlider = document.getElementById('a11y-word-spacing');
    if (wsSlider) wsSlider.value = prefs.wordSpacing;
    const wsVal = document.getElementById('a11y-word-spacing-val');
    if (wsVal) wsVal.textContent = prefs.wordSpacing + 'em';

    const lsSlider = document.getElementById('a11y-letter-spacing');
    if (lsSlider) lsSlider.value = prefs.letterSpacing;
    const lsVal = document.getElementById('a11y-letter-spacing-val');
    if (lsVal) lsVal.textContent = prefs.letterSpacing + 'em';

    const rulerCheck = document.getElementById('a11y-ruler');
    if (rulerCheck) rulerCheck.checked = prefs.ruler;

    document.querySelectorAll('.a11y-font-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.font === prefs.fontFamily));

    document.querySelectorAll('.a11y-scheme-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('onclick').includes(`'${prefs.colorScheme}'`));
    });

    _updatePreview();
  }

  function _updatePreview() {
    const preview = document.getElementById('a11y-preview');
    if (!preview) return;
    const fontMap = {
      padrao:   "'Lora', Georgia, serif",
      dyslexic: "'OpenDyslexic', 'Comic Sans MS', sans-serif",
      sans:     "system-ui, sans-serif"
    };
    preview.style.fontFamily    = fontMap[prefs.fontFamily] || fontMap.padrao;
    preview.style.fontSize      = prefs.fontSize + 'px';
    preview.style.lineHeight    = prefs.lineHeight;
    preview.style.wordSpacing   = prefs.wordSpacing + 'em';
    preview.style.letterSpacing = prefs.letterSpacing + 'em';
  }

  // Expor tudo, incluindo setters internos (usados por HTML inline)
  return {
    init, toggle, apply, save, reset,
    _setFont, _setFontSize, _setLineHeight, _setWordSpacing, _setLetterSpacing, _setScheme, _setRuler,
    _syncPanelValues
  };
})();
