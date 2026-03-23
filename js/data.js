// ─────────────────────────────────────────
// DATA — Dados de todos os módulos
// ─────────────────────────────────────────

const RAN_LEVELS = [
  [1890, 1908, 1980, 2890, 1909],
  [2530, 2503, 2683, 1736, 3260],
  [5690, 5906, 6905, 9065, 5605]
];

const PRECISAO_MODULES = [
  {
    name: 'PT /s/ vs /z/',
    options: ['S', 'Z'],
    words: [
      { display: '_ilogismo', answer: 'S', full: 'Silogismo' },
      { display: '_elotismo', answer: 'Z', full: 'Zelotismo' },
      { display: '_ofisma', answer: 'S', full: 'Sofisma' },
      { display: '_ubsidiariedade', answer: 'S', full: 'Subsidiariedade' },
      { display: '_odíaco', answer: 'Z', full: 'Zodíaco' },
      { display: '_oberania', answer: 'S', full: 'Soberania' },
      { display: '_enão', answer: 'Z', full: 'Zenão' },
      { display: '_ecularismo', answer: 'S', full: 'Secularismo' },
      { display: '_elo', answer: 'Z', full: 'Zelo' },
      { display: '_inodalidade', answer: 'S', full: 'Sinodalidade' },
      { display: '_olipsismo', answer: 'S', full: 'Solipsismo' },
      { display: '_imbábue', answer: 'Z', full: 'Zimbábue' },
      { display: '_imonia', answer: 'S', full: 'Simonia' },
      { display: '_oroastrismo', answer: 'Z', full: 'Zoroastrismo' },
      { display: '_ecessão', answer: 'S', full: 'Secessão' },
      { display: '_ênite', answer: 'Z', full: 'Zênite' },
      { display: '_olecismo', answer: 'S', full: 'Solecismo' },
      { display: '_ugzwang', answer: 'Z', full: 'Zugzwang' },
      { display: '_inopse', answer: 'S', full: 'Sinopse' },
      { display: '_âmbia', answer: 'Z', full: 'Zâmbia' },
      { display: '_ericicultura', answer: 'S', full: 'Sericicultura' },
      { display: '_éfiro', answer: 'Z', full: 'Zéfiro' },
      { display: '_ofisticação', answer: 'S', full: 'Sofisticação' },
      { display: '_igoto', answer: 'Z', full: 'Zigoto' },
    ]
  },
  {
    name: 'PT /ʃ/ vs /ʒ/',
    options: ['CH/X', 'J/G'],
    words: [
      { display: '_ancelaria', answer: 'CH/X', full: 'Chancelaria' },
      { display: '_enofobia', answer: 'CH/X', full: 'Xenofobia' },
      { display: '_amarilhão', answer: 'CH/X', full: 'Chamarilhão' },
      { display: '_ícara', answer: 'CH/X', full: 'Xícara' },
      { display: '_eque-mate', answer: 'CH/X', full: 'Xeque-mate' },
      { display: '_arlatanismo', answer: 'CH/X', full: 'Charlatanismo' },
      { display: '_erarquia', answer: 'J/G', full: 'Jerarquia' },
      { display: '_urisprudência', answer: 'J/G', full: 'Jurisprudência' },
      { display: '_eopolítica', answer: 'J/G', full: 'Geopolítica' },
      { display: '_esuíta', answer: 'J/G', full: 'Jesuíta' },
      { display: '_ansenismo', answer: 'J/G', full: 'Jansenismo' },
      { display: '_eremíada', answer: 'J/G', full: 'Jeremíada' },
      { display: '_ustaposição', answer: 'J/G', full: 'Justaposição' },
      { display: '_actância', answer: 'J/G', full: 'Jactância' },
      { display: '_estão', answer: 'J/G', full: 'Gestão' },
      { display: '_enerosidade', answer: 'J/G', full: 'Generosidade' },
      { display: '_icana', answer: 'CH/X', full: 'Chicana' },
      { display: '_adrez', answer: 'CH/X', full: 'Xadrez' },
      { display: '_erência', answer: 'J/G', full: 'Gerência' },
      { display: '_ulgamento', answer: 'J/G', full: 'Julgamento' },
      { display: '_arada', answer: 'CH/X', full: 'Charada' },
      { display: '_aveiro', answer: 'CH/X', full: 'Chaveiro' },
      { display: '_erife', answer: 'CH/X', full: 'Xerife' },
      { display: '_inês', answer: 'CH/X', full: 'Chinês' },
    ]
  },
  {
    name: 'EN /θ/ vs /ð/',
    options: ['θ (th-)', 'ð (th-)'],
    words: [
      { display: '_eology', answer: 'θ (th-)', full: 'Theology' },
      { display: '_e other', answer: 'ð (th-)', full: 'The other' },
      { display: '_esis', answer: 'θ (th-)', full: 'Thesis' },
      { display: '_ere', answer: 'ð (th-)', full: 'There' },
      { display: '_eorem', answer: 'θ (th-)', full: 'Theorem' },
      { display: '_ey', answer: 'ð (th-)', full: 'They' },
      { display: '_ermodynamics', answer: 'θ (th-)', full: 'Thermodynamics' },
      { display: '_at', answer: 'ð (th-)', full: 'That' },
      { display: '_ought', answer: 'θ (th-)', full: 'Thought' },
      { display: '_ough', answer: 'ð (th-)', full: 'Though' },
      { display: '_eta', answer: 'θ (th-)', full: 'Theta' },
      { display: '_is', answer: 'ð (th-)', full: 'This' },
      { display: '_orn', answer: 'θ (th-)', full: 'Thorn' },
      { display: '_en', answer: 'ð (th-)', full: 'Then' },
      { display: '_reshold', answer: 'θ (th-)', full: 'Threshold' },
      { display: '_erefore', answer: 'ð (th-)', full: 'Therefore' },
      { display: '_ird', answer: 'θ (th-)', full: 'Third' },
      { display: '_eirs', answer: 'ð (th-)', full: 'Theirs' },
      { display: '_eory', answer: 'θ (th-)', full: 'Theory' },
      { display: '_e (artigo)', answer: 'ð (th-)', full: 'The' },
    ]
  },
  {
    name: 'Latim ae/oe · ti/si',
    options: ['ae', 'oe', 'ti', 'si'],
    words: [
      { display: 'c_lum', answer: 'ae', full: 'caelum' },
      { display: 'p_na', answer: 'oe', full: 'poena' },
      { display: 'pr_sentia', answer: 'ae', full: 'praesentia' },
      { display: 'f_dus', answer: 'oe', full: 'foedus' },
      { display: '_terna', answer: 'ae', full: 'aeterna' },
      { display: 'c_na', answer: 'oe', full: 'coena' },
      { display: 'pr_dicatio', answer: 'ae', full: 'praedicatio' },
      { display: '_conomia', answer: 'oe', full: 'oeconomia' },
      { display: 'p_nitentia', answer: 'oe', full: 'poenitentia' },
      { display: 'h_resis', answer: 'ae', full: 'haeresis' },
      { display: 'd_mon', answer: 'ae', full: 'daemon' },
      { display: 'gra_a', answer: 'ti', full: 'gratia' },
      { display: 'na_o', answer: 'ti', full: 'natio' },
      { display: 'ora_o', answer: 'ti', full: 'oratio' },
      { display: 'eccle_a', answer: 'si', full: 'ecclesia' },
      { display: 'redemp_o', answer: 'ti', full: 'redemptio' },
      { display: 'salva_o', answer: 'ti', full: 'salvatio' },
      { display: 'condi_o', answer: 'ti', full: 'conditio' },
      { display: 'pas_o', answer: 'si', full: 'passio' },
      { display: 'abnega_o', answer: 'ti', full: 'abnegatio' },
      { display: 'poten_a', answer: 'ti', full: 'potentia' },
      { display: 'pruden_a', answer: 'ti', full: 'prudentia' },
      { display: 'ius_a', answer: 'ti', full: 'iustitia' },
      { display: 'saluta_o', answer: 'ti', full: 'salutatio' },
    ]
  },
  // ── 3. PT /λ/ vs /j/ ──
  {
    name: 'PT /λ/ vs /j/',
    options: ['LH', 'LI/I'],
    words: [
      { display: 'fi_o', answer: 'LH', full: 'Filho' },
      { display: 'fi_a', answer: 'LI/I', full: 'Filia' },
      { display: 'conse_eiro', answer: 'LH', full: 'Conselheiro' },
      { display: 'conci_ar', answer: 'LI/I', full: 'Conciliar' },
      { display: 'maravi_a', answer: 'LH', full: 'Maravilha' },
      { display: 'auxi_ar', answer: 'LI/I', full: 'Auxiliar' },
      { display: 'orgu_o', answer: 'LH', full: 'Orgulho' },
      { display: 'exí_o', answer: 'LI/I', full: 'Exílio' },
      { display: 'traba_o', answer: 'LH', full: 'Trabalho' },
      { display: 'domicí_o', answer: 'LI/I', full: 'Domicílio' },
      { display: 'espe_o', answer: 'LH', full: 'Espelho' },
      { display: 'humi_ação', answer: 'LH', full: 'Humilhação' },
      { display: 'famí_a', answer: 'LI/I', full: 'Família' },
      { display: 'aco_imento', answer: 'LH', full: 'Acolhimento' },
      { display: 'evangé_o', answer: 'LI/I', full: 'Evangélio' },
      { display: 'mura_a', answer: 'LH', full: 'Muralha' },
      { display: 'reconci_ação', answer: 'LI/I', full: 'Reconciliação' },
      { display: 'apare_o', answer: 'LH', full: 'Aparelho' },
      { display: 'mobi_ário', answer: 'LI/I', full: 'Mobiliário' },
      { display: 'bata_a', answer: 'LH', full: 'Batalha' },
      { display: 'afi_ação', answer: 'LI/I', full: 'Afiliação' },
      { display: 'verme_o', answer: 'LH', full: 'Vermelho' },
      { display: 'pecú_o', answer: 'LI/I', full: 'Pecúlio' },
      { display: 'o_o', answer: 'LH', full: 'Olho' },
    ]
  },
  // ── 4. PT /ɲ/ ──
  {
    name: 'PT /ɲ/',
    options: ['NH', 'N'],
    words: [
      { display: 'vi_o', answer: 'NH', full: 'Vinho' },
      { display: 'vi_da', answer: 'N', full: 'Vinda' },
      { display: 'se_or', answer: 'NH', full: 'Senhor' },
      { display: 'se_ado', answer: 'N', full: 'Senado' },
      { display: 'ba_o', answer: 'NH', full: 'Banho' },
      { display: 'ba_co', answer: 'N', full: 'Banco' },
      { display: 'dese_o', answer: 'NH', full: 'Desenho' },
      { display: 'desti_o', answer: 'N', full: 'Destino' },
      { display: 'cami_o', answer: 'NH', full: 'Caminho' },
      { display: 'cami_ão', answer: 'NH', full: 'Caminhão' },
      { display: 'estra_o', answer: 'NH', full: 'Estranho' },
      { display: 'eter_o', answer: 'N', full: 'Eterno' },
      { display: 'tama_o', answer: 'NH', full: 'Tamanho' },
      { display: 'huma_o', answer: 'N', full: 'Humano' },
      { display: 'sobe_o', answer: 'N', full: 'Soberano' },
      { display: 'gali_eiro', answer: 'NH', full: 'Galinheiro' },
      { display: 'e_enharia', answer: 'NH', full: 'Engenharia' },
      { display: 'gover_o', answer: 'N', full: 'Governo' },
      { display: 'rai_a', answer: 'NH', full: 'Rainha' },
      { display: 'reú_e', answer: 'N', full: 'Reúne' },
      { display: 'compa_ia', answer: 'NH', full: 'Companhia' },
      { display: 'colo_ial', answer: 'N', full: 'Colonial' },
      { display: 'testemú_o', answer: 'NH', full: 'Testemunho' },
      { display: 'moder_o', answer: 'N', full: 'Moderno' },
    ]
  },
  // ── 5. PT /r/ vs /ʁ/ ──
  {
    name: 'PT /r/ vs /ʁ/',
    options: ['R', 'RR'],
    words: [
      { display: 'ca_o (preço alto)', answer: 'R', full: 'Caro' },
      { display: 'ca_o (veículo)', answer: 'RR', full: 'Carro' },
      { display: 'e_a (tempo)', answer: 'R', full: 'Era' },
      { display: 'e_a (equívoco)', answer: 'RR', full: 'Erra' },
      { display: 'fe_o (bravo)', answer: 'R', full: 'Fero' },
      { display: 'fe_o (metal)', answer: 'RR', full: 'Ferro' },
      { display: 'mo_o (habito)', answer: 'R', full: 'Moro' },
      { display: 'mo_o (monte)', answer: 'RR', full: 'Morro' },
      { display: 'co_al (canto)', answer: 'R', full: 'Coral' },
      { display: 'cu_al (cerca)', answer: 'RR', full: 'Curral' },
      { display: 'ce_a (vela)', answer: 'R', full: 'Cera' },
      { display: 'se_a (montanha)', answer: 'RR', full: 'Serra' },
      { display: 'fo_o (tribunal)', answer: 'R', full: 'Foro' },
      { display: 'fo_o (teto)', answer: 'RR', full: 'Forro' },
      { display: 'ampa_o', answer: 'R', full: 'Amparo' },
      { display: 'ba_oco', answer: 'RR', full: 'Barroco' },
      { display: 'pa_óquia', answer: 'R', full: 'Paróquia' },
      { display: 'te_itório', answer: 'RR', full: 'Território' },
      { display: 'ope_ário', answer: 'R', full: 'Operário' },
      { display: 'co_upção', answer: 'RR', full: 'Corrupção' },
      { display: 'ce_imônia', answer: 'R', full: 'Cerimônia' },
      { display: 'na_ativa', answer: 'RR', full: 'Narrativa' },
      { display: 'pa_adigma', answer: 'R', full: 'Paradigma' },
      { display: 'te_eno', answer: 'RR', full: 'Terreno' },
    ]
  },
  // ── 6. PT /e/ vs /ɛ/ ──
  {
    name: 'PT /e/ vs /ɛ/',
    options: ['Ê (fechado)', 'É (aberto)'],
    words: [
      { display: 's_de (vontade)', answer: 'Ê (fechado)', full: 'Sêde' },
      { display: 's_de (local)', answer: 'É (aberto)', full: 'Séde' },
      { display: 'cr_r (ter fé)', answer: 'Ê (fechado)', full: 'Crêr' },
      { display: 'c_lebre', answer: 'É (aberto)', full: 'Célebre' },
      { display: 'int_resse', answer: 'Ê (fechado)', full: 'Interêsse' },
      { display: 'mis_ria', answer: 'É (aberto)', full: 'Miséria' },
      { display: 'f_mea', answer: 'Ê (fechado)', full: 'Fêmea' },
      { display: 'g_nero', answer: 'É (aberto)', full: 'Género' },
      { display: '_le (pronome)', answer: 'Ê (fechado)', full: 'Êle' },
      { display: '_tica', answer: 'É (aberto)', full: 'Ética' },
      { display: 'her_tico', answer: 'É (aberto)', full: 'Herético' },
      { display: 'pr_mio', answer: 'Ê (fechado)', full: 'Prêmio' },
      { display: 's_rie', answer: 'É (aberto)', full: 'Série' },
      { display: 'trem_ndo', answer: 'Ê (fechado)', full: 'Tremêndo' },
      { display: 'p_rola', answer: 'É (aberto)', full: 'Pérola' },
      { display: '_xodo', answer: 'Ê (fechado)', full: 'Êxodo' },
      { display: '_poca', answer: 'É (aberto)', full: 'Época' },
      { display: 'acad_mico', answer: 'Ê (fechado)', full: 'Acadêmico' },
      { display: 'fen_meno', answer: 'Ê (fechado)', full: 'Fenômeno' },
      { display: 'pol_mica', answer: 'Ê (fechado)', full: 'Polêmica' },
      { display: 'h_rege', answer: 'É (aberto)', full: 'Hérege' },
      { display: 'estrat_gia', answer: 'É (aberto)', full: 'Estratégia' },
    ]
  },
  // ── 7. PT /o/ vs /ɔ/ ──
  {
    name: 'PT /o/ vs /ɔ/',
    options: ['Ô (fechado)', 'Ó (aberto)'],
    words: [
      { display: 'av_ (masc.)', answer: 'Ô (fechado)', full: 'Avô' },
      { display: 'av_ (fem.)', answer: 'Ó (aberto)', full: 'Avó' },
      { display: 'p_s (colocou)', answer: 'Ô (fechado)', full: 'Pôs' },
      { display: 'p_s (depois)', answer: 'Ó (aberto)', full: 'Pós' },
      { display: 'f_rmula', answer: 'Ó (aberto)', full: 'Fórmula' },
      { display: '_rgão', answer: 'Ó (aberto)', full: 'Órgão' },
      { display: 'prop_sito', answer: 'Ó (aberto)', full: 'Propósito' },
      { display: 'fil_sofo', answer: 'Ó (aberto)', full: 'Filósofo' },
      { display: 'mon_tono', answer: 'Ó (aberto)', full: 'Monótono' },
      { display: 'aut_nomo', answer: 'Ô (fechado)', full: 'Autônomo' },
      { display: 'econ_mico', answer: 'Ô (fechado)', full: 'Econômico' },
      { display: 'hist_rico', answer: 'Ó (aberto)', full: 'Histórico' },
      { display: '_cio', answer: 'Ó (aberto)', full: 'Ócio' },
      { display: 'col_quio', answer: 'Ó (aberto)', full: 'Colóquio' },
      { display: 'fen_meno', answer: 'Ô (fechado)', full: 'Fenômeno' },
      { display: 'dem_nio', answer: 'Ô (fechado)', full: 'Demônio' },
      { display: 'simb_lico', answer: 'Ó (aberto)', full: 'Simbólico' },
      { display: 'cr_nica', answer: 'Ô (fechado)', full: 'Crônica' },
      { display: '_bvio', answer: 'Ó (aberto)', full: 'Óbvio' },
      { display: 'antr_plogo', answer: 'Ó (aberto)', full: 'Antropólogo' },
      { display: 'astr_nomo', answer: 'Ô (fechado)', full: 'Astrônomo' },
      { display: 'ep_peia', answer: 'Ó (aberto)', full: 'Epopeia' },
    ]
  },
  // ── 8. PT nasais ã/ão ──
  {
    name: 'PT nasais ã/ão',
    options: ['Ã', 'ÃO'],
    words: [
      { display: 'irm_', answer: 'Ã', full: 'Irmã' },
      { display: 'irm_o', answer: 'ÃO', full: 'Irmão' },
      { display: 'crist_', answer: 'Ã', full: 'Cristã' },
      { display: 'oraç_', answer: 'ÃO', full: 'Oração' },
      { display: 'l_', answer: 'Ã', full: 'Lã' },
      { display: 'tradiç_', answer: 'ÃO', full: 'Tradição' },
      { display: 'm_', answer: 'Ã', full: 'Mã' },
      { display: 'civilizaç_', answer: 'ÃO', full: 'Civilização' },
      { display: 'rom_', answer: 'Ã', full: 'Romã' },
      { display: 'naç_', answer: 'ÃO', full: 'Nação' },
      { display: 'orf_', answer: 'Ã', full: 'Orfã' },
      { display: 'raz_', answer: 'ÃO', full: 'Razão' },
      { display: 'maç_', answer: 'Ã', full: 'Maçã' },
      { display: 'redenç_', answer: 'ÃO', full: 'Redenção' },
      { display: 'alde_', answer: 'Ã', full: 'Aldeã' },
      { display: 'salvaç_', answer: 'ÃO', full: 'Salvação' },
      { display: 'alem_', answer: 'Ã', full: 'Alemã' },
      { display: 'constituiç_', answer: 'ÃO', full: 'Constituição' },
      { display: 'pag_', answer: 'Ã', full: 'Pagã' },
      { display: 'jurisdiç_', answer: 'ÃO', full: 'Jurisdição' },
      { display: 'cidad_', answer: 'Ã', full: 'Cidadã' },
      { display: 'absolviç_', answer: 'ÃO', full: 'Absolvição' },
      { display: 'insureiç_', answer: 'ÃO', full: 'Insurreição' },
      { display: 'sulta_', answer: 'Ã', full: 'Sultana' },
    ]
  },
  // ── 9. PT c = /k/ vs /s/ ──
  {
    name: 'PT c = /k/ vs /s/',
    options: ['/k/ (ca,co,cu)', '/s/ (ce,ci)'],
    words: [
      { display: '_omunismo', answer: '/k/ (ca,co,cu)', full: 'Comunismo' },
      { display: '_eticismo', answer: '/s/ (ce,ci)', full: 'Ceticismo' },
      { display: '_ânone', answer: '/k/ (ca,co,cu)', full: 'Cânone' },
      { display: '_ivilização', answer: '/s/ (ce,ci)', full: 'Civilização' },
      { display: '_oncílio', answer: '/k/ (ca,co,cu)', full: 'Concílio' },
      { display: '_erimônia', answer: '/s/ (ce,ci)', full: 'Cerimônia' },
      { display: '_osmologia', answer: '/k/ (ca,co,cu)', full: 'Cosmologia' },
      { display: '_ensura', answer: '/s/ (ce,ci)', full: 'Censura' },
      { display: '_atolicismo', answer: '/k/ (ca,co,cu)', full: 'Catolicismo' },
      { display: '_ientífico', answer: '/s/ (ce,ci)', full: 'Científico' },
      { display: '_ultura', answer: '/k/ (ca,co,cu)', full: 'Cultura' },
      { display: '_inismo', answer: '/s/ (ce,ci)', full: 'Cinismo' },
      { display: '_apital', answer: '/k/ (ca,co,cu)', full: 'Capital' },
      { display: '_iência', answer: '/s/ (ce,ci)', full: 'Ciência' },
      { display: '_ausalidade', answer: '/k/ (ca,co,cu)', full: 'Causalidade' },
      { display: '_ertidão', answer: '/s/ (ce,ci)', full: 'Certidão' },
      { display: '_orporativismo', answer: '/k/ (ca,co,cu)', full: 'Corporativismo' },
      { display: '_imento', answer: '/s/ (ce,ci)', full: 'Cimento' },
      { display: '_ogitação', answer: '/k/ (ca,co,cu)', full: 'Cogitação' },
      { display: '_irculação', answer: '/s/ (ce,ci)', full: 'Circulação' },
    ]
  },
  // ── 10. PT g = /g/ vs /ʒ/ ──
  {
    name: 'PT g = /g/ vs /ʒ/',
    options: ['/g/ (ga,go,gu)', '/ʒ/ (ge,gi)'],
    words: [
      { display: '_overnança', answer: '/g/ (ga,go,gu)', full: 'Governança' },
      { display: '_eopolítica', answer: '/ʒ/ (ge,gi)', full: 'Geopolítica' },
      { display: '_uerra', answer: '/g/ (ga,go,gu)', full: 'Guerra' },
      { display: '_enealogía', answer: '/ʒ/ (ge,gi)', full: 'Genealogia' },
      { display: '_ênese', answer: '/ʒ/ (ge,gi)', full: 'Gênese' },
      { display: '_enocídio', answer: '/ʒ/ (ge,gi)', full: 'Genocídio' },
      { display: '_estão', answer: '/ʒ/ (ge,gi)', full: 'Gestão' },
      { display: '_eografia', answer: '/ʒ/ (ge,gi)', full: 'Geografia' },
      { display: '_lobalização', answer: '/g/ (ga,go,gu)', full: 'Globalização' },
      { display: '_entileza', answer: '/ʒ/ (ge,gi)', full: 'Gentileza' },
      { display: '_lória', answer: '/g/ (ga,go,gu)', full: 'Glória' },
      { display: '_raça', answer: '/g/ (ga,go,gu)', full: 'Graça' },
      { display: '_ênio', answer: '/ʒ/ (ge,gi)', full: 'Gênio' },
      { display: '_uilhotina', answer: '/g/ (ga,go,gu)', full: 'Guilhotina' },
      { display: '_eral', answer: '/ʒ/ (ge,gi)', full: 'Geral' },
      { display: '_eometria', answer: '/ʒ/ (ge,gi)', full: 'Geometria' },
      { display: '_randeza', answer: '/g/ (ga,go,gu)', full: 'Grandeza' },
      { display: '_irândola', answer: '/ʒ/ (ge,gi)', full: 'Girândola' },
      { display: '_nosticismo', answer: '/g/ (ga,go,gu)', full: 'Gnosticismo' },
      { display: '_eração', answer: '/ʒ/ (ge,gi)', full: 'Geração' },
    ]
  },
  // ── EN /æ/ vs /ɑː/ ──
  {
    name: 'EN /æ/ vs /ɑː/',
    options: ['æ (cat)', 'ɑː (father)'],
    words: [
      { display: 's_nctuary', answer: 'æ (cat)', full: 'Sanctuary' },
      { display: 'p_radigm', answer: 'ɑː (father)', full: 'Paradigm' },
      { display: 'f_llacy', answer: 'æ (cat)', full: 'Fallacy' },
      { display: 'c_lm', answer: 'ɑː (father)', full: 'Calm' },
      { display: 'c_pitalism', answer: 'æ (cat)', full: 'Capitalism' },
      { display: 'ps_lm', answer: 'ɑː (father)', full: 'Psalm' },
      { display: 'm_ndate', answer: 'æ (cat)', full: 'Mandate' },
      { display: 'f_ther', answer: 'ɑː (father)', full: 'Father' },
      { display: 'p_radox', answer: 'æ (cat)', full: 'Paradox' },
      { display: 'dr_ma', answer: 'ɑː (father)', full: 'Drama' },
      { display: 'tr_gedy', answer: 'æ (cat)', full: 'Tragedy' },
      { display: 'gu_rd', answer: 'ɑː (father)', full: 'Guard' },
      { display: 'f_ction', answer: 'æ (cat)', full: 'Faction' },
      { display: 'comm_nd', answer: 'ɑː (father)', full: 'Command' },
      { display: 'r_tional', answer: 'æ (cat)', full: 'Rational' },
      { display: 'h_lf', answer: 'ɑː (father)', full: 'Half' },
      { display: 'b_ptism', answer: 'æ (cat)', full: 'Baptism' },
      { display: 'ch_nt', answer: 'ɑː (father)', full: 'Chant' },
      { display: 'c_ndidate', answer: 'æ (cat)', full: 'Candidate' },
      { display: 'l_ment', answer: 'æ (cat)', full: 'Lament' },
    ]
  },
  // ── EN /ɪ/ vs /iː/ ──
  {
    name: 'EN /ɪ/ vs /iː/',
    options: ['/ɪ/ (bit)', '/iː/ (beat)'],
    words: [
      { display: 'pr_nciple', answer: '/ɪ/ (bit)', full: 'Principle' },
      { display: 'r_ason', answer: '/iː/ (beat)', full: 'Reason' },
      { display: 'cr_ticism', answer: '/ɪ/ (bit)', full: 'Criticism' },
      { display: 'fr_dom', answer: '/iː/ (beat)', full: 'Freedom' },
      { display: 'l_teral', answer: '/ɪ/ (bit)', full: 'Literal' },
      { display: 'cr_ed', answer: '/iː/ (beat)', full: 'Creed' },
      { display: 'l_berty', answer: '/ɪ/ (bit)', full: 'Liberty' },
      { display: 'decr_e', answer: '/iː/ (beat)', full: 'Decree' },
      { display: 'wr_tten', answer: '/ɪ/ (bit)', full: 'Written' },
      { display: 'pr_acher', answer: '/iː/ (beat)', full: 'Preacher' },
      { display: 'v_ctim', answer: '/ɪ/ (bit)', full: 'Victim' },
      { display: 'tr_aty', answer: '/iː/ (beat)', full: 'Treaty' },
      { display: 'syst_m', answer: '/ɪ/ (bit)', full: 'System' },
      { display: 'pr_est', answer: '/iː/ (beat)', full: 'Priest' },
      { display: 'w_sdom', answer: '/ɪ/ (bit)', full: 'Wisdom' },
      { display: 's_ek', answer: '/iː/ (beat)', full: 'Seek' },
      { display: 'sp_rit', answer: '/ɪ/ (bit)', full: 'Spirit' },
      { display: 'b_lief', answer: '/iː/ (beat)', full: 'Belief' },
      { display: 'rh_toric', answer: '/ɪ/ (bit)', full: 'Rhetoric' },
      { display: 'f_at', answer: '/iː/ (beat)', full: 'Feat' },
    ]
  },
  // ── EN /ʌ/ vs /ɒ/ ──
  {
    name: 'EN /ʌ/ vs /ɒ/',
    options: ['/ʌ/ (cup)', '/ɒ/ (hot)'],
    words: [
      { display: 'j_stice', answer: '/ʌ/ (cup)', full: 'Justice' },
      { display: 'c_nscience', answer: '/ɒ/ (hot)', full: 'Conscience' },
      { display: 'str_ggle', answer: '/ʌ/ (cup)', full: 'Struggle' },
      { display: 'ph_losophy', answer: '/ɒ/ (hot)', full: 'Philosophy' },
      { display: 'rep_blic', answer: '/ʌ/ (cup)', full: 'Republic' },
      { display: 'd_ctrine', answer: '/ɒ/ (hot)', full: 'Doctrine' },
      { display: 'c_rruption', answer: '/ʌ/ (cup)', full: 'Corruption' },
      { display: 'pr_phet', answer: '/ɒ/ (hot)', full: 'Prophet' },
      { display: 'j_dgment', answer: '/ʌ/ (cup)', full: 'Judgment' },
      { display: 'ec_nomic', answer: '/ɒ/ (hot)', full: 'Economic' },
      { display: 'c_ltural', answer: '/ʌ/ (cup)', full: 'Cultural' },
      { display: 'dem_cracy', answer: '/ɒ/ (hot)', full: 'Democracy' },
      { display: 'tr_st', answer: '/ʌ/ (cup)', full: 'Trust' },
      { display: 'kn_wledge', answer: '/ɒ/ (hot)', full: 'Knowledge' },
      { display: 'f_ndamental', answer: '/ʌ/ (cup)', full: 'Fundamental' },
      { display: 'mon_poly', answer: '/ɒ/ (hot)', full: 'Monopoly' },
      { display: 's_ffering', answer: '/ʌ/ (cup)', full: 'Suffering' },
      { display: 'sch_lar', answer: '/ɒ/ (hot)', full: 'Scholar' },
      { display: '_tter', answer: '/ʌ/ (cup)', full: 'Utter' },
      { display: 'p_litics', answer: '/ɒ/ (hot)', full: 'Politics' },
    ]
  },
  // ── EN /w/ vs /v/ ──
  {
    name: 'EN /w/ vs /v/',
    options: ['W', 'V'],
    words: [
      { display: '_isdom', answer: 'W', full: 'Wisdom' },
      { display: '_irtue', answer: 'V', full: 'Virtue' },
      { display: '_orship', answer: 'W', full: 'Worship' },
      { display: '_ocation', answer: 'V', full: 'Vocation' },
      { display: '_ealth', answer: 'W', full: 'Wealth' },
      { display: '_alor', answer: 'V', full: 'Valor' },
      { display: '_arfare', answer: 'W', full: 'Warfare' },
      { display: '_anity', answer: 'V', full: 'Vanity' },
      { display: '_itness', answer: 'W', full: 'Witness' },
      { display: '_engeance', answer: 'V', full: 'Vengeance' },
      { display: '_ill (vontade)', answer: 'W', full: 'Will' },
      { display: '_erdict', answer: 'V', full: 'Verdict' },
      { display: '_orldview', answer: 'W', full: 'Worldview' },
      { display: '_anguard', answer: 'V', full: 'Vanguard' },
      { display: '_holesome', answer: 'W', full: 'Wholesome' },
      { display: '_iolence', answer: 'V', full: 'Violence' },
      { display: '_ager (salário)', answer: 'W', full: 'Wage' },
      { display: '_eto', answer: 'V', full: 'Veto' },
      { display: '_elfare', answer: 'W', full: 'Welfare' },
      { display: '_estment', answer: 'V', full: 'Vestment' },
    ]
  },
  // ── EN /h/ ──
  {
    name: 'EN /h/',
    options: ['/h/ (aspirado)', 'mudo'],
    words: [
      { display: '_eresy', answer: '/h/ (aspirado)', full: 'Heresy' },
      { display: '_onor', answer: 'mudo', full: 'Honor' },
      { display: '_istory', answer: '/h/ (aspirado)', full: 'History' },
      { display: '_our', answer: 'mudo', full: 'Hour' },
      { display: '_egemony', answer: '/h/ (aspirado)', full: 'Hegemony' },
      { display: '_onest', answer: 'mudo', full: 'Honest' },
      { display: '_umanism', answer: '/h/ (aspirado)', full: 'Humanism' },
      { display: '_eir', answer: 'mudo', full: 'Heir' },
      { display: '_ierarchy', answer: '/h/ (aspirado)', full: 'Hierarchy' },
      { display: '_erb (erva)', answer: 'mudo', full: 'Herb' },
      { display: '_ypothesis', answer: '/h/ (aspirado)', full: 'Hypothesis' },
      { display: '_omage', answer: 'mudo', full: 'Homage' },
      { display: '_ermit', answer: '/h/ (aspirado)', full: 'Hermit' },
      { display: '_eritage', answer: '/h/ (aspirado)', full: 'Heritage' },
      { display: '_oliness', answer: '/h/ (aspirado)', full: 'Holiness' },
      { display: '_umility', answer: '/h/ (aspirado)', full: 'Humility' },
      { display: '_ostile', answer: '/h/ (aspirado)', full: 'Hostile' },
      { display: '_ypocrisy', answer: '/h/ (aspirado)', full: 'Hypocrisy' },
      { display: '_omily', answer: '/h/ (aspirado)', full: 'Homily' },
      { display: '_onesty', answer: 'mudo', full: 'Honesty' },
    ]
  },
  // ── EN /r/ ──
  {
    name: 'EN /r/',
    options: ['/r/ (retroflex)', 'silent r'],
    words: [
      { display: '_hetoric', answer: '/r/ (retroflex)', full: 'Rhetoric' },
      { display: 'hono_', answer: 'silent r', full: 'Honor' },
      { display: '_eformation', answer: '/r/ (retroflex)', full: 'Reformation' },
      { display: 'schola_', answer: 'silent r', full: 'Scholar' },
      { display: '_eason', answer: '/r/ (retroflex)', full: 'Reason' },
      { display: 'docto_', answer: 'silent r', full: 'Doctor' },
      { display: '_evolution', answer: '/r/ (retroflex)', full: 'Revolution' },
      { display: 'majo_', answer: 'silent r', full: 'Major' },
      { display: '_evelation', answer: '/r/ (retroflex)', full: 'Revelation' },
      { display: 'particula_', answer: 'silent r', full: 'Particular' },
      { display: '_ighteousness', answer: '/r/ (retroflex)', full: 'Righteousness' },
      { display: 'matte_', answer: 'silent r', full: 'Matter' },
      { display: '_epentance', answer: '/r/ (retroflex)', full: 'Repentance' },
      { display: 'popula_', answer: 'silent r', full: 'Popular' },
      { display: '_epublic', answer: '/r/ (retroflex)', full: 'Republic' },
      { display: 'powe_', answer: 'silent r', full: 'Power' },
      { display: '_econciliation', answer: '/r/ (retroflex)', full: 'Reconciliation' },
      { display: 'chapte_', answer: 'silent r', full: 'Chapter' },
      { display: '_enaissance', answer: '/r/ (retroflex)', full: 'Renaissance' },
      { display: 'calenda_', answer: 'silent r', full: 'Calendar' },
    ]
  },
  // ── EN /ŋ/ vs /n/ ──
  {
    name: 'EN /ŋ/ vs /n/',
    options: ['/ŋ/ (ng)', '/n/ (n)'],
    words: [
      { display: 'reasoni_', answer: '/ŋ/ (ng)', full: 'Reasoning' },
      { display: 'reaso_', answer: '/n/ (n)', full: 'Reason' },
      { display: 'belongi_', answer: '/ŋ/ (ng)', full: 'Belonging' },
      { display: 'writte_', answer: '/n/ (n)', full: 'Written' },
      { display: 'governi_', answer: '/ŋ/ (ng)', full: 'Governing' },
      { display: 'foreig_', answer: '/n/ (n)', full: 'Foreign' },
      { display: 'sufferi_', answer: '/ŋ/ (ng)', full: 'Suffering' },
      { display: 'certai_', answer: '/n/ (n)', full: 'Certain' },
      { display: 'teachi_', answer: '/ŋ/ (ng)', full: 'Teaching' },
      { display: 'moder_', answer: '/n/ (n)', full: 'Modern' },
      { display: 'bringi_', answer: '/ŋ/ (ng)', full: 'Bringing' },
      { display: 'commo_', answer: '/n/ (n)', full: 'Common' },
      { display: 'thinki_', answer: '/ŋ/ (ng)', full: 'Thinking' },
      { display: 'golde_', answer: '/n/ (n)', full: 'Golden' },
      { display: 'readi_', answer: '/ŋ/ (ng)', full: 'Reading' },
      { display: 'huma_', answer: '/n/ (n)', full: 'Human' },
      { display: 'understandi_', answer: '/ŋ/ (ng)', full: 'Understanding' },
      { display: 'puritan_', answer: '/n/ (n)', full: 'Puritan' },
      { display: 'preachi_', answer: '/ŋ/ (ng)', full: 'Preaching' },
      { display: 'paga_', answer: '/n/ (n)', full: 'Pagan' },
    ]
  },
  // ── EN /dʒ/ vs /tʃ/ ──
  {
    name: 'EN /dʒ/ vs /tʃ/',
    options: ['/dʒ/ (judge)', '/tʃ/ (church)'],
    words: [
      { display: '_ustice', answer: '/dʒ/ (judge)', full: 'Justice' },
      { display: '_arity', answer: '/tʃ/ (church)', full: 'Charity' },
      { display: '_udge', answer: '/dʒ/ (judge)', full: 'Judge' },
      { display: '_apter', answer: '/tʃ/ (church)', full: 'Chapter' },
      { display: '_enesis', answer: '/dʒ/ (judge)', full: 'Genesis' },
      { display: '_allenge', answer: '/tʃ/ (church)', full: 'Challenge' },
      { display: '_ournalism', answer: '/dʒ/ (judge)', full: 'Journalism' },
      { display: '_ancellor', answer: '/tʃ/ (church)', full: 'Chancellor' },
      { display: '_urisprudence', answer: '/dʒ/ (judge)', full: 'Jurisprudence' },
      { display: '_urch', answer: '/tʃ/ (church)', full: 'Church' },
      { display: '_eography', answer: '/dʒ/ (judge)', full: 'Geography' },
      { display: '_oice', answer: '/tʃ/ (church)', full: 'Choice' },
      { display: '_erusalem', answer: '/dʒ/ (judge)', full: 'Jerusalem' },
      { display: '_amber', answer: '/tʃ/ (church)', full: 'Chamber' },
      { display: '_eneral', answer: '/dʒ/ (judge)', full: 'General' },
      { display: '_ivalry', answer: '/tʃ/ (church)', full: 'Chivalry' },
      { display: '_esuit', answer: '/dʒ/ (judge)', full: 'Jesuit' },
      { display: '_ronology', answer: '/tʃ/ (church)', full: 'Chronology' },
      { display: '_enocide', answer: '/dʒ/ (judge)', full: 'Genocide' },
      { display: '_ristianity', answer: '/tʃ/ (church)', full: 'Christianity' },
    ]
  },
  // ── EN /ə/ (schwa) ──
  {
    name: 'EN /ə/ (schwa)',
    options: ['/ə/ (schwa)', 'vogal plena'],
    words: [
      { display: '_bout', answer: '/ə/ (schwa)', full: 'About' },
      { display: '_ctive', answer: 'vogal plena', full: 'Active' },
      { display: 'parl_ment', answer: '/ə/ (schwa)', full: 'Parliament' },
      { display: 'pár_graph', answer: 'vogal plena', full: 'Paragraph' },
      { display: '_ccasion', answer: '/ə/ (schwa)', full: 'Occasion' },
      { display: '_bstract', answer: 'vogal plena', full: 'Abstract' },
      { display: 'sov_reign', answer: '/ə/ (schwa)', full: 'Sovereign' },
      { display: 'comm_n', answer: '/ə/ (schwa)', full: 'Common' },
      { display: 'cóm_bat', answer: 'vogal plena', full: 'Combat' },
      { display: 'econ_my', answer: '/ə/ (schwa)', full: 'Economy' },
      { display: 'éc_nomic', answer: 'vogal plena', full: 'Economic' },
      { display: 'hist_ry', answer: '/ə/ (schwa)', full: 'History' },
      { display: 'históric', answer: 'vogal plena', full: 'Historic' },
      { display: 'domin_nt', answer: '/ə/ (schwa)', full: 'Dominant' },
      { display: 'dóminate', answer: 'vogal plena', full: 'Dominate' },
      { display: 'patr_nage', answer: '/ə/ (schwa)', full: 'Patronage' },
      { display: 'pátr_arch', answer: 'vogal plena', full: 'Patriarch' },
      { display: 'theol_gy', answer: '/ə/ (schwa)', full: 'Theology' },
      { display: 'thé_logian', answer: 'vogal plena', full: 'Theologian' },
      { display: 'sep_rate', answer: '/ə/ (schwa)', full: 'Separate' },
    ]
  }
];

