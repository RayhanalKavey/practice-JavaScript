"use strict";
/*
console.log(this);
//ParT Normal function call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
/// NotE:Arrow function doesn't get its own this keyword. Instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword of its parent function or of its parents scope.
//ParT Arrow function call
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
//ParT Method function call

const jonas = {
  name: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
///Method borrowing
matilda.calcAge = jonas.calcAge;

matilda.calcAge();
//ParT
const f = jonas.calcAge;
console.log(f);
//f();
////SolutioN It will be undefined because it's now became a regular function call. NO owner of f funciton anymore. So this keyword inside f function is now undefined.
//BUG We will see eventListner function in the dom SectioN.
*/
