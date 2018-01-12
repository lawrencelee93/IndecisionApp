// //es5 function
//
// function square(x){
//   return x * x;
// };
//
// console.log(square(3));
// //es6 function
// // const squareArrow = (x) =>{
// //   return x * x;
// // };
//
// const squareArrow = (x) => x * x;
//
//
//
// console.log(squareArrow(9));



//challenge - use arrow functions
//getFirstName('Mike Smith') -> Mike
//create regular arrow functions
//create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0]
// };

const getFirstName = (fullName) => fullName.split (' ')[0];

console.log(getFirstName('Mike Smith'))
