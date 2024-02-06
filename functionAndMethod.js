//Scope
/*
{
  let x = 2;
}
// x can NOT be used here

{
  var x = 2;
}
// x CAN be used here

for more details: https://www.w3schools.com/js/js_scope.asp
*/

const help = require("nodemon/lib/help");

function sum(x,y) {
    total = x + y;
    return total;
}

console.log(sum(2,3));

//Arrow Function
/*
It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword
*/
hello = () => "Hello World!";
console.log(hello());

multiplication = (a, b) => {
    total = a * b;
    return total;
}
console.log(multiplication(4,5));

//method
let array = [5,10,14,59];
array.forEach(element => {
    console.log(element);
});

//Map
/*
it's create new array based on return value of array
*/
let newArray = array.map((val) => {
  return val*2;
})
console.log(newArray);

//Filter 
let filterArray = array.filter((val) => {
  return val % 2 === 0;
});
console.log(filterArray);


