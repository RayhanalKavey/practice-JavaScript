////## Coding Challenge #2
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Geretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Let's continue with our football betting app! Keep using the 'game' variable from before.Your tasks:

///ProbleM|1| Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log(`-------------SolutioN|1|--------------`);

console.log(game.scored.entries());
for (const [goalNumber, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1} : ${playerName}`);
}

///ProbleM|2| Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
console.log(`-------------SolutioN|2|--------------`);

let sum = 0;
const gameOdds = Object.values(game.odds);
for (const values of gameOdds) sum += values;
let average = sum / gameOdds.length;
console.log(`The average value of odd is ${average}`);

// ///ProbleM|3| Print the 3 odds to the console, but in an ice formatted way,exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
console.log(`-------------SolutioN|3|--------------`);

// //my hilarious try 😝
// const gameOddss = Object.entries(game.odds);
// console.log(gameOddss);
// for (const [oddsNumber, [oddsname, oddsValue]] of gameOddss.entries()) {
//   console.log(oddsNumber);
//   console.log(oddsValue);
//   console.log(
//     `Odd of`,
//     `victory ${gameOddss[oddsNumber] === game.team1}` && `${game.team1}`,
//     `${oddsValue}`
//   );
// }

const gameOddss = Object.entries(game.odds);
console.log(Object.entries(game.odds));
for (const [oddsName, oddsValue] of Object.entries(game.odds)) {
  const teamName = oddsName === "x" ? "draw" : `victory ${game[oddsName]}`;
  console.log(`Odd of ${teamName} : ${oddsValue}`);
  //console.log(typeof oddsName);
}
// ///ProbleM |4| Bonus:Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

// 
//      {
//       Gnarby: 1,
//       Hummels: 1,
//       Lewandowski: 2
// }
// GOOD LUCK 😀

console.log(`------------SolutioN||4||-------------`);

const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/
/*
/////////////NotE Experimental of ne 4
console.log(scorers);
const identifyBrother = {};
const brothers = ["Kavey", "Ovey"];
for (const [item, name] of brothers.entries()) {
  console.log(item, name);

  brothers[item] === "Kavey"
    ? (identifyBrother[name] = "Elder brother")
    : (identifyBrother[name] = "Younger brother");
}
console.log(identifyBrother);
*/
/*
// const scorersCreate = Object.create(scorers, { name: { value  }});
// const scorersAssign = Object.assign({}, scorers);
///From stack overflow not usefull 
class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const person = new Person('testFirstName', 'testLastName');

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName
*/
/*
console.log(`----------------------`);
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const duplicates = numbers.filter(
  (item, index) => index !== numbers.indexOf(item)
);
console.log(duplicates);

// [ 2, 5 ]
*/
