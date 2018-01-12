//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1))

//this keyword - no longer bound

const user = {
  name: 'Lawrence',
  cities: ['Austin', 'Round Rock', 'San Antonio'],
  printPlacesLived(){
    // console.log(this.name);
    // console.log(this.cities);
    return this.cities.map((city) =>this.name + ' has lived in ' + city);

  }
};

console.log(user.printPlacesLived());


//challenge area
// numbers - array of numbers
// multiplyBy - single numbers
//multiply - return a new array where the number have been multiplied
const multiplier = {
  numbers: [3,4,5],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }

};

console.log(multiplier.multiply());
