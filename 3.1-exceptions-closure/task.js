function parseCount(data){
    const parse = Number.parseInt(data);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    }
    return parse;
}

function validateCount(data) {
    try {
        return parseCount(data);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || a + c < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        return Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}