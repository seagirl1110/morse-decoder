const MORSE_TABLE = {
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
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const coll = [];
    for (let i = 0; i < expr.length; i += 10) {
        const item = expr.slice(i, i + 10);
        coll.push(item);
    }

    const coll2 = [];
    coll.forEach((item) => {
        let str = '';
        for (let i = 0; i < 10; i += 2) {
            const el = item.slice(i, i + 2);
            if (el === '00') {
                str += '';
            } else if (el === '10') {
                str += '.';
            } else if (el === '11') {
                str += '-';
            }
        }
        coll2.push(str);
    })

    coll3 = coll2.map((item) => {
       return MORSE_TABLE[item] || ' ';
    })

    return coll3.join('');
}

module.exports = {
    decode
}