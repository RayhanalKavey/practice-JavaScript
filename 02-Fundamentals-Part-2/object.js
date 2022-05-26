"use strict";
/////////////////////////////////////////////////////////////////////////
////////////// Object
/////////////////////////////////////////////////////////////////////////

/*
const kaveysArray = [
  "Rayhan",
  "Kavey",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
////In array there is no way of giving these elements a name, so we can't reference them by name but only by their order number in which they appear in the array. To solve that problem we have another data structure in JavaScript,which is object.

///So in object we actually defined KEY(firstName, lastName, age etc.) value pairs. So then we can give each of these values here a name.
////Key is also called property.
////Value could be any type in object.

////so here we have 5 properties.
////So just like array, we use object to essectially group together different variables that really belong together.
////Difference between objects and array : Is that in objects the order of these values doesn't matter at all when we want to retrieve them. So we can only access array elements using their order number. This means that we should use arrays for more ordered data, object for more unstructured data.

/////There are many ways of creating objects.
////   1. Object literal Syntex
const kavey = {
  firstName: "Rayhan",
  lastName: "Kavey",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/
/*
const kavey = {
  firstName: "Rayhan",
  lastName: "Kavey",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(kavey);
////////////   DOT notation
console.log(kavey.firstName);
///////////    Bracket notation
console.log(kavey["age"]);
console.log(kavey["lastName"]);

////In the bracket notation we can atually put any expression that we'd like. So we don't have to explicitly write the string here , but instead we can compute it from some operation. Because an operation is basically an expression.
const nameKey = "Name";
console.log(kavey["first" + nameKey]);
console.log(kavey["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Kavey? Choose between firstName,lastName, age, job, and friends."
);
if (kavey[interestedIn]) {
  console.log(kavey[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName, age, job, and friends. "
  );
}

/////add element
kavey.location = "Dhaka";
kavey["gmail"] = "rayhanalkavey@gmail.com";
console.log(kavey);
//// Challenge
//// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${kavey.firstName} has ${kavey.friends.length} friends, and his best friend is called ${kavey.friends[0]}
  `
);
*/
/*
////Experiment
const kaveyLove = {
  loves: "Fatema Fahmida Arjuman Rishad",
  firstmeet: "In FaceBook",
  relationship: "Long distance",
  married: "10/07/2020",
};

const loveDetails = prompt(
  `Do you want to know about KAVEY's love details? Choose between loves, firstmeet ,relationship, married  🤕`
);
if (kaveyLove[loveDetails]) {
  console.log(kaveyLove[loveDetails]);
} else {
  console.log(
    `You choose WRONG! Choose between loves, firstmeet ,relationship, married 🤕`
  );
}
*/

/*
////////////////////////
/////////  Object method
const kavey = {
  firstName: "Rayhan",
  lastName: "Kavey",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicensev ? "a" : "no"} driver's license`;///task practice
  },

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   //console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(kavey.calcAge()); ///If don't call calcAge() then the below console.log will not work.
console.log(kavey.age);

//////////challenge(small)
console.log(kavey.getSummary());

// //////////////////
// ///// My experiment which is repetative, so not acceptable:
// ///bracket notantion
// console.log(kavey["calcAge"](kavey["birthYear"]));
// console.log(kavey["calcAge"](kavey.birthYear));
// ////dot notation
// console.log(kavey.calcAge(kavey.birthYear));
// ////////////////////
*/

/*
//////////////////////////
//////Coding challenge 3(Objects)
//////////////////////////

const marks = {
  fullName: "Marks Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    // console.log(this.BMI);
    return this.BMI;
  },
};
marks.calcBMI();
john.calcBMI();
console.log(marks.BMI, john.BMI);

const summaryBMI =
  marks.calcBMI() > john.calcBMI()
    ? `${marks.fullName}'s BMI (${marks.calcBMI()})is higher than ${
        john.fullName
      }'s BMI(${john.calcBMI()}).`
    : `${john.fullName}'s BMI (${john.calcBMI()})is higher than ${
        marks.fullName
      }'s BMI(${marks.calcBMI()}).`;
console.log(summaryBMI);
*/
