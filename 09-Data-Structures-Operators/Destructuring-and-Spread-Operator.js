"use strict";

//Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
/*
//Data needed for first part of the section
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
};
///SectioN The spread operator
///NotE The spread operator is a nit similar to destructuring, because it also helps us get elements of arrays. Now the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables. As a consequence, we can only use it in places where we would otherwise write values separated by commas.
const arr = [7, 8, 9];
//NotE we need to create a new array beside on this array but with some new elements at the beginning. SolutioN : We would need to loop over this array, or even worse, do it manually.
const newBadArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArray);
///SolutioN But with modern new ES6(Spread operator)
const newGoodArray = [3, 4, ...arr];
console.log(newGoodArray);

const newMenu = ["Potol", ...restaurant.mainMenu]; ///Creating new array
console.log(newMenu);
///ParT Two(|2|) important use cases of (...) operator
//|1| Create shallow Copy of array
const newMenuCopy = [...restaurant.mainMenu];
console.log(newMenuCopy);
//|2| Merge array together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//ParT Iterables: arrays, strings, maps, sets, not objects
const str = "Johns";
const letters = [...str, "", "S."];
console.log(letters);
console.log(`--------------------------`);
//Real world ExamplE
const ingredients = [
  // prompt("let's make pasta! Ingredient 1"),
  // prompt("Ingredient 2"),
  // prompt("Ingredient 3"),
];
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);//Old Way
restaurant.orderPasta(...ingredients);
console.log(ingredients);
//ParT Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Rayhan" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Alu potol store";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
////ParT Pass object inside of a function as an argument.

restaurant.orderDelivery({
  time: "22.30",
  address: "Via del solo, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del solo, 21",
  starterIndex: 3,
});
//SectioN :- Destructuring Object
console.log(`--------------------------`);

const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);
////ParT Changing property name
console.log(`--------------------------`);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
///ParT Default value:-
console.log(`--------------------------`);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//ParT Mutating vatiables:-
console.log(`--------------------------`);
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
////ParT Nested object:-
console.log(`--------------------------`);
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
//SectioN :- Destructuring Array
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//ProbleM Destructuring array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);
//ParT Destructuring 1st and 2nd
console.log(`--------------------------`);

//const [first, second] = restaurant.categories;
//console.log(first, second);
// const [first, , , forth] = restaurant.categories;
// console.log(first, forth);

let [first, , third] = restaurant.categories;
console.log(first, third);

// ///ProbleM Switching
///SolutioN Manual switching
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);

///SolutioN Actual switching variable
[third, first] = [first, third];
console.log(first, third);
//console.log(restaurant.categories);///NotE After destructuring the actual array will remain same.

//SolutioN Destructuring by order function//Receive two return values from a single function call
console.log(`--------------------------`);

console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, `and`, main);

///ProbleM Nested array
console.log(`--------------------------`);
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
const [k, , [l, m]] = nested;
console.log(i, j);
console.log(k, l, m);
//ProbleM Default values
//NotE: It's useful when we don't know the length of the array, and also useful when we got deta from API.
//const [p, q, r] = [8, 9];
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
