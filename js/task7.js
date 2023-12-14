function cesar(str, shift, action) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const length = alphabet.length;
    let result = '';

    shift = shift % length;
    if (action === 'decode') {
        shift = length - shift;
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = alphabet.indexOf(char);

        if (index === -1) {
            result += char;
        } else {
            let newIndex = (index + shift) % length;
            if (newIndex < 0) {
                newIndex += length;
            }
            result += alphabet[newIndex];
        }
    }

    return result;
}

let str = "привет";
let shift = 3;
let action = "encode";

let encoded = cesar(str, shift, action);
console.log(`Шифрование: "${str}" -> "${encoded}"`);

action = "decode";
let decoded = cesar(encoded, shift, action);
console.log(`Дешифрование: "${encoded}" -> "${decoded}"`);