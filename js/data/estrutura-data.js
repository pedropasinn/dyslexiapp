// estrutura-data.js — Módulos de Estrutura Textual (Shaywitz cap. 19)
// Treina reconhecimento de estruturas de textos informativos/expositivos

const ESTRUTURA_MODULES = [

  // ══════════════════════════════════════════════════════════════════
  // TIPO 1 — IDENTIFICAR ESTRUTURA (3 módulos, 6 textos cada)
  // ══════════════════════════════════════════════════════════════════

  // ── Módulo 1-A: Identificar — Filosofia e Economia ──────────────
  {
    name: 'Identificar — Filosofia e Economia',
    type: 'identificar',
    items: [
      {
        text: 'A inflação corrói o poder de compra da moeda. Como consequência, os trabalhadores perdem capacidade de consumo, o que reduz a demanda agregada. Essa redução, por sua vez, leva empresas a cortarem produção e empregos.',
        structure: 'causa-efeito',
        explanation: 'O texto parte de uma causa (inflação) e desdobra seus efeitos em cadeia: perda de poder de compra → redução de demanda → corte de empregos. As palavras "como consequência" e "por sua vez" sinalizam essa estrutura.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O empirismo de Locke afirma que a mente nasce como uma tábula rasa, preenchida exclusivamente pela experiência sensível. Ao contrário, o racionalismo de Descartes sustenta que certas ideias são inatas, presentes na mente antes de qualquer experiência. Enquanto um privilegia os sentidos, o outro privilegia a razão.',
        structure: 'comparação',
        explanation: 'O texto contrasta duas posições filosóficas opostas. As expressões "ao contrário" e "enquanto" são marcadores típicos da estrutura de comparação.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O problema da coordenação econômica é como alocar recursos escassos entre demandas ilimitadas. A solução proposta pelo mercado é o sistema de preços: quando um bem escasseia, seu preço sobe, sinalizando produtores a aumentar a oferta e consumidores a reduzir o consumo.',
        structure: 'problema-solução',
        explanation: 'O texto apresenta explicitamente um problema (alocação de recursos escassos) e uma solução (sistema de preços). As expressões "o problema" e "a solução proposta" marcam essa estrutura.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'Primeiro, Kant estabelece que o conhecimento exige tanto intuições sensíveis quanto conceitos do entendimento. Em seguida, demonstra que os conceitos sem intuições são vazios. Após essa análise, conclui que intuições sem conceitos são cegas. Finalmente, formula sua síntese: conhecer é aplicar conceitos à experiência.',
        structure: 'sequência',
        explanation: 'O texto apresenta etapas do argumento kantiano em ordem lógica. Os marcadores "primeiro", "em seguida", "após" e "finalmente" indicam uma estrutura sequencial.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O utilitarismo é uma teoria ética que se caracteriza por três princípios fundamentais: o princípio da maior felicidade, pelo qual a ação correta maximiza o bem-estar total; o consequencialismo, que avalia atos pelos seus resultados; e a imparcialidade, que trata o interesse de cada pessoa como igualmente relevante.',
        structure: 'descrição',
        explanation: 'O texto define e caracteriza o utilitarismo enumerando seus componentes. A expressão "se caracteriza por" e a listagem de princípios são típicos da estrutura de descrição.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'A deflação persistente resulta em postergação do consumo: se os preços cairão amanhã, por que comprar hoje? Por isso, a demanda cai, o que força novas reduções de preço. Esse ciclo deflacionário, uma vez estabelecido, é extremamente difícil de reverter.',
        structure: 'causa-efeito',
        explanation: 'O texto descreve um ciclo vicioso: deflação → postergação do consumo → queda de demanda → mais deflação. A expressão "por isso" sinaliza a relação causal encadeada.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
    ]
  },

  // ── Módulo 1-B: Identificar — Teologia e História ───────────────
  {
    name: 'Identificar — Teologia e História',
    type: 'identificar',
    items: [
      {
        text: 'A Reforma Protestante gerou uma crise de autoridade religiosa sem precedentes. Como consequência, emergiu o princípio do livre exame das Escrituras, que fragmentou a cristandade em inúmeras denominações. Essa fragmentação, por sua vez, acelerou o processo de secularização do Estado europeu.',
        structure: 'causa-efeito',
        explanation: 'O texto encadeia a Reforma Protestante (causa) com seus efeitos progressivos: livre exame → fragmentação → secularização. A expressão "como consequência" é um marcador claro.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'A teologia apofática, ou via negativa, descreve Deus por exclusão: afirma o que Ele não é, pois qualquer atributo positivo finito seria inadequado ao Infinito. Diferentemente, a teologia catafática emprega atributos positivos, como bondade e onisciência, mas os entende em sentido analógico, não unívoco.',
        structure: 'comparação',
        explanation: 'O texto contrasta dois métodos teológicos. A palavra "diferentemente" e a estrutura "enquanto um... o outro..." são marcadores de comparação.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O problema central da historiografia é que o passado não está diretamente disponível: apenas documentos, artefatos e relatos sobrevivem. Para resolver isso, historiadores desenvolveram a crítica das fontes, que examina autenticidade, intencionalidade e contexto de produção de cada documento, reduzindo (sem eliminar) o risco de ilusão retrospectiva.',
        structure: 'problema-solução',
        explanation: 'O texto identifica um problema metodológico (inacessibilidade do passado) e apresenta uma solução (crítica das fontes). "O problema central" e "para resolver isso" são marcadores explícitos.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'Primeiro, o Concílio de Niceia (325 d.C.) definiu a consubstancialidade do Filho com o Pai. Em seguida, o Concílio de Constantinopla (381) completou a doutrina trinitária, incluindo o Espírito Santo. Após esses concílios, o de Éfeso (431) proclamou Maria como Theotokos. Finalmente, Calcedônia (451) definiu as duas naturezas de Cristo.',
        structure: 'sequência',
        explanation: 'O texto apresenta concílios cristãos em ordem cronológica. Os marcadores temporais "primeiro", "em seguida", "após" e "finalmente" caracterizam a estrutura sequencial.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'A escolástica é um movimento intelectual medieval que inclui método disputativo (questão, objeções, resposta, réplica), síntese entre razão filosófica e fé revelada, uso sistemático de Aristóteles como instrumental lógico, e produção textual em forma de summas e comentários. Caracteriza-se por rigor argumentativo e ambição sistematizadora.',
        structure: 'descrição',
        explanation: 'O texto define e descreve a escolástica enumerando seus elementos constituintes. "Inclui", "é composto de" e "caracteriza-se por" são marcadores típicos de descrição.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O absolutismo monárquico, exemplificado por Luís XIV, concentrava nas mãos do soberano os poderes legislativo, executivo e judicial. Por outro lado, o constitucionalismo inglês, consolidado pela Glorious Revolution de 1688, distribuía esses poderes entre a Coroa, o Parlamento e os tribunais, limitando a autoridade real por meio de lei.',
        structure: 'comparação',
        explanation: 'O texto contrasta dois modelos políticos — absolutismo e constitucionalismo. "Por outro lado" é o principal marcador de contraste.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
    ]
  },

  // ── Módulo 1-C: Identificar — Latim, Linguística e Ciência ──────
  {
    name: 'Identificar — Linguística e Ciência',
    type: 'identificar',
    items: [
      {
        text: 'A distinção entre língua (sistema abstrato compartilhado pela comunidade) e fala (realização concreta individual) é a base da linguística saussuriana. Enquanto a língua é social e estável, a fala é individual e variável. Essa oposição permitiu à linguística delimitar seu objeto de estudo.',
        structure: 'comparação',
        explanation: 'O texto contrapõe dois conceitos saussurianos opostos. "Enquanto" é o marcador de contraste que sinaliza a estrutura de comparação.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O problema da dislexia não é de inteligência: leitores disléxicos têm inteligência normal ou superior, mas processam o código fonológico de forma ineficiente. A solução está na instrução explícita e sistemática da correspondência grafema-fonema, que reconstrói o circuito neural de leitura por meio de prática repetida.',
        structure: 'problema-solução',
        explanation: 'O texto define o problema (déficit fonológico, não de inteligência) e apresenta a solução (instrução explícita e sistemática). "O problema" e "a solução está" são marcadores diretos.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O latim eclesiástico é composto de fonologia simplificada em relação ao latim clássico (ex.: ae/oe pronunciados como "e"), vocabulário ampliado com termos teológicos gregos (liturgia, catequese, eucaristia), sintaxe influenciada pelo grego do Novo Testamento, e sistema de transliteração medieval que fixou pronúncias regionais.',
        structure: 'descrição',
        explanation: 'O texto descreve o latim eclesiástico enumerando suas características. "É composto de" e a listagem de propriedades definem a estrutura de descrição.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'Primeiro, o leitor identifica as letras no texto impresso. Em seguida, o cérebro converte as letras em sons (decodificação fonológica). Depois, esses sons são reconhecidos como palavras armazenadas no léxico mental. Finalmente, o significado das palavras é integrado em proposições e o texto é compreendido.',
        structure: 'sequência',
        explanation: 'O texto descreve as etapas do processo de leitura em ordem. Os marcadores "primeiro", "em seguida", "depois" e "finalmente" caracterizam uma sequência.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'A escassez de recursos naturais resulta em conflitos geopolíticos por territórios estratégicos. Esses conflitos, por sua vez, geram deslocamentos populacionais que pressionam países vizinhos. O aumento da pressão migratória acaba produzindo tensões políticas internas nesses países receptores.',
        structure: 'causa-efeito',
        explanation: 'O texto apresenta uma cadeia de causas e efeitos: escassez → conflitos → migrações → tensões políticas. "Resulta em" e "por sua vez" marcam as relações causais.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
      {
        text: 'O direito positivo é o conjunto de normas emanadas de autoridade legítima e vigentes em determinado ordenamento jurídico. Inclui constituição, leis ordinárias, decretos, regulamentos e jurisprudência. Caracteriza-se por coercitividade (sanção para o descumprimento), generalidade (aplica-se a todos) e positividade (é posto, não derivado da natureza).',
        structure: 'descrição',
        explanation: 'O texto define o direito positivo e enumera seus elementos e características. "É o conjunto de", "inclui" e "caracteriza-se por" são marcadores de descrição.',
        options: ['causa-efeito', 'comparação', 'problema-solução', 'sequência', 'descrição']
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // TIPO 2 — ORGANIZADOR GRÁFICO (3 módulos, 4 textos cada)
  // ══════════════════════════════════════════════════════════════════

  // ── Módulo 2-A: Organizador — Causa e Efeito ────────────────────
  {
    name: 'Organizador — Causa e Efeito',
    type: 'organizador',
    structure: 'causa-efeito',
    items: [
      {
        text: 'A Reforma Protestante, ao questionar a autoridade papal, fragmentou a unidade religiosa europeia. Essa fragmentação gerou guerras de religião, que por sua vez aceleraram o surgimento do Estado secular moderno.',
        slots: [
          { label: 'Causa', correct: 'Reforma Protestante questiona autoridade papal' },
          { label: 'Efeito 1', correct: 'Fragmentação da unidade religiosa europeia' },
          { label: 'Efeito 2', correct: 'Guerras de religião' },
          { label: 'Efeito 3', correct: 'Surgimento do Estado secular moderno' },
        ],
        distractors: ['Expansão do Império Otomano', 'Descobrimento da América']
      },
      {
        text: 'A Revolução Industrial concentrou trabalhadores em cidades, criando a classe operária urbana. As condições precárias de trabalho geraram movimentos sindicais. Esses movimentos impulsionaram a criação de legislação trabalhista protetora.',
        slots: [
          { label: 'Causa', correct: 'Revolução Industrial concentra trabalhadores em cidades' },
          { label: 'Efeito 1', correct: 'Surgimento da classe operária urbana' },
          { label: 'Efeito 2', correct: 'Movimentos sindicais e greves' },
          { label: 'Efeito 3', correct: 'Criação de legislação trabalhista' },
        ],
        distractors: ['Guerras napoleônicas', 'Reforma agrária medieval']
      },
      {
        text: 'O desnível fonológico entre a fala e a escrita do português resulta em erros de ortografia frequentes. Esses erros acumulados produzem insegurança no leitor. A insegurança, por sua vez, reduz a fluência e aumenta o esforço cognitivo na leitura.',
        slots: [
          { label: 'Causa', correct: 'Desnível fonológico entre fala e escrita' },
          { label: 'Efeito 1', correct: 'Erros ortográficos frequentes' },
          { label: 'Efeito 2', correct: 'Insegurança do leitor' },
          { label: 'Efeito 3', correct: 'Redução da fluência leitora' },
        ],
        distractors: ['Pobreza de vocabulário passivo', 'Leitura em voz alta excessiva']
      },
      {
        text: 'A hiperinflação alemã de 1923 destruiu as economias da classe média. Essa destruição gerou profundo ressentimento social. O ressentimento foi explorado por movimentos políticos extremistas, que ascenderam ao poder prometendo restaurar a estabilidade e a grandeza nacional.',
        slots: [
          { label: 'Causa', correct: 'Hiperinflação de 1923 destrói economias da classe média' },
          { label: 'Efeito 1', correct: 'Ressentimento social profundo' },
          { label: 'Efeito 2', correct: 'Ascensão de movimentos extremistas' },
          { label: 'Efeito 3', correct: 'Promessa de restaurar estabilidade nacional' },
        ],
        distractors: ['Crise da bolsa de 1929', 'Tratado de Versalhes fortalece democracia']
      },
    ]
  },

  // ── Módulo 2-B: Organizador — Comparação ────────────────────────
  {
    name: 'Organizador — Comparação',
    type: 'organizador',
    structure: 'comparação',
    items: [
      {
        text: 'Platão acredita que o conhecimento verdadeiro é das formas eternas, acessíveis apenas à razão. Aristóteles, ao contrário, sustenta que o conhecimento começa na observação dos particulares sensíveis, da qual a razão abstrai princípios gerais.',
        slots: [
          { label: 'Elemento A', correct: 'Platão' },
          { label: 'Posição de A', correct: 'Conhecimento é das formas eternas acessíveis à razão' },
          { label: 'Elemento B', correct: 'Aristóteles' },
          { label: 'Posição de B', correct: 'Conhecimento começa na observação sensível dos particulares' },
        ],
        distractors: ['Sócrates', 'O mito é superior à razão']
      },
      {
        text: 'O direito natural afirma que há normas morais universais derivadas da natureza humana, válidas independentemente de qualquer legislação positiva. O positivismo jurídico, por outro lado, sustenta que o direito é apenas o que foi posto por autoridade legítima, sem fundamento moral externo.',
        slots: [
          { label: 'Elemento A', correct: 'Direito natural' },
          { label: 'Posição de A', correct: 'Normas morais universais derivadas da natureza humana' },
          { label: 'Elemento B', correct: 'Positivismo jurídico' },
          { label: 'Posição de B', correct: 'Direito é apenas o que foi posto por autoridade legítima' },
        ],
        distractors: ['Direito consuetudinário', 'Normas são arbitrárias e relativas']
      },
      {
        text: 'Na economia planificada, o Estado determina o que produzir, quanto produzir e para quem distribuir, eliminando o mercado como mecanismo alocativo. Na economia de mercado, essas decisões emergem da interação descentralizada de milhões de agentes via sistema de preços.',
        slots: [
          { label: 'Elemento A', correct: 'Economia planificada' },
          { label: 'Posição de A', correct: 'Estado determina produção e distribuição' },
          { label: 'Elemento B', correct: 'Economia de mercado' },
          { label: 'Posição de B', correct: 'Decisões emergem de agentes via sistema de preços' },
        ],
        distractors: ['Economia mista', 'Mercado é sempre eficiente']
      },
      {
        text: 'O protestantismo reformado, especialmente calvinista, enfatiza a soberania absoluta de Deus, a predestinação e a leitura individual da Bíblia. O catolicismo romano, diferentemente, afirma a cooperação da vontade humana, a mediação da Igreja e a tradição como fonte de revelação ao lado das Escrituras.',
        slots: [
          { label: 'Elemento A', correct: 'Protestantismo calvinista' },
          { label: 'Posição de A', correct: 'Soberania divina, predestinação, leitura individual da Bíblia' },
          { label: 'Elemento B', correct: 'Catolicismo romano' },
          { label: 'Posição de B', correct: 'Cooperação humana, mediação da Igreja, tradição como revelação' },
        ],
        distractors: ['Anglicismo', 'Fé é desnecessária à salvação']
      },
    ]
  },

  // ── Módulo 2-C: Organizador — Problema e Solução ────────────────
  {
    name: 'Organizador — Problema e Solução',
    type: 'organizador',
    structure: 'problema-solução',
    items: [
      {
        text: 'O problema da externalidade negativa surge quando uma atividade econômica impõe custos a terceiros não envolvidos na transação. A solução proposta por Pigou é a taxação corretiva: o Estado tributa a atividade na medida exata do custo social que ela gera, internalizando a externalidade.',
        slots: [
          { label: 'Problema', correct: 'Externalidade negativa impõe custos a terceiros' },
          { label: 'Causa do problema', correct: 'Custos sociais não refletidos no preço de mercado' },
          { label: 'Solução proposta', correct: 'Taxação corretiva pigouviana' },
          { label: 'Como funciona', correct: 'Estado tributa atividade no valor exato do custo social' },
        ],
        distractors: ['Privatização total dos recursos', 'Eliminação de toda regulação estatal']
      },
      {
        text: 'O problema da ilegibilidade dos textos acadêmicos para leitores não especialistas prejudica a difusão do conhecimento. Para resolver isso, o movimento de comunicação científica pública propõe diretrizes de escrita clara: frases curtas, vocabulário acessível, exemplos concretos e resumos não técnicos.',
        slots: [
          { label: 'Problema', correct: 'Textos acadêmicos ilegíveis para não especialistas' },
          { label: 'Consequência', correct: 'Prejuízo à difusão do conhecimento' },
          { label: 'Solução proposta', correct: 'Comunicação científica pública' },
          { label: 'Medidas concretas', correct: 'Frases curtas, vocabulário acessível, exemplos concretos' },
        ],
        distractors: ['Abolição da pesquisa científica', 'Especialização ainda maior dos textos']
      },
      {
        text: 'O problema da guerra justa é como limitar moralmente o recurso à violência coletiva organizada. Tomás de Aquino, seguindo Agostinho, propõe três critérios: justa causa (reparar uma injustiça grave), autoridade legítima (soberano, não particular) e intenção reta (buscar a paz, não a vingança).',
        slots: [
          { label: 'Problema', correct: 'Como limitar moralmente o uso da violência coletiva' },
          { label: 'Tradição que responde', correct: 'Teoria da guerra justa (Agostinho / Tomás de Aquino)' },
          { label: 'Critério 1', correct: 'Justa causa: reparar injustiça grave' },
          { label: 'Critério 2', correct: 'Autoridade legítima e intenção reta' },
        ],
        distractors: ['Pacifismo absoluto sem exceções', 'Qualquer Estado pode declarar guerra']
      },
      {
        text: 'O problema da memória de trabalho sobrecarregada na dislexia impede a integração de palavras em frases. A solução instrucional é automatizar o reconhecimento de palavras frequentes, liberando recursos cognitivos para a compreensão. Isso se alcança por meio de prática de fluência repetida com feedback imediato.',
        slots: [
          { label: 'Problema', correct: 'Memória de trabalho sobrecarregada impede compreensão' },
          { label: 'Causa', correct: 'Reconhecimento de palavras não automatizado' },
          { label: 'Solução', correct: 'Automatizar reconhecimento de palavras frequentes' },
          { label: 'Método', correct: 'Prática de fluência repetida com feedback imediato' },
        ],
        distractors: ['Evitar toda leitura em voz alta', 'Reduzir vocabulário exigido ao mínimo']
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // TIPO 3 — RESUMO EM UMA FRASE (3 módulos, 5 textos cada)
  // ══════════════════════════════════════════════════════════════════

  // ── Módulo 3-A: Resumo — Teologia e Filosofia ───────────────────
  {
    name: 'Resumo — Teologia e Filosofia',
    type: 'resumo',
    items: [
      {
        text: 'Tomás de Aquino argumentou que a lei natural é a participação da criatura racional na lei eterna de Deus. Para ele, o ser humano, por possuir razão, é capaz de discernir o bem do mal sem necessidade de revelação especial. Essa posição fundamentou a tradição do direito natural no Ocidente.',
        model_summary: 'Tomás de Aquino fundamentou o direito natural ao argumentar que a razão humana, como participação na lei eterna divina, permite discernir o bem do mal.',
        keywords: ['Tomás de Aquino', 'lei natural', 'razão', 'lei eterna'],
        structure: 'descrição'
      },
      {
        text: 'Agostinho de Hipona argumentou que a vontade humana, após a queda de Adão, está estruturalmente inclinada ao mal — não por coerção externa, mas por desordem interna. Por isso, a liberdade plena exige graça: sem ela, o livre-arbítrio escolhe o bem de forma instável e imperfeita.',
        model_summary: 'Agostinho sustentou que a vontade humana caída só atinge plena liberdade mediante a graça divina, pois sem ela inclina-se ao mal por desordem interna.',
        keywords: ['Agostinho', 'vontade', 'graça', 'livre-arbítrio', 'queda'],
        structure: 'causa-efeito'
      },
      {
        text: 'O imperativo categórico de Kant exige que se aja apenas segundo máximas que possam ser universalizadas sem contradição. Diferentemente das éticas consequencialistas, que avaliam o ato pelos seus efeitos, Kant avalia o ato pela sua forma racional intrínseca. A moralidade é, assim, autônoma e independente de inclinações ou resultados.',
        model_summary: 'A ética kantiana avalia os atos pela sua forma racional universalizável, não pelos resultados, tornando a moralidade autônoma e independente de consequências.',
        keywords: ['Kant', 'imperativo categórico', 'universalizável', 'autônoma'],
        structure: 'comparação'
      },
      {
        text: 'O ceticismo pirroniano propõe a suspensão do juízo (epoché) como resposta ao problema do critério: se não podemos justificar nenhum critério sem circularidade, devemos abster-nos de afirmar ou negar qualquer coisa. O resultado, segundo Pirro, é a ataraxia — ausência de perturbação mental.',
        model_summary: 'O ceticismo pirroniano propõe a suspensão do juízo diante da impossibilidade de justificar um critério de verdade, visando alcançar a serenidade (ataraxia).',
        keywords: ['ceticismo', 'suspensão do juízo', 'epoché', 'ataraxia'],
        structure: 'problema-solução'
      },
      {
        text: 'O panteísmo espinosista identifica Deus com a totalidade da natureza: Deus não é um ser pessoal externo ao mundo, mas a única substância da qual tudo que existe é modo ou atributo. Essa posição unifica ontologia e teologia, mas foi condenada pelas tradições abraâmicas por dissolver a distinção entre Criador e criatura.',
        model_summary: 'Espinosa identificou Deus com a natureza como substância única, unificando ontologia e teologia, mas dissolvendo a distinção criador-criatura das tradições abraâmicas.',
        keywords: ['Espinosa', 'panteísmo', 'Deus', 'natureza', 'substância'],
        structure: 'descrição'
      },
    ]
  },

  // ── Módulo 3-B: Resumo — Economia e História ────────────────────
  {
    name: 'Resumo — Economia e História',
    type: 'resumo',
    items: [
      {
        text: 'Adam Smith argumentou que a divisão do trabalho aumenta a produtividade por três razões: aperfeiçoa a habilidade de cada trabalhador, economiza o tempo perdido na troca de tarefas, e facilita a invenção de máquinas especializadas. A famosa fábrica de alfinetes ilustra como 18 operações separadas multiplicam a produção por centenas.',
        model_summary: 'Adam Smith demonstrou que a divisão do trabalho eleva a produtividade por meio do aperfeiçoamento da habilidade, economia de tempo e estímulo à inovação mecânica.',
        keywords: ['Adam Smith', 'divisão do trabalho', 'produtividade', 'especialização'],
        structure: 'descrição'
      },
      {
        text: 'A Grande Depressão de 1929 expôs a incapacidade dos mecanismos de mercado de restaurar automaticamente o pleno emprego. Keynes respondeu propondo que o Estado deveria compensar a insuficiência de demanda privada por meio de gastos públicos déficitários, especialmente em investimento de infraestrutura.',
        model_summary: 'Keynes respondeu à Grande Depressão propondo intervenção estatal via gastos déficitários para compensar a insuficiência de demanda privada e restaurar o pleno emprego.',
        keywords: ['Keynes', 'Grande Depressão', 'demanda', 'gastos públicos'],
        structure: 'problema-solução'
      },
      {
        text: 'A Revolução Francesa de 1789 destruiu a ordem estamental do Ancien Régime e proclamou os princípios de liberdade, igualdade e fraternidade. Paradoxalmente, o processo revolucionário conduziu ao Terror jacobino e, em seguida, ao cesarismo napoleônico — sugerindo que a ruptura radical com o passado pode gerar novas formas de dominação.',
        model_summary: 'A Revolução Francesa, ao proclamar liberdade e igualdade, desconstruiu o Ancien Régime mas paradoxalmente gerou o Terror e o cesarismo napoleônico.',
        keywords: ['Revolução Francesa', 'Ancien Régime', 'Terror', 'Napoleão'],
        structure: 'causa-efeito'
      },
      {
        text: 'O mercantilismo, doutrina econômica dominante do século XVI ao XVIII, identificava riqueza nacional com acumulação de metais preciosos. Por isso, defendia superávit comercial constante, proteção da indústria doméstica por tarifas e restrições às importações. Adam Smith refutou esse paradigma ao mostrar que a riqueza é produção, não acumulação de ouro.',
        model_summary: 'O mercantilismo identificava riqueza com metais preciosos e superávit comercial, paradigma que Adam Smith refutou ao redefinir riqueza como produção nacional.',
        keywords: ['mercantilismo', 'riqueza', 'metais preciosos', 'Adam Smith'],
        structure: 'comparação'
      },
      {
        text: 'A teoria das vantagens comparativas de Ricardo demonstra que dois países se beneficiam do comércio mesmo quando um deles é absolutamente mais eficiente na produção de todos os bens. Basta que cada um se especialize no bem em que tem menor custo de oportunidade relativo, exportando-o e importando o restante.',
        model_summary: 'Ricardo demonstrou que o comércio entre nações é mutuamente vantajoso quando cada uma se especializa onde tem vantagem comparativa, independentemente de eficiência absoluta.',
        keywords: ['Ricardo', 'vantagens comparativas', 'comércio', 'especialização'],
        structure: 'descrição'
      },
    ]
  },

  // ── Módulo 3-C: Resumo — Linguística e Leitura ──────────────────
  {
    name: 'Resumo — Linguística e Leitura',
    type: 'resumo',
    items: [
      {
        text: 'A hipótese do déficit fonológico, consolidada por pesquisadores como Shaywitz e Liberman, explica a dislexia como falha na representação e manipulação dos fonemas — as unidades sonoras da língua. Essa falha prejudica a decodificação grafema-fonema, tornando a leitura lenta, imprecisa e custosa em termos cognitivos.',
        model_summary: 'A hipótese do déficit fonológico explica a dislexia como falha na representação fonêmica, prejudicando a decodificação e tornando a leitura lenta e imprecisa.',
        keywords: ['dislexia', 'déficit fonológico', 'fonemas', 'decodificação'],
        structure: 'descrição'
      },
      {
        text: 'A consciência fonológica — capacidade de perceber e manipular os sons da língua independentemente do significado — é o preditor mais robusto do sucesso na leitura inicial. Crianças que identificam rimas, segmentam sílabas e isolam fonemas aprendem a ler com muito mais facilidade do que aquelas sem essa habilidade.',
        model_summary: 'A consciência fonológica, capacidade de perceber e manipular sons da língua, é o melhor preditor da aprendizagem inicial da leitura.',
        keywords: ['consciência fonológica', 'fonemas', 'leitura', 'preditor'],
        structure: 'descrição'
      },
      {
        text: 'Ferdinand de Saussure revolucionou a linguística ao propor que o signo linguístico é arbitrário: não há relação natural entre o significante (imagem acústica) e o significado (conceito). A língua é, portanto, um sistema de diferenças puras, onde o valor de cada elemento é definido pela sua oposição aos demais, não por uma essência própria.',
        model_summary: 'Saussure fundamentou a linguística estrutural ao demonstrar que o signo é arbitrário e que a língua é um sistema de diferenças onde cada elemento se define por oposição.',
        keywords: ['Saussure', 'signo', 'arbitrário', 'significante', 'sistema'],
        structure: 'descrição'
      },
      {
        text: 'A leitura repetida é uma técnica de intervenção em que o estudante relê o mesmo texto três ou mais vezes com objetivo de velocidade. A cada repetição, a fluência aumenta porque o reconhecimento de palavras se automatiza. Pesquisas mostram ganhos não só no texto praticado, mas também em novos textos não treinados.',
        model_summary: 'A leitura repetida melhora a fluência ao automatizar o reconhecimento de palavras por meio de releituras cronometradas, com ganhos que se transferem para novos textos.',
        keywords: ['leitura repetida', 'fluência', 'automatização', 'transferência'],
        structure: 'problema-solução'
      },
      {
        text: 'O Modelo Simples de Leitura de Gough e Tunmer (1986) estabelece que a compreensão de leitura é o produto de duas habilidades independentes: decodificação e compreensão da linguagem oral. Se qualquer uma for zero, a compreensão é zero. Isso explica por que tanto disléxicos (fraca decodificação) quanto hiperlexos (fraca compreensão oral) apresentam dificuldades de leitura.',
        model_summary: 'O Modelo Simples de Leitura demonstra que a compreensão leitora é produto da decodificação e da compreensão oral, explicando diferentes perfis de dificuldade.',
        keywords: ['Modelo Simples', 'decodificação', 'compreensão oral', 'leitura'],
        structure: 'descrição'
      },
    ]
  },

];
