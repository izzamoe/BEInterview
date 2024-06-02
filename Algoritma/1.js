function reverseAlphabet(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reverseAlph = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const index = alphabet.indexOf(str[i]);
        if (index !== -1) {
            result += reverseAlph[index];
        } else {
            result += str[i];
        }
    }
    return result;
}

const inputStr = "NEGIE1";
const reversedStr = reverseAlphabet(inputStr);
console.log("Hasil:", reversedStr); // Output: EIGEN1
