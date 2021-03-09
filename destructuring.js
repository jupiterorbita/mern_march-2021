const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  createdAt: 1543945177623,
};
const animals = ["horse", "dog", "fish", "cat", "bird"];

//destruct as : x
const { email: aaa } = person;
console.log(aaa);

//     0, 1
const [, secondAnimal] = animals;
console.log(secondAnimal);

// --------- classes ---------------

// make the class
// parent Vehicle class
class Vehicle {
  constructor(manufacturer, model, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.miles = 0;
  }
  drive() {
    this.miles += 10;
    constructor.model;
    console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`);
    return this;
  }
  // simple method in the parent class
  parentFunction() {
    return "This is coming from the parent!";
  }
}

// instantiate an object from the class:
const car = new Vehicle("BMW", "M5", "blue");
car.drive().drive().drive();
console.log(car.miles);

// ---- instance and inheritance -----

// child M5 class
class M5 extends Vehicle {
  constructor(color) {
    super("BMW", "M5", color);
  }
  // simple function in the child class
  childFunction() {
    // by using super, we can call the parent method
    const message = super.parentFunction();
    console.log(message);
  }
}

const m5 = new M5("red");
console.log(m5);
m5.childFunction();
