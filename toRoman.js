function convertToRoman(num) {
    const romanNumerals = 
        { 1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V',1:'I'}
    let numbers = [1000,500,100,50,10,5,1];
    let converted = '';
    for (let i of numbers){
        console.log(i);
        let div = Math.floor(num/i);
        num = num % i
        if (div>=1){
            converted += romanNumerals[i].repeat(div);
        }
    }
    console.log(converted);
    return converted;
}

convertToRoman(36);
