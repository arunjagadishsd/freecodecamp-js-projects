function convertToRoman(num) {
    const romanNumerals =
    {
        1000: 'M', 900: 'CM', 500: 'D', 400: 'DM', 100: 'C', 90: 'XC',
        50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
    }
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let converted = '';
    for (let i of numbers) {
        let quotient = Math.floor(num / i);
        num = num % i
        if (quotient >= 1) {
            converted += romanNumerals[i].repeat(quotient);
        }
    }
    return converted;
}

convertToRoman(39)
