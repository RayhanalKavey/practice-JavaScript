/////////////////JavaScript Fundamentals-Part 1
/////////////////Lecture: Values and Variables
console.log(`==========Lecture: Values and Variables ==========`);
/*
const myCountry = "Bangladesh";
const continent = "Shouth asia";
let myPopulation = 168;
console.log(
  `I lived in a ${continent}n country called ${myCountry}, which has a populatoin of over ${myPopulation} million prople.`
  );
  */
/////////////////Lecture: Data Types
console.log(`==========Lecture: Data Types ==========`);

// const isIsland = true;

// let language;
// console.log(
//   `Is is ${isIsland} that ${myCountry} is an Island which has a population of over ${myPopulation} million and it's language is ${language} `
// );
/////////////////Lecture: Let, const and var
console.log(`==========Lecture: Let, const and var ==========`);
// language = "Bangoli";
//const myCountry = "India"; //It's not possible alrady declared
/////////////////Lecture: Basic Operators

console.log(`==========Lecture: Basic Operators ==========`);
// const halfCountry = myPopulation / 2;
// myPopulation++;
// console.log(halfCountry, myPopulation);
// const finlandPopulation = 6;
// const populationCondition = myPopulation > finlandPopulation;
// console.log(
//   `It is ${populationCondition} that ${myCountry} is more populated than Finland`
// );
// if (myPopulation === finlandPopulation)
//   console.log(`My myC and Finland has equal population`);
// else if (myPopulation > finlandPopulation)
//   console.log(`My myC is more populated then Finland`);
// else console.log(`My country is less populated then Finland`);
// // const arr = [myPopulation,finlandPopulation];
// // let avgPopulation = function (myPopulation, finlandPopulation) {
// //   myPopulation + finlandPopulation / 2;
// //   console.log(avgPopulation);
// // };
// // avgPopulation(myPopulation, finlandPopulation);
// const avgPopulation = (myPopulation + finlandPopulation) / 2;
// console.log(
//   `Average population between ${myCountry} and Finland is ${avgPopulation}`
// );
// console.log(
//   `It is ${
//     myPopulation < avgPopulation
//   } that ${myCountry} has less people than the average population `
// );

// const description =
//   "Portugal is in Europe, and its  11 million people speak portugese";
// console.log(description);

/////////////////Challenge -1
console.log(`==========ChallengE -1 ==========`);
// const marksHight = 78;
// const marksMass = 1.69;
// const johnsHight = 92;
// const johnsMass = 1.95;
// const marksBMI = marksMass / marksHight ** 2;
// const johnsBMI = johnsMass / johnsHight ** 2;
// const markshigherBMI = marksBMI > johnsBMI;
// if (markshigherBMI) console.log(`Marks BMI is higher the Johns`);
// johnshigherBMI = johnsBMI > marksBMI;
// if (johnshigherBMI) console.log(`Johna BMI is higher the Marks`);

/////////////////Challenge -2
console.log(`==========ChallengE -2 ==========`);
// const marksHight = 95;
// const marksMass = 1.69;
// const johnsHight = 78;
// const johnsMass = 1.69;
// const marksBMI = marksMass / marksHight ** 2;
// const johnsBMI = johnsMass / johnsHight ** 2;

// if (marksBMI > johnsBMI) {
//   console.log(
//     `Mark's BMI (${marksBMI}) is higher then John's BMI (${johnsBMI})`
//   );
// } else if (marksBMI === johnsBMI) {
//   console.log(`Mark's BMI (${marksBMI}) is equal to John's BMI (${johnsBMI})`);
// } else {
//   console.log(
//     `John's BMI (${johnsBMI} is higher then Mark's BMI (${marksBMI}) )`
//   );
// }
console.log(`==========Lecture: Type conversion and type coercion==========`);
/*
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
*/
/////////////////Lecture: Equality Operators: (== vs ===)
console.log(`==========Lecture: Equality Operators: (== vs ===)==========`);
/*
const numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
);
if (numNeighbours === 1) {
  console.log(`Only ${numNeighbours} border`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No border`);
}
*/

console.log(`==========Lecture: Logical Operator==========`);
/*
const languageEngligh = true;
const hasLess50million = true;
const isIland = false;
if (languageEngligh && hasLess50million && !isIland) {
  console.log(`You should live in Portygal :)`);
} else {
  console.log(`Portugal does not meet your criteria :(`);
}
*/
console.log(`==========ChallengE -3==========`);
/*
// //NotE Test Data
// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// const koalasAvgScore = (88 + 91 + 110) / 3;
//NotE Test Data
const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (960 + 108 + 89) / 3;
// // NotE Bonous Test Data1
// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// const koalasAvgScore = (109 + 95 + 123) / 3;
// // NotE Bonous Test Data2
// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// const koalasAvgScore = (109 + 95 + 106) / 3;
console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log(`Dolphines wins`);
} else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
  console.log(`Koalas wins`);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore >= 100 &&
  koalasAvgScore >= 100
  ) {
    console.log(`its a deaw`);
  } else {
    console.log(`Dolphines score '${dolphinsAvgScore}', which is less then 100`);
    console.log(`koalas score '${koalasAvgScore}', which is less then 100`);
  }
  */

console.log(`==========Lecture: The switch statement==========`);

// const language = prompt(`MOST number of native speakers!`);
// switch (language) {
//   case "Spanish":
//   case "spanish":
//     console.log(`2nd place in number of nativ speakers`);
//     break;
//   case "engligh":
//   case "Engligh":
//     console.log(`3rd place in number of nativ speakers`);
//     break;
//   case "hindi":
//   case "Hindi":
//     console.log(`4th place in number of nativ speakers`);
//     break;
//   case "arabic":
//   case "Arabic":
//     console.log(`5th place in number of nativ speakers`);
//     break;
//   default:
//     console.log(`Great language too :D`);
// }
console.log(`==========Lecture: The Conditional (Ternary) Operator ==========`);
/*
const population = 168000000;
population > 33000000
  ? console.log(`Portugal's population is above average`)
  : console.log(`Portugal's population is below average`);
  */
console.log(`==========ChallengE -4==========`);
/*
const billValue = 275;
tipValue =
  billValue >= 50 && billValue <= 300
    ? billValue * (15 / 100)
    : billValue * (20 / 100);

// let tipValue;
// if (billValue >= 50 && billValue <= 300) {
//   tipValue = billValue * (15 / 100);
// } else {
//   tipValue = billValue * (20 / 100);
// }
console.log(
  `The bill was ${billValue}, the was ${tipValue}, and the total value is ${
    billValue + tipValue
  }`
);
*/
