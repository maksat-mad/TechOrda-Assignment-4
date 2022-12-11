function sides(literals, ...e) {
    let sqrt = Math.sqrt(Math.pow(e[1], 2) - 16 * e[0]);
    return [(e[1] + sqrt) / 4, (e[1] - sqrt) / 4].sort();
}