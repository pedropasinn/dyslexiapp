// prosodia-data.js — Dados para treino de prosódia
// Três tipos: pausas, entonacao, pontuacao
// Vocabulário de filosofia, teologia, economia, história, latim

const PROSODIA_MODULES = [

  // ═══════════════════════════════════════════
  // TIPO: pausas
  // ═══════════════════════════════════════════
  {
    name: 'Pausas — Filosofia',
    type: 'pausas',
    sentences: [
      {
        text: 'A virtude segundo Aristóteles não é um extremo mas o justo meio entre dois vícios',
        pauses: [11, 31, 47],
        punctuated: 'A virtude, segundo Aristóteles, não é um extremo, mas o justo meio entre dois vícios.'
      },
      {
        text: 'O conhecimento verdadeiro não vem dos sentidos mas do intelecto que contempla as formas eternas',
        pauses: [23, 45],
        punctuated: 'O conhecimento verdadeiro não vem dos sentidos, mas do intelecto que contempla as formas eternas.'
      },
      {
        text: 'Sócrates afirmou que só sabia uma coisa que nada sabia e nisso residia sua sabedoria',
        pauses: [17, 40, 58],
        punctuated: 'Sócrates afirmou que só sabia uma coisa: que nada sabia, e nisso residia sua sabedoria.'
      },
      {
        text: 'A filosofia segundo Kant começa com a admiração mas deve terminar com a compreensão sistemática',
        pauses: [13, 31, 56],
        punctuated: 'A filosofia, segundo Kant, começa com a admiração, mas deve terminar com a compreensão sistemática.'
      },
      {
        text: 'O bem comum exige sacrifício pessoal todavia sem a aniquilação do indivíduo e de seus direitos',
        pauses: [23, 47],
        punctuated: 'O bem comum exige sacrifício pessoal; todavia, sem a aniquilação do indivíduo e de seus direitos.'
      },
      {
        text: 'Descartes duvidou de tudo exceto de uma coisa que estava duvidando portanto que existia',
        pauses: [18, 37, 57],
        punctuated: 'Descartes duvidou de tudo, exceto de uma coisa: que estava duvidando, portanto, que existia.'
      },
      {
        text: 'A justiça distributiva exige que cada um receba segundo seu mérito sua necessidade e sua contribuição',
        pauses: [27, 62, 79],
        punctuated: 'A justiça distributiva exige que cada um receba segundo seu mérito, sua necessidade e sua contribuição.'
      },
      {
        text: 'A dialética hegeliana parte da tese avança pela antítese e resolve-se numa síntese superior',
        pauses: [24, 44],
        punctuated: 'A dialética hegeliana parte da tese, avança pela antítese, e resolve-se numa síntese superior.'
      },
    ]
  },

  {
    name: 'Pausas — Teologia',
    type: 'pausas',
    sentences: [
      {
        text: 'A graça não destrói a natureza mas a aperfeiçoa elevando-a a um fim sobrenatural',
        pauses: [12, 29],
        punctuated: 'A graça não destrói a natureza, mas a aperfeiçoa, elevando-a a um fim sobrenatural.'
      },
      {
        text: 'Segundo Agostinho inquieto está o nosso coração até que repose em ti Senhor',
        pauses: [16, 40, 60],
        punctuated: 'Segundo Agostinho, inquieto está o nosso coração, até que repose em ti, Senhor.'
      },
      {
        text: 'A fé segundo Tomás de Aquino não se opõe à razão mas a excede e a complementa',
        pauses: [10, 32, 50],
        punctuated: 'A fé, segundo Tomás de Aquino, não se opõe à razão, mas a excede e a complementa.'
      },
      {
        text: 'A providência divina não elimina a liberdade humana antes a pressupõe e a dirige ao bem',
        pauses: [22, 49],
        punctuated: 'A providência divina não elimina a liberdade humana; antes, a pressupõe e a dirige ao bem.'
      },
      {
        text: 'O mistério pascal que é a morte e ressurreição de Cristo constitui o centro da fé cristã',
        pauses: [17, 55],
        punctuated: 'O mistério pascal, que é a morte e ressurreição de Cristo, constitui o centro da fé cristã.'
      },
      {
        text: 'Pela fides et ratio a razão serve a fé e a fé ilumina a razão numa aliança fecunda',
        pauses: [14, 29, 44],
        punctuated: 'Pela fides et ratio, a razão serve a fé, e a fé ilumina a razão, numa aliança fecunda.'
      },
      {
        text: 'A encarnação do Verbo revela ao homem ao mesmo tempo o mistério de Deus e o mistério do homem',
        pauses: [22, 45],
        punctuated: 'A encarnação do Verbo revela ao homem, ao mesmo tempo, o mistério de Deus e o mistério do homem.'
      },
      {
        text: 'Onde abundou o pecado superabundou a graça pois Deus é mais poderoso que o próprio mal',
        pauses: [27, 44],
        punctuated: 'Onde abundou o pecado, superabundou a graça, pois Deus é mais poderoso que o próprio mal.'
      },
    ]
  },

  {
    name: 'Pausas — História',
    type: 'pausas',
    sentences: [
      {
        text: 'Roma não foi construída em um dia e tampouco seu Império declinou num só século',
        pauses: [24, 40],
        punctuated: 'Roma não foi construída em um dia, e tampouco seu Império declinou num só século.'
      },
      {
        text: 'A Revolução Francesa de 1789 proclamou liberdade igualdade e fraternidade mas custou rios de sangue',
        pauses: [30, 52, 68],
        punctuated: 'A Revolução Francesa de 1789 proclamou liberdade, igualdade e fraternidade, mas custou rios de sangue.'
      },
      {
        text: 'O Renascimento que floresceu no século XV trouxe de volta o humanismo clássico e a dignidade do homem',
        pauses: [15, 33, 55],
        punctuated: 'O Renascimento, que floresceu no século XV, trouxe de volta o humanismo clássico e a dignidade do homem.'
      },
      {
        text: 'Napoleão um gênio militar sem igual na história moderna cometeu o erro fatal de invadir a Rússia',
        pauses: [9, 42, 62],
        punctuated: 'Napoleão, um gênio militar sem igual na história moderna, cometeu o erro fatal de invadir a Rússia.'
      },
      {
        text: 'A queda de Constantinopla em 1453 encerrou mil anos de Império Bizantino e abriu a era moderna',
        pauses: [30, 57],
        punctuated: 'A queda de Constantinopla, em 1453, encerrou mil anos de Império Bizantino e abriu a era moderna.'
      },
      {
        text: 'A Reforma Protestante de Lutero rompeu a unidade da Cristandade ocidental mas renovou o pensamento religioso',
        pauses: [30, 60],
        punctuated: 'A Reforma Protestante de Lutero rompeu a unidade da Cristandade ocidental, mas renovou o pensamento religioso.'
      },
      {
        text: 'Péricles governou Atenas com sabedoria durante quarenta anos transformando-a na maior cidade do mundo grego',
        pauses: [20, 54],
        punctuated: 'Péricles governou Atenas com sabedoria durante quarenta anos, transformando-a na maior cidade do mundo grego.'
      },
      {
        text: 'A descoberta da América em 1492 foi ao mesmo tempo o início de uma civilização e o fim de outras',
        pauses: [26, 45],
        punctuated: 'A descoberta da América, em 1492, foi ao mesmo tempo o início de uma civilização e o fim de outras.'
      },
    ]
  },

  // ═══════════════════════════════════════════
  // TIPO: entonacao
  // ═══════════════════════════════════════════
  {
    name: 'Entonação — Teologia',
    type: 'entonacao',
    sentences: [
      {
        base: 'A graça é suficiente',
        variations: [
          { mode: 'declarativa', text: 'A graça é suficiente.', hint: 'Afirmação calma — tom descendente no final' },
          { mode: 'interrogativa', text: 'A graça é suficiente?', hint: 'Tom ascendente no final — dúvida genuína' },
          { mode: 'exclamativa', text: 'A graça é suficiente!', hint: 'Ênfase e convicção — voz mais intensa' }
        ]
      },
      {
        base: 'Deus é amor',
        variations: [
          { mode: 'declarativa', text: 'Deus é amor.', hint: 'Proclamação tranquila e certa — pausa breve' },
          { mode: 'interrogativa', text: 'Deus é amor?', hint: 'Questionamento filosófico — leve suspense' },
          { mode: 'exclamativa', text: 'Deus é amor!', hint: 'Alegria e maravilhamento — voz elevada' }
        ]
      },
      {
        base: 'O Verbo se fez carne',
        variations: [
          { mode: 'declarativa', text: 'O Verbo se fez carne.', hint: 'Solenidade teológica — ritmo lento' },
          { mode: 'interrogativa', text: 'O Verbo se fez carne?', hint: 'Espanto e incredulidade — voz que sobe' },
          { mode: 'exclamativa', text: 'O Verbo se fez carne!', hint: 'Proclamação da fé — emoção contida' }
        ]
      },
      {
        base: 'A fé move montanhas',
        variations: [
          { mode: 'declarativa', text: 'A fé move montanhas.', hint: 'Assertividade tranquila — certeza interior' },
          { mode: 'interrogativa', text: 'A fé move montanhas?', hint: 'Desafio retórico — voz levemente irônica' },
          { mode: 'exclamativa', text: 'A fé move montanhas!', hint: 'Entusiasmo fervoroso — acento na fé' }
        ]
      },
      {
        base: 'A alma é imortal',
        variations: [
          { mode: 'declarativa', text: 'A alma é imortal.', hint: 'Certeza filosófica — tom firme e grave' },
          { mode: 'interrogativa', text: 'A alma é imortal?', hint: 'Questão existencial — voz suspensa' },
          { mode: 'exclamativa', text: 'A alma é imortal!', hint: 'Espanto jubiloso — ênfase em imortal' }
        ]
      },
      {
        base: 'Há redenção para todos',
        variations: [
          { mode: 'declarativa', text: 'Há redenção para todos.', hint: 'Consolação suave — ritmo moderado' },
          { mode: 'interrogativa', text: 'Há redenção para todos?', hint: 'Dúvida ansiosa — tensão na voz' },
          { mode: 'exclamativa', text: 'Há redenção para todos!', hint: 'Proclamação jubilosa — voz aberta' }
        ]
      },
      {
        base: 'O silêncio é a linguagem de Deus',
        variations: [
          { mode: 'declarativa', text: 'O silêncio é a linguagem de Deus.', hint: 'Meditação contemplativa — pausas longas' },
          { mode: 'interrogativa', text: 'O silêncio é a linguagem de Deus?', hint: 'Busca sincera — voz quase sussurrada' },
          { mode: 'exclamativa', text: 'O silêncio é a linguagem de Deus!', hint: 'Descoberta mística — ênfase em silêncio' }
        ]
      },
      {
        base: 'A misericórdia supera a justiça',
        variations: [
          { mode: 'declarativa', text: 'A misericórdia supera a justiça.', hint: 'Afirmação pastoral — tom caloroso' },
          { mode: 'interrogativa', text: 'A misericórdia supera a justiça?', hint: 'Dilema moral — tom reflexivo' },
          { mode: 'exclamativa', text: 'A misericórdia supera a justiça!', hint: 'Alívio e gratidão — acento em misericórdia' }
        ]
      },
    ]
  },

  {
    name: 'Entonação — Filosofia',
    type: 'entonacao',
    sentences: [
      {
        base: 'O homem é um animal racional',
        variations: [
          { mode: 'declarativa', text: 'O homem é um animal racional.', hint: 'Definição aristotélica — tom didático' },
          { mode: 'interrogativa', text: 'O homem é um animal racional?', hint: 'Ceticismo filosófico — entonação incerta' },
          { mode: 'exclamativa', text: 'O homem é um animal racional!', hint: 'Afirmação vigorosa — ênfase em racional' }
        ]
      },
      {
        base: 'A razão governa o mundo',
        variations: [
          { mode: 'declarativa', text: 'A razão governa o mundo.', hint: 'Constatação serena — ritmo regular' },
          { mode: 'interrogativa', text: 'A razão governa o mundo?', hint: 'Dúvida histórica — tom levemente irônico' },
          { mode: 'exclamativa', text: 'A razão governa o mundo!', hint: 'Convicção iluminista — voz intensa' }
        ]
      },
      {
        base: 'Conhece-te a ti mesmo',
        variations: [
          { mode: 'declarativa', text: 'Conhece-te a ti mesmo.', hint: 'Máxima socrática — tom imperativo suave' },
          { mode: 'interrogativa', text: 'Conheces-te a ti mesmo?', hint: 'Desafio ao interlocutor — pausa após conheces' },
          { mode: 'exclamativa', text: 'Conhece-te a ti mesmo!', hint: 'Exortação urgente — voz elevada' }
        ]
      },
      {
        base: 'A liberdade é o fundamento da dignidade',
        variations: [
          { mode: 'declarativa', text: 'A liberdade é o fundamento da dignidade.', hint: 'Tom filosófico-político — seguro' },
          { mode: 'interrogativa', text: 'A liberdade é o fundamento da dignidade?', hint: 'Questionamento crítico — voz suspensa' },
          { mode: 'exclamativa', text: 'A liberdade é o fundamento da dignidade!', hint: 'Proclamação contundente — acento em liberdade' }
        ]
      },
      {
        base: 'Penso logo existo',
        variations: [
          { mode: 'declarativa', text: 'Penso, logo existo.', hint: 'Axioma cartesiano — pausa após penso' },
          { mode: 'interrogativa', text: 'Penso, logo existo?', hint: 'Desconstrução irônica — inflexão final' },
          { mode: 'exclamativa', text: 'Penso, logo existo!', hint: 'Descoberta eufórica — como se fosse primeira vez' }
        ]
      },
      {
        base: 'A verdade é mais forte que a força',
        variations: [
          { mode: 'declarativa', text: 'A verdade é mais forte que a força.', hint: 'Confiança pacífica — ritmo lento' },
          { mode: 'interrogativa', text: 'A verdade é mais forte que a força?', hint: 'Dúvida cansada — tom pesado' },
          { mode: 'exclamativa', text: 'A verdade é mais forte que a força!', hint: 'Desafio corajoso — voz firme e alta' }
        ]
      },
    ]
  },

  {
    name: 'Entonação — Economia e Latim',
    type: 'entonacao',
    sentences: [
      {
        base: 'O mercado livre produz prosperidade',
        variations: [
          { mode: 'declarativa', text: 'O mercado livre produz prosperidade.', hint: 'Assertiva liberal — tom confiante' },
          { mode: 'interrogativa', text: 'O mercado livre produz prosperidade?', hint: 'Ceticismo heterodoxo — voz duvidosa' },
          { mode: 'exclamativa', text: 'O mercado livre produz prosperidade!', hint: 'Entusiasmo liberal — ênfase em livre' }
        ]
      },
      {
        base: 'A inflação é sempre um fenômeno monetário',
        variations: [
          { mode: 'declarativa', text: 'A inflação é sempre um fenômeno monetário.', hint: 'Citação friedmaniana — tom técnico-didático' },
          { mode: 'interrogativa', text: 'A inflação é sempre um fenômeno monetário?', hint: 'Debate acadêmico — voz reflexiva' },
          { mode: 'exclamativa', text: 'A inflação é sempre um fenômeno monetário!', hint: 'Defesa apaixonada da teoria — acento em sempre' }
        ]
      },
      {
        base: 'Pecunia non olet',
        variations: [
          { mode: 'declarativa', text: 'Pecunia non olet.', hint: 'Máxima latina — pronúncia clara e pausada' },
          { mode: 'interrogativa', text: 'Pecunia non olet?', hint: 'Ironia romana — tom levemente sarcástico' },
          { mode: 'exclamativa', text: 'Pecunia non olet!', hint: 'Pragmatismo cínico — voz jocosa e firme' }
        ]
      },
      {
        base: 'Veni vidi vici',
        variations: [
          { mode: 'declarativa', text: 'Veni, vidi, vici.', hint: 'Relatório de Cesar — cada parte cresce em intensidade' },
          { mode: 'interrogativa', text: 'Veni, vidi, vici?', hint: 'Incredulidade — como se questionando a versão' },
          { mode: 'exclamativa', text: 'Veni, vidi, vici!', hint: 'Triunfo jubiloso — crescendo dramático' }
        ]
      },
      {
        base: 'O custo de oportunidade é invisível mas real',
        variations: [
          { mode: 'declarativa', text: 'O custo de oportunidade é invisível, mas real.', hint: 'Lição econômica — pausa dramática antes de mas' },
          { mode: 'interrogativa', text: 'O custo de oportunidade é invisível, mas real?', hint: 'Dúvida do estudante — voz suspensa' },
          { mode: 'exclamativa', text: 'O custo de oportunidade é invisível, mas real!', hint: 'Revelação intelectual — acento em real' }
        ]
      },
      {
        base: 'Alea iacta est',
        variations: [
          { mode: 'declarativa', text: 'Alea iacta est.', hint: 'Resolução histórica — tom grave e definitivo' },
          { mode: 'interrogativa', text: 'Alea iacta est?', hint: 'Hesitação dramática — última chance de recuar' },
          { mode: 'exclamativa', text: 'Alea iacta est!', hint: 'Decisão irreversível — voz de comando' }
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════
  // TIPO: pontuacao
  // ═══════════════════════════════════════════
  {
    name: 'Pontuação — Economia',
    type: 'pontuacao',
    texts: [
      {
        stripped: 'A inflação corrói o poder de compra mas o banco central hesitou em agir por isso a população sofreu as consequências',
        correct: 'A inflação corrói o poder de compra, mas o banco central hesitou em agir. Por isso, a população sofreu as consequências.',
        marks: [',', '.', ',', '.']
      },
      {
        stripped: 'O mercado de capitais aloca recursos de forma eficiente quando há informação perfeita contudo esse pressuposto raramente se verifica na prática',
        correct: 'O mercado de capitais aloca recursos de forma eficiente quando há informação perfeita; contudo, esse pressuposto raramente se verifica na prática.',
        marks: [';', ',', '.']
      },
      {
        stripped: 'Keynes argumentou que em tempos de crise o Estado deve intervir gastando mais do que arrecada gerando déficit temporário porém necessário',
        correct: 'Keynes argumentou que, em tempos de crise, o Estado deve intervir, gastando mais do que arrecada, gerando déficit temporário, porém necessário.',
        marks: [',', ',', ',', ',', ',', '.']
      },
      {
        stripped: 'A taxa de juros real é a diferença entre a taxa nominal e a inflação esperada portanto quando a inflação sobe o banco central deve elevar os juros nominais',
        correct: 'A taxa de juros real é a diferença entre a taxa nominal e a inflação esperada; portanto, quando a inflação sobe, o banco central deve elevar os juros nominais.',
        marks: [';', ',', ',', '.']
      },
      {
        stripped: 'O PIB per capita mede a renda média por habitante entretanto não revela a distribuição de renda que pode ser extremamente desigual',
        correct: 'O PIB per capita mede a renda média por habitante; entretanto, não revela a distribuição de renda, que pode ser extremamente desigual.',
        marks: [';', ',', ',', '.']
      },
      {
        stripped: 'Adam Smith observou que a divisão do trabalho aumenta a produtividade porque cada trabalhador especializa-se numa tarefa tornando-se cada vez mais hábil',
        correct: 'Adam Smith observou que a divisão do trabalho aumenta a produtividade, porque cada trabalhador especializa-se numa tarefa, tornando-se cada vez mais hábil.',
        marks: [',', ',', '.']
      },
    ]
  },

  {
    name: 'Pontuação — Filosofia e Teologia',
    type: 'pontuacao',
    texts: [
      {
        stripped: 'O bem comum não é a soma dos bens individuais mas um bem que é ao mesmo tempo de todos e de cada um em particular',
        correct: 'O bem comum não é a soma dos bens individuais, mas um bem que é, ao mesmo tempo, de todos e de cada um em particular.',
        marks: [',', ',', ',', '.']
      },
      {
        stripped: 'A escolástica medieval integrou a filosofia grega sobretudo aristotélica com a teologia cristã produzindo sínteses notáveis como a Suma Teológica de Tomás de Aquino',
        correct: 'A escolástica medieval integrou a filosofia grega, sobretudo aristotélica, com a teologia cristã, produzindo sínteses notáveis, como a Suma Teológica de Tomás de Aquino.',
        marks: [',', ',', ',', ',', '.']
      },
      {
        stripped: 'A liberdade humana não é arbitrária nem absoluta ela está ordenada ao bem e encontra seu limite no bem dos outros',
        correct: 'A liberdade humana não é arbitrária nem absoluta: ela está ordenada ao bem e encontra seu limite no bem dos outros.',
        marks: [':', '.']
      },
      {
        stripped: 'Agostinho converteu-se após longa busca intelectual e moral e ao encontrar a fé cristã exclamou tarde te amei beleza tão antiga e tão nova',
        correct: 'Agostinho converteu-se após longa busca intelectual e moral, e ao encontrar a fé cristã exclamou: "Tarde te amei, beleza tão antiga e tão nova!"',
        marks: [',', ':', ',', '!']
      },
      {
        stripped: 'A apofase nega todo predicado a Deus não porque Deus seja nada mas porque nenhuma categoria humana é adequada para expressar o ser divino',
        correct: 'A apofase nega todo predicado a Deus, não porque Deus seja nada, mas porque nenhuma categoria humana é adequada para expressar o ser divino.',
        marks: [',', ',', '.']
      },
      {
        stripped: 'O princípio da subsidiariedade afirma que as decisões devem ser tomadas no nível mais próximo possível do cidadão reservando ao Estado apenas o que a sociedade não pode fazer',
        correct: 'O princípio da subsidiariedade afirma que as decisões devem ser tomadas no nível mais próximo possível do cidadão, reservando ao Estado apenas o que a sociedade não pode fazer.',
        marks: [',', '.']
      },
    ]
  },

  {
    name: 'Pontuação — História e Latim',
    type: 'pontuacao',
    texts: [
      {
        stripped: 'Júlio César atravessou o Rubicão com seu exército em 49 a.C. pronunciando as famosas palavras alea iacta est que significa a sorte está lançada',
        correct: 'Júlio César atravessou o Rubicão com seu exército em 49 a.C., pronunciando as famosas palavras "alea iacta est", que significa: "a sorte está lançada".',
        marks: [',', ',', ':']
      },
      {
        stripped: 'A Magna Carta de 1215 limitou o poder do rei inglês garantindo direitos aos barões ao clero e ao povo e tornou-se precursora do constitucionalismo moderno',
        correct: 'A Magna Carta de 1215 limitou o poder do rei inglês, garantindo direitos aos barões, ao clero e ao povo, e tornou-se precursora do constitucionalismo moderno.',
        marks: [',', ',', ',', '.']
      },
      {
        stripped: 'Cícero defensor da república romana viu-a ruir diante de seus olhos e mesmo assim recusou exilar-se preferindo morrer em solo pátrio',
        correct: 'Cícero, defensor da república romana, viu-a ruir diante de seus olhos e, mesmo assim, recusou exilar-se, preferindo morrer em solo pátrio.',
        marks: [',', ',', ',', ',', ',', '.']
      },
      {
        stripped: 'O lema latino carpe diem de Horácio não significa abandono ao prazer mas urgência de aproveitar o tempo presente para o que é verdadeiramente bom',
        correct: 'O lema latino carpe diem, de Horácio, não significa abandono ao prazer, mas urgência de aproveitar o tempo presente para o que é verdadeiramente bom.',
        marks: [',', ',', ',', '.']
      },
      {
        stripped: 'Após a batalha de Actium em 31 a.C. Otávio tornou-se o único senhor de Roma e recebeu o título de Augustus inaugurando dois séculos de paz romana a chamada Pax Romana',
        correct: 'Após a batalha de Actium, em 31 a.C., Otávio tornou-se o único senhor de Roma e recebeu o título de Augustus, inaugurando dois séculos de paz romana, a chamada Pax Romana.',
        marks: [',', ',', ',', ',', '.']
      },
      {
        stripped: 'Seneca afirmou non multa sed multum que se traduz aproximadamente como não muitas coisas mas muita substância conselho tão válido hoje como na Roma imperial',
        correct: 'Sêneca afirmou "non multa sed multum", que se traduz aproximadamente como "não muitas coisas, mas muita substância" — conselho tão válido hoje como na Roma imperial.',
        marks: [',', ',', '—', '.']
      },
    ]
  },
];
