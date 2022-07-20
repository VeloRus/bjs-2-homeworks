//Задача №1

function parseCount(value) {
    let parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
      throw new Error("Невалидное значение");
    } else {
      return parsed;
    }
  }


function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}


//Задача №2

class Triangle {
   constructor(a, b, c) {
    if(a + b < c || a + c < b || b + c < a) {
      throw Error ("Треугольник с такими сторонами не существует")
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
   }

   getPerimeter() {
    return this.a + this.b + this.c;
   }

   getArea() {
    let p = this.getPerimeter() / 2;
    let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +S.toFixed(3);
   }
}


function getTriangle(a, b, c) {
  try{
    return new Triangle (a, b, c)
  } catch (error) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует"
      },

      getPerimeter() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }

}
