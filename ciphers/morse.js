exports.encryptMorse = (text) => {
  var alphabet = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    ' ': '/',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
  };
  const morse = text
    .split('')
    .map(function (e) {
      return alphabet[e.toLowerCase()] || '';
    })
    .join(' ')
    .replace(/ +/g, ' ');

  return morse;
};

exports.decryptMorse = (morse) => {
  var alphabet = {
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '/': ' ',
    '-·-·--': '!',
    '·-·-·-': '.',
    '--··--': ',',
  };
  var morseDecoded = [];

  var morseEncoded = morse;

  morseEncoded.split('   ').map(function (word) {
    word.split(' ').map(function (letter) {
      morseDecoded.push(alphabet[letter]);
    });
    morseDecoded.push(' ');
  });

  return morseDecoded.join('');
};
