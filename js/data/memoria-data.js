// memoria-data.js — Dados para o Reading Span Test (Daneman & Carpenter, 1980)
// Vocabulário intelectual: filosofia, teologia, economia, história

const READING_SPAN_SETS = [

  // ── Span 2 ──────────────────────────────────────────────────────────────
  { span: 2, sets: [
    { sentences: [
      { text: 'O filósofo contemplou a verdade por trás de cada dilema.', lastWord: 'dilema' },
      { text: 'A economia do país dependia inteiramente das exportações de café.', lastWord: 'café' },
    ]},
    { sentences: [
      { text: 'A teologia medieval buscava conciliar rigorosamente a fé e a razão.', lastWord: 'razão' },
      { text: 'O historiador descobriu um manuscrito esquecido no porão.', lastWord: 'porão' },
    ]},
  ]},

  // ── Span 3 ──────────────────────────────────────────────────────────────
  { span: 3, sets: [
    { sentences: [
      { text: 'Aristóteles definiu a virtude como um hábito adquirido pela prática constante.', lastWord: 'constante' },
      { text: 'O Concílio de Trento reformulou os fundamentos doutrinários da Igreja Católica.', lastWord: 'Católica' },
      { text: 'A inflação galopante destruiu a poupança de toda uma geração de trabalhadores.', lastWord: 'trabalhadores' },
    ]},
    { sentences: [
      { text: 'Platão argumentou que o conhecimento verdadeiro é reminiscência da alma imortal.', lastWord: 'imortal' },
      { text: 'O imperador romano consolidou seu poder por meio de alianças e conquistas militares.', lastWord: 'militares' },
      { text: 'A lógica formal estabelece regras precisas para distinguir argumentos válidos do sofisma.', lastWord: 'sofisma' },
    ]},
  ]},

  // ── Span 4 ──────────────────────────────────────────────────────────────
  { span: 4, sets: [
    { sentences: [
      { text: 'A escolástica tentou harmonizar a filosofia grega com a revelação cristã medieval.', lastWord: 'medieval' },
      { text: 'Adam Smith descreveu a divisão do trabalho como fonte primária da riqueza nacional.', lastWord: 'nacional' },
      { text: 'O tribunal da Inquisição usava confissões forçadas para condenar os acusados de heresia.', lastWord: 'heresia' },
      { text: 'Sócrates preferiu a morte a comprometer sua fidelidade à busca pelo conhecimento.', lastWord: 'conhecimento' },
    ]},
    { sentences: [
      { text: 'A fenomenologia de Husserl propõe suspender julgamentos sobre a existência do mundo exterior.', lastWord: 'exterior' },
      { text: 'O monopólio estatal sobre o comércio de especiarias gerou imensos conflitos coloniais.', lastWord: 'coloniais' },
      { text: 'O dogma da Trindade afirma que três pessoas divinas compartilham uma única substância.', lastWord: 'substância' },
      { text: 'A Revolução Francesa aboliu os privilégios feudais e proclamou a igualdade perante a lei.', lastWord: 'lei' },
    ]},
  ]},

  // ── Span 5 ──────────────────────────────────────────────────────────────
  { span: 5, sets: [
    { sentences: [
      { text: 'Kant distinguiu fenômeno e nômeno para delimitar os limites da razão pura.', lastWord: 'pura' },
      { text: 'A encíclica papal abordou a questão social com base nos princípios da doutrina cristã.', lastWord: 'cristã' },
      { text: 'O mercantilismo acumulava metais preciosos como medida fundamental da riqueza do Estado.', lastWord: 'Estado' },
      { text: 'Alexandre o Grande difundiu a cultura helênica até as fronteiras do subcontinente indiano.', lastWord: 'indiano' },
      { text: 'O silogismo aristotélico deduz uma conclusão necessária a partir de duas premissas verdadeiras.', lastWord: 'verdadeiras' },
    ]},
    { sentences: [
      { text: 'Agostinho de Hipona converteu-se após anos de busca intelectual e conflito moral profundo.', lastWord: 'profundo' },
      { text: 'O liberalismo clássico defende a liberdade individual contra as interferências arbitrárias do poder.', lastWord: 'poder' },
      { text: 'Tucídides narrou a guerra do Peloponeso com rigor analítico e distância crítica dos fatos.', lastWord: 'fatos' },
      { text: 'A dialética hegeliana progride por contradições que se resolvem em sínteses cada vez mais ricas.', lastWord: 'ricas' },
      { text: 'O latim eclesiástico preservou a herança clássica no interior dos mosteiros medievais europeus.', lastWord: 'europeus' },
    ]},
  ]},

  // ── Span 6 ──────────────────────────────────────────────────────────────
  { span: 6, sets: [
    { sentences: [
      { text: 'A metafísica investiga as categorias mais gerais do ser, como substância, causa e necessidade.', lastWord: 'necessidade' },
      { text: 'O concílio niceno estabeleceu o cânon trinitário contra a heresia ariana no século quarto.', lastWord: 'quarto' },
      { text: 'Keynes argumentou que a demanda agregada determina o nível de emprego em economias modernas.', lastWord: 'modernas' },
      { text: 'Júlio César cruzou o Rubicão em desafio ao senado, precipitando a guerra civil romana.', lastWord: 'romana' },
      { text: 'A epistemologia analítica distingue crença justificada de mero conhecimento proposicional verdadeiro.', lastWord: 'verdadeiro' },
      { text: 'O Renascimento redescobriu os textos gregos e latinos que tinham sido esquecidos na Idade Média.', lastWord: 'Média' },
    ]},
    { sentences: [
      { text: 'Spinoza identificou Deus com a totalidade da natureza, negando qualquer transcendência pessoal divina.', lastWord: 'divina' },
      { text: 'A escolha pública analisa as decisões políticas como produto de interesses individuais calculados.', lastWord: 'calculados' },
      { text: 'A patrística elaborou a teologia cristã em diálogo criativo com a filosofia neoplatônica tardia.', lastWord: 'tardia' },
      { text: 'Heródoto viajou pelo Mediterrâneo recolhendo relatos que moldaram a historiografia ocidental antiga.', lastWord: 'antiga' },
      { text: 'A crítica da razão pura examina as condições de possibilidade de qualquer experiência humana válida.', lastWord: 'válida' },
      { text: 'O feudalismo organizava a sociedade medieval em torno de vínculos pessoais de lealdade e proteção.', lastWord: 'proteção' },
    ]},
  ]},

];
