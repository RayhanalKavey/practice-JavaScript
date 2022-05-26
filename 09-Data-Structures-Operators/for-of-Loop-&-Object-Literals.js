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
  [weekdays[5]]: {
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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  ///|2| SolutioN ES6 enhanced object literal . NotE openingHours name should be same.

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = "20:00",
  }) {
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
*/
//console.log(...menu.entries());
////////////////////////SectioN enhanced object Literals

/*
///////////////////////////SectioN for-of loop

/////////////ParT Previous for loop
console.log(`------------------------------`);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
for (const item of menu) console.log(item);

///////////ParT  for-of loop
console.log(`------------------------------`);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} ${item[1]}`);
}
//console.log([...menu.entries()]);

///////////////////////Correct SolutioN with destructuring:--
console.log(`------------------------------`);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} ${el}`);
}
//console.log(i);
*/
