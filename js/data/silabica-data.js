// silabica-data.js — Dados para Consciência Silábica
// Baseado em Goldsworthy Sourcebook Vol. III — intervenções ao nível silábico
// Vocabulário intelectual: filosofia, teologia, economia, história, latim

const SILABICA_MODULES = [

  // ── CONTAGEM ─────────────────────────────────────────────────────────────

  {
    name: 'Contagem — Filosofia e Teologia',
    type: 'contagem',
    words: [
      { word: 'epistemologia',    syllables: ['e','pis','te','mo','lo','gi','a'],    count: 7 },
      { word: 'virtude',          syllables: ['vir','tu','de'],                      count: 3 },
      { word: 'transcendência',   syllables: ['trans','cen','dên','ci','a'],         count: 5 },
      { word: 'ontologia',        syllables: ['on','to','lo','gi','a'],              count: 5 },
      { word: 'providência',      syllables: ['pro','vi','dên','ci','a'],            count: 5 },
      { word: 'metafísica',       syllables: ['me','ta','fí','si','ca'],             count: 5 },
      { word: 'consciência',      syllables: ['cons','ci','ên','ci','a'],            count: 5 },
      { word: 'teleologia',       syllables: ['te','le','o','lo','gi','a'],          count: 6 },
      { word: 'salvação',         syllables: ['sal','va','ção'],                     count: 3 },
      { word: 'predestinação',    syllables: ['pre','des','ti','na','ção'],          count: 5 },
      { word: 'hermenêutica',     syllables: ['her','me','nêu','ti','ca'],           count: 5 },
      { word: 'escatologia',      syllables: ['es','ca','to','lo','gi','a'],         count: 6 },
    ]
  },

  {
    name: 'Contagem — Economia e História',
    type: 'contagem',
    words: [
      { word: 'inflação',           syllables: ['in','fla','ção'],                         count: 3 },
      { word: 'imperialismo',       syllables: ['im','pe','ri','a','lis','mo'],             count: 6 },
      { word: 'industrialização',   syllables: ['in','dus','tri','a','li','za','ção'],      count: 7 },
      { word: 'globalização',       syllables: ['glo','ba','li','za','ção'],                count: 5 },
      { word: 'liberalismo',        syllables: ['li','be','ra','lis','mo'],                 count: 5 },
      { word: 'colonialismo',       syllables: ['co','lo','ni','a','lis','mo'],             count: 6 },
      { word: 'parlamentarismo',    syllables: ['par','la','men','ta','ris','mo'],          count: 6 },
      { word: 'constitucional',     syllables: ['cons','ti','tu','ci','o','nal'],           count: 6 },
      { word: 'mercantilismo',      syllables: ['mer','can','ti','lis','mo'],               count: 5 },
      { word: 'burocracia',         syllables: ['bu','ro','cra','ci','a'],                  count: 5 },
      { word: 'aristocracia',       syllables: ['a','ris','to','cra','ci','a'],             count: 6 },
      { word: 'soberania',          syllables: ['so','be','ra','ni','a'],                   count: 5 },
    ]
  },

  // ── SEGMENTAÇÃO ──────────────────────────────────────────────────────────

  {
    name: 'Segmentação — Teologia e Filosofia',
    type: 'segmentacao',
    words: [
      { word: 'transubstanciação',  syllables: ['trans','subs','tan','ci','a','ção'] },
      { word: 'consubstancial',     syllables: ['con','subs','tan','ci','al'] },
      { word: 'escatológico',       syllables: ['es','ca','to','ló','gi','co'] },
      { word: 'transcendental',     syllables: ['trans','cen','den','tal'] },
      { word: 'fenomenologia',      syllables: ['fe','no','me','no','lo','gi','a'] },
      { word: 'predestinação',      syllables: ['pre','des','ti','na','ção'] },
      { word: 'misericórdia',       syllables: ['mi','se','ri','cór','di','a'] },
      { word: 'imutabilidade',      syllables: ['i','mu','ta','bi','li','da','de'] },
      { word: 'circuncisão',        syllables: ['cir','cun','ci','são'] },
      { word: 'ressurreição',       syllables: ['res','sur','rei','ção'] },
    ]
  },

  {
    name: 'Segmentação — Economia e História',
    type: 'segmentacao',
    words: [
      { word: 'industrialização',   syllables: ['in','dus','tri','a','li','za','ção'] },
      { word: 'constitucionalismo', syllables: ['cons','ti','tu','ci','o','na','lis','mo'] },
      { word: 'desindustrialização',syllables: ['de','sin','dus','tri','a','li','za','ção'] },
      { word: 'internacionalização',syllables: ['in','ter','na','ci','o','na','li','za','ção'] },
      { word: 'parlamentarismo',    syllables: ['par','la','men','ta','ris','mo'] },
      { word: 'contrarrevolução',   syllables: ['con','trar','re','vo','lu','ção'] },
      { word: 'descolonização',     syllables: ['des','co','lo','ni','za','ção'] },
      { word: 'mercantilismo',      syllables: ['mer','can','ti','lis','mo'] },
      { word: 'modernização',       syllables: ['mo','der','ni','za','ção'] },
      { word: 'imperialismo',       syllables: ['im','pe','ri','a','lis','mo'] },
    ]
  },

  // ── DELEÇÃO ───────────────────────────────────────────────────────────────

  {
    name: 'Deleção — Filosofia e Latim',
    type: 'delecao',
    items: [
      { word: 'filosofia',    remove: 'fi',    position: 'inicio', answer: 'losofia' },
      { word: 'ontologia',    remove: 'on',    position: 'inicio', answer: 'tologia' },
      { word: 'virtude',      remove: 'de',    position: 'final',  answer: 'virtu' },
      { word: 'teleologia',   remove: 'gia',   position: 'final',  answer: 'teleolo' },
      { word: 'salvação',     remove: 'sal',   position: 'inicio', answer: 'vação' },
      { word: 'providência',  remove: 'pro',   position: 'inicio', answer: 'vidência' },
      { word: 'consciência',  remove: 'cia',   position: 'final',  answer: 'consciên' },
      { word: 'metafísica',   remove: 'meta',  position: 'inicio', answer: 'física' },
      { word: 'hermenêutica', remove: 'ca',    position: 'final',  answer: 'hermenêuti' },
      { word: 'transcendência', remove: 'trans', position: 'inicio', answer: 'cendência' },
    ]
  },

  {
    name: 'Deleção — Economia e História',
    type: 'delecao',
    items: [
      { word: 'inflação',         remove: 'in',     position: 'inicio', answer: 'flação' },
      { word: 'exportação',       remove: 'ção',    position: 'final',  answer: 'exporta' },
      { word: 'liberalismo',      remove: 'lismo',  position: 'final',  answer: 'libera' },
      { word: 'burocracia',       remove: 'bu',     position: 'inicio', answer: 'rocracia' },
      { word: 'globalização',     remove: 'glo',    position: 'inicio', answer: 'balização' },
      { word: 'colonialismo',     remove: 'co',     position: 'inicio', answer: 'lonialismo' },
      { word: 'soberania',        remove: 'nia',    position: 'final',  answer: 'sobera' },
      { word: 'parlamentarismo',  remove: 'par',    position: 'inicio', answer: 'lamentarismo' },
      { word: 'mercantilismo',    remove: 'mer',    position: 'inicio', answer: 'cantilismo' },
      { word: 'modernização',     remove: 'mo',     position: 'inicio', answer: 'dernização' },
    ]
  },

  // ── SUBSTITUIÇÃO ─────────────────────────────────────────────────────────

  {
    name: 'Substituição — Geral I',
    type: 'substituicao',
    items: [
      { word: 'democracia',     target: 'demo',   replacement: 'tecno',   answer: 'tecnocracia' },
      { word: 'teologia',       target: 'teo',    replacement: 'bio',     answer: 'biologia' },
      { word: 'teleologia',     target: 'tele',   replacement: 'onto',    answer: 'ontologia' },
      { word: 'filosofia',      target: 'filo',   replacement: 'teoso',   answer: 'teosofia' },
      { word: 'aristocracia',   target: 'aristo', replacement: 'demo',    answer: 'democracia' },
      { word: 'burocracia',     target: 'buro',   replacement: 'demo',    answer: 'democracia' },
      { word: 'morfologia',     target: 'morfo',  replacement: 'onto',    answer: 'ontologia' },
      { word: 'epistemologia',  target: 'episte', replacement: 'onto',    answer: 'ontomologia' },
      { word: 'liberalismo',    target: 'liberal', replacement: 'capital', answer: 'capitalismo' },
      { word: 'imperialismo',   target: 'im',     replacement: 'capi',    answer: 'capitalismo' },
    ]
  },

  {
    name: 'Substituição — Geral II',
    type: 'substituicao',
    items: [
      { word: 'globalização',   target: 'global', replacement: 'modern',  answer: 'modernização' },
      { word: 'colonialismo',   target: 'coloni', replacement: 'liber',   answer: 'liberalismo' },
      { word: 'salvação',       target: 'sal',    replacement: 'tenta',   answer: 'tentação' },
      { word: 'predestinação',  target: 'pre',    replacement: 'conde',   answer: 'condenação' },
      { word: 'providência',    target: 'pro',    replacement: 'evi',     answer: 'evidência' },
      { word: 'transcendência', target: 'trans',  replacement: 'depen',   answer: 'dependência' },
      { word: 'consciência',    target: 'cons',   replacement: 'obe',     answer: 'obediência' },
      { word: 'soberania',      target: 'so',     replacement: 'tira',    answer: 'tirania' },
      { word: 'modernização',   target: 'mo',     replacement: 'globa',   answer: 'globalização' },
      { word: 'parlamentarismo',target: 'par',    replacement: 'popu',    answer: 'popularismo' },
    ]
  },

];
