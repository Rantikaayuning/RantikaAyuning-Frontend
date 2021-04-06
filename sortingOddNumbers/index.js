const numbers = [9,4,2,4,1,5,3,0];

const sortOddNumbers = (array) => {
    const oddNumbers = array.filter((number) => number % 2).sort((a,b) => a - b);
    return array.map((number) => number % 2 ? oddNumbers.shift() : number);
}

sortOddNumbers(numbers);