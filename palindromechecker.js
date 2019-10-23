function palindrome(str) {
    // Sanitize the string
    str = str.replace(/[^0-9A-Z]+/gi, "").toLowerCase();
    // Check if plaindrome
    reverseStr = str.split("").reverse().join("");
    
    return str === reverseStr;
}



console.log(palindrome("My age is 0, 0 si ega m"));
 
