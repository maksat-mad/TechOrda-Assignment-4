function main() {
    const r = +(readLine());
    console.log(Math.PI * Math.pow(r, 2));
    console.log(2 * Math.PI * r);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}