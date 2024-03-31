function isPrime(n){
    // checks if the number is 1 or less than it which automatically is not a prime number,prime numbers start from 2
if (n <= 1) return false
// checks if the number is 2,3 they are automatically prime numbers hence returns true 
if (n <= 3) return true
//checks if a number is divisble by 2 or 3
if (n % 2 === 0 || n % 3 === 0 )
return false

 // Check divisibility by numbers of the form 6k ± 1 up to square root of the numbers
for (let i = 5; i * i <= n; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
        return false
    }
}
//if the number doesnt meet any of the conditions above it returns true
return true
}

//creates a function that meet the conditions and hence are the prime numbers
function filterPrimeNumbers(inputArr) {
    return inputArr.filter(n => {
        return isPrime(n)
    });
}

// Test the function
let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(inputArr);
console.log(primeNumbers); 
// The result should be : [2, 3, 5, 7]