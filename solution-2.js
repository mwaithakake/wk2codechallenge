

function generateNumbersBetween(num1, num2) {
    //represents the minimum number within the range
    let start = Math.min(num1, num2);
    //represents the maximum number within the range
    let end = Math.max(num1, num2);
    // Initialize an array to store the result
    let array = [];
    // Iterate through each number in the input range
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

// Test the function
console.log(generateNumbersBetween(4, 7));
 // Result should give: [4, 5, 6, 7]
console.log(generateNumbersBetween(-4, 7)); 
// Result should give: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
