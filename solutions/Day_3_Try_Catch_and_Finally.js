function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    } catch(ex) {
        console.log(ex.message);
        console.log(s);
    }
}