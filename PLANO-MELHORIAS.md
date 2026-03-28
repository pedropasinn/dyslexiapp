# Plano de Melhorias — DyslexiApp

Baseado em: Shaywitz (Overcoming Dyslexia), Gillon (Phonological Awareness 2ed),
Goldsworthy (Sourcebook Vol III), Foss (Dyslexia Empowerment Plan),
e auditoria dos modulos existentes.

---

## FASE 1 — Melhorias nos Modulos Existentes (prioridade alta)

### 1.1 Texto — Fluencia Textual
- [x] Pre-leitura semantica: preview de vocabulario dificil antes do texto ✅ Sprint 1
- [x] Niveis de compreensao explicitos (literal/inferencial/critico) — JA FEITO nos dados ✅
- [ ] Adicionar perguntas de conexao pessoal ("Isso se relaciona com algo que voce conhece?")
- [ ] Adicionar perguntas de predicao ("Antes de ler: pelo titulo, o que espera?")
- [x] Meta WPM configuravel pelo usuario (atual: 150, mas deve ser ajustavel) ✅ Sprint 1
- [x] Mostrar evolucao WPM ao longo das sessoes (mini-grafico no proprio modulo) ✅ Sprint 1
- [ ] Modelo de leitura fluente (audio TTS ou gravacao) para ouvir ANTES de ler

### 1.2 Precisao — Completar Fonemas
- [x] Adicionar tempo de reacao por item (medir velocidade + acerto) ✅ Sprint 1
- [x] Destacar qual contraste fonetico esta sendo treinado (ex: "s vs z") ✅ Sprint 1
- [ ] Adicionar modo auditivo: ouvir o fonema e escolher a grafia
- [ ] Incluir pseudopalavras (isolar rota fonologica, eliminar compensacao semantica)
- [ ] Feedback imediato com destaque do contraste errado

### 1.3 Decodificacao Progressiva
- [ ] Adicionar marcadores de tonicidade (PRE-des-ti-NA-cao)
- [ ] Modo com audio: ouvir pronuncia correta apos cada palavra
- [ ] Separar palavras regulares vs irregulares
- [ ] Adicionar passo de "estrutura morfologica" (un-HAPP-y / in-FELIZ-mente)

### 1.4 Fluencia de Palavras
- [ ] Calcular WPM (nao so tempo bruto)
- [ ] Benchmark/meta por sessao
- [ ] Progressao de dificuldade: monosssilabas → polissilabas → irregulares
- [ ] Retencao: repetir mesmas palavras apos intervalo (espacamento)

### 1.5 RAN — Nomeacao Rapida
- [x] Adicionar variantes: cores, letras, objetos (nao so numeros) ✅ Sprint 1
- [x] Calcular itens/minuto (normalizacao) ✅ Sprint 1
- [ ] Mostrar tendencia ao longo das sessoes

### 1.6 Memoria de Trabalho
- [x] Reading Span Test: lembrar ultima palavra de cada frase (Daneman & Carpenter) ✅ Sprint 3
- [ ] Span de pseudopalavras (isolar WM fonologica de memoria semantica)
- [ ] Efeito de similaridade fonologica (palavras que rimam vs nao rimam)

### 1.7 Controle Inibitorio
- [ ] Nível de pseudopalavras: validar leitura com audio (se possivel)
- [ ] Categorizar erros por tipo: substituicao, omissao, reversao, insercao
- [ ] Aumentar corpus: mais pseudopalavras, mais pares minimos, mais textos com erros
- [ ] Controle de plausibilidade fonologica nos erros

### 1.8 Morfologia
- [ ] Expandir corpus (mais exercicios por modulo)
- [ ] Modo reverso: dado os morfemas, construir a palavra
- [ ] Generalizacao: apresentar palavra NOVA com morfemas ja aprendidos
- [ ] Regras morfologicas explicitas (sufixacao, prefixacao, mudancas vocalicas)
- [ ] Cadeia etimologica: lat. → port. → derivados

