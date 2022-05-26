"use strict";
/*
//NotE This is the newer feature of objects and also of an array.
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
*/

/*
//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);//if doesnt exist than we will get an error message

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//NotE This will get out of control pretty quickly when we have deeply nested objects with lots of optional properties. Therefor ES2020 introduce a great solution for this, which is a feature called optional chaining.
//NotE With optional chaining if a certain property does not extsts then undefined is returned immediately. So that will then avoid that kind of error that we saw earlier.
// SolutioN with optional chaining:
//console.log(restaurant.openingHours.mon.open);//error
console.log(restaurant.openingHours.mon?.open); //NotE check |1| condition
console.log(restaurant.openingHours?.fri?.open); //NotE check |2| condition

//ExamplE:
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}
// SolutioN Optional chaining in method:--
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// SolutioN Optional chaining in array:--//We have an array containing some user array.
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
console.log(users[0]?.email ?? "User array empty");
console.log(users[3]?.email ?? "User array empty");
*/
