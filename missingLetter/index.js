const list_letters_first = ["c","d","e","g","h"];
const list_letters_second = ["X","Z"];

function missingLetter(str) {
    let letter = "abcdefghijklmnopqrstuvwxyz";
    let start = letter.indexOf(str[0].toLowerCase());

    for (let i = 0; i <= str.length; i++) {
        if (str[i].toLowerCase() !== letter[start + i]) {
            return letter[start + i];
        }
    }
}

missingLetter(list_letters_first);
missingLetter(list_letters_second);