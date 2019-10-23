function convertToRoman(num) {
    const romanNumerals =
    {
        1000: 'M', 900: 'CM', 500: 'D', 400: 'DM', 100: 'C', 90: 'CX',
        50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 1: 'I'
    }
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 1];
    let converted = '';
    for (let i of numbers) {
        let div = Math.floor(num / i);
        num = num % i
        if (div >= 1) {
            converted += romanNumerals[i].repeat(div);
        }
    }
    return converted;
}

convertToRoman(49);
