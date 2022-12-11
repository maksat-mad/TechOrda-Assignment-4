function factorial(n) {
    let result = 1, i = 1;
    while (i <= n) {
        result *= i++;
    }
    return result;
}