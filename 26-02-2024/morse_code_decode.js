/*
Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
*/

decodeMorse = function (morseCode) {
    return morseCode
        .trim()
        .split('   ')
        .map((word) =>
            word
                .split(' ')
                .map((letter) => MORSE_CODE[letter])
                .join('')
        )
        .join(' ');

    // console.log(morse);
};

decodeMorse('.... . -.--   .--- ..- -.. .');
