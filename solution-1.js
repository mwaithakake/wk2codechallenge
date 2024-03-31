function swapCase(inputStr) {
    // Initialize an array to store the result
    let swappedText = '';
    // Iterate through each character in the input string
    for (let i = 0; i < inputStr.length; i++) {
        let letter = inputStr[i];
         // Check if the current character is an uppercase letter
        if (letter === letter.toUpperCase()) {

            // Convert the uppercase letter to lowercase and add it to the result array
            swappedText += letter.toLowerCase();
            // Convert the lowercase letter to uppercase and add it to the result array
        } else {
            swappedText += letter.toUpperCase();
        }
    }
    //Return result
    return swappedText;
}

// Test the function
let inputStr = 'The Quick Brown Fox';
let outputStr = swapCase(inputStr);
console.log(outputStr); 
// Output: 'tHE qUICK bROWN fOX'