const DECODE_MODULES = [
  {
    name: 'PT /s/ vs /z/',
    words: [
      { robot: 'si · lo · gis · mo', word: 'silogismo' },
      { robot: 'ze · lo · tis · mo', word: 'zelotismo' },
      { robot: 'so · fis · ma', word: 'sofisma' },
      { robot: 'sub · si · di · a · ri · e · da · de', word: 'subsidiariedade' },
      { robot: 'zo · dí · a · co', word: 'zodíaco' },
      { robot: 'so · be · ra · ni · a', word: 'soberania' },
      { robot: 'se · cu · lar', word: 'secular' },
      { robot: 'zo · ro · as · tris · mo', word: 'zoroastrismo' },
      { robot: 'se · ces · são', word: 'secessão' },
      { robot: 'zê · ni · te', word: 'zênite' },
    ]
  },
  {
    name: 'PT /ʃ/ vs /ʒ/',
    words: [
      { robot: 'chan · ce · la · ri · a', word: 'chancelaria' },
      { robot: 'je · rar · qui · a', word: 'jerarquia' },
      { robot: 'xe · no · fo · bi · a', word: 'xenofobia' },
      { robot: 'ju · ris · pru · dên · ci · a', word: 'jurisprudência' },
      { robot: 'cha · ma · ri · lhão', word: 'chamarilhão' },
      { robot: 'ge · o · po · lí · ti · ca', word: 'geopolítica' },
      { robot: 'char · la · ta · nis · mo', word: 'charlatanismo' },
      { robot: 'je · su · í · ta', word: 'jesuíta' },
      { robot: 'jan · se · nis · mo', word: 'jansenismo' },
      { robot: 'xe · que · ma · te', word: 'xeque-mate' },
    ]
  },
  {
    name: 'EN /θ/ vs /ð/',
    words: [
      { robot: 'the · ol · o · gy', word: 'theology' },
      { robot: 'there · fore', word: 'therefore' },
      { robot: 'the · o · rem', word: 'theorem' },
      { robot: 'to · geth · er', word: 'together' },
      { robot: 'thresh · old', word: 'threshold' },
      { robot: 'nev · er · the · less', word: 'nevertheless' },
      { robot: 'ther · mo · dy · nam · ics', word: 'thermodynamics' },
      { robot: 'weath · er', word: 'weather' },
      { robot: 'au · thor · i · ty', word: 'authority' },
      { robot: 'fur · ther · more', word: 'furthermore' },
    ]
  },
  {
    name: 'Latim',
    words: [
      { robot: 'cae · lum', word: 'caelum' },
      { robot: 'gra · ti · a', word: 'gratia' },
      { robot: 'ec · cle · si · a', word: 'ecclesia' },
      { robot: 're · gi · na', word: 'regina' },
      { robot: 'ma · gni · fi · cat', word: 'magnificat' },
      { robot: 'poe · ni · ten · ti · a', word: 'poenitentia' },
      { robot: 'prae · di · ca · ti · o', word: 'praedicatio' },
      { robot: 'de · scen · dit', word: 'descendit' },
      { robot: 'ius · ti · ti · a', word: 'iustitia' },
      { robot: 're · demp · ti · o', word: 'redemptio' },
    ]
  },
  // ── PT /λ/ vs /j/ ──
  {
    name: 'PT /λ/ vs /j/',
    words: [
      { robot: 'fi · lho', word: 'filho' },
      { robot: 'con · se · lhei · ro', word: 'conselheiro' },
      { robot: 'ma · ra · vi · lha', word: 'maravilha' },
      { robot: 'or · gu · lho', word: 'orgulho' },
      { robot: 'tra · ba · lho', word: 'trabalho' },
      { robot: 'hu · mi · lha · ção', word: 'humilhação' },
      { robot: 'e · xí · li · o', word: 'exílio' },
      { robot: 'con · ci · li · ar', word: 'conciliar' },
      { robot: 're · con · ci · li · a · ção', word: 'reconciliação' },
      { robot: 'ba · ta · lha', word: 'batalha' },
    ]
  },
  // ── PT /ɲ/ ──
  {
    name: 'PT /ɲ/',
    words: [
      { robot: 'vi · nho', word: 'vinho' },
      { robot: 'se · nhor', word: 'senhor' },
      { robot: 'ba · nho', word: 'banho' },
      { robot: 'de · se · nho', word: 'desenho' },
      { robot: 'ca · mi · nho', word: 'caminho' },
      { robot: 'es · tra · nho', word: 'estranho' },
      { robot: 'en · ge · nha · ri · a', word: 'engenharia' },
      { robot: 'ra · i · nha', word: 'rainha' },
      { robot: 'com · pa · nhi · a', word: 'companhia' },
      { robot: 'tes · te · mu · nho', word: 'testemunho' },
    ]
  },
  // ── PT /r/ vs /ʁ/ ──
  {
    name: 'PT /r/ vs /ʁ/',
    words: [
      { robot: 'ca · ro', word: 'caro' },
      { robot: 'car · ro', word: 'carro' },
      { robot: 'e · ra', word: 'era' },
      { robot: 'er · ra', word: 'erra' },
      { robot: 'fer · ro', word: 'ferro' },
      { robot: 'bar · ro · co', word: 'barroco' },
      { robot: 'pa · ró · qui · a', word: 'paróquia' },
      { robot: 'ter · ri · tó · ri · o', word: 'território' },
      { robot: 'cor · rup · ção', word: 'corrupção' },
      { robot: 'nar · ra · ti · va', word: 'narrativa' },
    ]
  },
  // ── PT /e/ vs /ɛ/ ──
  {
    name: 'PT /e/ vs /ɛ/',
    words: [
      { robot: 'a · ca · dê · mi · co', word: 'acadêmico' },
      { robot: 'é · ti · ca', word: 'ética' },
      { robot: 'he · ré · ti · co', word: 'herético' },
      { robot: 'gê · ne · ro', word: 'gênero' },
      { robot: 'é · po · ca', word: 'época' },
      { robot: 'fe · nô · me · no', word: 'fenômeno' },
      { robot: 'sé · ri · e', word: 'série' },
      { robot: 'prê · mi · o', word: 'prêmio' },
      { robot: 'pé · ro · la', word: 'pérola' },
      { robot: 'po · lê · mi · ca', word: 'polêmica' },
    ]
  },
  // ── PT /o/ vs /ɔ/ ──
  {
    name: 'PT /o/ vs /ɔ/',
    words: [
      { robot: 'a · vô', word: 'avô' },
      { robot: 'a · vó', word: 'avó' },
      { robot: 'fi · ló · so · fo', word: 'filósofo' },
      { robot: 'au · tô · no · mo', word: 'autônomo' },
      { robot: 'e · co · nô · mi · co', word: 'econômico' },
      { robot: 'his · tó · ri · co', word: 'histórico' },
      { robot: 'sim · bó · li · co', word: 'simbólico' },
      { robot: 'crô · ni · ca', word: 'crônica' },
      { robot: 'co · ló · qui · o', word: 'colóquio' },
      { robot: 'pro · pó · si · to', word: 'propósito' },
    ]
  },
  // ── PT nasais ã/ão ──
  {
    name: 'PT nasais ã/ão',
    words: [
      { robot: 'ir · mã', word: 'irmã' },
      { robot: 'ir · mão', word: 'irmão' },
      { robot: 'o · ra · ção', word: 'oração' },
      { robot: 'tra · di · ção', word: 'tradição' },
      { robot: 'ci · vi · li · za · ção', word: 'civilização' },
      { robot: 'na · ção', word: 'nação' },
      { robot: 'sal · va · ção', word: 'salvação' },
      { robot: 'cons · ti · tu · i · ção', word: 'constituição' },
      { robot: 'ju · ris · di · ção', word: 'jurisdição' },
      { robot: 'ab · sol · vi · ção', word: 'absolvição' },
    ]
  },
  // ── PT c = /k/ vs /s/ ──
  {
    name: 'PT c = /k/ vs /s/',
    words: [
      { robot: 'co · mu · nis · mo', word: 'comunismo' },
      { robot: 'ce · ti · cis · mo', word: 'ceticismo' },
      { robot: 'câ · no · ne', word: 'cânone' },
      { robot: 'ci · vi · li · za · ção', word: 'civilização' },
      { robot: 'con · cí · li · o', word: 'concílio' },
      { robot: 'ce · ri · mô · ni · a', word: 'cerimônia' },
      { robot: 'cos · mo · lo · gi · a', word: 'cosmologia' },
      { robot: 'cen · su · ra', word: 'censura' },
      { robot: 'ca · to · li · cis · mo', word: 'catolicismo' },
      { robot: 'ca · u · sa · li · da · de', word: 'causalidade' },
    ]
  },
  // ── PT g = /g/ vs /ʒ/ ──
  {
    name: 'PT g = /g/ vs /ʒ/',
    words: [
      { robot: 'go · ver · nan · ça', word: 'governança' },
      { robot: 'ge · o · po · lí · ti · ca', word: 'geopolítica' },
      { robot: 'guer · ra', word: 'guerra' },
      { robot: 'ge · ne · a · lo · gi · a', word: 'genealogia' },
      { robot: 'gê · ne · se', word: 'gênese' },
      { robot: 'ge · no · cí · di · o', word: 'genocídio' },
      { robot: 'ges · tão', word: 'gestão' },
      { robot: 'ge · o · gra · fi · a', word: 'geografia' },
      { robot: 'glo · ba · li · za · ção', word: 'globalização' },
      { robot: 'gen · ti · le · za', word: 'gentileza' },
    ]
  },
  // ── EN /æ/ vs /ɑː/ ──
  {
    name: 'EN /æ/ vs /ɑː/',
    words: [
      { robot: 'sanc · tu · ar · y', word: 'sanctuary' },
      { robot: 'fal · la · cy', word: 'fallacy' },
      { robot: 'cap · i · tal · ism', word: 'capitalism' },
      { robot: 'par · a · dox', word: 'paradox' },
      { robot: 'trag · e · dy', word: 'tragedy' },
      { robot: 'bap · tism', word: 'baptism' },
      { robot: 'can · di · date', word: 'candidate' },
      { robot: 'man · date', word: 'mandate' },
      { robot: 'ra · tion · al', word: 'rational' },
      { robot: 'fac · tion', word: 'faction' },
    ]
  },
  // ── EN /ɪ/ vs /iː/ ──
  {
    name: 'EN /ɪ/ vs /iː/',
    words: [
      { robot: 'prin · ci · ple', word: 'principle' },
      { robot: 'free · dom', word: 'freedom' },
      { robot: 'crit · i · cism', word: 'criticism' },
      { robot: 'lib · er · ty', word: 'liberty' },
      { robot: 'de · cree', word: 'decree' },
      { robot: 'sys · tem', word: 'system' },
      { robot: 'be · lief', word: 'belief' },
      { robot: 'rhet · o · ric', word: 'rhetoric' },
      { robot: 'preach · er', word: 'preacher' },
      { robot: 'trea · ty', word: 'treaty' },
    ]
  },
  // ── EN /ʌ/ vs /ɒ/ ──
  {
    name: 'EN /ʌ/ vs /ɒ/',
    words: [
      { robot: 'jus · tice', word: 'justice' },
      { robot: 'phi · los · o · phy', word: 'philosophy' },
      { robot: 'strug · gle', word: 'struggle' },
      { robot: 'doc · trine', word: 'doctrine' },
      { robot: 're · pub · lic', word: 'republic' },
      { robot: 'cor · rup · tion', word: 'corruption' },
      { robot: 'proph · et', word: 'prophet' },
      { robot: 'judg · ment', word: 'judgment' },
      { robot: 'fun · da · men · tal', word: 'fundamental' },
      { robot: 'mo · nop · o · ly', word: 'monopoly' },
    ]
  },
  // ── EN /w/ vs /v/ ──
  {
    name: 'EN /w/ vs /v/',
    words: [
      { robot: 'wis · dom', word: 'wisdom' },
      { robot: 'vir · tue', word: 'virtue' },
      { robot: 'wor · ship', word: 'worship' },
      { robot: 'vo · ca · tion', word: 'vocation' },
      { robot: 'war · fare', word: 'warfare' },
      { robot: 'van · i · ty', word: 'vanity' },
      { robot: 'wit · ness', word: 'witness' },
      { robot: 'ven · geance', word: 'vengeance' },
      { robot: 'world · view', word: 'worldview' },
      { robot: 'van · guard', word: 'vanguard' },
    ]
  },
  // ── EN /h/ ──
  {
    name: 'EN /h/',
    words: [
      { robot: 'her · e · sy', word: 'heresy' },
      { robot: 'hon · or', word: 'honor' },
      { robot: 'his · to · ry', word: 'history' },
      { robot: 'he · gem · o · ny', word: 'hegemony' },
      { robot: 'hu · man · ism', word: 'humanism' },
      { robot: 'hi · er · ar · chy', word: 'hierarchy' },
      { robot: 'hy · poth · e · sis', word: 'hypothesis' },
      { robot: 'her · i · tage', word: 'heritage' },
      { robot: 'ho · li · ness', word: 'holiness' },
      { robot: 'hu · mil · i · ty', word: 'humility' },
    ]
  },
  // ── EN /r/ ──
  {
    name: 'EN /r/',
    words: [
      { robot: 'rhet · o · ric', word: 'rhetoric' },
      { robot: 'ref · or · ma · tion', word: 'reformation' },
      { robot: 'rea · son', word: 'reason' },
      { robot: 'rev · o · lu · tion', word: 'revolution' },
      { robot: 'rev · e · la · tion', word: 'revelation' },
      { robot: 'right · eous · ness', word: 'righteousness' },
      { robot: 're · pent · ance', word: 'repentance' },
      { robot: 're · pub · lic', word: 'republic' },
      { robot: 'rec · on · cil · i · a · tion', word: 'reconciliation' },
      { robot: 'ren · ais · sance', word: 'renaissance' },
    ]
  },
  // ── EN /ŋ/ vs /n/ ──
  {
    name: 'EN /ŋ/ vs /n/',
    words: [
      { robot: 'rea · son · ing', word: 'reasoning' },
      { robot: 'be · long · ing', word: 'belonging' },
      { robot: 'gov · ern · ing', word: 'governing' },
      { robot: 'suf · fer · ing', word: 'suffering' },
      { robot: 'teach · ing', word: 'teaching' },
      { robot: 'think · ing', word: 'thinking' },
      { robot: 'un · der · stand · ing', word: 'understanding' },
      { robot: 'preach · ing', word: 'preaching' },
      { robot: 'bring · ing', word: 'bringing' },
      { robot: 'read · ing', word: 'reading' },
    ]
  },
  // ── EN /dʒ/ vs /tʃ/ ──
  {
    name: 'EN /dʒ/ vs /tʃ/',
    words: [
      { robot: 'jus · tice', word: 'justice' },
      { robot: 'char · i · ty', word: 'charity' },
      { robot: 'gen · e · sis', word: 'genesis' },
      { robot: 'chal · lenge', word: 'challenge' },
      { robot: 'jour · nal · ism', word: 'journalism' },
      { robot: 'chan · cel · lor', word: 'chancellor' },
      { robot: 'ju · ris · pru · dence', word: 'jurisprudence' },
      { robot: 'ge · og · ra · phy', word: 'geography' },
      { robot: 'chiv · al · ry', word: 'chivalry' },
      { robot: 'gen · o · cide', word: 'genocide' },
    ]
  },
  // ── EN /ə/ (schwa) ──
  {
    name: 'EN /ə/ (schwa)',
    words: [
      { robot: 'a · bout', word: 'about' },
      { robot: 'par · lia · ment', word: 'parliament' },
      { robot: 'oc · ca · sion', word: 'occasion' },
      { robot: 'sov · er · eign', word: 'sovereign' },
      { robot: 'e · con · o · my', word: 'economy' },
      { robot: 'his · to · ry', word: 'history' },
      { robot: 'dom · i · nant', word: 'dominant' },
      { robot: 'pat · ron · age', word: 'patronage' },
      { robot: 'the · ol · o · gy', word: 'theology' },
      { robot: 'com · mon', word: 'common' },
    ]
  }
];

