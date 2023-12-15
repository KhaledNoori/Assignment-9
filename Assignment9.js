// In the name of Allah

//..........................

// question 1
function sum(a, b) {
    return a + b;
}
// console.log(sum(2,4));

// ------------------------
// question 2
function mystring(value) {
    return value.split('').reverse().join("");
}

// console.log(mystring("ali"));
//--------------------------
// question 3 

let x = "out of the function";
function fun1() {
    // console.log(x);
}
fun1();

//--------------------------
// question 4

const person = {
    Name: "Ali",
    Age: 25,
    Address: "Herat Afghanistan "

}


//  console.log(person.Name);

//--------------------------
// question 5

const person1 = {
    Name: "Ali",
    Age: 25,
    Address: "Herat Afghanistan ",
    Details: function () {

        return this.Name + " " + this.Age + " " + this.Address;
    }
}

//console.log(person.Details());

//--------------------------
// question 6

const car = {

    start: function () {

        return "  you start the engin";
    }
}

// console.log(car.start());

//--------------------------
// question 7

class Carcar {
    constructor(make, modle, year) {
        this.make = make;
        this.modle = modle;
        this.year = year;
    }

}

Carcar.prototype.color="yello";
const car1 = new Carcar("Toyota", "Camry", 2021);
const car2 = new Carcar("Honda", "Civic", 2022);

// console.log(car2.color);


//--------------------------
// question 8

class book {
    constructor(Title, Author) {
        this.Title = Title;
        this.Author = Author;
    }
}
//--------------------------
// question 9
const mybook = new book("javascript", "Ali Ahmad Noori");
// console.log(mybook.Title + " was Written by " + mybook.Author);

//--------------------------
// question 10

class calculat {
    sum(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }

}

const cul = new calculat();
// console.log(cul.sum(2, 2));
// console.log(cul.subtraction(5, 2));


//--------------------------
// question 11

class shape {
    constructor(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    calculatArea() {
        return this.width * this.height;
    }
}

const myshape = new shape("red", 5, 10);

//   console.log(myshape.color);
//  console.log(myshape.calculatArea());


//--------------------------
// question 12

class circle extends shape {

    constructor(color, radious) {
        super(color);
        this.radious = radious;
    }
    calculatArea1() {
        return Math.PI * Math.pow(this.radious, 2);
    }
}

const mycircle = new circle("green", 3);

// console.log(mycircle.color);
// console.log(mycircle.calculatArea1());

//--------------------------
// question 13

 function add(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
     sum += arguments[i]; 
    }
    return sum;
 }
console.log(add(2,45,67,8,9,7));

//--------------------------
// question 14

const obj1 = { name: "Aliahmad", age: 30 };
const obj2 = { name: "Ali", age: 3 };

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
     console.log("These objects have the same properties.");
} else {
     console.log("These objects are different.");
}