### 1.9 Checklist Metacognitivo
- [ ] Historico do checklist com evolucao por dimensao ao longo do tempo
- [ ] Visualizacao radar/spider das 4 categorias

### 1.10 Historico & Progresso
- [x] Graficos de tendencia para TODOS os exercicios (nao so RAN/Texto/Tracking) ✅ Sprint 1
- [x] Dashboard resumo com totais, melhor WPM, melhor span, atividade 7 dias ✅ Sprint 1
- [x] Grafico WPM com linha de meta (tracejada) ✅ Sprint 1
- [ ] Comparacao entre modulos (qual fonema o usuario mais erra)
- [ ] Exportar relatorio legivel (nao so JSON bruto)

---

## FASE 2 — Novos Modulos (baseados na literatura)

### 2.1 Discriminacao Fonemica ✅ IMPLEMENTADO Sprint 2
**Base: Shaywitz cap. 17; Gillon cap. 10; Goldsworthy Vol III**

Exercicio de pares minimos cronometrado:
- [x] Ver dois palavras e dizer se sao iguais ou diferentes
- [x] Variantes: inicial, medial, final (com breakdown por posicao)
- [x] Pares minimos do perfil: 6 modulos (PT /s/-/z/, /ʃ/-/ʒ/, /r/-/ʁ/, /e/-/ɛ/; EN /θ/-/ð/, /ɪ/-/iː/)
- [x] Medir tempo de reacao + acerto (performance.now())
- [ ] Progressao: fonemas isolados → silabas → palavras → pseudopalavras

### 2.2 Consciencia Silabica ✅ IMPLEMENTADO Sprint 3
**Base: Goldsworthy Vol III — atividades de silaba**

- [x] Contagem de silabas (botoes clicaveis 1-10)
- [x] Segmentacao (digitar silabas separadas por hifen)
- [x] Delecao de silaba (tirar primeira/ultima silaba)
- [x] Substituicao de silaba
- [x] 8 modulos com vocabulario intelectual

### 2.3 Prosodia ✅ IMPLEMENTADO Sprint 2
**Base: Shaywitz cap. 18, 21 — prosodia como componente de fluencia**

- [ ] Comparar leitura monotona vs expressiva (modelos audio)
- [x] Exercicio: marcar onde estao as pausas naturais num texto (9 modulos)
- [x] Exercicio: ler a mesma frase com entonacao interrogativa, exclamativa, declarativa
- [x] Pontuacao como guia de prosodia (inserir pontuacao em texto sem pontuacao)

### 2.4 Vocabulario Tier 2 ✅ IMPLEMENTADO Sprint 2
**Base: Shaywitz cap. 18, 19, 21 — Beck's Three-Tier Framework**

- [x] Palavras academicas de alta frequencia (40 palavras em 5 modulos tematicos)
- [x] Ensino tematico (Causalidade, Argumentacao, Governanca, Percepcao, Virtude)
- [x] Definicao + contexto + uso em frase + etimologia
- [x] Exercicio: escolher o significado correto no contexto
- [x] Exercicio: usar a palavra numa frase propria
- [x] Revisao com flashcards (flip animation)
- [ ] Minimo 4 encontros por palavra; 12 para fluencia (espacamento)
- [ ] Integrar com textos do modulo de Fluencia Textual

### 2.5 Estrutura Textual (NOVO)
**Base: Shaywitz cap. 19 — textos informativos**

- Ensinar estruturas: causa-efeito, comparacao, problema-solucao, sequencia
- Exercicio: identificar a estrutura de um paragrafo
- Exercicio: organizar informacoes num organizador grafico
- Exercicio: resumir em uma frase a ideia principal
- Mapas conceituais interativos

### 2.6 Estrategias de Compreensao Ativa ✅ IMPLEMENTADO Sprint 3
**Base: Shaywitz cap. 19 — 7 estrategias do leitor ativo**

