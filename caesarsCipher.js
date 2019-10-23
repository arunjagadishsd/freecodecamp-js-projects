function rot13(str) { // LBH QVQ VG!
    for (let char of str) {
        let uCode = char.charCodeAt() - 13;
        let a = String.fromCharCode(uCode - 13);
        console.log(a);
    }
    return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
