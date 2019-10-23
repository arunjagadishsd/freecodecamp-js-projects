function rot13(str) { // LBH QVQ VG!
    let cipheredText='';
    for (let char of str) {
        if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) {
            let uCode = char.charCodeAt() - 13;
            if (uCode < 65) {
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
 
