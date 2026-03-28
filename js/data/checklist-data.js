// Checklist organizado por categorias (Shaywitz cap. 19 — metacognicao)
const CHECKLIST_CATEGORIES = [
  {
    name: 'Decodificacao',
    items: [
      'Distingui corretamente os fonemas-alvo',
      'Nao confundi com sons parecidos',
      'Pronuncia com articulacao correta (sonoridade, friccao, etc.)',
    ]
  },
  {
    name: 'Fluencia',
    items: [
      'Ritmo natural, sem silabar em excesso',
      'Velocidade adequada — nem lento demais, nem atropelando',
      'Entonacao e prosodia refletiram o significado do texto',
      'Respeitei a pontuacao ao ler (pausas em virgulas e pontos)',
    ]
  },
  {
    name: 'Compreensao',
    items: [
      'Compreendi a ideia principal do texto',
      'Consegui visualizar mentalmente o conteudo',
      'Fiz conexoes com conhecimentos que ja tenho',
      'Poderia explicar as ideias principais a alguem',
    ]
  },
  {
    name: 'Metacognicao',
    items: [
      'Percebi quando nao entendi algo e reli o trecho',
      'Monitorei minha propria leitura ao longo do texto',
    ]
  }
];

// Flat list para compatibilidade
const CHECKLIST_ITEMS = CHECKLIST_CATEGORIES.flatMap(c => c.items);

const CHECKLIST_LABELS = ['✗', '~', '✓', '✓✓'];

