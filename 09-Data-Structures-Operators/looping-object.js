"use strict";
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  ///|1| SolutioN ES6 enhanced object literal . NotE openingHours name should be same.
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  ///|2| SolutioN ES6 enhanced object literal . NotE openingHours name should be same.

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = "20:00" }) {
    console.log(
      `Order recrived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const users = [
  {
    name: "Jonas",
    email: "hello@jonas.io",
  },
  {
    name: "Kavey",
    email: "rayhankavey@gmail.com",
  },
];
*/
/*
// /SectioN Looping array

// /SectioN Looping objects
// /ParT property name
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `; //NotE With this we can also compute how many properties in the object.
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

///ParT property value
const values = Object.values(openingHours);
console.log(values);
///ParT Entire object(NotE name and value together)
const entries = Object.entries(openingHours);
console.log(entries);
console.log(`-----------------`);
// for (const x of entries) {
//   console.log(x);
// }
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