const FLUENCIA_MODULES = [
  { name: 'PT /s/ vs /z/', words: ['sofisma','zeloso','silogismo','subsídio','zodíaco','soberania','zênite','secular','zoroastrismo','secessão','sinopse','zimbábue','solipsismo'] },
  { name: 'PT /ʃ/ vs /ʒ/', words: ['chancelaria','jesuíta','xenofobia','jurisprudência','chamarilhão','geopolítica','charlatanismo','jansenismo','xeque-mate','jeremíada','chicana','julgamento','xadrez'] },
  { name: 'EN /θ/ vs /ð/', words: ['theology','therefore','theorem','together','threshold','nevertheless','thermodynamics','weather','authority','furthermore','methodology','mathematical','theoretically','thoughtfulness','therapeutic'] },
  { name: 'Latim', words: ['caelum','gratia','ecclesia','regina','magnificat','poenitentia','praedicatio','descendit','iustitia','redemptio','oeconomia','haeresis','praesentia','abnegatio','potentia'] },
  { name: 'PT /λ/ vs /j/', words: ['filho','conselheiro','maravilha','orgulho','trabalho','exílio','conciliar','humilhação','família','reconciliação','evangélio','batalha','vermelho','pecúlio','acolhimento'] },
  { name: 'PT /ɲ/', words: ['vinho','senhor','banho','desenho','caminho','estranho','engenharia','rainha','companhia','testemunho','tamanho','galinheiro','senhorio','cunhado','vizinhança'] },
  { name: 'PT /r/ vs /ʁ/', words: ['caro','carro','era','erra','ferro','barroco','paróquia','território','corrupção','narrativa','paradigma','operário','cerimônia','curral','amparo'] },
  { name: 'PT /e/ vs /ɛ/', words: ['acadêmico','ética','herético','gênero','época','fenômeno','série','prêmio','pérola','polêmica','êxodo','célebre','miséria','hérege','estratégia'] },
  { name: 'PT /o/ vs /ɔ/', words: ['avô','avó','filósofo','autônomo','econômico','histórico','simbólico','crônica','colóquio','propósito','fórmula','órgão','demônio','óbvio','monótono'] },
  { name: 'PT nasais ã/ão', words: ['irmã','irmão','oração','tradição','civilização','nação','salvação','constituição','jurisdição','absolvição','cristã','redenção','aldeã','maçã','insurreição'] },
  { name: 'PT c = /k/ vs /s/', words: ['comunismo','ceticismo','cânone','civilização','concílio','cerimônia','cosmologia','censura','catolicismo','causalidade','científico','cultura','capital','cinismo','ciência'] },
  { name: 'PT g = /g/ vs /ʒ/', words: ['governança','geopolítica','guerra','genealogia','gênese','genocídio','gestão','geografia','globalização','gentileza','glória','graça','gênio','guilhotina','geral'] },
  { name: 'EN /æ/ vs /ɑː/', words: ['sanctuary','fallacy','capitalism','paradox','tragedy','baptism','candidate','mandate','rational','faction','lament','paradigm','psalm','command','drama'] },
  { name: 'EN /ɪ/ vs /iː/', words: ['principle','freedom','criticism','liberty','decree','system','belief','rhetoric','preacher','treaty','spirit','creed','victim','reason','written'] },
  { name: 'EN /ʌ/ vs /ɒ/', words: ['justice','philosophy','struggle','doctrine','republic','corruption','prophet','judgment','fundamental','monopoly','suffering','scholar','trust','knowledge','cultural'] },
  { name: 'EN /w/ vs /v/', words: ['wisdom','virtue','worship','vocation','wealth','valor','warfare','vanity','witness','vengeance','worldview','vanguard','welfare','verdict','vestment'] },
  { name: 'EN /h/', words: ['heresy','honor','history','hegemony','humanism','hierarchy','hypothesis','heritage','holiness','humility','hostile','hypocrisy','homily','hermit','honest'] },
  { name: 'EN /r/', words: ['rhetoric','reformation','reason','revolution','revelation','righteousness','repentance','republic','reconciliation','renaissance','particular','calendar','chapter','power','matter'] },
  { name: 'EN /ŋ/ vs /n/', words: ['reasoning','belonging','governing','suffering','teaching','thinking','understanding','preaching','bringing','reading','modern','foreign','golden','puritan','pagan'] },
  { name: 'EN /dʒ/ vs /tʃ/', words: ['justice','charity','genesis','challenge','journalism','chancellor','jurisprudence','geography','chivalry','genocide','church','choice','chamber','chronology','christianity'] },
  { name: 'EN /ə/ (schwa)', words: ['about','parliament','occasion','sovereign','economy','history','dominant','patronage','theology','common','particular','separate','elaborate','moderate','eloquent'] },
];

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

const CHECKLIST_ITEMS = [
  'Distingui corretamente os fonemas-alvo',
  'Não confundi com sons parecidos',
  'Pronúncia com características corretas (sonoridade, fricção, etc.)',
  'Ritmo natural, sem silabar em excesso',
  'Respeitei a pontuação ao ler',
  'Compreendi o significado do que li',
  'Consegui visualizar mentalmente o conteúdo',
  'Entendi o sentido geral do texto',
  'Poderia explicar as ideias principais a alguém',
];

const CHECKLIST_LABELS = ['✗', '~', '✓', '✓✓'];

