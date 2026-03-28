const TEXTO_MODULES = [
  {
    name: 'PT /s/ vs /z/',
    vocabulary: [
      { word: 'sofisma', definition: 'Argumento aparentemente válido mas logicamente falso; raciocínio enganoso.' },
      { word: 'silogismo', definition: 'Forma de raciocínio dedutivo com premissas e conclusão (ex.: "Todo homem é mortal...").' },
      { word: 'subsidiarismo', definition: 'Princípio político segundo o qual decisões devem ser tomadas no nível mais local possível.' },
      { word: 'solipsismo', definition: 'Posição filosófica que afirma só existir a própria mente; isolamento radical do eu.' },
      { word: 'zoroastrismo', definition: 'Religião persa antiga fundada por Zaratustra, baseada na dualidade entre bem e mal.' },
    ],
    text: 'A soberania, segundo o sofista, não se sustenta sem silogismo. Zenão, o zeloso estoico, propôs paradoxos que desafiaram a lógica secular. O subsidiarismo, longe de ser solipsismo, exige uma rede de solidariedade que vai do zênite da autoridade ao solo da comunidade. A secessão, nesse quadro, é sempre um sintoma — nunca a solução. O zoroastrismo, com sua visão dual de cosmos, oferece uma analogia: entre a soberania e a servidão há um zodíaco inteiro de possibilidades. Cada signo, cada símbolo, cada sinopse dessa tradição aponta para a mesma verdade: sem zelo, o saber se torna sofisma.',
    questions: [
      { q: 'Qual filósofo é mencionado no texto?', a: 'Zenão', level: 'literal', options: ['Sócrates', 'Zenão', 'Aristóteles', 'Platão'] },
      { q: 'O que o subsidiarismo exige, segundo o texto?', a: 'Uma rede de solidariedade', level: 'literal', options: ['Uma rede de solidariedade', 'Um silogismo perfeito', 'A secessão política', 'O solipsismo individual'] },
      { q: 'Que tradição religiosa oferece uma analogia?', a: 'O zoroastrismo', level: 'literal', options: ['O budismo', 'O estoicismo', 'O zoroastrismo', 'O judaísmo'] },
      { q: 'Sem zelo, o que acontece com o saber?', a: 'Torna-se sofisma', level: 'inferencial', options: ['Torna-se sofisma', 'Torna-se ciência', 'Torna-se paradoxo', 'Torna-se silogismo'] },
    ]
  },
  {
    name: 'PT /ʃ/ vs /ʒ/',
    vocabulary: [
      { word: 'chancelaria', definition: 'Órgão governamental responsável pelas relações exteriores; ministério das relações exteriores.' },
      { word: 'jeremíada', definition: 'Lamento prolongado e amargo; discurso de queixa e lamentação (de Jeremias, profeta bíblico).' },
      { word: 'charlatão', definition: 'Pessoa que finge conhecimento ou habilidade que não possui; impostor.' },
      { word: 'xenofobia', definition: 'Aversão ou hostilidade a estrangeiros ou ao que é estranho e diferente.' },
      { word: 'jactância', definition: 'Vaidade excessiva; ato de se vangloriar de modo ostensivo e inoportuno.' },
    ],
    text: 'O chanceler, que já fora jesuíta, recebeu o xeque-mate geopolítico com a serenidade de quem jogara xadrez a vida inteira. A chancelaria, sob sua jurisprudência, enfrentou jeremíadas de charlatães e a xenofobia de jornalistas. O chamarilhão da gestão anterior deixou chicanas jurídicas que exigiam generosidade e julgamento. Xerife de si mesmo, jamais cedeu à jactância.',
    questions: [
      { q: 'Qual era a formação anterior do chanceler?', a: 'Jesuíta', level: 'literal', options: ['Advogado', 'Jesuíta', 'Jornalista', 'General'] },
      { q: 'O que a chancelaria enfrentou?', a: 'Jeremíadas de charlatães e xenofobia', level: 'literal', options: ['Jeremíadas de charlatães e xenofobia', 'Guerras e conflitos armados', 'Crises econômicas internas', 'Reformas constitucionais'] },
      { q: 'Por que o chanceler é comparado a um jogador de xadrez?', a: 'Pela serenidade diante de desafios estratégicos', level: 'inferencial', options: ['Pela serenidade diante de desafios estratégicos', 'Porque era campeão de xadrez', 'Porque controlava todas as peças políticas', 'Porque usava gambitos diplomáticos'] },
    ]
  },
  {
    name: 'EN /θ/ vs /ð/',
    vocabulary: [
      { word: 'theorem', definition: 'A proposition that has been or can be proved on the basis of explicit assumptions.' },
      { word: 'threshold', definition: 'The point at which something begins; the limit or boundary of a domain.' },
      { word: 'thermodynamics', definition: 'The branch of physics dealing with heat, energy, and their transformations.' },
      { word: 'thoroughness', definition: 'The quality of being complete and careful; attending to every detail.' },
    ],
    text: 'The theologian, therefore, put forth a theorem that went beyond the theoretical threshold of his discipline. Nevertheless, the thermodynamics of thought — the way authority generates heat through methodical reasoning — meant that his thesis weathered the mathematical scrutiny. Furthermore, the therapeutic value of thoroughness cannot be understated: thoughtfulness, whether in theology or theory, always yields authority.',
    questions: [
      { q: 'What did the theologian put forth?', a: 'A theorem', level: 'literal', options: ['A hypothesis', 'A theorem', 'A prayer', 'A criticism'] },
      { q: 'What does "thermodynamics of thought" metaphorically refer to?', a: 'The way authority generates heat through methodical reasoning', level: 'inferencial', options: ['The temperature of academic debates', 'The way authority generates heat through methodical reasoning', 'The physics of brain activity', 'The energy cost of deep thinking'] },
      { q: 'What always yields authority, according to the text?', a: 'Thoughtfulness', level: 'literal', options: ['Theology alone', 'Mathematical scrutiny', 'Thoughtfulness', 'Theoretical thresholds'] },
    ]
  },
  {
    name: 'Latim',
    vocabulary: [
      { word: 'poenitentia', definition: 'Penitência, arrependimento; ato de reconhecer e reparar uma falta.' },
      { word: 'oeconomia salutis', definition: 'Economia da salvação; o plano divino de redenção da humanidade na tradição cristã.' },
      { word: 'magnificat', definition: 'Do latim "engrandecer"; canto de louvor bíblico de Maria (Lc 1,46-55).' },
      { word: 'redemptio', definition: 'Redenção, resgate; libertação de uma condição de servidão ou pecado.' },
    ],
    text: 'Caelum et terra praedicant gloriam Dei. Ecclesia, regina gratiae, magnificat Dominum in iustitia et poenitentia. Descendit de caelis pro redemptione nostra. Praesentia divina in oeconomia salutis manifestatur per scientiam et prudentiam. Agnus Dei, qui tollit peccata mundi, dona nobis pacem.',
    questions: [
      { q: 'O que caelum et terra praedicam?', a: 'Gloriam Dei (a glória de Deus)', level: 'literal', options: ['Gloriam Dei (a glória de Deus)', 'Poenitentiam (a penitência)', 'Pacem mundi (a paz do mundo)', 'Scientiam (a ciência)'] },
      { q: 'Como a ecclesia é chamada?', a: 'Regina gratiae (rainha da graça)', level: 'literal', options: ['Mater Dei (mãe de Deus)', 'Regina gratiae (rainha da graça)', 'Domina caeli (senhora do céu)', 'Sponsa Christi (esposa de Cristo)'] },
      { q: 'O que o Agnus Dei faz?', a: 'Tollit peccata mundi (tira os pecados do mundo)', level: 'literal', options: ['Dona pacem (dá a paz)', 'Tollit peccata mundi (tira os pecados do mundo)', 'Magnificat Dominum (magnifica o Senhor)', 'Descendit de caelis (desce dos céus)'] },
    ]
  },
  {
    name: 'PT /λ/ vs /j/',
    vocabulary: [
      { word: 'exílio', definition: 'Estado de quem foi expulso ou se afastou forçadamente de sua terra natal.' },
      { word: 'reconciliação', definition: 'Restabelecimento da harmonia entre pessoas ou grupos em conflito.' },
      { word: 'humilhação', definition: 'Situação de rebaixamento moral ou social; ato de submeter alguém à vergonha.' },
      { word: 'pecúlio', definition: 'Patrimônio ou economias acumuladas; o que se deixa de herança a alguém.' },
    ],
    text: 'O conselheiro, filho de uma família marcada pelo exílio, dedicou sua vida ao trabalho de reconciliação. Sua maravilha era transformar humilhação em orgulho legítimo. No espelho da história, viu que o evangélio não pede conciliação covarde, mas batalha pelo acolhimento. O pecúlio que deixou aos seus não foi material — foi o vermelho vivo da coragem estampado em cada olho que soube enxergar o outro.',
    questions: [
      { q: 'O que marcava a família do conselheiro?', a: 'O exílio', level: 'literal', options: ['A riqueza', 'O exílio', 'A nobreza', 'A pobreza'] },
      { q: 'Qual era a maravilha do conselheiro?', a: 'Transformar humilhação em orgulho legítimo', level: 'literal', options: ['Transformar humilhação em orgulho legítimo', 'Acumular riquezas para a família', 'Escrever livros de história', 'Reconciliar nações em guerra'] },
      { q: 'Que tipo de pecúlio ele deixou?', a: 'Não material — a coragem', level: 'inferencial', options: ['Grande herança financeira', 'Não material — a coragem', 'Propriedades e terras', 'Uma biblioteca vasta'] },
      { q: 'O que o evangélio pede, segundo o texto?', a: 'Batalha pelo acolhimento', level: 'inferencial', options: ['Conciliação covarde', 'Batalha pelo acolhimento', 'Exílio voluntário', 'Silêncio diante da injustiça'] },
    ]
  },
  {
    name: 'PT /ɲ/',
    vocabulary: [
      { word: 'engenho', definition: 'Estabelecimento colonial de produção de açúcar; também significa ingeniosidade, talento.' },
      { word: 'companhia', definition: 'Empresa comercial; no contexto colonial, grandes organizações de comércio ultramarino.' },
      { word: 'senhorio', definition: 'Domínio ou autoridade de um senhor sobre terras e pessoas; poder feudal.' },
      { word: 'vizinhança', definition: 'Conjunto dos vizinhos; proximidade; relação de convivência territorial.' },
    ],
    text: 'O senhor do engenho, estranho à engenharia moderna, desenhou o caminho de uma companhia que mudaria o destino colonial. No vinho da tradição, banhou cada testemunho dos seus. A rainha, de tamanho poder, reconheceu que sem a vizinhança dos aliados nenhum governo se sustenta. O galinheiro das intrigas palacianas era domínio do cunhado, mas o senhorio verdadeiro pertencia a quem caminhava com o povo.',
    questions: [
      { q: 'O que o senhor do engenho desenhou?', a: 'O caminho de uma companhia', level: 'literal', options: ['Um projeto de engenharia', 'O caminho de uma companhia', 'Um mapa do território', 'Um plano de batalha'] },
      { q: 'O que a rainha reconheceu?', a: 'Que sem a vizinhança dos aliados nenhum governo se sustenta', level: 'literal', options: ['Que o cunhado era mais poderoso', 'Que sem a vizinhança dos aliados nenhum governo se sustenta', 'Que o senhorio era ilegítimo', 'Que o vinho era a chave do poder'] },
      { q: 'A quem pertencia o senhorio verdadeiro?', a: 'A quem caminhava com o povo', level: 'inferencial', options: ['Ao cunhado', 'À rainha', 'A quem caminhava com o povo', 'Ao senhor do engenho'] },
    ]
  },
  {
    name: 'PT /r/ vs /ʁ/',
    vocabulary: [
      { word: 'barroca', definition: 'Relativo ao período artístico do Barroco (sécs. XVII-XVIII), caracterizado por ornamentação exuberante.' },
      { word: 'paradigma', definition: 'Modelo ou padrão exemplar; estrutura de referência que orienta o pensamento numa área.' },
      { word: 'paróquia', definition: 'Divisão territorial eclesiástica; a menor unidade administrativa da Igreja Católica.' },
      { word: 'cerimônia', definition: 'Rito formal com protocolo estabelecido; solenidade que obedece a regras específicas.' },
    ],
    text: 'A era barroca, cara ao operário do espírito, não erra ao narrar a corrupção dos territórios coloniais. O carro da história avança sobre trilhos de ferro, e quem mora na paróquia sabe que o curral do poder é mais perigoso que a serra. O paradigma narrativo desse período ampara uma verdade: entre o caro e o barato, entre o coral e o curral, a cerimônia do saber exige rigor — nunca a mera repetição.',
    questions: [
      { q: 'O que a era barroca narra?', a: 'A corrupção dos territórios coloniais', level: 'literal', options: ['A glória dos impérios', 'A corrupção dos territórios coloniais', 'A beleza da arte sacra', 'Os avanços da ciência'] },
      { q: 'Sobre que trilhos avança o carro da história?', a: 'Trilhos de ferro', level: 'literal', options: ['Trilhos de ouro', 'Trilhos de ferro', 'Trilhos de pedra', 'Trilhos de madeira'] },
      { q: 'O que a cerimônia do saber exige?', a: 'Rigor, nunca a mera repetição', level: 'inferencial', options: ['Rigor, nunca a mera repetição', 'Repetição constante e metódica', 'Inspiração e criatividade', 'Tradição acima de tudo'] },
      { q: 'O que é mais perigoso que a serra?', a: 'O curral do poder', level: 'literal', options: ['O carro da história', 'O curral do poder', 'A paróquia', 'O território colonial'] },
    ]
  },
  {
    name: 'PT /e/ vs /ɛ/',
    vocabulary: [
      { word: 'polêmica', definition: 'Discussão controversa e acalorada; debate em que há posições opostas fortemente defendidas.' },
      { word: 'herético', definition: 'Relativo a heresia; que contraria a doutrina oficial de uma religião ou escola de pensamento.' },
      { word: 'êxodo', definition: 'Saída em massa de pessoas de um lugar; partida definitiva (do livro bíblico Êxodo).' },
      { word: 'fenômeno', definition: 'Aquilo que se manifesta à experiência; ocorrência observável e digna de estudo.' },
    ],
    text: 'O acadêmico, célebre por sua polêmica sobre ética, publicou uma série de ensaios sobre o fenômeno herético na época medieval. O prêmio veio com a miséria de quem busca gênero novo num campo estéril. A pérola do seu êxodo intelectual foi mostrar que o interêsse pelo hérege não é mera curiosidade — é reconhecer que toda época carrega, em seu gênero próprio, a semente de um tremendo conflito entre o aberto e o fechado.',
    questions: [
      { q: 'Sobre que tema o acadêmico publicou ensaios?', a: 'O fenômeno herético na época medieval', level: 'literal', options: ['A ética contemporânea', 'O fenômeno herético na época medieval', 'A literatura renascentista', 'A filosofia grega'] },
      { q: 'O que foi a pérola do seu êxodo intelectual?', a: 'Mostrar que o interesse pelo hérege não é mera curiosidade', level: 'inferencial', options: ['Receber o prêmio acadêmico', 'Mostrar que o interesse pelo hérege não é mera curiosidade', 'Criar um novo gênero literário', 'Abandonar a universidade'] },
      { q: 'O que toda época carrega?', a: 'A semente de um conflito entre o aberto e o fechado', level: 'critico', options: ['A herança dos antigos', 'A semente de um conflito entre o aberto e o fechado', 'A repetição dos mesmos erros', 'A esperança de uma solução'] },
    ]
  },
  {
    name: 'PT /o/ vs /ɔ/',
    vocabulary: [
      { word: 'colóquio', definition: 'Conferência ou congresso acadêmico informal; conversa entre poucas pessoas versadas.' },
      { word: 'autônomo', definition: 'Que se governa por suas próprias leis; independente, que age por conta própria.' },
      { word: 'crônica', definition: 'Narrativa em ordem cronológica; gênero jornalístico-literário de observação do cotidiano.' },
      { word: 'ócio', definition: 'Tempo livre sem obrigações; descanso; na filosofia clássica, condição para a contemplação.' },
    ],
    text: 'O filósofo, autônomo por propósito, escreveu uma crônica sobre o colóquio econômico que dividiu o órgão simbólico da nação. A fórmula era óbvia: sem histórico de diálogo, todo debate se torna monótono. O avô, que outrora fora demônio da retórica, e a avó, que guardava a tradição, representavam os pós e os prós de toda civilização. Pôs-se então a escrever sobre o ócio criativo — aquele que transforma o óbvio em revelação.',
    questions: [
      { q: 'Sobre o que o filósofo escreveu?', a: 'Uma crônica sobre o colóquio econômico', level: 'literal', options: ['Um tratado de lógica', 'Uma crônica sobre o colóquio econômico', 'Uma autobiografia', 'Um ensaio sobre o ócio'] },
      { q: 'Qual era a fórmula óbvia?', a: 'Sem histórico de diálogo, todo debate se torna monótono', level: 'literal', options: ['O debate deve ser rápido e direto', 'Sem histórico de diálogo, todo debate se torna monótono', 'A retórica sempre vence a lógica', 'O ócio é mais produtivo que o trabalho'] },
      { q: 'O que o ócio criativo transforma?', a: 'O óbvio em revelação', level: 'inferencial', options: ['O trabalho em lazer', 'A tradição em inovação', 'O óbvio em revelação', 'O debate em monólogo'] },
    ]
  },
  {
    name: 'PT nasais ã/ão',
    vocabulary: [
      { word: 'redenção', definition: 'Ato de resgatar ou salvar; na teologia cristã, a libertação do pecado pela morte de Cristo.' },
      { word: 'insurreição', definition: 'Revolta armada contra o poder estabelecido; levante, sublevação.' },
      { word: 'jurisdição', definition: 'Âmbito de competência de um tribunal ou autoridade; poder legal de julgar e decidir.' },
      { word: 'absolvição', definition: 'Declaração de inocência; no âmbito religioso, perdão dos pecados pelo sacramento da confissão.' },
    ],
    text: 'A irmã cristã dedicou sua oração à nação que perdera a tradição da civilização justa. A salvação, dizia, não vem da insurreição, mas da redenção paciente. Como aldeã que planta a maçã e espera a colheita, a cidadã pagã convertida guardava a constituição no coração. A jurisdição do espírito não conhece absolvição fácil — pede que cada irmão, cada alemã, cada orfã, aceite o peso da romã partida: amarga por fora, doce por dentro.',
    questions: [
      { q: 'A que a irmã cristã dedicou sua oração?', a: 'À nação que perdera a tradição da civilização justa', level: 'literal', options: ['Aos pobres e necessitados', 'À nação que perdera a tradição da civilização justa', 'Ao clero e à hierarquia', 'À sua própria salvação'] },
      { q: 'De onde vem a salvação, segundo o texto?', a: 'Da redenção paciente', level: 'literal', options: ['Da insurreição popular', 'Da redenção paciente', 'Da constituição jurídica', 'Da oração coletiva'] },
      { q: 'O que simboliza a romã partida?', a: 'Algo amargo por fora mas doce por dentro', level: 'critico', options: ['A divisão da nação', 'Algo amargo por fora mas doce por dentro', 'O fruto do pecado original', 'A alimentação espiritual'] },
    ]
  },
  {
    name: 'PT c = /k/ vs /s/',
    vocabulary: [
      { word: 'ceticismo', definition: 'Posição filosófica que questiona a possibilidade do conhecimento certo; atitude de dúvida sistemática.' },
      { word: 'cânone', definition: 'Regra ou norma; conjunto de obras consideradas modelares e exemplares numa tradição.' },
      { word: 'corporativismo', definition: 'Sistema político-econômico baseado em corporações de classe; tendência ao poder de grupos organizados.' },
      { word: 'transcendente', definition: 'Que está além da experiência sensível; superior, que supera os limites do mundo material.' },
    ],
    text: 'O ceticismo diante do comunismo não dispensa o cânone da civilização. No concílio, a cerimônia revelou que o corporativismo cosmológico era, na verdade, censura disfarçada de ciência. O catolicismo, com seu capital simbólico, resiste ao cinismo pela causalidade da fé: cada cultura produz seu científico, cada certidão documenta uma cogitação. Entre o cimento do pragmatismo e a célebre aspiração ao transcendente, a civilização avança — sem nunca abandonar a circulação das ideias.',
    questions: [
      { q: 'O que o ceticismo não dispensa?', a: 'O cânone da civilização', level: 'literal', options: ['A fé religiosa', 'O cânone da civilização', 'A ciência moderna', 'O pragmatismo político'] },
      { q: 'O que a cerimônia do concílio revelou?', a: 'Que o corporativismo cosmológico era censura disfarçada de ciência', level: 'literal', options: ['Que o catolicismo era inabalável', 'Que o corporativismo cosmológico era censura disfarçada de ciência', 'Que a civilização estava em declínio', 'Que o comunismo era inevitável'] },
      { q: 'Como o catolicismo resiste ao cinismo?', a: 'Pela causalidade da fé', level: 'inferencial', options: ['Pelo poder político', 'Pela tradição milenar', 'Pela causalidade da fé', 'Pelo capital econômico'] },
      { q: 'Entre que pólos a civilização avança?', a: 'Entre o pragmatismo e a aspiração ao transcendente', level: 'critico', options: ['Entre o comunismo e o capitalismo', 'Entre a ciência e a religião', 'Entre o pragmatismo e a aspiração ao transcendente', 'Entre o ceticismo e a fé cega'] },
    ]
  },
  {
    name: 'PT g = /g/ vs /ʒ/',
    vocabulary: [
      { word: 'geopolítica', definition: 'Estudo da influência da geografia no poder político dos Estados e nas relações internacionais.' },
      { word: 'genealogia', definition: 'Estudo da origem e descendência de famílias ou grupos; cadeia de causas e antecedentes.' },
      { word: 'gnosticismo', definition: 'Corrente filosófico-religiosa antiga que afirma a salvação pelo conhecimento espiritual secreto.' },
      { word: 'guilhotina', definition: 'Instrumento de execução usado na Revolução Francesa; por extensão, corte abrupto e drástico.' },
    ],
    text: 'A governança da geopolítica exige que se conheça a genealogia dos conflitos. A gênese de toda guerra é o genocídio da gentileza. A gestão pública, quando guiada pela geografia do poder e não pela geometria da justiça, produz globalização sem glória. O gênio da graça, porém, transforma o geral em particular: da guilhotina ao diálogo, da girândola ao gnosticismo, todo grande povo descobre que a verdadeira grandeza é servir.',
    questions: [
      { q: 'O que a governança da geopolítica exige?', a: 'Que se conheça a genealogia dos conflitos', level: 'literal', options: ['Força militar superior', 'Que se conheça a genealogia dos conflitos', 'Alianças econômicas globais', 'Controle total da informação'] },
      { q: 'Qual é a gênese de toda guerra, segundo o texto?', a: 'O genocídio da gentileza', level: 'inferencial', options: ['A ambição territorial', 'O genocídio da gentileza', 'A falha diplomática', 'O nacionalismo exacerbado'] },
      { q: 'Qual é a verdadeira grandeza?', a: 'Servir', level: 'critico', options: ['Governar', 'Conquistar', 'Servir', 'Conhecer'] },
    ]
  },
  {
    name: 'EN /æ/ vs /ɑː/',
    vocabulary: [
      { word: 'sanctuary', definition: 'A sacred or protected place; a refuge offering safety from pursuit or persecution.' },
      { word: 'paradox', definition: 'A statement that seems contradictory but may reveal a deeper truth.' },
      { word: 'mandate', definition: 'An official order or commission; the authority granted by voters to their representative.' },
      { word: 'fallacy', definition: 'A mistaken belief; a flawed argument that appears valid but contains a logical error.' },
    ],
    text: 'The candidate stood at the sanctuary, grappling with a paradox that had haunted capitalism since its inception. The tragedy of the mandate, he argued, was not its rational ambition but its fundamental fallacy: that faction could replace baptism as the basis of communal belonging. Half the parliament demanded calm; the other half demanded action. The drama of democratic man is that he must balance command with compassion, lament with pragmatism.',
    questions: [
      { q: 'Where did the candidate stand?', a: 'At the sanctuary', level: 'literal', options: ['At the parliament', 'At the sanctuary', 'At the podium', 'At the battlefield'] },
      { q: 'What was the tragedy of the mandate?', a: 'That faction could replace baptism as basis of belonging', level: 'inferencial', options: ['That it lacked popular support', 'That faction could replace baptism as basis of belonging', 'That it was too ambitious', 'That it divided the parliament equally'] },
      { q: 'What must democratic man balance?', a: 'Command with compassion, lament with pragmatism', level: 'critico', options: ['Power with humility', 'Command with compassion, lament with pragmatism', 'Freedom with responsibility', 'Tradition with progress'] },
    ]
  },
  {
    name: 'EN /ɪ/ vs /iː/',
    vocabulary: [
      { word: 'creed', definition: 'A formal statement of beliefs; a system of principles that guides a person or institution.' },
      { word: 'scrutiny', definition: 'Close and critical examination; careful and detailed inspection of something.' },
      { word: 'decree', definition: 'An official order issued by a legal authority; to officially command or pronounce.' },
      { word: 'scripture', definition: 'Sacred writings of a religion; texts considered holy and authoritative.' },
    ],
    text: 'The principle of liberty, written into every creed and treaty, demands that the spirit of criticism remain free. A preacher may decree what belief to seek, but the system of reason insists that no victim of rhetoric should surrender freedom without scrutiny. The priest, reading the scriptures with literal precision, recognized that even the sacred feat of faith requires the discipline of the written word.',
    questions: [
      { q: 'What does the principle of liberty demand?', a: 'That the spirit of criticism remain free', level: 'literal', options: ['That everyone follow the creed', 'That the spirit of criticism remain free', 'That preachers lead society', 'That rhetoric be abolished'] },
      { q: 'What does the system of reason insist upon?', a: 'That no victim of rhetoric surrender freedom without scrutiny', level: 'literal', options: ['That faith replace reason', 'That no victim of rhetoric surrender freedom without scrutiny', 'That scriptures be read literally', 'That liberty be absolute'] },
      { q: 'What did the priest recognize?', a: 'That faith requires the discipline of the written word', level: 'inferencial', options: ['That reason and faith are incompatible', 'That faith requires the discipline of the written word', 'That preaching is more important than reading', 'That liberty undermines faith'] },
    ]
  },
  {
    name: 'EN /ʌ/ vs /ɒ/',
    vocabulary: [
      { word: 'flourish', definition: 'To grow vigorously; to thrive and develop in a healthy or vigorous way.' },
      { word: 'doctrine', definition: 'A set of principles or beliefs taught by a religion, political group, or institution.' },
      { word: 'monopoly', definition: 'Exclusive control of a market or resource; dominance that excludes all competition.' },
      { word: 'philosopher', definition: 'One who studies fundamental questions of existence, knowledge, ethics, and reason.' },
    ],
    text: 'Justice, the philosopher argued, cannot flourish under corruption. The struggle of the republic is fundamentally a struggle for trust: trust in doctrine, trust in the judgment of the prophet, trust in knowledge that transcends monopoly. The scholar of economics understood that cultural suffering often stems from the utter collapse of democratic institutions. Without philosophy, politics becomes nothing but a contest of power.',
    questions: [
      { q: 'What cannot flourish under corruption?', a: 'Justice', level: 'literal', options: ['Democracy', 'Justice', 'Economics', 'Philosophy'] },
      { q: 'What is the struggle of the republic fundamentally about?', a: 'A struggle for trust', level: 'literal', options: ['A struggle for power', 'A struggle for trust', 'A struggle for wealth', 'A struggle for independence'] },
      { q: 'Without philosophy, what does politics become?', a: 'Nothing but a contest of power', level: 'critico', options: ['A tool for justice', 'A democratic process', 'Nothing but a contest of power', 'A monopoly of knowledge'] },
    ]
  },
  {
    name: 'EN /w/ vs /v/',
    vocabulary: [
      { word: 'vocation', definition: 'A strong sense of calling to a particular career or way of life, especially a religious one.' },
      { word: 'vanguard', definition: 'The foremost group in a movement; those leading the way in new developments.' },
      { word: 'vestment', definition: 'A ceremonial garment, especially one worn by clergy during religious services.' },
      { word: 'valor', definition: 'Great courage in the face of danger, especially in battle; bravery.' },
    ],
    text: 'Wisdom and virtue have always been the twin pillars of the Western worldview. The vocation of the witness is to worship truth, even when vanity and violence threaten to overwhelm the vanguard. Warfare may bring wealth, but only welfare built on valor survives the verdict of history. The vestment of the priest, the wage of the worker, the vengeance of the wronged — each reflects a wholesome will to seek justice beyond mere vanity.',
    questions: [
      { q: 'What are the twin pillars of the Western worldview?', a: 'Wisdom and virtue', level: 'literal', options: ['War and peace', 'Wisdom and virtue', 'Wealth and power', 'Worship and valor'] },
      { q: 'What is the vocation of the witness?', a: 'To worship truth', level: 'literal', options: ['To worship truth', 'To seek vengeance', 'To accumulate wealth', 'To wage warfare'] },
      { q: 'What kind of welfare survives the verdict of history?', a: 'Welfare built on valor', level: 'inferencial', options: ['Welfare built on wealth', 'Welfare built on valor', 'Welfare built on warfare', 'Welfare built on vanity'] },
    ]
  },
  {
    name: 'EN /h/',
    vocabulary: [
      { word: 'heresy', definition: 'A belief or opinion that contradicts official church doctrine; any controversial or unorthodox view.' },
      { word: 'hegemony', definition: 'Leadership or dominance, especially of one country or social group over others.' },
      { word: 'humanism', definition: 'A philosophy centered on human values and dignity; the Renaissance movement reviving classical learning.' },
      { word: 'homily', definition: 'A sermon or moral lecture, especially a short one delivered during a religious service.' },
    ],
    text: 'The history of heresy is also the history of hierarchy. Every hour, the honest hermit questioned the hypothesis that hegemony could coexist with holiness. Humanism, heir to a heritage of humility, faces the hostility of hypocrisy in every age. The homily delivered in honor of the saints reminded the congregation that honesty, however humble, is the foundation upon which all hierarchy must be built.',
    questions: [
      { q: 'What is the history of heresy also the history of?', a: 'Hierarchy', level: 'literal', options: ['Humanism', 'Hierarchy', 'Holiness', 'Hypocrisy'] },
      { q: 'What hypothesis did the hermit question?', a: 'That hegemony could coexist with holiness', level: 'literal', options: ['That honesty leads to hierarchy', 'That hegemony could coexist with holiness', 'That humanism replaces religion', 'That heresy is always harmful'] },
      { q: 'What is the foundation upon which hierarchy must be built?', a: 'Honesty', level: 'inferencial', options: ['Power', 'Tradition', 'Honesty', 'Heritage'] },
    ]
  },
  {
    name: 'EN /r/',
    vocabulary: [
      { word: 'rhetoric', definition: 'The art of effective speaking or writing; persuasive language or oratory.' },
      { word: 'Reformation', definition: 'The 16th-century religious movement that split Western Christianity and founded Protestantism.' },
      { word: 'reconciliation', definition: 'The restoration of friendly relations; in theology, the restoration of the relationship with God.' },
      { word: 'Renaissance', definition: 'The European cultural and intellectual revival of the 14th–17th centuries, inspired by classical antiquity.' },
    ],
    text: 'The rhetoric of the Reformation reshaped reason itself. Revolution and revelation are not merely particular historical events but recurring patterns of reconciliation. The Renaissance brought repentance for past errors and a republic of letters that gave power to the written word. Each chapter of this transformation matters: from the righteousness of the reformer to the calendar of councils, the story of Western reason is one of perpetual renewal.',
    questions: [
      { q: 'What did the rhetoric of the Reformation reshape?', a: 'Reason itself', level: 'literal', options: ['The church', 'Reason itself', 'The government', 'The economy'] },
      { q: 'What are revolution and revelation described as?', a: 'Recurring patterns of reconciliation', level: 'inferencial', options: ['Unique historical events', 'Recurring patterns of reconciliation', 'Opposite forces in history', 'Products of the Renaissance'] },
      { q: 'What is the story of Western reason?', a: 'One of perpetual renewal', level: 'critico', options: ['One of constant decline', 'One of perpetual renewal', 'One of linear progress', 'One of recurring conflict'] },
    ]
  },
  {
    name: 'EN /ŋ/ vs /n/',
    vocabulary: [
      { word: 'governing', definition: 'Exercising authority; controlling or directing the conduct of something.' },
      { word: 'belonging', definition: 'The feeling of being accepted and part of a community; affiliation and connection.' },
      { word: 'understanding', definition: 'Sympathetic comprehension; the ability to grasp meaning or significance.' },
      { word: 'puritan', definition: 'A member of a strict Protestant group seeking to purify the Church of England; one with rigid moral standards.' },
    ],
    text: 'Reasoning, teaching, and preaching — these are the governing activities of the thinking human being. Suffering and belonging are not foreign to the golden tradition of modern understanding. Bringing together the certain and the uncertain is what reading, in its deepest sense, has always meant. The puritan and the pagan alike found meaning in the bringing forth of understanding from the written word.',
    questions: [
      { q: 'What are the governing activities of the thinking human being?', a: 'Reasoning, teaching, and preaching', level: 'literal', options: ['Reading, writing, and speaking', 'Reasoning, teaching, and preaching', 'Working, thinking, and creating', 'Believing, hoping, and loving'] },
      { q: 'What is reading in its deepest sense?', a: 'Bringing together the certain and the uncertain', level: 'inferencial', options: ['Decoding written symbols', 'Bringing together the certain and the uncertain', 'Following the golden tradition', 'Understanding modern thinking'] },
      { q: 'Who found meaning in the written word?', a: 'Both the puritan and the pagan', level: 'literal', options: ['Only the puritan', 'Only the pagan', 'Both the puritan and the pagan', 'Neither group'] },
    ]
  },
  {
    name: 'EN /dʒ/ vs /tʃ/',
    vocabulary: [
      { word: 'jurisprudence', definition: 'The theory and philosophy of law; the study of the principles underlying legal systems.' },
      { word: 'chivalry', definition: 'The medieval knightly code of honor; courteous and honorable behavior, especially toward women.' },
      { word: 'chronology', definition: 'The arrangement of events in the order of their occurrence in time.' },
      { word: 'genocide', definition: 'The deliberate killing of a large group of people, especially of a particular nation or ethnic group.' },
    ],
    text: 'Justice and charity were the twin challenges that the chancellor of Jerusalem brought before the church. The genesis of modern jurisprudence owes much to the geography of chivalry: every chamber where a judge presided reflected a choice between vengeance and mercy. Journalism chronicles these choices, from genocide to Christianity\'s greatest acts of generosity. Chronology alone cannot capture this — only the living judgment of each generation.',
    questions: [
      { q: 'What were the twin challenges brought before the church?', a: 'Justice and charity', level: 'literal', options: ['War and peace', 'Justice and charity', 'Faith and reason', 'Power and mercy'] },
      { q: 'What did every chamber where a judge presided reflect?', a: 'A choice between vengeance and mercy', level: 'literal', options: ['The power of the church', 'A choice between vengeance and mercy', 'The influence of chivalry', 'The genesis of law'] },
      { q: 'What cannot capture this story alone?', a: 'Chronology', level: 'inferencial', options: ['Journalism', 'Justice', 'Chronology', 'Geography'] },
    ]
  },
  {
    name: 'EN /ə/ (schwa)',
    vocabulary: [
      { word: 'patronage', definition: 'Financial support given by a patron; the power to award government positions or church benefices.' },
      { word: 'sovereign', definition: 'A supreme ruler, especially a monarch; possessing supreme political power.' },
      { word: 'eloquent', definition: 'Fluent, persuasive, and expressive in speech or writing.' },
      { word: 'schwa', definition: 'The unstressed neutral vowel sound /ə/ in English, as in the "a" of "about" or "e" of "taken".' },
    ],
    text: 'About the economy of history, the dominant theology had little to say that was separate from patronage. Parliament, on each occasion, sought a moderate and eloquent sovereign who could govern without reducing the common good to a particular interest. The elaborate machinery of power — economy, theology, history — rests upon sounds so subtle that even the most eloquent speaker barely notices them: the unstressed murmur at the heart of every English word.',
    questions: [
      { q: 'What did parliament seek on each occasion?', a: 'A moderate and eloquent sovereign', level: 'literal', options: ['A powerful military leader', 'A moderate and eloquent sovereign', 'A religious authority', 'A wealthy patron'] },
      { q: 'What should a sovereign govern without doing?', a: 'Reducing the common good to a particular interest', level: 'literal', options: ['Ignoring the parliament', 'Reducing the common good to a particular interest', 'Using patronage for power', 'Speaking too eloquently'] },
      { q: 'What is "the unstressed murmur" a metaphor for?', a: 'The schwa sound in English words', level: 'critico', options: ['The voice of the common people', 'Hidden political power', 'The schwa sound in English words', 'The subtle influence of theology'] },
    ]
  }
];
