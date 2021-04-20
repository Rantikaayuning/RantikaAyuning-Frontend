// Numbers from 0 until 1000
const numbers = Array.from(Array(1000).keys());

// Odd numbers
const oddNumbers = (number) => {
    return console.log(number.filter(a => a % 2 === 1));
}

// Even numbers
const evenNumbers = (number) => {
    return console.log(number.filter(a => a % 2 === 0));
}

// Multiplies by 5
const multipliesByFive = (number) => {
    return console.log(number.filter(a => a % 5 === 0 && a !== 0));
}

// Prime numbers
function primeNumbers(n) {
    function isPrime(num) {
        for ( let i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    let arr = [2];
    for ( let i = 3; i < n.length; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return console.log(arr);
}

// Prime numbers under 100
function primeNumbersLimit(n) {
    function isPrime(num) {
        for ( let i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    let arr = [2];
    for ( let i = 3; i < 100; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return console.log(arr);
}

console.log(numbers)
oddNumbers(numbers);
evenNumbers(numbers);
multipliesByFive(numbers);
primeNumbers(numbers);
primeNumbersLimit(numbers);
