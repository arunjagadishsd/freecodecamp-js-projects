function telephoneCheck(str) {
    let numbers = str.match(/[0-9]/g).join("");
    let valid1 = numbers.length == + 10 || (numbers.length == 11 && numbers.startsWith('1'));
    console.log(numbers);
    let regex = /[(0-9){3}0-9]+/;

    return (regex.test(str) && valid1);
}

console.log(telephoneCheck("-1 (757) 622-7382"));
 