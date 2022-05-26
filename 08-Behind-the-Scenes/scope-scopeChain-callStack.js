"use strict";
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    let outPut = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(outPut);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable.
      const firstName = "Rayhan"; //It replaces the global firstName variable. Because JS try to look up the variable inside the current scope and found it and use it. No need to go further for the global scope variable. firstName defined twice but its not a problem because they are defined in different scope.
      const str = `Oh! ${firstName}, you're a millenial.`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //const outPut = "New output"; //This are only accessable from this block.
      outPut = "New output"; //We actually manipulated an existing variable inside of an inner scope. If we console.log it from outside of the block it will show New output.

      console.log(add(2, 3));
    }
    //console.log(add(2, 3)); //ReferenceError//It proves that functions are also block scoped.//But remember that its only true for strict mood.
    //console.log(str);//ReferenceError(const and let variables are block scoped.)
    console.log(millenial); //var variable is function scoped.
    console.log(outPut);
  }
  printAge();
  return age;
}
const firstName = "Kavey";
calcAge(1991);
//console.log(age);//ReferenceError
//printAge();//ReferenceError
*/
