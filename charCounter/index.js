const text_1 = "Mammals";
const text_2 = "Bruiser build";

const charCounter = (string) => {
    result = {};
    string.toLowerCase().split('').forEach(element => result[element] = (result[element] || '*' ) + '*');
    return result;
}

charCounter(text_1);
charCounter(text_2);