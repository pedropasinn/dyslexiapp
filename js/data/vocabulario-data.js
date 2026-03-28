// vocabulario-data.js — Dados do modulo Vocabulario Tier 2 (Beck's Three-Tier Framework)
// Vocabulario academico de alta frequencia em dominios intelectuais

const VOCABULARIO_MODULES = [
  // ───────────────────────────────────────────
  // Modulo 1 — Causalidade e Consequencia
  // ───────────────────────────────────────────
  {
    name: 'Causalidade e Consequência',
    description: 'Palavras que descrevem relações de causa, efeito e dependência.',
    words: [
      {
        word: 'subjacente',
        definition: 'Que está por baixo ou na base de algo; que fundamenta sem ser visível ou declarado explicitamente.',
        example: 'A causa <strong>subjacente</strong> da crise era a corrupção sistêmica, não o déficit fiscal.',
        etymology: 'Do lat. sub (sob) + jacēre (jazer, estar deitado)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O problema ___ à decisão do tribunal era a ausência de precedentes jurídicos sólidos.',
            choices: ['subjacente', 'adjacente', 'subsequente', 'decorrente'],
            correct: 'subjacente'
          },
          {
            type: 'uso',
            sentence: 'A razão ___ para o declínio do Império Romano não era óbvia aos contemporâneos.',
            choices: ['subjacente', 'consequente', 'inerente', 'iminente'],
            correct: 'subjacente'
          }
        ]
      },
      {
        word: 'inerente',
        definition: 'Que faz parte da natureza essencial de algo; inseparável, intrínseco.',
        example: 'O risco é <strong>inerente</strong> a qualquer empreendimento humano.',
        etymology: 'Do lat. inhaerēre (estar aderido a, estar fixo em)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A ambiguidade ___ à linguagem exige do leitor constante interpretação.',
            choices: ['inerente', 'adjacente', 'decorrente', 'iminente'],
            correct: 'inerente'
          },
          {
            type: 'uso',
            sentence: 'A falibilidade ___ ao julgamento humano é reconhecida pela epistemologia.',
            choices: ['inerente', 'subjacente', 'contingente', 'preponderante'],
            correct: 'inerente'
          }
        ]
      },
      {
        word: 'decorrente',
        definition: 'Que resulta ou deriva de algo; consequente, oriundo.',
        example: 'Os problemas <strong>decorrentes</strong> da inflação afetaram toda a população.',
        etymology: 'Do lat. decurrĕre (correr para baixo, derivar)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Os danos ___ do terremoto levaram anos para ser reparados.',
            choices: ['decorrentes', 'inerentes', 'subjacentes', 'paradoxais'],
            correct: 'decorrentes'
          },
          {
            type: 'uso',
            sentence: 'A crise econômica ___ da má gestão fiscal comprometeu toda a geração.',
            choices: ['decorrente', 'inerente', 'incisiva', 'inexorável'],
            correct: 'decorrente'
          }
        ]
      },
      {
        word: 'incisivo',
        definition: 'Que corta direto ao ponto; penetrante, preciso, decisivo no raciocínio ou na crítica.',
        example: 'Sua análise <strong>incisiva</strong> desmontou o argumento em poucas frases.',
        etymology: 'Do lat. incīdĕre (cortar em, penetrar)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A crítica ___ do filósofo revelou as contradições internas do sistema.',
            choices: ['incisiva', 'contingente', 'preponderante', 'paradoxal'],
            correct: 'incisiva'
          },
          {
            type: 'uso',
            sentence: 'Um orador ___ sabe quando parar e deixar o silêncio falar.',
            choices: ['incisivo', 'inexorável', 'subjacente', 'decorrente'],
            correct: 'incisivo'
          }
        ]
      },
      {
        word: 'paradoxal',
        definition: 'Que contém ou constitui um paradoxo; aparentemente contraditório mas possivelmente verdadeiro.',
        example: 'É <strong>paradoxal</strong> que a liberdade absoluta leve à tirania.',
        etymology: 'Do gr. paradoxos (contra a opinião comum)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A situação era ___ : quanto mais liberdade, menor a sensação de segurança.',
            choices: ['paradoxal', 'contingente', 'incisiva', 'inerente'],
            correct: 'paradoxal'
          },
          {
            type: 'uso',
            sentence: 'É ___ que um excesso de escolhas possa paralisar a decisão.',
            choices: ['paradoxal', 'inexorável', 'preponderante', 'decorrente'],
            correct: 'paradoxal'
          }
        ]
      },
      {
        word: 'inexorável',
        definition: 'Que não pode ser detido ou alterado por súplica ou força; implacável, inevitável.',
        example: 'O avanço <strong>inexorável</strong> do tempo desafia todas as civilizações.',
        etymology: 'Do lat. inexorabilis (que não se pode demover por preces)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A queda do império foi ___ diante das pressões externas e da corrupção interna.',
            choices: ['inexorável', 'contingente', 'paradoxal', 'subjacente'],
            correct: 'inexorável'
          },
          {
            type: 'uso',
            sentence: 'O progresso tecnológico parece ___ , independente da vontade política.',
            choices: ['inexorável', 'incisivo', 'preponderante', 'inerente'],
            correct: 'inexorável'
          }
        ]
      },
      {
        word: 'contingente',
        definition: 'Que pode ou não acontecer; dependente de circunstâncias; não necessário, mas possível.',
        example: 'A sobrevivência da democracia é <strong>contingente</strong> ao engajamento cívico.',
        etymology: 'Do lat. contingĕre (acontecer, tocar de passagem)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O sucesso do projeto é ___ à disponibilidade de financiamento externo.',
            choices: ['contingente', 'inerente', 'inexorável', 'incisivo'],
            correct: 'contingente'
          },
          {
            type: 'uso',
            sentence: 'Para Aristóteles, a virtude é um hábito, não um traço ___ ao acaso.',
            choices: ['contingente', 'paradoxal', 'subjacente', 'decorrente'],
            correct: 'contingente'
          }
        ]
      },
      {
        word: 'preponderante',
        definition: 'Que tem peso superior; dominante, predominante em importância ou número.',
        example: 'O papel <strong>preponderante</strong> do Estado na economia foi contestado pelos liberais.',
        etymology: 'Do lat. praeponderāre (pesar mais, ter mais peso)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A influência ___ da cultura helênica sobre Roma moldou o Ocidente.',
            choices: ['preponderante', 'contingente', 'paradoxal', 'subjacente'],
            correct: 'preponderante'
          },
          {
            type: 'uso',
            sentence: 'O fator ___ na queda de regimes autoritários costuma ser econômico.',
            choices: ['preponderante', 'decorrente', 'inexorável', 'inerente'],
            correct: 'preponderante'
          }
        ]
      }
    ]
  },

  // ───────────────────────────────────────────
  // Modulo 2 — Argumentacao e Retorica
  // ───────────────────────────────────────────
  {
    name: 'Argumentação e Retórica',
    description: 'Vocabulário do discurso, da lógica e da persuasão.',
    words: [
      {
        word: 'verossímil',
        definition: 'Que parece verdadeiro; plausível, crível, embora não necessariamente verdadeiro.',
        example: 'A hipótese é <strong>verossímil</strong>, mas ainda carece de evidências empíricas.',
        etymology: 'Do lat. verisimilis (semelhante à verdade)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A narrativa histórica precisa ser ___ para convencer, mesmo quando simplifica.',
            choices: ['verossímil', 'falacioso', 'axiomático', 'categórico'],
            correct: 'verossímil'
          },
          {
            type: 'uso',
            sentence: 'Sua explicação era ___ , mas a evidência forense apontava em outra direção.',
            choices: ['verossímil', 'dogmático', 'silogístico', 'dialético'],
            correct: 'verossímil'
          }
        ]
      },
      {
        word: 'falacioso',
        definition: 'Que contém falácia; enganoso, logicamente inválido, ilusório.',
        example: 'O argumento de autoridade, se mal usado, é <strong>falacioso</strong>.',
        etymology: 'Do lat. fallacia (engano, ardil) + -oso',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O raciocínio ___ da propaganda explorava o medo sem apresentar dados.',
            choices: ['falacioso', 'axiomático', 'pragmático', 'categórico'],
            correct: 'falacioso'
          },
          {
            type: 'uso',
            sentence: 'Identificar um argumento ___ exige treinamento em lógica informal.',
            choices: ['falacioso', 'verossímil', 'dialético', 'silogístico'],
            correct: 'falacioso'
          }
        ]
      },
      {
        word: 'axiomático',
        definition: 'Evidente por si mesmo, que não precisa de prova; relativo a axiomas.',
        example: 'Para os geômetras, certos princípios são <strong>axiomáticos</strong>.',
        etymology: 'Do gr. axiōma (o que é considerado digno, postulado)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Na ética kantiana, o imperativo categórico possui um caráter ___ .',
            choices: ['axiomático', 'falacioso', 'pragmático', 'silogístico'],
            correct: 'axiomático'
          },
          {
            type: 'uso',
            sentence: 'Tratar como ___ o que é, na verdade, culturalmente construído é um erro comum.',
            choices: ['axiomático', 'dialético', 'verossímil', 'categórico'],
            correct: 'axiomático'
          }
        ]
      },
      {
        word: 'dogmático',
        definition: 'Que afirma princípios sem admitir questionamento; inclinado a aceitar doutrinas sem prova.',
        example: 'Uma postura <strong>dogmática</strong> impede o avanço da investigação científica.',
        etymology: 'Do gr. dogma (o que se pensa, decreto, doutrina)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O pensador ___ recusa o diálogo com quem questiona seus pressupostos.',
            choices: ['dogmático', 'dialético', 'pragmático', 'axiomático'],
            correct: 'dogmático'
          },
          {
            type: 'uso',
            sentence: 'A reforma iluminista criticou a teologia ___ da escolástica tardia.',
            choices: ['dogmática', 'verossímil', 'silogística', 'falacioso'],
            correct: 'dogmática'
          }
        ]
      },
      {
        word: 'dialético',
        definition: 'Relativo à dialética; que avança por contradições e sínteses; que envolve debate.',
        example: 'O método <strong>dialético</strong> de Hegel parte da tese, passa pela antítese e chega à síntese.',
        etymology: 'Do gr. dialektikos (da arte do diálogo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O progresso da filosofia é ___ : cada sistema nasce em resposta ao anterior.',
            choices: ['dialético', 'axiomático', 'dogmático', 'falacioso'],
            correct: 'dialético'
          },
          {
            type: 'uso',
            sentence: 'Sócrates usava o método ___ para expor as contradições do interlocutor.',
            choices: ['dialético', 'pragmático', 'categórico', 'verossímil'],
            correct: 'dialético'
          }
        ]
      },
      {
        word: 'pragmático',
        definition: 'Voltado para resultados práticos; que prioriza a eficácia em detrimento de princípios abstratos.',
        example: 'A decisão foi <strong>pragmática</strong>: escolheram o que funcionava, não o que era ideal.',
        etymology: 'Do gr. pragma (ação, ato, negócio)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Ao contrário do idealismo, a política ___ busca o possível, não o perfeito.',
            choices: ['pragmática', 'dialética', 'axiomática', 'silogística'],
            correct: 'pragmática'
          },
          {
            type: 'uso',
            sentence: 'Um líder ___ não se prende a dogmas quando a realidade exige adaptação.',
            choices: ['pragmático', 'dogmático', 'categórico', 'falacioso'],
            correct: 'pragmático'
          }
        ]
      },
      {
        word: 'categórico',
        definition: 'Expresso sem condições ou reservas; absoluto, terminante, incondicional.',
        example: 'Sua recusa foi <strong>categórica</strong>: não havia espaço para negociação.',
        etymology: 'Do gr. kategorikos (afirmativo, declarativo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O imperador deu uma ordem ___ que não admitia apelação.',
            choices: ['categórica', 'dialética', 'verossímil', 'pragmática'],
            correct: 'categórica'
          },
          {
            type: 'uso',
            sentence: 'Kant distingue o imperativo ___ do hipotético pela incondicionalidade.',
            choices: ['categórico', 'silogístico', 'axiomático', 'falacioso'],
            correct: 'categórico'
          }
        ]
      },
      {
        word: 'silogístico',
        definition: 'Relativo ao silogismo; que segue a estrutura lógica premissa–premissa–conclusão.',
        example: 'O raciocínio <strong>silogístico</strong> foi a base da lógica aristotélica por dois milênios.',
        etymology: 'Do gr. syllogismos (raciocínio, cômputo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A argumentação ___ de Aristóteles influenciou toda a escolástica medieval.',
            choices: ['silogística', 'pragmática', 'dialética', 'dogmática'],
            correct: 'silogística'
          },
          {
            type: 'uso',
            sentence: 'O método ___ exige que a conclusão seja necessariamente derivada das premissas.',
            choices: ['silogístico', 'axiomático', 'categórico', 'falacioso'],
            correct: 'silogístico'
          }
        ]
      }
    ]
  },

  // ───────────────────────────────────────────
  // Modulo 3 — Governanca e Sociedade
  // ───────────────────────────────────────────
  {
    name: 'Governança e Sociedade',
    description: 'Termos da ciência política, formas de governo e organização social.',
    words: [
      {
        word: 'subsidiário',
        definition: 'Que serve de suporte ou complemento; relativo ao princípio de subsidiariedade (o poder deve residir no nível mais local possível).',
        example: 'O princípio <strong>subsidiário</strong> defende que o Estado não deve fazer o que a família pode fazer.',
        etymology: 'Do lat. subsidiarius (da reserva, de apoio)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A doutrina ___ da Igreja Católica influenciou a construção do federalismo moderno.',
            choices: ['subsidiária', 'hegemônica', 'oligárquica', 'autocrática'],
            correct: 'subsidiária'
          },
          {
            type: 'uso',
            sentence: 'O princípio ___ limita a intervenção estatal às questões que os cidadãos não podem resolver.',
            choices: ['subsidiário', 'plebiscitário', 'soberano', 'meritocrático'],
            correct: 'subsidiário'
          }
        ]
      },
      {
        word: 'hegemônico',
        definition: 'Que exerce hegemonia, ou seja, liderança e domínio cultural, político ou econômico sobre outros.',
        example: 'O discurso <strong>hegemônico</strong> naturaliza as relações de poder existentes.',
        etymology: 'Do gr. hegemon (líder, guia)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A cultura ___ dos Estados Unidos moldou os padrões de consumo globais no século XX.',
            choices: ['hegemônica', 'subsidiária', 'plebiscitária', 'oligárquica'],
            correct: 'hegemônica'
          },
          {
            type: 'uso',
            sentence: 'Questionar o pensamento ___ requer coragem intelectual e rigor argumentativo.',
            choices: ['hegemônico', 'autocrático', 'meritocrático', 'soberano'],
            correct: 'hegemônico'
          }
        ]
      },
      {
        word: 'oligárquico',
        definition: 'Relativo à oligarquia; governado ou controlado por um pequeno grupo privilegiado.',
        example: 'O sistema ___ concentrava o poder nas mãos de poucas famílias aristocráticas.',
        etymology: 'Do gr. oligos (poucos) + arkhein (governar)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A república romana tinha traços ___ , com o Senado dominado por patrícios.',
            choices: ['oligárquicos', 'hegemônicos', 'subsidiários', 'plebiscitários'],
            correct: 'oligárquicos'
          },
          {
            type: 'uso',
            sentence: 'Um regime ___ mascara seus interesses privados em retórica do bem comum.',
            choices: ['oligárquico', 'meritocrático', 'soberano', 'autocrático'],
            correct: 'oligárquico'
          }
        ]
      },
      {
        word: 'plebiscitário',
        definition: 'Relativo ao plebiscito; que submete decisões políticas diretamente ao voto popular.',
        example: 'A democracia <strong>plebiscitária</strong> pode degenerar em populismo se não for bem estruturada.',
        etymology: 'Do lat. plebiscitum (decreto do povo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A decisão sobre a independência foi tomada pelo mecanismo ___ da consulta popular.',
            choices: ['plebiscitário', 'oligárquico', 'hegemônico', 'autocrático'],
            correct: 'plebiscitário'
          },
          {
            type: 'uso',
            sentence: 'A democracia ___ exige uma cidadania bem informada para funcionar.',
            choices: ['plebiscitária', 'subsidiária', 'meritocrática', 'plutocrática'],
            correct: 'plebiscitária'
          }
        ]
      },
      {
        word: 'soberano',
        definition: 'Que detém autoridade suprema; independente de qualquer poder externo; supremo.',
        example: 'O povo <strong>soberano</strong> é o único fundamento legítimo do poder político.',
        etymology: 'Do lat. med. superanus (supremo, que está acima)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O estado ___ não reconhece autoridade superior à sua dentro de seu território.',
            choices: ['soberano', 'plebiscitário', 'oligárquico', 'subsidiário'],
            correct: 'soberano'
          },
          {
            type: 'uso',
            sentence: 'A teoria ___ de Bodin centralizava todo o poder legítimo no monarca.',
            choices: ['soberana', 'hegemônica', 'autocrática', 'plutocrática'],
            correct: 'soberana'
          }
        ]
      },
      {
        word: 'autocrático',
        definition: 'Relativo à autocracia; em que o governante detém poder absoluto e irrestrito.',
        example: 'O regime <strong>autocrático</strong> suprimiu toda a oposição organizada.',
        etymology: 'Do gr. autokrates (que governa a si mesmo, soberano absoluto)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O czar exercia um poder ___ que não admitia parlamento nem constituição.',
            choices: ['autocrático', 'plebiscitário', 'meritocrático', 'subsidiário'],
            correct: 'autocrático'
          },
          {
            type: 'uso',
            sentence: 'Líderes ___ frequentemente usam crises para justificar a concentração de poder.',
            choices: ['autocráticos', 'oligárquicos', 'soberanos', 'hegemônicos'],
            correct: 'autocráticos'
          }
        ]
      },
      {
        word: 'meritocrático',
        definition: 'Relativo à meritocracia; sistema em que o avanço social é determinado pelo mérito individual.',
        example: 'Um sistema <strong>meritocrático</strong> genuíno requer igualdade de oportunidades de partida.',
        etymology: 'Do lat. meritum (o que se merece) + gr. kratos (poder)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O ideal ___ ignora as vantagens estruturais de quem nasce em famílias privilegiadas.',
            choices: ['meritocrático', 'plebiscitário', 'subsidiário', 'hegemônico'],
            correct: 'meritocrático'
          },
          {
            type: 'uso',
            sentence: 'Críticos do discurso ___ apontam que o talento sem contexto não produz equidade.',
            choices: ['meritocrático', 'autocrático', 'soberano', 'oligárquico'],
            correct: 'meritocrático'
          }
        ]
      },
      {
        word: 'plutocrático',
        definition: 'Relativo à plutocracia; sistema em que o poder é exercido pelos mais ricos.',
        example: 'Uma democracia que ignora o financiamento eleitoral tende ao <strong>plutocrático</strong>.',
        etymology: 'Do gr. ploutos (riqueza) + kratos (poder)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O sistema ___ disfarça o poder do capital sob formas aparentemente democráticas.',
            choices: ['plutocrático', 'meritocrático', 'plebiscitário', 'soberano'],
            correct: 'plutocrático'
          },
          {
            type: 'uso',
            sentence: 'Aristóteles temia que a oligarquia degenerasse num regime ___ sem freios.',
            choices: ['plutocrático', 'autocrático', 'hegemônico', 'subsidiário'],
            correct: 'plutocrático'
          }
        ]
      }
    ]
  },

  // ───────────────────────────────────────────
  // Modulo 4 — Percepcao e Conhecimento
  // ───────────────────────────────────────────
  {
    name: 'Percepção e Conhecimento',
    description: 'Vocabulário da epistemologia, fenomenologia e filosofia do conhecimento.',
    words: [
      {
        word: 'empírico',
        definition: 'Baseado na experiência e observação; proveniente dos sentidos, não da razão pura.',
        example: 'A ciência moderna exige fundamentação <strong>empírica</strong> para suas hipóteses.',
        etymology: 'Do gr. empeirikos (experiente, baseado na experiência)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A medicina ___ de Hipócrates valorizava a observação clínica em detrimento da especulação.',
            choices: ['empírica', 'ontológica', 'transcendental', 'hermenêutica'],
            correct: 'empírica'
          },
          {
            type: 'uso',
            sentence: 'Sem evidências ___ , a hipótese permanece no campo da mera especulação.',
            choices: ['empíricas', 'fenomenológicas', 'heurísticas', 'epistemológicas'],
            correct: 'empíricas'
          }
        ]
      },
      {
        word: 'fenomenológico',
        definition: 'Relativo à fenomenologia; que estuda os fenômenos como se apresentam à consciência.',
        example: 'A análise <strong>fenomenológica</strong> de Husserl propunha suspender os julgamentos prévios.',
        etymology: 'Do gr. phainomenon (o que aparece) + logos (estudo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A abordagem ___ examina a experiência vivida antes de qualquer teoria explicativa.',
            choices: ['fenomenológica', 'empírica', 'heurística', 'ontológica'],
            correct: 'fenomenológica'
          },
          {
            type: 'uso',
            sentence: 'Merleau-Ponty desenvolveu uma análise ___ da percepção corporal.',
            choices: ['fenomenológica', 'epistemológica', 'transcendental', 'imanente'],
            correct: 'fenomenológica'
          }
        ]
      },
      {
        word: 'heurístico',
        definition: 'Relativo a estratégias de descoberta; que ajuda a encontrar soluções por exploração e aproximação.',
        example: 'O método <strong>heurístico</strong> não garante a solução ótima, mas acelera a descoberta.',
        etymology: 'Do gr. heuriskein (encontrar, descobrir)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O uso de analogias é um recurso ___ poderoso no ensino de conceitos complexos.',
            choices: ['heurístico', 'dogmático', 'empírico', 'ontológico'],
            correct: 'heurístico'
          },
          {
            type: 'uso',
            sentence: 'A inteligência artificial usa algoritmos ___ quando a busca exaustiva é inviável.',
            choices: ['heurísticos', 'hermenêuticos', 'transcendentais', 'fenomenológicos'],
            correct: 'heurísticos'
          }
        ]
      },
      {
        word: 'hermenêutico',
        definition: 'Relativo à hermenêutica; pertencente à teoria e prática da interpretação de textos.',
        example: 'O círculo <strong>hermenêutico</strong> descreve a relação entre o todo e as partes de um texto.',
        etymology: 'Do gr. hermēneutikos (relativo à interpretação, de Hermes, mensageiro)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A exegese bíblica envolve um trabalho ___ de contextualização histórica.',
            choices: ['hermenêutico', 'heurístico', 'empírico', 'imanente'],
            correct: 'hermenêutico'
          },
          {
            type: 'uso',
            sentence: 'Gadamer desenvolveu uma filosofia ___ centrada na fusão de horizontes.',
            choices: ['hermenêutica', 'ontológica', 'transcendental', 'epistemológica'],
            correct: 'hermenêutica'
          }
        ]
      },
      {
        word: 'epistemológico',
        definition: 'Relativo à epistemologia; pertencente ao estudo do conhecimento, sua origem, alcance e limites.',
        example: 'A questão <strong>epistemológica</strong> central é: como podemos saber que sabemos algo?',
        etymology: 'Do gr. episteme (conhecimento, ciência) + logos (estudo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O debate ___ entre Popper e Kuhn mudou a filosofia da ciência no século XX.',
            choices: ['epistemológico', 'ontológico', 'heurístico', 'imanente'],
            correct: 'epistemológico'
          },
          {
            type: 'uso',
            sentence: 'O ceticismo ___ questiona se podemos ter certeza sobre qualquer coisa.',
            choices: ['epistemológico', 'fenomenológico', 'transcendental', 'hermenêutico'],
            correct: 'epistemológico'
          }
        ]
      },
      {
        word: 'ontológico',
        definition: 'Relativo à ontologia; pertencente ao estudo do ser, da existência e da realidade em si.',
        example: 'O argumento <strong>ontológico</strong> de Anselmo tenta provar Deus a partir da ideia de Deus.',
        etymology: 'Do gr. ontos (do ser) + logos (estudo)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A questão ___ sobre o que existe de verdade precede qualquer teoria do conhecimento.',
            choices: ['ontológica', 'heurística', 'hermenêutica', 'empírica'],
            correct: 'ontológica'
          },
          {
            type: 'uso',
            sentence: 'Heidegger buscou uma analítica ___ da existência humana em "Ser e Tempo".',
            choices: ['ontológica', 'epistemológica', 'fenomenológica', 'imanente'],
            correct: 'ontológica'
          }
        ]
      },
      {
        word: 'transcendental',
        definition: 'Que vai além da experiência sensível; em Kant, relativo às condições de possibilidade do conhecimento.',
        example: 'A estética <strong>transcendental</strong> de Kant analisa espaço e tempo como formas da intuição.',
        etymology: 'Do lat. transcendĕre (subir além, ultrapassar)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A filosofia ___ de Kant pergunta: o que torna possível o conhecimento em geral?',
            choices: ['transcendental', 'empírica', 'hermenêutica', 'heurística'],
            correct: 'transcendental'
          },
          {
            type: 'uso',
            sentence: 'O idealismo ___ diferencia o fenômeno (o que aparece) do nômeno (a coisa em si).',
            choices: ['transcendental', 'ontológico', 'fenomenológico', 'epistemológico'],
            correct: 'transcendental'
          }
        ]
      },
      {
        word: 'imanente',
        definition: 'Que permanece dentro; que existe ou opera internamente, sem transcender; oposto a transcendente.',
        example: 'Para Spinoza, Deus é <strong>imanente</strong> à natureza, não uma entidade externa a ela.',
        etymology: 'Do lat. immanēre (permanecer dentro)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A crítica ___ de Marx avalia o capitalismo a partir de seus próprios critérios.',
            choices: ['imanente', 'transcendental', 'ontológica', 'heurística'],
            correct: 'imanente'
          },
          {
            type: 'uso',
            sentence: 'O panteísmo defende que a divindade é ___ ao cosmos, não exterior a ele.',
            choices: ['imanente', 'empírico', 'fenomenológico', 'hermenêutico'],
            correct: 'imanente'
          }
        ]
      }
    ]
  },

  // ───────────────────────────────────────────
  // Modulo 5 — Virtude e Carater
  // ───────────────────────────────────────────
  {
    name: 'Virtude e Caráter',
    description: 'Vocabulário da ética, virtudes e qualidades morais.',
    words: [
      {
        word: 'magnânimo',
        definition: 'De alma grande; generoso, nobre, capaz de perdoar e de agir além do interesse próprio.',
        example: 'O líder <strong>magnânimo</strong> perdoou seus adversários após a vitória.',
        etymology: 'Do lat. magnus (grande) + animus (alma)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Mandela foi ___ ao renunciar à vingança e optar pela reconciliação nacional.',
            choices: ['magnânimo', 'pusilânime', 'austero', 'resoluto'],
            correct: 'magnânimo'
          },
          {
            type: 'uso',
            sentence: 'Um gesto ___ muitas vezes desarma a hostilidade mais arraigada.',
            choices: ['magnânimo', 'temperante', 'equânime', 'prudencial'],
            correct: 'magnânimo'
          }
        ]
      },
      {
        word: 'pusilânime',
        definition: 'De alma pequena; covarde, sem coragem moral para agir segundo as convicções.',
        example: 'A resposta <strong>pusilânime</strong> do líder diante da crise decepcionou a nação.',
        etymology: 'Do lat. pusillus (muito pequeno) + animus (alma)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Uma atitude ___ diante da injustiça é tão culpável quanto a injustiça em si.',
            choices: ['pusilânime', 'magnânima', 'austero', 'equânime'],
            correct: 'pusilânime'
          },
          {
            type: 'uso',
            sentence: 'Aristóteles via o ___ como o extremo oposto ao magnânimo na virtude da alma.',
            choices: ['pusilânime', 'resoluto', 'benevolente', 'temperante'],
            correct: 'pusilânime'
          }
        ]
      },
      {
        word: 'temperante',
        definition: 'Que pratica a temperança; moderado nos prazeres e apetites; sóbrio, contido.',
        example: 'O homem <strong>temperante</strong> desfruta dos prazeres sem ser dominado por eles.',
        etymology: 'Do lat. temperantia (moderação, justa medida)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O sábio estoico era ___ não por ascetismo, mas por liberdade interior.',
            choices: ['temperante', 'pusilânime', 'resoluto', 'magnânimo'],
            correct: 'temperante'
          },
          {
            type: 'uso',
            sentence: 'Ser ___ não é negar o prazer, mas não deixar que ele governe a razão.',
            choices: ['temperante', 'austero', 'equânime', 'prudencial'],
            correct: 'temperante'
          }
        ]
      },
      {
        word: 'prudencial',
        definition: 'Relativo à prudência (phronesis); que envolve discernimento prático sobre o que fazer.',
        example: 'O julgamento <strong>prudencial</strong> adapta os princípios gerais às circunstâncias concretas.',
        etymology: 'Do lat. prudentia (previdência, sabedoria prática)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A virtude ___ de Aristóteles é o centro da ética, pois orienta todas as outras.',
            choices: ['prudencial', 'magnânima', 'pusilânime', 'benevolente'],
            correct: 'prudencial'
          },
          {
            type: 'uso',
            sentence: 'Uma decisão ___ considera não só os princípios, mas as consequências reais.',
            choices: ['prudencial', 'temperante', 'austero', 'resoluto'],
            correct: 'prudencial'
          }
        ]
      },
      {
        word: 'equânime',
        definition: 'Que mantém equanimidade; calmo e justo diante das adversidades; imparcial.',
        example: 'O juiz <strong>equânime</strong> não se deixa influenciar por pressões externas.',
        etymology: 'Do lat. aequanimus (de ânimo igual, imparcial)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O líder ___ tratava aliados e opositores com o mesmo critério objetivo.',
            choices: ['equânime', 'austero', 'pusilânime', 'resoluto'],
            correct: 'equânime'
          },
          {
            type: 'uso',
            sentence: 'Manter-se ___ diante do elogio e da crítica é sinal de maturidade.',
            choices: ['equânime', 'magnânimo', 'temperante', 'benevolente'],
            correct: 'equânime'
          }
        ]
      },
      {
        word: 'benevolente',
        definition: 'Que quer bem; inclinado a fazer o bem aos outros; bondoso, caridoso.',
        example: 'Uma liderança <strong>benevolente</strong> não basta: precisa de sabedoria e firmeza também.',
        etymology: 'Do lat. bene (bem) + volens (que quer)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'O ditador ___ de Platão está fadado ao fracasso sem o freio da lei.',
            choices: ['benevolente', 'austero', 'temperante', 'prudencial'],
            correct: 'benevolente'
          },
          {
            type: 'uso',
            sentence: 'Ser ___ sem discernimento pode alimentar a dependência em vez de emancipar.',
            choices: ['benevolente', 'equânime', 'resoluto', 'pusilânime'],
            correct: 'benevolente'
          }
        ]
      },
      {
        word: 'austero',
        definition: 'Severo consigo mesmo; que vive com simplicidade rigorosa; sem concessões ao prazer.',
        example: 'O monge <strong>austero</strong> renunciava a confortos que os outros consideravam necessários.',
        etymology: 'Do gr. austēros (adstringente, severo, áspero)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'A vida ___ dos filósofos cínicos era uma crítica viva à frivolidade da sociedade.',
            choices: ['austera', 'benevolente', 'equânime', 'prudencial'],
            correct: 'austera'
          },
          {
            type: 'uso',
            sentence: 'Um líder excessivamente ___ pode inspirar admiração, mas raramente afeto.',
            choices: ['austero', 'magnânimo', 'temperante', 'resoluto'],
            correct: 'austero'
          }
        ]
      },
      {
        word: 'resoluto',
        definition: 'Firme em seus propósitos; determinado, decidido, sem hesitação diante de dificuldades.',
        example: 'O estadista <strong>resoluto</strong> não recuou diante das ameaças.',
        etymology: 'Do lat. resolutus (desatado, livre, determinado)',
        exercises: [
          {
            type: 'contexto',
            sentence: 'Diante da crise, o comandante se mostrou ___ onde outros hesitavam.',
            choices: ['resoluto', 'pusilânime', 'austero', 'benevolente'],
            correct: 'resoluto'
          },
          {
            type: 'uso',
            sentence: 'Ser ___ não significa ser inflexível: implica clareza de propósito, não teimosia.',
            choices: ['resoluto', 'equânime', 'temperante', 'magnânimo'],
            correct: 'resoluto'
          }
        ]
      }
    ]
  }
];
