const list_letters_first = ["c","d","e","g","h"];
const list_letters_second = ["X","Z"];

function missingLetter(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return console.log(alphabet.slice(start, start + array.length).find(element => !array.includes(element)));
}

missingLetter(list_letters_first);
missingLetter(list_letters_second);