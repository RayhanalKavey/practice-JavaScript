"use strict";
/*
//SectioN Function assignments
/////////////////////////////Lecture: Function
console.log(`============Lecture:Function==========`);
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
console.log(describeCountry("Finland", 6, "Helsinki"));
/////////////////////////////Lecture: Function Declatations and Expressions
console.log(`===Lecture:Function Declatations and Expressions====`);
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population * 100) / worldPopulation;
}
console.log(`${Math.trunc(percentageOfWorld1(1441))}%`);
/////////////////////////////Lecture: Arrow Functions
console.log(`============Lecture:Arrow Functions   ==========`);
const percentageOfWorld3 = (population) => (population * 100) / worldPopulation;
console.log(`${Math.trunc(percentageOfWorld3(168))}%`);
/////////////////////////////Lecture: Function Calling Other Funtion
console.log(`============Lecture: Function Calling Other Funtion ==========`);
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${Math.trunc(
    percentage
  )}% of the owrld`;
};
console.log(describePopulation("Chaina", 1441));
*/
/*
console.log(`===========Coding challenge #1==============`);
const dolphineScores = [85, 54, 41];
const koalasScores = [23, 34, 27];
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

//test one
let dolphineAverageScore = calcAverage(85, 54, 41);
let koalasAverageScore = calcAverage(23, 34, 27);
console.log(dolphineAverageScore, koalasAverageScore);

const checkWinner = (dolphineAvgScore, koalasAvgScore) => {
  if (dolphineAvgScore >= 2 * koalasAvgScore) {
    console.log(
      `Dolphine wins, because it has double the score of Koalas's avirage score `
    );
  } else if (dolphineAvgScore * 2 <= koalasAvgScore) {
    console.log(
      `Koalas wins, because it has double the score of Dolphine's avirage score `
    );
  } else {
    console.log(`No one wins`);
  }
};
checkWinner(dolphineAverageScore, koalasAverageScore);
//test 2
dolphineAverageScore = calcAverage(44, 23, 71);
koalasAverageScore = calcAverage(65, 54, 49);
checkWinner(dolphineAverageScore, koalasAverageScore);
//test 3
dolphineAverageScore = calcAverage(...dolphineScores);
koalasAverageScore = calcAverage(...koalasScores);
checkWinner(dolphineAverageScore, koalasAverageScore);
*/
/*
console.log(`============Lecture:Introduction to Array==========`);
const worldPopulation = 7900;

const populations = [168, 33, 42, 120];
if ((populations.length = 4)) {
  console.log(`The array elements has 4 element`);
}
const percentageOfWorld1 = function (population) {
  return (population / worldPopulation) * 100;
};
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
*/
/*
console.log(`============Lecture:Basic Array Operation( Methods)==========`);
//1
const neighbours = ["Maynmar", "India"];
//2
neighbours.push("Uthopia");
console.log(neighbours);
//3
neighbours.pop();
console.log(neighbours);
//4
if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country 🤪`);
}
//5
console.log(neighbours.indexOf("India"));
neighbours[1] = "Republic of Sweden";
console.log(neighbours);
*/
/*
console.log(`===========Coding challenge #2==============`);
let billValue = [125, 555, 44];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * (15 / 100);
  } else {
    return billValue * (20 / 100);
  }
};
const tipValue = [
  calcTip(billValue[0]),
  calcTip(billValue[1]),
  calcTip(billValue[billValue.length - 1]),
];
console.log(tipValue);
const totalValue = [
  tipValue[0] + billValue[0],
  tipValue[1] + billValue[1],
  tipValue[tipValue.length - 1] + billValue[billValue.length - 1],
];
console.log(totalValue);
*/
