"use strict";

/*
//SectioN Set
const orderSets = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
//NotE Set command
// console.log(orderSets.size);
// console.log(new Set("Rayhan Al Kavey"));
// console.log(orderSets.has("Pizza"));
// console.log(orderSets.has("Bread"));
// orderSets.add("Garlic Bread");
// orderSets.add("Garlic Bread");
// orderSets.delete("Risotto");
// //orderSets.clear();
// console.log(orderSets);
//NotE looping overset
// for (const order of orderSets) console.log(order);
////ExamplE
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
////NotE converting set to array
const convertToArray = [...new Set(staff)];
console.log(convertToArray);
const convertOrderSets = [...new Set(orderSets)];
console.log(convertOrderSets);
//console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);
*/
/*
//SectioN Maps

//ParT usion set mathod
const rest = new Map();

rest
  .set("Name", "Rayhan Al Kavey")
  .set("categories", ["Italian", "Pizzeria", "Vagetarian", "Organic"])
  .set(2, "logo")
  .set("open", 11)
  .set("close", 23)

  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest.get("open"));
const time = 18;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.size);
rest.delete(2);
//rest.clear();
//NotE We can use arrays or object as map keys
const arr = [1, 2];
rest.set(arr, "test");
rest.set("test2", [3, 4]);
console.log(rest);

console.log(rest.get(arr));
//ParT usion iteration mathod //NotE : Another way of populating a map without using set method. We prefere that because set is a bit cunbersome when there are a lot of values to set.
console.log(`----------Iteration------------`);
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct☺️"],
  [false, "try again"],
]);
console.log(question);
///ParT convert object to map
console.log(`----------------------`);
*/

const orderSets = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSets); //NotE: Set only display the unique items
console.log(new Set("Jonas"));
console.log(new Set());

//ParT How to works with sets
console.log(`-------------------------------------`);
console.log(orderSets.size); //NotE With this we can know how many miles we have to cook.
console.log(orderSets.has("Pasta"));
console.log(orderSets.has("Bread"));
orderSets.add("Garlic Bread");
orderSets.add("Garlic Bread");
console.log(orderSets);
orderSets.delete("Garlic Bread");
console.log(orderSets);
