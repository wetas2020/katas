/*
This time no story, no theory. The examples below show you how to write function accum:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
    return s
        .split('')
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join('-');
}
// accum('abcd'); // "A-Bb-Ccc-Dddd"
console.log(accum('abcd'));
//accum('RqaEzty'); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('RqaEzty'));
//accum('cwAt'); // "C-Ww-Aaa-Tttt"
console.log(accum('cwAt'));
//accum('ZpglnRxqenU'); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum('ZpglnRxqenU'));
//accum('NyffsGeyylB'); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum('NyffsGeyylB'));
//accum('MjtkuBovqrU'); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum('MjtkuBovqrU'));
//accum('EvidjUnokmM'); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-N
console.log(accum('EvidjUnokmM'));
