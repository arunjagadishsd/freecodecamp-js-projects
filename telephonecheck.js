function telephoneCheck(str) {
    let valid = /[0-9(]/.test(str[0])
    let valid2 = true;
    if (str.includes('(') || str.includes(')')) {
        valid2 = (str.includes('(') && str.includes(')'));
    }
    let numbers = str.match(/[0-9]/g).join("");
    let valid1 = numbers.length == + 10 || (numbers.length == 11 && numbers.startsWith('1'));
    console.log(numbers);
    let regex = /[(\d{3}\)0-9]+/;

    let bwBracket = str.match(/\((.*)\)/).join("");
    console.log('bwBracket', bwBracket)

    return (regex.test(str) && valid1 && valid && valid2);
}

console.log(telephoneCheck("1 (555) 555-5555"));