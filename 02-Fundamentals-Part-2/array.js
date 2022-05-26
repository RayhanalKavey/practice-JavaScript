"use strict";
/////////////////////////////////////////////////////////////////////////
//////////////  Array
/////////////////////////////////////////////////////////////////////////

// function logger() {
//   console.log("My name is Kavey");
// }

// const friend1 = "Rayhan";
// const friend2 = "Rone";
// const friend3 = "Aungcon";
///////////////////
// const friends = ["Rayhan", "Rone", "Aungcon"];
// const yr = new Array(1991, 1984, 2008, 2020);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// ///const friends=['Bob', 'Alice']
// friends["2"] = "Petter";
// console.log(friends);

// const firstName = "Rayhan";
// const kavey = [firstName, "Kavey", 2022 - 1991, "teacher", friends];
// console.log(kavey);

// ////////////
// ////Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

////learning method
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [age1, age2, age3];
// console.log(ages);

//////calcAge(years[0]) this produce a value , it's an expression. JavaScript expect expression in array. So, basically we can place fucntion calls into an array because they produce value.

////Implementing method
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
/*
/////////////////////////////
////Using methods in array
///////////////Basic array operation:

const friends = ["Michael", "Steven", "Peter"];
//Add elements
const newLength = friends.push("Joy");
console.log(friends);
console.log(newLength);
friends.unshift("Kavey");
console.log(friends);

//Remove elements

friends.pop();
friends.pop();
console.log(friends);
const removedFriend = friends.shift();
console.log(friends);
console.log(removedFriend);
////Position in the array
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("Mic"));
/////Have in the array ? true / false
console.log(friends.includes("Steven"));
console.log(friends.includes("Ste"));
friends.push(23);
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); // true
////It's don't automatically do type coersion because of 'use strict';
/////Most used case in programming for includes
if (friends.includes("Michael")) {
  console.log("You have a friend named Michael");
}
*/
/*
///////////////////////////////////////////
/////////////////////Assignment 2 (part --2)

const bills = [125, 555, 44];

// Experiment// const billCalculator = (billValue15, billValue20) => {
// //   billValue15 * (15 / 100);
// //   billValue20 * (20 / 100);
// // };
////////////option 1
// const calcTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     const tipValue = billValue * (15 / 100);
//     return tipValue;
//   } else {
//     const tipValue = billValue * (20 / 100);
//     return tipValue;
//   }
// };
/////////////option 2
// const calcTip = (billValue) =>
//   billValue >= 50 && billValue <= 300
//     ? billValue * (15 / 100)
//     : billValue * (20 / 100);

/////////////option 3
const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * (15 / 100)
    : billValue * (20 / 100);
};
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(bills, tips, totals);
console.log(totals[0]);
*/
