"use strict";

// //console.log(this);
// // var firstName =
// //   "Kavey(Wrong selection, happened because of arrow function. Dangerous error, very hard to find this kind of error.)"; ////Variable declared with var was added to the global object, and arrow fucntion's this keyword takes global object as parent scope. So name changed as Kavey.
// console.log(`-------------------------------`);

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   ///ParT [1] Final pitfall of this keyword is when we have a function inside of a method.
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     /*
//     /////[1]st SolutioN
//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       //console.log(this); ///undefined,   because it is basically a regular function call.
//       //console.log(this.year >= 1981 && this.year <= 1996);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     */

//     ///////[2]nd SolutioN //Ease and acceptable
//     const isMillenial = () => {
//       console.log(this);

//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   ////ParT [2]

//   // greet: () => console.log(`Hay ${this.firstName}`), ////NotE Arrow function doesn't get its own this keyword.Parent scope of this greet method is global scope
//   ////NotE Object is not a code block. It's an object literal. Literally define objects.
//   ////SolutioN You should never ever use an arrow function as a method. Even you are not using this keyword in a particular method.
//   greet: function () {
//     console.log(`Hay ${this.firstName}`);
//   },
// };
// jonas.calcAge();
// console.log(`-------------------------------`);
// jonas.greet();

// //ParT Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// //NotE:Basically, we got an array. This can be useful when we need a function to accept more parameters than we actually specified. It is completely legal to add more arguments. addExpr(2,5,3,12); They will not have a name, so we didn't name them, but they exist. Here we can use them in the arguments array. So they do appear here, and we can use them in the functions. For example, we could use a loop and then loop over this array, and add all the numbers together.

// But arrow function doesn't get this argument keyword.

// // NotE Arrow function doesn't get this argument keyword.
// const addArrow = (a, b) => {
//   //console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);
