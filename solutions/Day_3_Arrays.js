function getSecondLargest(nums) {
    let a = 0, b = 0;
    nums.forEach(el => {
        if (el !== a && el !== b && el > a) {
            if (el > b) {
                [b, a] = [el, b];
            } else {
                a = el;
            }
        }
    });
    return a;
}