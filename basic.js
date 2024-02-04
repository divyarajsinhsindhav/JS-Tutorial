console.log("Hello")

//Variable
/*
var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable.
*/
let temp;
temp = 28;
console.log(temp);

const PI = 3.14; //Use Capitel latter for var
console.log(PI);

var name = "Tony";
console.log(name);
var name = "Bruce";
console.log(name);


//Data type
/*
Primitive => Number, String, Boolean, Undefined, Null, BigInt, Symbol
Non-Primitive => Objects (Arrays, Objects)
*/

const student = {
    name: "Tom Holland",
    age: 18,
    cgpa: 8.5,
    isPass: true
};

console.log(student);
console.log(student.name)
student.cgpa = 8.9;
console.log(student);
console.log(student["age"]);


//Operators
/*
Arithmatic
Comparison
== (Equal To) , ===(Equal to & Type)
!=            , !==
Logical(&&, ||, !)
*/
console.log(5=="5"); //true
console.log(2==="2"); //false

//Conditional
let color;
color = "black";
if (color == "black") {
    console.log("Black Color");
} else if (color == "red") {
    console.log("Red Color");    
} else {
    console.log("Exit");
}

//condition ? true output : false output
const age = 18;
let result = age>=18 ? "Voter" : "Non Water"
console.log(result);

/*
What is NaN property in JavaScript?

NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

isNaN("Hello") // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true
*/


