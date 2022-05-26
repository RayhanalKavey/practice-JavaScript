"use strict";
/*
//ExamplE
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
//SectioN or (||)
console.log(`-----------or (||)-----------`);
///NotE In case of or (||) : |1|It can be use ony data type , |2| It can return any data type, |3| Short-circuiting / short-circuit evaluation.
//NotE Short Circuting(In case of or): It means that if the first value is a trythy value, it will immediately return that first value. So, it the first operand is truthy here in the or operator, then the other operand will not even be valuated. JavaScript will not even take a look at it.
//Short circuiting ExamplE
console.log(3 || "Kavey");
console.log("" || "Kavey");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

//restaurant.numGuests = 23;
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//SectioN and (&&)
console.log(`-----------and (&&)-----------`);
console.log(0 && "Kavey");
console.log(7 && "kavey");
console.log("Hello" && 23 && null && "Kavey");
//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
//ParT Nullish Coalescing Operator(ES 2020)
console.log(`-----------Nullish Coalescing Operator (??)-----------`);
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
///SectioN Logical Assignment operator(ES 2021)
console.log(`-----------Logical Assignment operator(ES 2021)-----------`);
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
//ParT or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// ParT Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);
//ParT and assignment operator
//rest1.owner = rest1.owner && "<ANONYMOUS>";
//rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1.owner);
console.log(rest2.owner);
*/
