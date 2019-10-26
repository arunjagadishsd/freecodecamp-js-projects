function telephoneCheck(str) {
    let regex = /[(0-9)0-9]+$/;

    return (regex.test(str));
}

telephoneCheck("555-555-5555");