- [x] Protocolo guiado em 3 fases: Antes / Durante / Depois
- [x] Ativar conhecimento previo + Predizer (fase Antes)
- [x] Visualizar + Questionar + Monitorar (fase Durante)
- [x] Resumir + Fazer conexoes + Perguntas de compreensao (fase Depois)
- [x] 6 modulos (Filosofia, Teologia, Economia, Historia, Latim, Epistemologia)

---

## FASE 3 — Infraestrutura e UX

### 3.1 Progressao Adaptativa ✅ IMPLEMENTADO Sprint 4
- [x] Criterio de maestria: 80% sobre ultimas 3 sessoes (Goldsworthy)
- [x] Recomendacao automatica de proximo exercicio baseada em desempenho
- [x] Badges visuais de maestria em todos os botoes de modulo (estrela/ponto)
- [x] Card de progresso na home com estatisticas e recomendacao clicavel

### 3.2 Estrutura de Sessao ✅ IMPLEMENTADO Sprint 4
- [x] 3 rotinas guiadas: Rapida (10min), Padrao (20min), Completa (30min)
- [x] Timer de sessao total (barra fixa no rodape)
- [x] Resumo pos-sessao com metricas (modal)
- [x] Navegacao passo a passo para cada exercicio

### 3.3 Integracao entre Exercicios
- [ ] Mesmas palavras aparecem em RAN → Precisao → Decodificacao → Texto
- [ ] Morfemas aprendidos em Morfologia reaparecem nos textos
- [ ] Vocabulario Tier 2 ensinado aparece nos textos de fluencia

### 3.4 Acessibilidade ✅ IMPLEMENTADO Sprint 4
- [x] Opcao de fonte para dislexia (OpenDyslexic via CDN)
- [x] Controle de espacamento entre linhas, palavras e letras (sliders)
- [x] 4 esquemas de cor: padrao, alto contraste, sepia, escuro
- [x] Tamanho de fonte ajustavel (14-24px)
- [x] Regua de leitura (highlight horizontal que segue o mouse)
- [x] Todas as configs persistem em localStorage

### 3.5 Audio/TTS
- [ ] Integrar Web Speech API para leitura de modelos
- [ ] Explorar Speech Recognition API para validar leitura oral
- [ ] Audio de fonemas IPA (ja temos os arquivos MP3)

---

## ORDEM DE IMPLEMENTACAO SUGERIDA

### Sprint 1 — Melhorias imediatas nos existentes
1. Meta WPM configuravel + mini-grafico de evolucao (Texto)
2. Pre-leitura semantica (Texto)
3. Tempo de reacao + destaque de contraste (Precisao)
4. Variantes RAN (cores, letras)
5. Graficos de tendencia no Historico

### Sprint 2 — Novos modulos fundamentais
6. Discriminacao Fonemica (pares minimos)
7. Prosodia (entonacao e pausas)
8. Vocabulario Tier 2

### Sprint 3 — Aprofundamento
9. Consciencia Silabica
10. Estrategias de Compreensao Ativa (protocolo antes/durante/apos)
11. Estrutura Textual (informativos)
12. Reading Span Test (Memoria)

### Sprint 4 — Infraestrutura
13. Progressao adaptativa (criterio de maestria)
14. Estrutura de sessao sugerida
15. Integracao entre exercicios
16. Acessibilidade (fontes, espacamento)

---

## REFERENCIAS

- Shaywitz, S. & Shaywitz, J. (2020). Overcoming Dyslexia (2nd ed.) — caps. 16-21, 29
- Gillon, G. T. (2018). Phonological Awareness (2nd ed.) — caps. 5, 10
- Goldsworthy, C. & Pieretti, R. (2004). Sourcebook of Phonological Awareness Activities Vol III
- Foss, B. (2016). The Dyslexia Empowerment Plan
- Dr. Gabriel Brito — Metodo Educar com Evidencias (5 atividades + checklist metacognitivo)
