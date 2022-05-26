/*
/////////////////////////////////////////////////////////////

//Lecture 1: Value , variable and some convension.

// Valuable information for JavaScript
console.log(40 + 9 + 9 + 4);
let js = "amazing";
if (js === "amazing")
  console.log(
    "I will learn JavaScript as soon as possible InshaAllah. I will give my full effort to learn JavaScript InshaAllah."
  );
// Demo for alert 
if (js === "amazing")
  alert(
    "Demo code for alert."
  );
  /////////////////////

  const firstName = "Rayhan Al Kavey";
  // camelCase variable: firsrName
  console.log(firstName);
  console.log(firstName);
  console.log(firstName);
  // Now, if had to change the name I can do it by only changing the value in the variable.
  
  console.log("Variable name cannot start with number, syntexError.");
  console.log(
    "We should not start with uppercase letter. It's a convension but not illegal. We use this kind of uppercase variable for specific use case in JavaScript, which is object-oriected programming."
    );
    console.log(
      "Variable can only contain number, letter, underscore, doller sign."
      );
      console.log(
        "We cannot use reserved JS keyword for variable name. For example: new , function, name."
        );
        //We can write let $function, _function, job1 , firstName.
        console.log(
          "Variaables that are all in uppercase are reserved for constants that we know will never change. For example: let PI = 3.1416. "
          );
          console.log("Our variable names should be descriptive to write cleaner code. ");
          //For Example
          let job1 = "Programmer";
          let job2 = "teacher";
          //better then job1 and job2
          let myFirstJob = "Programmer";
          let myCurrentJob = "Teacher";
          console.log(myFirstJob);
  */

/*
///////////////////////////////////////////////////////////////////////////////////////////

//boolean primitive data type
true;
let children;
//We can put value later in the undefined variable like this: children = 4;
let myFirstJob = "Programmer";
let javascriptIsFun = true;
javascriptIsFun = 23;
console.log(true);
//types of variable
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof myFirstJob);
console.log(typeof "kavey");
console.log(typeof children);
//JS says types of null is an object. Which is a bug.(Not corrected for legacy reason.)
console.log(typeof null);

let age = 30;
age = 31;
const birthYear = 1991;
//birthYear = 1992; const variables value cannot be changed by defining again.
//Var is the old way of defining variable before ES6.
var job = "programming";
job = "teacher";
console.log(job);
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////

//Basic Operators
//Mathematical or arithmetic operators:-

//////////////////

//Math operator
const now = 2023;
const ageKavey = now - 1991;
const ageKaif = now - 1995;
console.log(ageKavey, ageKaif);
console.log(now - 1991, now - 1995); //This is the same as the upper one
console.log(ageKavey * 2, ageKaif * 2, 2 ** 3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2

//We use + sign to concatinate different string
const firstName = "Rayhan";
const lastName = "Kavey";
console.log(firstName + " " + lastName);

///////////////////

//Assignment operator
let x = 10 + 5; //15
x += 10; //x = x+10 =25
x *= 4; //x= x*4= 100
x++; //x = x+1
x--;
x--;
console.log(x);

///////////////////

//Comparison operators
//Basically we use comparison operators to produce boolean values.
console.log(ageKavey > ageKaif); //<,>,>=,<=
console.log(ageKaif >= 28);
console.log(ageKaif >= 29);
//In real development, the result of this comparison operatior's stored in variables and use them later.
const isFullAge = ageKaif >= 28;
console.log(isFullAge);
*/

