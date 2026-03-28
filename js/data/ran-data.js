// ─────────────────────────────────────────
// DATA — Dados de todos os módulos
// ─────────────────────────────────────────

const RAN_LEVELS = [
  [1890, 1908, 1980, 2890, 1909],
  [2530, 2503, 2683, 1736, 3260],
  [5690, 5906, 6905, 9065, 5605],
  [3186, 3168, 3618, 3816, 3681],
  [4927, 4972, 4279, 4792, 4297],
  [51839, 51893, 51398, 53189, 51938],
  [72946, 72496, 72694, 72649, 72964]
];

// RAN — Cores: 5 cores com nome e hex
const RAN_COLORS = [
  { nome: 'vermelho', hex: '#d32f2f' },
  { nome: 'azul',     hex: '#1565c0' },
  { nome: 'verde',    hex: '#2e7d32' },
  { nome: 'amarelo',  hex: '#f9a825' },
  { nome: 'roxo',     hex: '#7b1fa2' },
];

// RAN — Letras: conjuntos por nível de dificuldade
const RAN_LETTERS = [
  // Nível 1 — vogais simples
  ['A', 'E', 'I', 'O', 'U'],
  // Nível 2 — consoantes comuns
  ['B', 'D', 'F', 'M', 'P'],
  // Nível 3 — consoantes com sons variáveis
  ['C', 'G', 'R', 'S', 'Z'],
  // Nível 4 — letras com confusão visual (b/d/p/q)
  ['b', 'd', 'p', 'q', 'n'],
  // Nível 5 — mistura maiúsculas e minúsculas
  ['a', 'e', 'A', 'E', 'o'],
];
