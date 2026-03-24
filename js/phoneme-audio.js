// phoneme-audio.js — IPA phoneme audio playback
// Audio from vocabulary.com CDN

const PHONEME_AUDIO_BASE_C = 'https://cdn.vocabulary.com/media/dictionary/ipa/consonants/';
const PHONEME_AUDIO_BASE_V = 'https://cdn.vocabulary.com/media/dictionary/ipa/vowels/';

const PHONEME_AUDIO_MAP = {
  // ─── Consoantes ───
  'p':  { file: 'p-1it7yor.mp3', type: 'c' },
  'b':  { file: 'b-1r9c1qm.mp3', type: 'c' },
  't':  { file: 't-1ygqg9g.mp3', type: 'c' },
  'd':  { file: 'd-9gcnn8.mp3', type: 'c' },
  'k':  { file: 'k-19h13fx.mp3', type: 'c' },
  'g':  { file: 'g-yfu8hw.mp3', type: 'c' },
  'm':  { file: 'm-guw48u.mp3', type: 'c' },
  'n':  { file: 'n-1smc314.mp3', type: 'c' },
  'ŋ':  { file: 'eng-k596t3.mp3', type: 'c' },
  'tʃ': { file: 'voiceless_affricate-1athyop.mp3', type: 'c' },
  'dʒ': { file: 'voiced_affricate-1f87c12.mp3', type: 'c' },
  'f':  { file: 'f-1o300yb.mp3', type: 'c' },
  'v':  { file: 'v-1byied.mp3', type: 'c' },
  'θ':  { file: 'theta-ip7r5s.mp3', type: 'c' },
  'ð':  { file: 'eth-icm6j7.mp3', type: 'c' },
  's':  { file: 's-uozw9d.mp3', type: 'c' },
  'z':  { file: 'z-4qicum.mp3', type: 'c' },
  'ʃ':  { file: 'sh-fpj6ik.mp3', type: 'c' },
  'ʒ':  { file: 'zh-fy90bw.mp3', type: 'c' },
  'h':  { file: 'h-1mgl9zt.mp3', type: 'c' },
  'w':  { file: 'w-1dz44nh.mp3', type: 'c' },
  'j':  { file: 'j-x57k1g.mp3', type: 'c' },
  'r':  { file: 'r-1xq1912.mp3', type: 'c' },
  'l':  { file: 'l-1o1w14c.mp3', type: 'c' },
  'x':  { file: 'x-1rkf9v4.mp3', type: 'c' },
  'ʔ':  { file: 'glottal_stop-f5amoj.mp3', type: 'c' },

  // ─── Vogais ───
  'i':  { file: 'i-gvz91l.mp3', type: 'c' },  // listado em consonants
  'ɪ':  { file: 'small_cap_i-p6cj9p.mp3', type: 'c' },
  'iː': { file: 'i-gvz91l.mp3', type: 'c' },
  'e':  { file: 'e-qpx7n8.mp3', type: 'c' },
  'ɛ':  { file: 'epsilon-yoyztd.mp3', type: 'c' },
  'æ':  { file: 'ash-qgmo8e.mp3', type: 'c' },
  'ə':  { file: 'mid_central-gqxn5h.mp3', type: 'c' },
  'u':  { file: 'u-1mr7xyn.mp3', type: 'c' },
  'ʊ':  { file: 'horseshoe-1inthj0.mp3', type: 'c' },
  'o':  { file: 'o-c3q2rv.mp3', type: 'v' },
  'ɔ':  { file: 'open_o-1olavce.mp3', type: 'v' },
  'ɑ':  { file: 'ah-1f3x3pk.mp3', type: 'v' },
  'ɑː': { file: 'ah-1f3x3pk.mp3', type: 'v' },
  'ɒ':  { file: 'open_o-1olavce.mp3', type: 'v' },  // closest available
  'aɪ': { file: 'ai-vmgin8.mp3', type: 'v' },
  'aʊ': { file: 'ow-mmmc8y.mp3', type: 'v' },
  'ɔɪ': { file: 'oi-15ych4z.mp3', type: 'v' },

  // ─── Aliases para módulos PT ───
  'ʎ':  { file: 'l-1o1w14c.mp3', type: 'c' },  // closest: lateral
  'ɲ':  { file: 'n-1smc314.mp3', type: 'c' },  // closest: nasal
  'ʁ':  { file: 'r-1xq1912.mp3', type: 'c' },  // closest: r
  'ã':  { file: 'ah-1f3x3pk.mp3', type: 'v' },  // closest: open a
  'ãw': { file: 'ow-mmmc8y.mp3', type: 'v' },   // closest: diphthong

  // ─── Aliases compostos ───
  'ʌ':  { file: 'ah-1f3x3pk.mp3', type: 'v' },  // closest available
};

