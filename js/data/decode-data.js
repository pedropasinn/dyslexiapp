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
  // ── Latim ae/oe ──
  {
    name: 'Latim ae/oe',
    words: [
      { robot: 'cae · lum', word: 'caelum' },
      { robot: 'poe · ni · ten · ti · a', word: 'poenitentia' },
      { robot: 'prae · di · ca · ti · o', word: 'praedicatio' },
      { robot: 'ae · ter · nus', word: 'aeternus' },
      { robot: 'coe · na', word: 'coena' },
      { robot: 'prae · sen · ti · a', word: 'praesentia' },
      { robot: 'cae · re · mo · ni · a', word: 'caeremonia' },
      { robot: 'prae · cep · tum', word: 'praeceptum' },
      { robot: 'cae · les · tis', word: 'caelestis' },
      { robot: 'poe · na', word: 'poena' },
    ]
  },
  // ── Latim ti+vogal ──
  {
    name: 'Latim ti+vogal',
    words: [
      { robot: 'gra · ti · a', word: 'gratia' },
      { robot: 'ius · ti · ti · a', word: 'iustitia' },
      { robot: 'pa · ti · en · ti · a', word: 'patientia' },
      { robot: 're · demp · ti · o', word: 'redemptio' },
      { robot: 'ab · so · lu · ti · o', word: 'absolutio' },
      { robot: 'o · ra · ti · o', word: 'oratio' },
      { robot: 'na · ti · o', word: 'natio' },
      { robot: 'con · di · ti · o', word: 'conditio' },
      { robot: 'tri · bu · la · ti · o', word: 'tribulatio' },
      { robot: 'sa · lu · ta · ti · o', word: 'salutatio' },
    ]
  },
  // ── Latim c+e/i ──
  {
    name: 'Latim c+e/i',
    words: [
      { robot: 'cae · lum', word: 'caelum' },
      { robot: 'pec · ca · tum', word: 'peccatum' },
      { robot: 'ci · bus', word: 'cibus' },
      { robot: 'ec · cle · si · a', word: 'ecclesia' },
      { robot: 'ce · le · bra · ti · o', word: 'celebratio' },
      { robot: 'ci · vi · tas', word: 'civitas' },
      { robot: 'cen · tu · ri · o', word: 'centurio' },
      { robot: 'cer · ti · tu · do', word: 'certitudo' },
      { robot: 'con · ci · li · um', word: 'concilium' },
      { robot: 'pac · ci · fi · cus', word: 'paccificus' },
    ]
  },
  // ── Latim g+e/i ──
  {
    name: 'Latim g+e/i',
    words: [
      { robot: 're · gi · na', word: 'regina' },
      { robot: 'an · ge · lus', word: 'angelus' },
      { robot: 'ge · ni · tor', word: 'genitor' },
      { robot: 'vir · gi · ni · tas', word: 'virginitas' },
      { robot: 'ge · ne · ra · ti · o', word: 'generatio' },
      { robot: 'ge · hen · na', word: 'gehenna' },
      { robot: 'ge · nu · fle · xi · o', word: 'genuflexio' },
      { robot: 'gi · gne · re', word: 'gignere' },
      { robot: 'in · dul · gen · ti · a', word: 'indulgentia' },
      { robot: 'in · tel · li · gen · ti · a', word: 'intelligentia' },
    ]
  },
  // ── Latim gn ──
  {
    name: 'Latim gn',
    words: [
      { robot: 'ag · nus', word: 'agnus' },
      { robot: 'ma · gni · fi · cat', word: 'magnificat' },
      { robot: 'dig · nus', word: 'dignus' },
      { robot: 'be · nig · nus', word: 'benignus' },
      { robot: 'ma · lig · nus', word: 'malignus' },
      { robot: 'sig · num', word: 'signum' },
      { robot: 'reg · num', word: 'regnum' },
      { robot: 'ig · nis', word: 'ignis' },
      { robot: 'cog · nos · ce · re', word: 'cognoscere' },
      { robot: 'ig · no · ran · ti · a', word: 'ignorantia' },
    ]
  },
  // ── Latim sc+e/i ──
  {
    name: 'Latim sc+e/i',
    words: [
      { robot: 'de · scen · dit', word: 'descendit' },
      { robot: 'a · scen · dit', word: 'ascendit' },
      { robot: 'sci · en · ti · a', word: 'scientia' },
      { robot: 'con · sci · en · ti · a', word: 'conscientia' },
      { robot: 'sus · ci · pe', word: 'suscipe' },
      { robot: 'sus · ci · ta · re', word: 'suscitare' },
      { robot: 'a · scen · si · o', word: 'ascensio' },
      { robot: 'dis · ci · pu · lus', word: 'discipulus' },
      { robot: 'om · ni · sci · ens', word: 'omnisciens' },
      { robot: 'de · scen · si · o', word: 'descensio' },
    ]
  },
  // ── Latim x ──
  {
    name: 'Latim x',
    words: [
      { robot: 'ex · cel · sis', word: 'excelsis' },
      { robot: 'ex · au · di', word: 'exaudi' },
      { robot: 'ex · em · plum', word: 'exemplum' },
      { robot: 'cru · ci · fi · xus', word: 'crucifixus' },
      { robot: 'ex · sul · ta · te', word: 'exsultate' },
      { robot: 'ex · or · ci · smus', word: 'exorcismus' },
      { robot: 'ex · com · mu · ni · ca · ti · o', word: 'excommunicatio' },
      { robot: 'ex · e · ge · sis', word: 'exegesis' },
      { robot: 'ex · o · dus', word: 'exodus' },
      { robot: 'ex · er · ci · ti · um', word: 'exercitium' },
    ]
  },
  // ── Latim ph ──
  {
    name: 'Latim ph',
    words: [
      { robot: 'phi · lo · so · phi · a', word: 'philosophia' },
      { robot: 'pha · ri · sae · us', word: 'pharisaeus' },
      { robot: 'pro · phe · ta', word: 'propheta' },
      { robot: 'phan · tas · ma', word: 'phantasma' },
      { robot: 'e · pi · pha · ni · a', word: 'epiphania' },
      { robot: 'se · pul · chrum', word: 'sepulchrum' },
      { robot: 'blas · phe · mi · a', word: 'blasphemia' },
      { robot: 'ne · o · phy · tus', word: 'neophytus' },
      { robot: 'phi · lan · thro · pi · a', word: 'philanthropia' },
      { robot: 'a · po · stro · phe', word: 'apostrophe' },
    ]
  },
  // ── Latim qu ──
  {
    name: 'Latim qu',
    words: [
      { robot: 'qui', word: 'qui' },
      { robot: 'quo · ni · am', word: 'quoniam' },
      { robot: 're · qui · em', word: 'requiem' },
      { robot: 'qua · re', word: 'quare' },
      { robot: 'quin · que', word: 'quinque' },
      { robot: 'quae · ri · mus', word: 'quaerimus' },
      { robot: 'qua · dra · ge · si · ma', word: 'quadragesima' },
      { robot: 'con · se · quen · ti · a', word: 'consequentia' },
      { robot: 'e · lo · quen · ti · a', word: 'eloquentia' },
      { robot: 'quod · li · bet', word: 'quodlibet' },
    ]
  },
  // ── Latim h ──
  {
    name: 'Latim h',
    words: [
      { robot: 'ho · mo', word: 'homo' },
      { robot: 'ho · di · e', word: 'hodie' },
      { robot: 'Hie · ru · sa · lem', word: 'Hierusalem' },
      { robot: 'ho · no · ra · re', word: 'honorare' },
      { robot: 'hu · mi · li · tas', word: 'humilitas' },
      { robot: 'hae · re · sis', word: 'haeresis' },
      { robot: 'ho · lo · caus · tum', word: 'holocaustum' },
      { robot: 'ho · san · na', word: 'hosanna' },
      { robot: 'ha · bi · ta · re', word: 'habitare' },
      { robot: 'ho · nes · tas', word: 'honestas' },
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
