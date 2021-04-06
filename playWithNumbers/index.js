// Number from 0 until 1000
const numbers = Array.from(Array(1000).keys());

// Odd numbers
const oddNumbers = (number) => {
    return number.filter(a => a % 2 === 1);
}

// Even numbers
const evenNumbers = (number) => {
    return number.filter(a => a % 2 === 0);
}

// Multiplies by 5
const multipliesByFive = (number) => {
    return number.filter(a => a % 5 === 0 && a !== 0);
}

// Prime numbers
function primeNumbers(n) {
    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    var arr = [2];
    for ( var i = 3; i < n.length; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}

// Prime numbers under 100
function primeNumbersLimit(n) {
    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    var arr = [2];
    for ( var i = 3; i < 100; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}

oddNumbers(numbers);
evenNumbers(numbers);
multipliesByFive(numbers);
primeNumbers(numbers);
primeNumbersLimit(numbers);