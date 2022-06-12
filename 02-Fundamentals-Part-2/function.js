"use strict";

/////////////////////////////////////////////////////////////////////////
//////////////Function
/////////////////////////////////////////////////////////////////////////
//////A function is simply a piece of code that we  can reuse over and over again in our code. So it's a little bit like a variable but for whole chunks of code. So a variable holds value but a function can hold one or more complete lines of code.
// function logger() {
//   console.log("My name is Kavey");
// }
////calling / running / invoking function
// logger();
// logger();
// logger();

/////Usually when we write functions we also pass data into a function, and additionally a function can also return data as well. Which means to give us modified data back that we can store in a variable and use them later or directly use the returned data in the program.

// // Real-world examples
// function foodProcessor(oranges, apples) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${oranges} pieces of orange and, ${apples} pieces of apples`;
//   return juice;
// }

// const orangeJuice = foodProcessor(5, 0);
// console.log(orangeJuice);

// const foodProcessor = function (oranges, apples) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${oranges} pieces of orange and, ${apples} pieces of apples`;
//   return juice;
// };
// const orangeJuice = foodProcessor(5, 0);
// console.log(orangeJuice);

///////////////////////////////////////////
/////////////////////Function declaration

////console.log(calcAge1(1991)); //In function declaration we can actually call function declarations before they are defined in the code.
////Internally this is happened because of a process called hoisting.

// function yearUntilRetirement(birthYear, firstName) {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearUntilRetirement(1991, "Rayhan"));
// console.log(yearUntilRetirement(1995, "Kaif"));

// ///////////////////////////////////////
// ////////////////// Function expression

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// console.log(calcAge2(1995));

// ///////////////////////////////////////
// ////////////////// Arrow Functions
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// //////  If we have one condition then we can use arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearUntilRetirement(1991, "Rayhan"));
// console.log(yearUntilRetirement(1995, "Kaif"));

///////////////////////////////////////////
/////////////////////Functions calling other functions

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };

// const foodProcessor = function (oranges, apples) {
//   const orangePieces = cutFruitPieces(oranges);
//   const applePieces = cutFruitPieces(apples);
//   const juice = `Juice with ${orangePieces} pieces of orange and, ${applePieces} pieces of apples`;
//   return juice;
// };
// //const orangeAppleJuice = foodProcessor(5, 6);
// console.log(foodProcessor(2, 6));
////// Function calling other function with if/else statement

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   ////
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(1991, "Rayhan"));
// console.log(yearUntilRetirement(1950, "Kaif"));

///////////////////////////////////////////
/////////////////////Assignment 1 (part -2)

// const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

// const checkWinner = function (
//   dolphineData1,
//   dolphineData2,
//   dolphineData3,
//   koalasData1,
//   koalasData2,
//   koalasData3
// ) {
//   const avgDolphines = calcAverage(dolphineData1, dolphineData2, dolphineData3);
//   const avgKoalas = calcAverage(koalasData1, koalasData2, koalasData3);
//   if (avgDolphines >= 2 * avgKoalas) {
//     console.log(`Dolphines win (${avgDolphines}vs. ${avgKoalas})`);
//     return avgDolphines;
//   } else if (avgKoalas >= 2 * avgDolphines) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`);
//     return avgKoalas;
//   } else {
//     console.log(`No team wins!`);
//     return -1;
//   }
// };
// // Test data 1
// const a = checkWinner(44, 23, 71, 65, 54, 49);
// // Test data 1
// const b = checkWinner(85, 54, 41, 23, 34, 27);
// console.log(b);

////////////////////////
////Instructors solution
////////////////////////
////Test 1
// const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

// let scoreDolphines = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphines, avgKoalas) {
//   if (avgDolphines >= 2 * avgKoalas) {
//     console.log(`Dolphines win (${avgDolphines}vs. ${avgKoalas})`);
//     return avgDolphines;
//   } else if (avgKoalas >= 2 * avgDolphines) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`);
//     return avgKoalas;
//   } else {
//     console.log(`No team wins!`);
//     return -1;
//   }
// };

// checkWinner(scoreDolphines, scoreKoalas);
// checkWinner(25, 50);

// //checkWinner(85, 54, 41, 23, 34, 27);

// ////Test 2
// scoreDolphines = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphines, scoreKoalas);
////NotE Experimental
/*
//ternary operator and arrow function together
const currentYear = 2022;
const retirementAge = 65;
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = currentYear - birthYear;
  const retirement = retirementAge - age;
  return retirement < 0
    ? ` ${firstName} will retire within ${retirement} ${
        retirement > 1 ? `years.` : `year.`
      }`
    : `${firstName} already retired`;
};
console.log(yearsUntilRetirement(1957, "Kavey"));
*/
