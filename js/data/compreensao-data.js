// compreensao-data.js — Módulos de Compreensão Ativa (Shaywitz cap. 19)
// 7 estratégias: ativar conhecimento prévio, predizer, visualizar,
// questionar, monitorar, resumir, conectar

const COMPREENSAO_MODULES = [

  // ── Módulo 1 — Filosofia ────────────────────────────────────────────────────
  {
    name: 'Filosofia — Alegoria da Caverna',
    title: 'A Alegoria da Caverna',
    topic_hint: 'filosofia, Platão, conhecimento, aparência vs. realidade',
    text: `Platão, no livro VII d\'A República, descreve prisioneiros acorrentados no interior de uma caverna desde a infância. Incapazes de girar a cabeça, eles veem apenas sombras projetadas numa parede — reflexos de objetos transportados entre eles e uma fogueira ao fundo. Para esses prisioneiros, as sombras constituem a única realidade conhecida, e o mais perspicaz entre eles é aquele que melhor antecipa a sequência das imagens.

Quando um prisioneiro é libertado e forçado a olhar diretamente para a fogueira, a visão dolorosa o faz recuar. Mas, ao emergir para a luz do sol, ele gradualmente distingue reflexos, depois objetos, e por fim o próprio sol — fonte de toda visibilidade e verdade. O filósofo é esse prisioneiro liberto: aquele que, após a dolorosa transição do senso comum para o conhecimento racional, recusa regressar às sombras e é tido como louco pelos que permanecem acorrentados.

A caverna representa o mundo sensível; o exterior, o mundo das formas inteligíveis. A ascensão é o caminho da educação filosófica.`,
    before: {
      knowledge: 'O que você já sabe sobre Platão, a Teoria das Formas ou a distinção entre aparência e realidade?',
      prediction: 'Pelo título "A Alegoria da Caverna", que argumento filosófico você espera encontrar?'
    },
    during: {
      visualize: 'Forme uma imagem mental da caverna: prisioneiros, correntes, fogueira, sombras na parede. O que você vê?',
      question: 'Por que os prisioneiros resistem à ideia de que as sombras não são reais? O que isso revela sobre a natureza humana?',
      monitor: 'Releia o segundo parágrafo. O que significa "formas inteligíveis"? Se não ficou claro, releia o trecho final.'
    },
    after: {
      summary_prompt: 'Resuma a ideia central da Alegoria da Caverna em uma frase:',
      summary_key: 'O verdadeiro conhecimento exige abandonar as ilusões do senso comum e suportar o desconforto da ascensão racional ao real.',
      connect: 'Em que situação da sua vida você já confundiu uma aparência (uma sombra) com a realidade? Como descobriu o equívoco?',
      questions: [
        {
          q: 'O que as sombras na parede da caverna representam, segundo Platão?',
          options: [
            'O conhecimento filosófico mais elevado',
            'As ilusões do mundo sensível percebido pelos sentidos',
            'A luz da razão que ilumina a mente',
            'Os objetos concretos e verificáveis da ciência'
          ],
          a: 'As ilusões do mundo sensível percebido pelos sentidos',
          level: 'literal'
        },
        {
          q: 'Por que o prisioneiro liberto é considerado "louco" pelos que permanecem na caverna?',
          options: [
            'Porque ele perdeu a capacidade de ver no escuro',
            'Porque seu relato contraria a experiência sensível dos demais',
            'Porque ele recusa qualquer forma de diálogo',
            'Porque a luz do sol lhe causou cegueira permanente'
          ],
          a: 'Porque seu relato contraria a experiência sensível dos demais',
          level: 'inferencial'
        },
        {
          q: 'Qual é a crítica implícita de Platão à democracia ateniense nessa alegoria?',
          options: [
            'Que a democracia favorece os mais eloquentes em detrimento dos mais sábios',
            'Que o governo deve ser exercido por generais, não por filósofos',
            'Que a maioria, presa às sombras, condena os que trazem a verdade',
            'Que a educação pública é superior à formação individual'
          ],
          a: 'Que a maioria, presa às sombras, condena os que trazem a verdade',
          level: 'critico'
        }
      ]
    }
  },

  // ── Módulo 2 — Teologia ─────────────────────────────────────────────────────
  {
    name: 'Teologia — Fé e Razão em Tomás de Aquino',
    title: 'Fé e Razão: a Síntese de Tomás de Aquino',
    topic_hint: 'teologia, escolástica, razão natural, revelação, Aristóteles',
    text: `Tomás de Aquino (1225–1274), na Suma Teológica, propõe uma distinção que moldou o pensamento ocidental: fé e razão não são adversárias, mas ordens complementares do conhecimento. A razão natural, exercida pela filosofia, pode demonstrar certas verdades sobre Deus — sua existência, sua unicidade, sua bondade —, mas permanece impotente diante dos mistérios revelados, como a Trindade ou a Encarnação, que somente a fé acolhe.

Essa distinção recusa dois extremos igualmente falaciosos: o fideísmo, que despreza a razão por considerá-la ameaça à fé; e o racionalismo teológico, que pretende deduzir todos os dogmas a partir de princípios naturais. Para Aquino, a revelação não contradiz a razão, mas a supera — assim como a visão telescópica não nega a visão a olho nu, mas amplia seus horizontes.

A "graça não destrói a natureza, mas a pressupõe e aperfeiçoa" é a fórmula sintética de Aquino. A inteligência humana, ao aceitar os artigos de fé, não capitula: ela reconhece seus próprios limites e se abre a uma luz que não produz, mas recebe.`,
    before: {
      knowledge: 'O que você já sabe sobre a relação entre fé e razão na história do pensamento cristão?',
      prediction: 'Esperando um texto sobre Tomás de Aquino e a escolástica, que tipo de argumento você antecipa?'
    },
    during: {
      visualize: 'Forme uma imagem da distinção entre razão e fé como dois andares de um mesmo edifício. O que há em cada andar?',
      question: 'Por que Aquino considera o fideísmo tão problemático quanto o racionalismo teológico?',
      monitor: 'Releia a analogia do telescópio. Você entendeu o que ela ilustra? Se não, releia o parágrafo do meio.'
    },
    after: {
      summary_prompt: 'Resuma em uma frase a posição de Aquino sobre fé e razão:',
      summary_key: 'Para Aquino, fé e razão são ordens complementares: a razão atinge certas verdades naturais sobre Deus, mas a revelação a supera sem contradizê-la.',
      connect: 'Há alguma área do seu próprio conhecimento onde você percebe essa tensão entre o que você pode demonstrar e o que você simplesmente aceita como verdadeiro?',
      questions: [
        {
          q: 'Qual é a distinção fundamental que Tomás de Aquino propõe na Suma Teológica?',
          options: [
            'A distinção entre corpo e alma como substâncias independentes',
            'A distinção entre fé e razão como ordens complementares do conhecimento',
            'A distinção entre teologia natural e teologia revelada como disciplinas opostas',
            'A distinção entre filosofia grega e teologia cristã como incompatíveis'
          ],
          a: 'A distinção entre fé e razão como ordens complementares do conhecimento',
          level: 'literal'
        },
        {
          q: 'O que a analogia do telescópio pretende ilustrar no texto?',
          options: [
            'Que a ciência moderna supera a teologia medieval',
            'Que a revelação amplia o alcance da razão sem negá-la',
            'Que somente instrumentos científicos podem provar a existência de Deus',
            'Que a visão espiritual substitui completamente a razão natural'
          ],
          a: 'Que a revelação amplia o alcance da razão sem negá-la',
          level: 'inferencial'
        },
        {
          q: 'A fórmula "a graça não destrói a natureza, mas a pressupõe e aperfeiçoa" implica que:',
          options: [
            'A fé torna a razão desnecessária no campo teológico',
            'A natureza humana é corrompida demais para conhecer qualquer verdade',
            'A ordem sobrenatural eleva e completa a ordem natural sem anulá-la',
            'A razão pode, por si mesma, alcançar todos os mistérios da fé'
          ],
          a: 'A ordem sobrenatural eleva e completa a ordem natural sem anulá-la',
          level: 'critico'
        }
      ]
    }
  },

  // ── Módulo 3 — Economia ─────────────────────────────────────────────────────
  {
    name: 'Economia — A Ordem Espontânea de Hayek',
    title: 'A Ordem Espontânea: Hayek e o Limite do Planejamento',
    topic_hint: 'economia, Hayek, conhecimento disperso, mercado, planejamento central',
    text: `Friedrich Hayek argumentou que o problema central da economia não é matemático nem técnico, mas epistemológico: como coordenar o uso de informações que não existem em forma concentrada na mente de nenhum indivíduo ou agência. O conhecimento relevante para a economia — preferências, circunstâncias locais, oportunidades percebidas — encontra-se disperso entre milhões de agentes e não pode ser transmitido integralmente a nenhum planejador central.

O mecanismo de preços resolve esse problema de forma elegante. Quando a oferta de estanho escasseia, o preço sobe; esse sinal induz consumidores a economizar e produtores a buscar substitutos — sem que ninguém precise conhecer as causas remotas da escassez. O preço codifica informação sem revelá-la: basta que cada agente reaja ao sinal local.

Daí o paradoxo central do planejamento centralizado: quanto maior a economia, mais o planejador necessita precisamente do tipo de conhecimento que somente o mercado é capaz de gerar. Ao suprimir os preços, suprime-se o único mecanismo capaz de agregar informação dispersa; o resultado não é ordem gerida, mas desordem camuflada de plano.`,
    before: {
      knowledge: 'O que você já conhece sobre Hayek, a Escola Austríaca de Economia ou sobre a crítica ao planejamento central?',
      prediction: 'Pelo título, que argumento sobre mercados e planejamento você espera que o texto desenvolva?'
    },
    during: {
      visualize: 'Imagine milhões de pessoas tomando decisões simultâneas sobre o que comprar, vender e produzir. Como o preço de um produto conecta todas essas decisões?',
      question: 'Por que Hayek considera o problema econômico fundamentalmente epistemológico, e não matemático?',
      monitor: 'Releia o exemplo do estanho. Você consegue explicar por que o preço funciona como "informação codificada"? Se não, releia o segundo parágrafo.'
    },
    after: {
      summary_prompt: 'Resuma em uma frase o argumento central de Hayek sobre preços e conhecimento:',
      summary_key: 'Os preços de mercado codificam informação dispersa que nenhum planejador central poderia reunir, tornando o mercado o único mecanismo eficaz de coordenação econômica.',
      connect: 'Você já viveu ou observou uma situação em que uma decisão centralizada falhou por ignorar conhecimento local que só os envolvidos possuíam?',
      questions: [
        {
          q: 'Segundo Hayek, qual é o problema central da economia?',
          options: [
            'A distribuição justa da riqueza entre classes sociais',
            'A coordenação de informações dispersas que nenhum agente central possui integralmente',
            'O cálculo matemático dos preços de equilíbrio geral',
            'A maximização da produção industrial por meio de planejamento técnico'
          ],
          a: 'A coordenação de informações dispersas que nenhum agente central possui integralmente',
          level: 'literal'
        },
        {
          q: 'O que significa dizer que o preço "codifica informação sem revelá-la"?',
          options: [
            'Que os preços ocultam propositalmente dados de mercado dos consumidores',
            'Que o agente reage ao sinal do preço sem precisar conhecer suas causas remotas',
            'Que somente especialistas conseguem interpretar corretamente os preços',
            'Que o preço é sempre uma ilusão criada por monopólios'
          ],
          a: 'Que o agente reage ao sinal do preço sem precisar conhecer suas causas remotas',
          level: 'inferencial'
        },
        {
          q: 'A crítica de Hayek ao planejamento centralizado implica que:',
          options: [
            'Qualquer intervenção estatal na economia é ineficiente por definição',
            'O socialismo é impossível apenas em países com baixa industrialização',
            'Ao suprimir preços, o planejador elimina o mecanismo que geraria a informação de que ele precisa',
            'Os mercados livres sempre produzem resultados socialmente ótimos sem exceção'
          ],
          a: 'Ao suprimir preços, o planejador elimina o mecanismo que geraria a informação de que ele precisa',
          level: 'critico'
        }
      ]
    }
  },

  // ── Módulo 4 — História ─────────────────────────────────────────────────────
  {
    name: 'História — A Queda de Constantinopla',
    title: 'A Queda de Constantinopla (1453)',
    topic_hint: 'história, Bizâncio, Otomanos, Mehmed II, fim do mundo medieval',
    text: `Na madrugada de 29 de maio de 1453, após 53 dias de cerco, as forças otomanas de Mehmed II romperam as muralhas Teodosinas de Constantinopla — muralhas que haviam resistido por mais de mil anos. O imperador Constantino XI Paleólogo morreu combatendo entre os seus, e a cidade que se considerava o centro do mundo cristão oriental passou a ser a nova capital do Império Otomano, rebatizada Kostantiniyye.

A queda teve consequências que se irradiaram por toda a Eurásia. Rotas comerciais terrestres para a Ásia tornaram-se instáveis, impulsionando potências ibéricas a buscar caminhos marítimos alternativos — pressão que contribuiu para as navegações portuguesas e, indiretamente, para a chegada de Colombo às Américas. Sábios gregos que fugiram para o Ocidente transportaram manuscritos aristotélicos e platônicos que nutriram o humanismo renascentista.

Para os otomanos, a conquista selou a continuidade do Terceiro Roma — como os russos posteriormente a reinterpretaram —, e para o islamismo sunita representou a realização de uma profecia atribuída ao Profeta. Em todos os sentidos, 1453 é uma data-dobradiça: encerra a Idade Média e abre, simultaneamente, múltiplas histórias modernas.`,
    before: {
      knowledge: 'O que você já sabe sobre o Império Bizantino, o avanço otomano ou o contexto do século XV?',
      prediction: 'Que consequências de longo prazo você espera que o texto atribua à queda de Constantinopla?'
    },
    during: {
      visualize: 'Forme uma imagem das muralhas Teodosinas sendo rompidas ao amanhecer. O que havia dos dois lados dessas muralhas naquele momento?',
      question: 'Por que a autora conecta a queda de Constantinopla às navegações ibéricas? Essa conexão parece direta ou indireta?',
      monitor: 'Releia o trecho sobre o "Terceiro Roma". Você entendeu essa expressão? Se não, identifique quem a reinterpretou e por quê.'
    },
    after: {
      summary_prompt: 'Resuma em uma frase por que 1453 é chamada de "data-dobradiça" da história:',
      summary_key: '1453 encerra o Império Romano do Oriente e, ao reconfigurar rotas e dispersar sábios gregos, catalisa simultaneamente o Renascimento e a Era das Navegações.',
      connect: 'Existe algum evento da sua história pessoal que funcionou como uma "data-dobradiça" — um momento que encerrou uma fase e abriu várias outras ao mesmo tempo?',
      questions: [
        {
          q: 'Qual foi o destino do imperador Constantino XI durante a queda de Constantinopla?',
          options: [
            'Ele fugiu para Roma e viveu em exílio',
            'Foi capturado por Mehmed II e exilado no Cairo',
            'Morreu combatendo durante o assalto final',
            'Negociou a rendição da cidade em troca de salvo-conduto'
          ],
          a: 'Morreu combatendo durante o assalto final',
          level: 'literal'
        },
        {
          q: 'Qual é a relação causal que o texto estabelece entre a queda de Constantinopla e as navegações ibéricas?',
          options: [
            'A conquista otomana financiou diretamente as expedições de Colombo',
            'A instabilidade das rotas terrestres motivou a busca de caminhos marítimos alternativos',
            'Mehmed II expulsou os navegadores portugueses do Mediterrâneo',
            'Os sábios gregos refugiados trouxeram mapas secretos para Portugal'
          ],
          a: 'A instabilidade das rotas terrestres motivou a busca de caminhos marítimos alternativos',
          level: 'inferencial'
        },
        {
          q: 'Por que o texto descreve 1453 como "data-dobradiça"?',
          options: [
            'Porque marca o início do período chamado pelos historiadores de "Era Otomana Global"',
            'Porque encerra uma era e abre simultaneamente múltiplos processos históricos modernos',
            'Porque é exatamente o meio cronológico entre o ano 1000 e o ano 1906',
            'Porque representa a primeira derrota do Ocidente cristão frente ao Islã'
          ],
          a: 'Porque encerra uma era e abre simultaneamente múltiplos processos históricos modernos',
          level: 'critico'
        }
      ]
    }
  },

  // ── Módulo 5 — Latim (traduzido) ────────────────────────────────────────────
  {
    name: 'Latim — De Officiis: o Dever e a Utilidade',
    title: 'O Dever e a Utilidade: Cícero no De Officiis',
    topic_hint: 'latim, Cícero, ética estoica, honestum, utile, dever moral',
    text: `No De Officiis (44 a.C.), Cícero sintetiza para seu filho Marco uma ética do dever (officium) baseada na tradição estoica. A questão central é: quando o honestum — o que é moralmente reto — entra em conflito com o utile — o que parece vantajoso —, qual deve prevalecer?

A resposta de Cícero é inequívoca: nunca há conflito real entre o verdadeiramente útil e o verdadeiramente honesto. O que parece útil, mas é desonesto, é apenas aparentemente vantajoso; a longo prazo, a injustiça corrói os laços que tornam a vida social possível. O exemplo clássico é o comerciante que omite defeitos de uma mercadoria: o ganho imediato é real, mas a reputação — o capital mais durável — se degrada.

Cícero distingue ainda quatro virtudes cardeais — prudência, justiça, fortaleza e temperança — como os pilares do officium. A prudência orienta o julgamento; a justiça regula as relações com os outros; a fortaleza sustenta o ânimo nas adversidades; a temperança modera os apetites. Juntas, elas constituem o perfil do vir bonus: o homem de bem capaz de servir à res publica com integridade.`,
    before: {
      knowledge: 'O que você já conhece sobre Cícero, o estoicismo romano ou a distinção entre utilidade e moralidade na ética antiga?',
      prediction: 'Pelo título, que tipo de dilema ético você espera que o texto discuta?'
    },
    during: {
      visualize: 'Forme uma imagem do comerciante que oculta um defeito na mercadoria. O que acontece com ele a longo prazo, segundo Cícero?',
      question: 'Por que Cícero afirma que não há conflito real entre o honestum e o utile? Você concorda com esse argumento?',
      monitor: 'Releia o parágrafo sobre as quatro virtudes cardeais. Consegue associar cada virtude a um domínio da vida? Se não, releia o trecho final com atenção.'
    },
    after: {
      summary_prompt: 'Resuma em uma frase a tese central de Cícero no De Officiis:',
      summary_key: 'Para Cícero, o verdadeiramente útil e o moralmente reto coincidem: o que parece vantajoso, mas é desonesto, destrói a longo prazo os laços e a reputação que sustentam toda vida social.',
      connect: 'Você já enfrentou uma situação em que uma ação aparentemente vantajosa a curto prazo comprometeu algo mais durável (uma amizade, uma reputação, a sua própria integridade)?',
      questions: [
        {
          q: 'Qual é a questão central que Cícero examina no De Officiis?',
          options: [
            'Se a filosofia grega é superior à tradição jurídica romana',
            'Se o conflito entre o moralmente reto e o aparentemente vantajoso é real',
            'Se o Estado deve controlar a economia para garantir a justiça distributiva',
            'Se as virtudes cardeais podem ser ensinadas ou são inatas'
          ],
          a: 'Se o conflito entre o moralmente reto e o aparentemente vantajoso é real',
          level: 'literal'
        },
        {
          q: 'O que o exemplo do comerciante que oculta defeitos ilustra?',
          options: [
            'Que a desonestidade comercial era comum e tolerada na Roma antiga',
            'Que o ganho imediato da fraude destrói o capital reputacional a longo prazo',
            'Que a lei romana punia severamente qualquer forma de omissão contratual',
            'Que a prudência aconselha evitar negócios com desconhecidos'
          ],
          a: 'Que o ganho imediato da fraude destrói o capital reputacional a longo prazo',
          level: 'inferencial'
        },
        {
          q: 'A distinção entre honestum e utile em Cícero pode ser aplicada à ética empresarial contemporânea porque:',
          options: [
            'As leis atuais reproduzem fielmente o Direito Romano em matéria comercial',
            'Empresas que priorizam ganhos de curto prazo à custa da integridade tendem a degradar a confiança que sustenta seus negócios',
            'O estoicismo é a única escola filosófica aceita no mundo corporativo moderno',
            'A reputação não tem valor mensurável em mercados competitivos globais'
          ],
          a: 'Empresas que priorizam ganhos de curto prazo à custa da integridade tendem a degradar a confiança que sustenta seus negócios',
          level: 'critico'
        }
      ]
    }
  },

  // ── Módulo 6 — Epistemologia ────────────────────────────────────────────────
  {
    name: 'Epistemologia — O Problema da Indução em Hume',
    title: 'O Problema da Indução: Hume e a Fragilidade do "Sempre"',
    topic_hint: 'epistemologia, Hume, indução, causalidade, ceticismo moderado',
    text: `David Hume formulou, no Tratado da Natureza Humana (1739), o problema que abala toda a ciência empírica: por que a repetição de eventos passados justificaria expectativas sobre eventos futuros? Temos observado o sol nascer todos os dias; inferimos que nascerá amanhã. Mas essa inferência não é dedutivamente válida — não há contradição lógica na ideia de que o sol não nasça amanhã. O que nos autoriza, então, a esperar regularidades?

Hume responde com um diagnóstico desolador: nada nos autoriza racionalmente. O que chamamos de "raciocínio causal" é, na verdade, um hábito psicológico — a mente, após repetir experiências contíguas, passa a esperar a sequência. A causalidade não é percebida no mundo; é projetada pelo hábito na experiência. Não vemos forças causais; vemos sequências e as chamamos de causas.

O legado de Hume não é o niilismo epistêmico, mas o ceticismo moderado: devemos proporcionar nossa crença à evidência disponível, reconhecer os limites do nosso conhecimento e suspeitar de afirmações que excedem o que a experiência pode fundamentar. Kant chamou esse problema de "o que o despertou do sono dogmático" — e dedicou a Crítica da Razão Pura inteiramente à sua resposta.`,
    before: {
      knowledge: 'O que você já conhece sobre David Hume, o empirismo britânico ou o problema filosófico da indução?',
      prediction: 'O que você espera que um texto sobre "o problema da indução" argumente sobre a base do conhecimento científico?'
    },
    during: {
      visualize: 'Pense no exemplo clássico do cisne: um europeu que jamais saiu da Europa poderia ter visto apenas cisnes brancos. O que acontece quando ele vê um cisne negro? O que isso revela sobre a indução?',
      question: 'Se Hume está certo e a causalidade é apenas um hábito projetado, o que isso significa para a confiança que depositamos nas leis científicas?',
      monitor: 'Releia o trecho sobre Kant. O que significa dizer que o problema de Hume o "despertou do sono dogmático"? Se não ficou claro, volte ao início do último parágrafo.'
    },
    after: {
      summary_prompt: 'Resuma em uma frase o problema da indução formulado por Hume:',
      summary_key: 'Hume mostra que a repetição de eventos passados não justifica logicamente expectativas sobre o futuro: o que chamamos de causalidade é um hábito psicológico, não uma necessidade racional.',
      connect: 'Em algum momento da sua vida, você confiou em uma "lei" baseada na experiência passada — e ela falhou? Como você ajustou suas expectativas depois?',
      questions: [
        {
          q: 'Qual é o "problema da indução" formulado por Hume?',
          options: [
            'A impossibilidade de realizar experimentos controlados em ciências sociais',
            'A falta de validade dedutiva das inferências sobre regularidades futuras baseadas na experiência passada',
            'A contradição entre as leis da física clássica e a mecânica quântica',
            'A incapacidade humana de perceber padrões em grandes volumes de dados'
          ],
          a: 'A falta de validade dedutiva das inferências sobre regularidades futuras baseadas na experiência passada',
          level: 'literal'
        },
        {
          q: 'Segundo Hume, o que é a "causalidade" na prática?',
          options: [
            'Uma lei universal descoberta pela razão pura independente da experiência',
            'Uma força física mensurável entre dois objetos contíguos',
            'Um hábito psicológico que projeta sequências esperadas na experiência',
            'Um conceito matemático derivado do cálculo diferencial de Newton'
          ],
          a: 'Um hábito psicológico que projeta sequências esperadas na experiência',
          level: 'inferencial'
        },
        {
          q: 'O "ceticismo moderado" de Hume implica, na prática, que:',
          options: [
            'Devemos rejeitar toda a ciência por ser baseada em inferências inválidas',
            'Devemos proporcionar nossa crença à evidência e reconhecer os limites do que podemos saber',
            'Só o conhecimento matemático dedutivo tem valor epistemológico real',
            'A experiência sensível é completamente confiável, ao contrário da razão'
          ],
          a: 'Devemos proporcionar nossa crença à evidência e reconhecer os limites do que podemos saber',
          level: 'critico'
        }
      ]
    }
  }

];
