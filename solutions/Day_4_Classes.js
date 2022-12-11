class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((acc, cur) => acc + cur, 0);
    }
}