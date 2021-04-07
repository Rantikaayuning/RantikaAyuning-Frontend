const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const censoringWords = (string) => {
    let arrWords = string.split(' ');
    for (i=0; i< arrWords.length; i++)
    if (arrWords.includes('dolor')) {
        let x = arrWords.indexOf('dolor');
        arrWords.splice(x, 1, '*****');
    } else if (arrWords.includes('elit')) {
        let x = arrWords.indexOf('elit');
        arrWords.splice(x, 1, '****');
    } else if (arrWords.includes('quis')) {
        let x = arrWords.indexOf('quis');
        arrWords.splice(x, 1, '****');
    } else if (arrWords.includes('nisi')) {
        let x = arrWords.indexOf('nisi');
        arrWords.splice(x, 1, '****');
    } else if (arrWords.includes('fugiat')) {
        let x = arrWords.indexOf('fugiat');
        arrWords.splice(x, 1, '******');
    } else if (arrWords.includes('proident,')) {
        let x = arrWords.indexOf('proident,');
        arrWords.splice(x, 1, '********');
    } else if (arrWords.includes('laborum.')) {
        let x = arrWords.indexOf('laborum.');
        arrWords.splice(x, 1, '*******.');
    }  
    return console.log(arrWords.join(' '));
}

censoringWords(paragraph);