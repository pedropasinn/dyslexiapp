// morfologia-data.js — Dados para consciencia morfologica
// Exercicios: decomposicao em morfemas + arvore de palavras (familias)

const MORFOLOGIA_MODULES = [
  {
    name: 'Raízes Latinas',
    exercises: [
      {
        word: 'subsidiário',
        morphemes: ['sub-', 'sidi', '-ário'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['pre-', 'sedi', '-eiro', 'super-'],
        root: { word: 'subsidium', meaning: 'ajuda, recurso (lat.)' },
        family: ['subsídio', 'subsidiário', 'subsidiar', 'subsidiariedade']
      },
      {
        word: 'predestinação',
        morphemes: ['pre-', 'destin', '-ação'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['pos-', 'destin', '-mente', 'pro-'],
        root: { word: 'destinare', meaning: 'fixar, determinar (lat.)' },
        family: ['destino', 'predestinar', 'predestinação', 'destinatário', 'destinar']
      },
      {
        word: 'circunscrição',
        morphemes: ['circun-', 'scri', '-ção'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['contra-', 'escri', '-mento', 'trans-'],
        root: { word: 'scribere', meaning: 'escrever (lat.)' },
        family: ['escrever', 'circunscrever', 'inscrição', 'prescrição', 'transcrição', 'descrição']
      },
      {
        word: 'insubordinação',
        morphemes: ['in-', 'sub-', 'ordin', '-ação'],
        slots: ['prefixo', 'prefixo', 'raiz', 'sufixo'],
        distractors: ['des-', 'super-', 'orden', '-mente'],
        root: { word: 'ordinare', meaning: 'pôr em ordem (lat.)' },
        family: ['ordem', 'ordenar', 'subordinar', 'insubordinar', 'coordenar', 'extraordinário']
      },
      {
        word: 'transubstanciação',
        morphemes: ['trans-', 'substânci', '-ação'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['inter-', 'substanci', '-mente', 'super-'],
        root: { word: 'substantia', meaning: 'essência, substância (lat.)' },
        family: ['substância', 'substancial', 'transubstanciar', 'consubstancial']
      },
    ]
  },
  {
    name: 'Raízes Gregas',
    exercises: [
      {
        word: 'epistemologia',
        morphemes: ['epistemo-', 'logia'],
        slots: ['raiz', 'sufixo'],
        distractors: ['epistola-', '-sofia', '-nomia', 'onto-'],
        root: { word: 'epistēmē + logos', meaning: 'conhecimento + estudo (gr.)' },
        family: ['episteme', 'epistemologia', 'epistemológico', 'epistêmico']
      },
      {
        word: 'soteriologia',
        morphemes: ['soterio-', 'logia'],
        slots: ['raiz', 'sufixo'],
        distractors: ['soterio-', '-nomia', '-sofia', 'escato-'],
        root: { word: 'sōtēria + logos', meaning: 'salvação + estudo (gr.)' },
        family: ['soteriologia', 'soteriológico', 'soter (salvador)']
      },
      {
        word: 'escatologia',
        morphemes: ['escato-', 'logia'],
        slots: ['raiz', 'sufixo'],
        distractors: ['onto-', '-grafia', '-nomia', 'proto-'],
        root: { word: 'eskhatos + logos', meaning: 'último + estudo (gr.)' },
        family: ['escatologia', 'escatológico', 'escaton']
      },
      {
        word: 'aristocracia',
        morphemes: ['aristo-', 'cracia'],
        slots: ['raiz', 'sufixo'],
        distractors: ['auto-', '-logia', '-sofia', 'demo-'],
        root: { word: 'aristos + kratos', meaning: 'melhor + poder (gr.)' },
        family: ['aristocracia', 'aristocrata', 'aristocrático', 'democracia', 'teocracia', 'plutocracia']
      },
      {
        word: 'filantropia',
        morphemes: ['filo-', 'antropo-', '-ia'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['fono-', 'teo-', '-logia', 'mis-'],
        root: { word: 'philos + anthrōpos', meaning: 'amigo + ser humano (gr.)' },
        family: ['filantropia', 'filantropo', 'filantrópico', 'misantropia', 'antropologia']
      },
    ]
  },
  {
    name: 'Prefixos Teológicos',
    exercises: [
      {
        word: 'consubstancial',
        morphemes: ['con-', 'substânci', '-al'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['trans-', 'substanci', '-oso', 'anti-'],
        root: { word: 'con + substantia', meaning: 'junto + essência (lat.)' },
        family: ['consubstancial', 'consubstancialidade', 'substância', 'transubstanciação']
      },
      {
        word: 'providência',
        morphemes: ['pro-', 'vidênci', '-a'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['pre-', 'vivênci', '-ia', 'pos-'],
        root: { word: 'pro + videre', meaning: 'adiante + ver (lat.)' },
        family: ['providência', 'providencial', 'prover', 'provisão', 'previdência']
      },
      {
        word: 'ressurreição',
        morphemes: ['re-', 'surrei', '-ção'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['in-', 'surgi', '-mento', 'des-'],
        root: { word: 're + surgere', meaning: 'de novo + levantar (lat.)' },
        family: ['ressurreição', 'ressurgir', 'ressurgimento', 'insurgir', 'surgir']
      },
      {
        word: 'predestinação',
        morphemes: ['pre-', 'destin', '-ação'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['pos-', 'deter', '-mente', 'contra-'],
        root: { word: 'prae + destinare', meaning: 'antes + fixar (lat.)' },
        family: ['predestinação', 'predestinar', 'destino', 'destinação', 'destinatário']
      },
      {
        word: 'interceder',
        morphemes: ['inter-', 'ced', '-er'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['intra-', 'cess', '-ir', 'contra-'],
        root: { word: 'inter + cedere', meaning: 'entre + ir/ceder (lat.)' },
        family: ['interceder', 'intercessão', 'intercessor', 'proceder', 'conceder', 'anteceder']
      },
    ]
  },
  {
    name: 'Vocabulário Econômico',
    exercises: [
      {
        word: 'inflação',
        morphemes: ['in-', 'fla', '-ção'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['de-', 'flu', '-mento', 'ex-'],
        root: { word: 'inflare', meaning: 'soprar para dentro (lat.)' },
        family: ['inflação', 'inflacionar', 'inflacionário', 'deflação', 'estagflação']
      },
      {
        word: 'monopólio',
        morphemes: ['mono-', 'pólio'],
        slots: ['prefixo', 'raiz'],
        distractors: ['poli-', 'fólio', 'duo-', '-cracia'],
        root: { word: 'monos + pōlein', meaning: 'único + vender (gr.)' },
        family: ['monopólio', 'monopolista', 'monopolizar', 'oligopólio', 'duopólio']
      },
      {
        word: 'exportação',
        morphemes: ['ex-', 'porta', '-ção'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['im-', 'porta', '-mento', 'trans-'],
        root: { word: 'ex + portare', meaning: 'para fora + carregar (lat.)' },
        family: ['exportação', 'exportar', 'importação', 'importar', 'transportar', 'portátil']
      },
      {
        word: 'microeconomia',
        morphemes: ['micro-', 'econo', '-mia'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['macro-', 'ecolo', '-logia', 'meta-'],
        root: { word: 'mikros + oikonomia', meaning: 'pequeno + administração do lar (gr.)' },
        family: ['microeconomia', 'macroeconomia', 'economia', 'econômico', 'economista']
      },
      {
        word: 'desvalorização',
        morphemes: ['des-', 'valor', '-ização'],
        slots: ['prefixo', 'raiz', 'sufixo'],
        distractors: ['re-', 'valer', '-mente', 'super-'],
        root: { word: 'dis + valor', meaning: 'negação + valor (lat.)' },
        family: ['desvalorização', 'desvalorizar', 'valorização', 'valorizar', 'valor', 'sobrevalorizar']
      },
    ]
  },
];
