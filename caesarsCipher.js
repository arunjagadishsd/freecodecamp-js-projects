function rot13(str) { // LBH QVQ VG!
    let cipheredText='';
    // Looping through the each char at string
    for (let char of str) {
        // Checking if the character is uppercase letter
        if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) {
            let uCode = char.charCodeAt() - 13;
            // To check if the letter is below the unicode of the uppercase letters
            if (uCode < 65) {
                // subtracting the difference between 65 and the unicode
                uCode = 90 - (64 - uCode);
            }
            let newChar = String.fromCharCode(uCode);
            cipheredText += newChar;
        }
        else{
            cipheredText += char;
        }
    }
    return cipheredText;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
 
