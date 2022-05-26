"use strict";

////loops are a fundamental aspect of every programming language, because they basically allow us to automate repetitive tasks.
////for loop keeps running while condition is TRUE

/*
/////////////////////////////////////////////////////////////////
////For loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
const kavey = [
  "Rayhan",
  "Kavey",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
  false,
];
////Previously we out put the value like this
// console.log(kavey[0])
// console.log(kavey[1])
// console.log(kavey[2]//......
// console.log(kavey[5])


//////////////////////////////////////////////////////////////////////
//// Now output with the for loop and put the output value into an array

const types = [];
for (let i = 0; i < kavey.length; i++) {
  //Reading from Kavey array
  console.log(kavey[i], typeof kavey[i]);
  //Filling types array
  //types[i] = typeof kavey[i];
  types.push(typeof kavey[i]);
}
console.log(types);

///Another example
const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);


/////////////////////////////////////////////////////////////////
////////Conntinue , break, looping backwards and loops in loops
console.log(`------Continue------`);
for (let i = 0; i < kavey.length; i++) {
  if (typeof kavey[i] !== "string") continue; ///we only collect string by this.
  console.log(kavey[i]);
}
console.log(`------Break------`);
for (let i = 0; i < kavey.length; i++) {
  if (typeof kavey[i] === "number") break;
  console.log(kavey[i]);
}
console.log(`------Looping Backwards------`);
for (let i = years.length - 1; i >= 0; i--) {
  console.log(years[i]);
}
console.log(`------Loops in loops------`); ///might not use this all the time

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`--- Lifting weight repetition${rep}`);
  }
}


//////////////////////////////////////////////////////////f
//////While loop  //console.log(``)

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}*/

/*
/////////Coding Challenge # 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * (15 / 100)
    : billValue * (20 / 100);
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
/// function is used to calculate the average value
let sum = 0;
const calcAverage = function (arr) {
  ////for loop is used for finding the total value
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(totals);
console.log(calcAverage([2, 3, 4]));
console.log(calcAverage(totals));
console.log(calcAverage(bills));
*/
/*
////instructor solution
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * (15 / 100)
    : billValue * (20 / 100);
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

let sum = 0;
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(tips, totals);
console.log(calcAverage(totals));
*/