/*
//////////////////////////////////////////////////////////////////////////////////////////////////

//Operator Precedence
const now = 2023;
const ageKavey = now - 1991;
const ageKaif = now - 1995;

console.log(now - 1991, now - 1995);

let x, y;
x = y = 25 - 10 - 5; //x=y=10, y=10,x=10 assignment pecedence works right to left.
console.log(x, y);

const averageAge = (ageKavey + ageKaif) / 2;
console.log(ageKavey, ageKaif, averageAge);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
/*
/////////////////Challenge -1
console.log(`==========Challenge -1 ==========`);
const marksHight = 78;
const marksMass = 1.69;
const johnsHight = 92;
const johnsMass = 1.95;
const marksBMI = marksMass / marksHight ** 2;
const johnsBMI = johnsMass / johnsHight ** 2;
const markshigherBMI = marksBMI > johnsBMI;
if (markshigherBMI) console.log(`Marks BMI is higher the Johns`);
johnshigherBMI = johnsBMI > marksBMI;
if (johnshigherBMI) console.log(`Johna BMI is higher the Marks`);
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////Easy way to build strings using TEMPLATE LITERALS

const firstName = "Kavi";
const job = "teacher";
const birth_Year = 1991;
const year = 2037;

const kaveyDetails =
  "I'm " + firstName + ", a " + (year - birth_Year) + " years old " + job + "!";
const kaveyDetails_using_templateLiterals = `I'm ${firstName}, a ${
  year - birth_Year
} years old teacher!`;
console.log(kaveyDetails);
console.log(kaveyDetails_using_templateLiterals);


////////////////
//before ES6 for NEW LINE function
console.log("String with \n\
multiple\n\
lines ");
////////////////
//after ES6 for NEW LINE with lemplate string (BACKTRICS)
console.log(`String
multiple
lines`);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////
//if else control structure
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Kavey can have driving linecse.🚗 ");
} else {
  const yearLeft = 18 - age;
  console.log(`Kavey is too yound. Wait another ${yearLeft} years.`);
}

///////////////
//Define the variable outside of the block, otherwise it will not work(display console.log) outside of the block.
const birth_Year = 2012;
let century;
if (birth_Year <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////Coding challange 2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
  );
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's BMI(${BMIMark})`);
}
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////

///////////Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Kavey"));
console.log(typeof NaN);

console.log(String(23), 23); //white color in the console.log means string and purple number means

///////////Type coercion
console.log("I'm " + 23 + " " + "years old");
//same as "23"//Automatic convarted to string in the console.cog because of coercion
//Aulternative way to convert it to string can be needed for different Programming language
console.log("I'm" + " " + "23" + " years old");
console.log("I'm" + " " + String(23) + " " + "years old");

console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; //+ operator convert it to string
console.log(n);
n = n - 1; //and - operator convert it to number
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
console.log("10" - "4" + "5" - "3" - 2);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////5 FALSY values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//////////TRUTHY Values:

console.log(Boolean("Kavey"));
console.log(Boolean({})); //Empty Object

//////////Trythy and Falsy ---Type Coercion in if else statement

//0/100/""/null/NaN
const money = "";
if (money) {
  //(Boolean(money))--> (Boolean(0))=false//Here JS will try to convert it to a booean, if it's not a boolean; and it follows the truthy and falsy rules.
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

//string
const selary = "kavey";
if (selary) {
  //(Boolean(money))--> (Boolean(0))=false//Here JS will try to convert it to a booean, if it's not a boolean; and it follows the truthy and falsy rules.
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

//Undefined
let height;
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED.");
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

//////////Equality Operator: (== vs ===)

//////(===)Strict equality operator:- It's strict because it does not perform type coercion. So it's only returns to when both values are exactly the same. 18===18-->true

//////(==) Loose equality operator:- It does type coercion. "18"==18--> true/"18"===18--> false
/*
If we use loose equality
const age = "18";
if (age === 18) console.log("You just become an adult. :D(Strict)");
if (age == 18) console.log("You just become an adult. :D(Loose)");

//Simple way of getting a value from any webpage:
const favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if(favourit==23){////'23' == 23
  console.log("Cool! 23 is an amazing number!")
  ////We get this result, because we use double equal operator here.
}
*/
/*
//If we want to use Strict equality
const age = "18";
if (age === 18) console.log("You just become an adult. :D(Strict)");
if (age == 18) console.log("You just become an adult. :D(Loose)");

//Simple way of getting a value from any webpage:
//With Number function convert it to a Number
const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favouriteNumber === 7) {
  console.log("7 is also a cool number.");
} else if (favouriteNumber === 9) {
  console.log("7 is also a cool number.");
} else {
  console.log("Number is not 23 or 7 or 9");
}
//NOT operator has precedance over the OR and AND operators. So, basically the values are inverted first.
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////  Boolean operator  //////////

const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);
/////////////  Now take decision

////const shouldDrive = hasDriversLicence && hasGoodVision;
////if (shouldDrive)
// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive..");
// }

const isTired = true; //C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////   Challenge #3   ////////////
/////////  Problem 1:
const dolphinsFirstMember = 96;
const dolphinsSecondMember = 108;
const dolphinsThirdMember = 89;
const koalasFirstMember = 88;
const koalasSecondMember = 91;
const koalasThirdMember = 110;

const scoreDolphins =
  (dolphinsFirstMember + dolphinsSecondMember + dolphinsThirdMember) / 3;
const scoreKoalas =
  (koalasFirstMember + koalasSecondMember + koalasThirdMember) / 3;

console.log(
  `Dolphins average score is ${scoreDolphins}, and Koalas average score is ${scoreKoalas}!`
);

///////// Bonus--1 ans Bonus--2
const avgScoreDolphins = (197 + 112 + 101) / 3;
const avgScoreKoalas = (197 + 112 + 101) / 3;
//const avgScoreKoalas = (109 + 95 + 123) / 3;
//const minDolphinsScore100 = avgScoreDolphins >= 100;
//const maxDolphine = avgScoreDolphins > avgScoreKoalas;
//const minKoalasScore100 = avgScoreKoalas >= 100;
//const maxKoalas = avgScoreDolphins < avgScoreKoalas;

console.log(
  `In bonus challenge 1, Dolphins average score is ${avgScoreDolphins}, and Koalas average score is ${avgScoreKoalas}!`
);
if (avgScoreDolphins >= 100 && avgScoreDolphins > avgScoreKoalas) {
  console.log(
    `Dolphins wins with minimum score of 100 and scored ${avgScoreDolphins}`
  );
} else if (avgScoreKoalas >= 100 && avgScoreDolphins < avgScoreKoalas) {
  console.log(
    `Koalas wins with minimum score of 100 and scored ${avgScoreKoalas}🔥`
  );
} else if (
  avgScoreDolphins >= 100 &&
  avgScoreKoalas >= 100 &&
  avgScoreDolphins === avgScoreKoalas
) {
  console.log(` It's a draw!🤝, Both gets the minimum score of 100.👍🏼`);
} else {
  console.log(`No team gets the minimum score!🥵`);
}
*/
/*
//////////////////////////////////////////////////////////////////////////////////////////////
/////////// The switch statement:-  /////// Works in multiple equlity

const day = "monday"; //Well in the real application, that's used by users in a browser usually most of the data comes from user input. So than we wouldn't need to be hard coding the day variables value.

// day === "monday"
switch (day) {
  case "monday":
    console.log("Plan course structure.");
    console.log("Going to coding meetup."); // Inreal world we will of course not be console.log stuff all the time. This is once more just for learning purpose.
    // We can use multiple line with out {} brackets.
    break;
  case "tuesday":
    console.log("Prepare theory videos.");
    break;
  case "wednesday":
  case "thursday": // Er can use multiple condition here.
    console.log("Write coding examples.");
    break;
  case "friday":
    console.log("Record videos.");
    break; // If we don't use break then nuxt console will be executed without folllowing that 2nd consoles logic.
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend.");
    break;
  default:
    console.log("Not a valid date!"); // same like else in (if else statement)
}

///converting to if else statement (Assignment)
if (day === "monday") {
  console.log("Plan course structure.");
  console.log("Going to coding meetup.");
} else if (day === "tuesday") {
  console.log("Prepare theory videos.");
} else if (day === "wesnesday" || day === "thursday") {
  console.log("Write coding examples.");
} else if (day === "friday") {
  console.log("Record videos.");
} else if (day === "saturday" || day === "sunday") {
} else {
  console.log("Not a valid date!");
}
*/

