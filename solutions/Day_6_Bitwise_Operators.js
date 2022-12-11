function getMaxLessThanK(n, k) {
    let res = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            res = (i & j) > res && (i & j) < k ? i & j : res;
        }
    }
    return res;
}