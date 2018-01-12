
// Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. I am ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
//super() calls parent function which in our case is Person
    super(name, age);
    this.major = major
  }
hasMajor() {
  return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {

  constructor (name, age, homeLocation) {
  super(name, age);
  this.homeLocation = homeLocation
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.homeLocation){
      greeting += ` I am visiting from ${this.homeLocation}.`
    }

    return greeting;
  }
}


//Traveler -> Person
//Add support for homeLocation
//Override getGreeting
//1. Hi. I am Lawrence Lee.  I'm visiting from Austin
//2. Hi. I am Lawrence Lee




const me = new Traveler('Lawrence Lee', 24, 'Cedar Park');
// console.log(me.hasMajor());
console.log(me.getGreeting());
const other = new Traveler();
// console.log(other.hasMajor());
console.log(other.getGreeting());
