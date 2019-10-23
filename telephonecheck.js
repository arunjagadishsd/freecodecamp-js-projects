function telephoneCheck(str) {
    // Good luck!
    let regex = new RegExp('^0-9]+$');

    return (regex.test(str));
}
console.log(telephoneCheck("555-555-5555"));