// Cache de Audio objects
const _audioCache = {};

function getPhonemeAudioUrl(phoneme) {
  // Limpar slashes e espaços
  const clean = phoneme.replace(/\//g, '').trim();
  const entry = PHONEME_AUDIO_MAP[clean];
  if (!entry) return null;
  const base = entry.type === 'v' ? PHONEME_AUDIO_BASE_V : PHONEME_AUDIO_BASE_C;
  return base + entry.file;
}

function playPhoneme(phoneme) {
  const clean = phoneme.replace(/\//g, '').trim();
  const url = getPhonemeAudioUrl(clean);
  if (!url) return;

  // Parar áudio anterior
  if (_audioCache._current) {
    _audioCache._current.pause();
    _audioCache._current.currentTime = 0;
  }

  if (!_audioCache[clean]) {
    _audioCache[clean] = new Audio(url);
  }
  const audio = _audioCache[clean];
  audio.currentTime = 0;
  _audioCache._current = audio;
  audio.play().catch(() => {});
}

// Tornar opções de fonema clicáveis para ouvir o som
function makePhonemePlayable(element) {
  if (!element) return;
  const text = element.textContent.trim();
  // Extrair fonema do texto (formato /x/ ou similar)
  const match = text.match(/\/([^/]+)\//);
  if (match) {
    const phoneme = match[1];
    if (PHONEME_AUDIO_MAP[phoneme]) {
      element.classList.add('phoneme-playable');
      element.title = 'Clique para ouvir o som';
      element.addEventListener('click', (e) => {
        e.stopPropagation();
        playPhoneme(phoneme);
        element.classList.add('phoneme-playing');
        setTimeout(() => element.classList.remove('phoneme-playing'), 600);
      });
    }
  }
}

// Adicionar botões de áudio ao lado dos seletores de módulo
function addPhonemeAudioButtons() {
  document.querySelectorAll('.module-btn').forEach(btn => {
    const text = btn.textContent.trim();
    const match = text.match(/\/([^/]+)\//g);
    if (match && match.length > 0) {
      // Já tem botão?
      if (btn.querySelector('.phoneme-speaker')) return;

      match.forEach(phonemeStr => {
        const phoneme = phonemeStr.replace(/\//g, '');
        if (PHONEME_AUDIO_MAP[phoneme]) {
          const speaker = document.createElement('span');
          speaker.className = 'phoneme-speaker';
          speaker.textContent = '🔊';
          speaker.title = `Ouvir ${phonemeStr}`;
          speaker.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            playPhoneme(phoneme);
            speaker.classList.add('phoneme-playing');
            setTimeout(() => speaker.classList.remove('phoneme-playing'), 600);
          };
          btn.appendChild(speaker);
        }
      });
    }
  });

  // Também adicionar nas opções de precisão
  document.querySelectorAll('.precisao-opt').forEach(opt => {
    makePhonemePlayable(opt);
  });
}

// Observer para adicionar botões quando o DOM muda
const _phonemeObserver = new MutationObserver(() => {
  addPhonemeAudioButtons();
});

document.addEventListener('DOMContentLoaded', () => {
  addPhonemeAudioButtons();
  _phonemeObserver.observe(document.body, { childList: true, subtree: true });
});
