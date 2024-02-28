/*
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10"
5, 9 --> "1110"
*/

// function addBinary(a, b) {
//     return (a + b).toString(2);
// }

function addBinary(a, b) {
    // do it by deviding  by 2
    let sum = a + b; //2
    let binary = '';
    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }
    return binary;
}

console.log(addBinary(1, 1)); // "10"
console.log(addBinary(5, 9)); // "1110"
