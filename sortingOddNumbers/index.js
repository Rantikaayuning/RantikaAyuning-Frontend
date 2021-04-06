const numbers = [9,4,2,4,1,5,3,0];

const sortOdd = (number) => {
    const odd = number.filter((x) => x % 2).sort((a,b) => a - b);
    return number.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortOdd(numbers));