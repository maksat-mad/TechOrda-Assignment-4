function vowelsAndConsonants(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const first = [], second = [];
    s.split("").forEach(el => {
        if (vowel.includes(el)) {
            first.push(el);
        } else {
            second.push(el);
        }
    });
    first.concat(second).forEach(el => console.log(el));
}