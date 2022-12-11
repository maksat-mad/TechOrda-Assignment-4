function getCount(objects) {
    let count = 0;
    objects.forEach(obj => {
        count += obj.x === obj.y ? 1 : 0;
    });
    return count;
}