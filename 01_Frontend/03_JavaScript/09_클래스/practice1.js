class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle(4, 4);
console.log(rect.getArea()); // 16

const triangle = new Triangle(4, 4);
console.log(triangle.getArea()); // 8

const circle = new Circle(4, 4, 2);
console.log(circle.getArea()); // 12.566370614359172
