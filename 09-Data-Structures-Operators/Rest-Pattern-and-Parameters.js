"use strict";
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
console.log(`----------------------- //ParT |1| Destructuring:--`);
//Spread, because on right side of =

const variable = [4, 5];
const arr = [1, 2, 3, ...variable];
console.log(arr);
//REST, because on right side of =
console.log(`----------------------------------------`);
const [a, , c, ...rest] = [2, 3, 4, 5, 6, 7];
console.log(a, c, rest);
const [f, , g, ...otherss] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(f, g, otherss);
//Objects
console.log(`----------------------------------------`);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const { Focaccia, GarlicBread, ...others } = restaurant.starterMenu;
console.log(others);
console.log(`----------------------- //ParT |2|Functions:--`);
const add = function (...number) {
  console.log(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(2, 3); // |>(2)[2, 3]
add(5, 3, 7, 2); // |>(4)[, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4); // |>(7)[8, 2, 5, 3, 2, 1, 4]
const x = [2, 3];
add(...x);
console.log(`----------------------------------------`);
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
*/
