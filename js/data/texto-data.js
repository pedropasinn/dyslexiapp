const TEXTO_MODULES = [
  {
    name: 'PT /s/ vs /z/',
    text: 'A soberania, segundo o sofista, não se sustenta sem silogismo. Zenão, o zeloso estoico, propôs paradoxos que desafiaram a lógica secular. O subsidiarismo, longe de ser solipsismo, exige uma rede de solidariedade que vai do zênite da autoridade ao solo da comunidade. A secessão, nesse quadro, é sempre um sintoma — nunca a solução. O zoroastrismo, com sua visão dual de cosmos, oferece uma analogia: entre a soberania e a servidão há um zodíaco inteiro de possibilidades. Cada signo, cada símbolo, cada sinopse dessa tradição aponta para a mesma verdade: sem zelo, o saber se torna sofisma.',
    questions: [
      { q: 'Qual filósofo é mencionado no texto?', a: 'Zenão' },
      { q: 'O que o subsidiarismo exige, segundo o texto?', a: 'Uma rede de solidariedade' },
      { q: 'Que tradição religiosa oferece uma analogia?', a: 'O zoroastrismo' },
      { q: 'Sem zelo, o que acontece com o saber?', a: 'Torna-se sofisma' },
    ]
  },
  {
    name: 'PT /ʃ/ vs /ʒ/',
    text: 'O chanceler, que já fora jesuíta, recebeu o xeque-mate geopolítico com a serenidade de quem jogara xadrez a vida inteira. A chancelaria, sob sua jurisprudência, enfrentou jeremíadas de charlatães e a xenofobia de jornalistas. O chamarilhão da gestão anterior deixou chicanas jurídicas que exigiam generosidade e julgamento. Xerife de si mesmo, jamais cedeu à jactância.',
    questions: [
      { q: 'Qual era a formação anterior do chanceler?', a: 'Jesuíta' },
      { q: 'O que a chancelaria enfrentou?', a: 'Jeremíadas de charlatães e xenofobia' },
      { q: 'O que o chamarilhão da gestão anterior deixou?', a: 'Chicanas jurídicas' },
    ]
  },
  {
    name: 'EN /θ/ vs /ð/',
    text: 'The theologian, therefore, put forth a theorem that went beyond the theoretical threshold of his discipline. Nevertheless, the thermodynamics of thought — the way authority generates heat through methodical reasoning — meant that his thesis weathered the mathematical scrutiny. Furthermore, the therapeutic value of thoroughness cannot be understated: thoughtfulness, whether in theology or theory, always yields authority.',
    questions: [
      { q: 'What did the theologian put forth?', a: 'A theorem' },
      { q: 'What does "thermodynamics of thought" refer to?', a: 'The way authority generates heat through methodical reasoning' },
      { q: 'What always yields authority?', a: 'Thoughtfulness' },
    ]
  },
  {
    name: 'Latim',
    text: 'Caelum et terra praedicant gloriam Dei. Ecclesia, regina gratiae, magnificat Dominum in iustitia et poenitentia. Descendit de caelis pro redemptione nostra. Praesentia divina in oeconomia salutis manifestatur per scientiam et prudentiam. Agnus Dei, qui tollit peccata mundi, dona nobis pacem.',
    questions: [
      { q: 'O que caelum et terra praedicam?', a: 'Gloriam Dei (a glória de Deus)' },
      { q: 'Como a ecclesia é chamada?', a: 'Regina gratiae (rainha da graça)' },
      { q: 'O que desce do céu (de caelis)?', a: 'Descendit pro redemptione nostra' },
    ]
  },
  // ── PT /λ/ vs /j/ ──
  {
    name: 'PT /λ/ vs /j/',
    text: 'O conselheiro, filho de uma família marcada pelo exílio, dedicou sua vida ao trabalho de reconciliação. Sua maravilha era transformar humilhação em orgulho legítimo. No espelho da história, viu que o evangélio não pede conciliação covarde, mas batalha pelo acolhimento. O pecúlio que deixou aos seus não foi material — foi o vermelho vivo da coragem estampado em cada olho que soube enxergar o outro.',
    questions: [
      { q: 'O que marcava a família do conselheiro?', a: 'O exílio' },
      { q: 'Qual era a maravilha do conselheiro?', a: 'Transformar humilhação em orgulho legítimo' },
      { q: 'Que tipo de pecúlio ele deixou?', a: 'Não material — a coragem' },
      { q: 'O que o evangélio pede, segundo o texto?', a: 'Batalha pelo acolhimento' },
    ]
  },
  // ── PT /ɲ/ ──
  {
    name: 'PT /ɲ/',
    text: 'O senhor do engenho, estranho à engenharia moderna, desenhou o caminho de uma companhia que mudaria o destino colonial. No vinho da tradição, banhou cada testemunho dos seus. A rainha, de tamanho poder, reconheceu que sem a vizinhança dos aliados nenhum governo se sustenta. O galinheiro das intrigas palacianas era domínio do cunhado, mas o senhorio verdadeiro pertencia a quem caminhava com o povo.',
    questions: [
      { q: 'O que o senhor do engenho desenhou?', a: 'O caminho de uma companhia' },
      { q: 'O que a rainha reconheceu?', a: 'Que sem a vizinhança dos aliados nenhum governo se sustenta' },
      { q: 'A quem pertencia o senhorio verdadeiro?', a: 'A quem caminhava com o povo' },
    ]
  },
  // ── PT /r/ vs /ʁ/ ──
  {
    name: 'PT /r/ vs /ʁ/',
    text: 'A era barroca, cara ao operário do espírito, não erra ao narrar a corrupção dos territórios coloniais. O carro da história avança sobre trilhos de ferro, e quem mora na paróquia sabe que o curral do poder é mais perigoso que a serra. O paradigma narrativo desse período ampara uma verdade: entre o caro e o barato, entre o coral e o curral, a cerimônia do saber exige rigor — nunca a mera repetição.',
    questions: [
      { q: 'O que a era barroca narra?', a: 'A corrupção dos territórios coloniais' },
      { q: 'Sobre que trilhos avança o carro da história?', a: 'Trilhos de ferro' },
      { q: 'O que a cerimônia do saber exige?', a: 'Rigor, nunca a mera repetição' },
      { q: 'O que é mais perigoso que a serra?', a: 'O curral do poder' },
    ]
  },
  // ── PT /e/ vs /ɛ/ ──
  {
    name: 'PT /e/ vs /ɛ/',
    text: 'O acadêmico, célebre por sua polêmica sobre ética, publicou uma série de ensaios sobre o fenômeno herético na época medieval. O prêmio veio com a miséria de quem busca gênero novo num campo estéril. A pérola do seu êxodo intelectual foi mostrar que o interêsse pelo hérege não é mera curiosidade — é reconhecer que toda época carrega, em seu gênero próprio, a semente de um tremendo conflito entre o aberto e o fechado.',
    questions: [
      { q: 'Sobre que tema o acadêmico publicou ensaios?', a: 'O fenômeno herético na época medieval' },
      { q: 'O que foi a pérola do seu êxodo intelectual?', a: 'Mostrar que o interêsse pelo hérege não é mera curiosidade' },
      { q: 'O que toda época carrega?', a: 'A semente de um tremendo conflito entre o aberto e o fechado' },
    ]
  },
  // ── PT /o/ vs /ɔ/ ──
  {
    name: 'PT /o/ vs /ɔ/',
    text: 'O filósofo, autônomo por propósito, escreveu uma crônica sobre o colóquio econômico que dividiu o órgão simbólico da nação. A fórmula era óbvia: sem histórico de diálogo, todo debate se torna monótono. O avô, que outrora fora demônio da retórica, e a avó, que guardava a tradição, representavam os pós e os prós de toda civilização. Pôs-se então a escrever sobre o ócio criativo — aquele que transforma o óbvio em revelação.',
    questions: [
      { q: 'Sobre o que o filósofo escreveu?', a: 'Uma crônica sobre o colóquio econômico' },
      { q: 'Qual era a fórmula óbvia?', a: 'Sem histórico de diálogo, todo debate se torna monótono' },
      { q: 'O que o avô representava?', a: 'O demônio da retórica' },
      { q: 'O que o ócio criativo transforma?', a: 'O óbvio em revelação' },
    ]
  },
  // ── PT nasais ã/ão ──
  {
    name: 'PT nasais ã/ão',
    text: 'A irmã cristã dedicou sua oração à nação que perdera a tradição da civilização justa. A salvação, dizia, não vem da insurreição, mas da redenção paciente. Como aldeã que planta a maçã e espera a colheita, a cidadã pagã convertida guardava a constituição no coração. A jurisdição do espírito não conhece absolvição fácil — pede que cada irmão, cada alemã, cada orfã, aceite o peso da romã partida: amarga por fora, doce por dentro.',
    questions: [
      { q: 'A que a irmã cristã dedicou sua oração?', a: 'À nação que perdera a tradição da civilização justa' },
      { q: 'De onde vem a salvação, segundo o texto?', a: 'Da redenção paciente, não da insurreição' },
      { q: 'O que a jurisdição do espírito pede?', a: 'Que cada um aceite o peso da romã partida' },
    ]
  },
  // ── PT c = /k/ vs /s/ ──
  {
    name: 'PT c = /k/ vs /s/',
    text: 'O ceticismo diante do comunismo não dispensa o cânone da civilização. No concílio, a cerimônia revelou que o corporativismo cosmológico era, na verdade, censura disfarçada de ciência. O catolicismo, com seu capital simbólico, resiste ao cinismo pela causalidade da fé: cada cultura produz seu científico, cada certidão documenta uma cogitação. Entre o cimento do pragmatismo e a célebre aspiração ao transcendente, a civilização avança — sem nunca abandonar a circulação das ideias.',
    questions: [
      { q: 'O que o ceticismo não dispensa?', a: 'O cânone da civilização' },
      { q: 'O que a cerimônia do concílio revelou?', a: 'Que o corporativismo cosmológico era censura disfarçada de ciência' },
      { q: 'Como o catolicismo resiste ao cinismo?', a: 'Pela causalidade da fé' },
      { q: 'Entre que pólos a civilização avança?', a: 'Entre o cimento do pragmatismo e a célebre aspiração ao transcendente' },
    ]
  },
  // ── PT g = /g/ vs /ʒ/ ──
  {
    name: 'PT g = /g/ vs /ʒ/',
    text: 'A governança da geopolítica exige que se conheça a genealogia dos conflitos. A gênese de toda guerra é o genocídio da gentileza. A gestão pública, quando guiada pela geografia do poder e não pela geometria da justiça, produz globalização sem glória. O gênio da graça, porém, transforma o geral em particular: da guilhotina ao diálogo, da girândola ao gnosticismo, todo grande povo descobre que a verdadeira grandeza é servir.',
    questions: [
      { q: 'O que a governança da geopolítica exige?', a: 'Que se conheça a genealogia dos conflitos' },
      { q: 'Qual é a gênese de toda guerra, segundo o texto?', a: 'O genocídio da gentileza' },
      { q: 'O que a gestão pública produz quando mal guiada?', a: 'Globalização sem glória' },
      { q: 'Qual é a verdadeira grandeza?', a: 'Servir' },
    ]
  },
  // ── EN /æ/ vs /ɑː/ ──
  {
    name: 'EN /æ/ vs /ɑː/',
    text: 'The candidate stood at the sanctuary, grappling with a paradox that had haunted capitalism since its inception. The tragedy of the mandate, he argued, was not its rational ambition but its fundamental fallacy: that faction could replace baptism as the basis of communal belonging. Half the parliament demanded calm; the other half demanded action. The drama of democratic man is that he must balance command with compassion, lament with pragmatism.',
    questions: [
      { q: 'Where did the candidate stand?', a: 'At the sanctuary' },
      { q: 'What was the tragedy of the mandate?', a: 'That faction could replace baptism as the basis of communal belonging' },
      { q: 'What must democratic man balance?', a: 'Command with compassion, lament with pragmatism' },
      { q: 'What had haunted capitalism?', a: 'A paradox' },
    ]
  },
  // ── EN /ɪ/ vs /iː/ ──
  {
    name: 'EN /ɪ/ vs /iː/',
    text: 'The principle of liberty, written into every creed and treaty, demands that the spirit of criticism remain free. A preacher may decree what belief to seek, but the system of reason insists that no victim of rhetoric should surrender freedom without scrutiny. The priest, reading the scriptures with literal precision, recognized that even the sacred feat of faith requires the discipline of the written word.',
    questions: [
      { q: 'What does the principle of liberty demand?', a: 'That the spirit of criticism remain free' },
      { q: 'What does the system of reason insist upon?', a: 'That no victim of rhetoric should surrender freedom without scrutiny' },
      { q: 'What did the priest recognize?', a: 'That even the sacred feat of faith requires the discipline of the written word' },
    ]
  },
  // ── EN /ʌ/ vs /ɒ/ ──
  {
    name: 'EN /ʌ/ vs /ɒ/',
    text: 'Justice, the philosopher argued, cannot flourish under corruption. The struggle of the republic is fundamentally a struggle for trust: trust in doctrine, trust in the judgment of the prophet, trust in knowledge that transcends monopoly. The scholar of economics understood that cultural suffering often stems from the utter collapse of democratic institutions. Without philosophy, politics becomes nothing but a contest of power.',
    questions: [
      { q: 'What cannot flourish under corruption?', a: 'Justice' },
      { q: 'What is the struggle of the republic fundamentally about?', a: 'A struggle for trust' },
      { q: 'What did the scholar of economics understand?', a: 'That cultural suffering often stems from the collapse of democratic institutions' },
      { q: 'Without philosophy, what does politics become?', a: 'Nothing but a contest of power' },
    ]
  },
  // ── EN /w/ vs /v/ ──
  {
    name: 'EN /w/ vs /v/',
    text: 'Wisdom and virtue have always been the twin pillars of the Western worldview. The vocation of the witness is to worship truth, even when vanity and violence threaten to overwhelm the vanguard. Warfare may bring wealth, but only welfare built on valor survives the verdict of history. The vestment of the priest, the wage of the worker, the vengeance of the wronged — each reflects a wholesome will to seek justice beyond mere vanity.',
    questions: [
      { q: 'What are the twin pillars of the Western worldview?', a: 'Wisdom and virtue' },
      { q: 'What is the vocation of the witness?', a: 'To worship truth' },
      { q: 'What kind of welfare survives the verdict of history?', a: 'Welfare built on valor' },
    ]
  },
  // ── EN /h/ ──
  {
    name: 'EN /h/',
    text: 'The history of heresy is also the history of hierarchy. Every hour, the honest hermit questioned the hypothesis that hegemony could coexist with holiness. Humanism, heir to a heritage of humility, faces the hostility of hypocrisy in every age. The homily delivered in honor of the saints reminded the congregation that honesty, however humble, is the foundation upon which all hierarchy must be built.',
    questions: [
      { q: 'What is the history of heresy also the history of?', a: 'Hierarchy' },
      { q: 'What hypothesis did the hermit question?', a: 'That hegemony could coexist with holiness' },
      { q: 'What does humanism face in every age?', a: 'The hostility of hypocrisy' },
      { q: 'What is the foundation upon which hierarchy must be built?', a: 'Honesty' },
    ]
  },
  // ── EN /r/ ──
  {
    name: 'EN /r/',
    text: 'The rhetoric of the Reformation reshaped reason itself. Revolution and revelation are not merely particular historical events but recurring patterns of reconciliation. The Renaissance brought repentance for past errors and a republic of letters that gave power to the written word. Each chapter of this transformation matters: from the righteousness of the reformer to the calendar of councils, the story of Western reason is one of perpetual renewal.',
    questions: [
      { q: 'What did the rhetoric of the Reformation reshape?', a: 'Reason itself' },
      { q: 'What are revolution and revelation described as?', a: 'Recurring patterns of reconciliation' },
      { q: 'What did the Renaissance bring?', a: 'Repentance for past errors and a republic of letters' },
      { q: 'What is the story of Western reason?', a: 'One of perpetual renewal' },
    ]
  },
  // ── EN /ŋ/ vs /n/ ──
  {
    name: 'EN /ŋ/ vs /n/',
    text: 'Reasoning, teaching, and preaching — these are the governing activities of the thinking human being. Suffering and belonging are not foreign to the golden tradition of modern understanding. Bringing together the certain and the uncertain is what reading, in its deepest sense, has always meant. The puritan and the pagan alike found meaning in the bringing forth of understanding from the written word.',
    questions: [
      { q: 'What are the governing activities of the thinking human being?', a: 'Reasoning, teaching, and preaching' },
      { q: 'What are not foreign to the golden tradition?', a: 'Suffering and belonging' },
      { q: 'What is reading in its deepest sense?', a: 'Bringing together the certain and the uncertain' },
    ]
  },
  // ── EN /dʒ/ vs /tʃ/ ──
  {
    name: 'EN /dʒ/ vs /tʃ/',
    text: 'Justice and charity were the twin challenges that the chancellor of Jerusalem brought before the church. The genesis of modern jurisprudence owes much to the geography of chivalry: every chamber where a judge presided reflected a choice between vengeance and mercy. Journalism chronicles these choices, from genocide to Christianity\'s greatest acts of generosity. Chronology alone cannot capture this — only the living judgment of each generation.',
    questions: [
      { q: 'What were the twin challenges brought before the church?', a: 'Justice and charity' },
      { q: 'What does the genesis of modern jurisprudence owe much to?', a: 'The geography of chivalry' },
      { q: 'What did every chamber where a judge presided reflect?', a: 'A choice between vengeance and mercy' },
      { q: 'What cannot capture this story alone?', a: 'Chronology' },
    ]
  },
  // ── EN /ə/ (schwa) ──
  {
    name: 'EN /ə/ (schwa)',
    text: 'About the economy of history, the dominant theology had little to say that was separate from patronage. Parliament, on each occasion, sought a moderate and eloquent sovereign who could govern without reducing the common good to a particular interest. The elaborate machinery of power — economy, theology, history — rests upon sounds so subtle that even the most eloquent speaker barely notices them: the unstressed murmur at the heart of every English word.',
    questions: [
      { q: 'What did parliament seek on each occasion?', a: 'A moderate and eloquent sovereign' },
      { q: 'What should a sovereign govern without doing?', a: 'Reducing the common good to a particular interest' },
      { q: 'What rests upon subtle sounds?', a: 'The elaborate machinery of power — economy, theology, history' },
      { q: 'What is described as "the unstressed murmur"?', a: 'The schwa sound at the heart of every English word' },
    ]
  }
];
