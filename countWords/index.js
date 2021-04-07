const words = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';

const countAkuWords = (string) => {
    return console.log(string.split(' ').filter(i => i === 'Aku').length);
}

const countInginWords = (string) => {
    return console.log(string.split(' ').filter(i => i === 'ingin').length);
}

const countDapatWords = (string) => {
    return console.log(string.split(' ').filter(i => i === 'Dapat').length);
}

countAkuWords(words);
countInginWords(words);
countDapatWords(words);