/*
//////////////////////////////////////////////////////////////////////////////////////////////

////////////   The conditional (Tenary) operator:

const age = 23;
age >= 18
  ? console.log("I like to drink coffee.")
  : console.log("I like to dink water");

const drink = age >= 18 ? "coffee" : "water";
console.log(`I'd like to drink ${drink}`);

//in if/else:
let drink2;
if (age >= 18) {
  drink2 = "coffee";
} else {
  drink2 = "water";
}
console.log(`I'd like to drink ${drink2}`);
console.log(`I'd like to drink ${age >= 18 ? "coffee" : "water"}`);
*/

/*
//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// Coding Challange #4:

/////////// The conditional (ternary) operator:

// const billValue = 275;
// //const billValue = 40;
// //const billValue = 430;
// const tipValue15 = billValue * (15 / 100);
// const tipValue20 = billValue * (20 / 100);
// const tipValue = billValue >= 50 && billValue <= 300 ? tipValue15 : tipValue20;
// console.log(
//   `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
//     billValue + tipValue
//   }`
// );

////removing extra variables

// const billValue = 430;
// const tipValue =
//   billValue >= 50 && billValue <= 300
//     ? billValue * (15 / 100)
//     : billValue * (20 / 100);
// console.log(
//   `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
//     billValue + tipValue
//   }`
// );

//////////// Convert it into if else statement

// const billValue = 40;
// const tipValue15 = billValue * (15 / 100);
// const tipValue20 = billValue * (20 / 100);
// let tipValue;
// if (billValue >= 50 && billValue <= 300) {
//   tipValue = tipValue15;
// } else {
//   tipValue = tipValue20;
// }
// console.log(
//   `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
//     billValue + tipValue
//   }`
// );
*/
