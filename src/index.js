const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let phrase = '';

    for (let i = 0; i < expr.length; i += 10) {
      const letterCode = expr.substring(i, i + 10);

      if (letterCode[0] === '*') {
        phrase += ' ';
        continue;
      }

      let letterMorse = '';

      for (let j = 0; j < letterCode.length; j += 2) {
        const code = letterCode.substring(j, j + 2);

        if (code === '10') {
          letterMorse += '.';
        } else if (code === '11') {
          letterMorse += '-';
        }
      }

      phrase += MORSE_TABLE[letterMorse];
    }

    return phrase;
}

module.exports = {
    decode
}