"use strict";
/*
////ParT Premitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
//ExamplE

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

////ParT Object// Reference Type

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me; //BUG Not work properly, see note.

friend.age = 27;
console.log(`Me:`, me);
console.log(`Friend:`, friend);

///ExamplE
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  member: ["Jonas", "Layla"],
};
///Copying objects
const marriedJessica = Object.assign({}, jessica);

marriedJessica.lastName = "Potol";
marriedJessica.member.push("BabyPotol"); ///BUG its a first level copy object not deep clone. We can produce deep clone by using External library like Lo-dash.
console.log(`Before Marriage:`, jessica);
console.log(`After Marriage:`, marriedJessica);
*/
