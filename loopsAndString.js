//For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//While
let number = 10 
while(number!=20) {
    console.log(number);
    number++;
}

//do...while
let input = 0;
do{
    console.log("hello")
} while(input!=0);

//for-of
let str = "IamBatman";
for (const val of str) {
    console.log(val);
}

//for-in
let student = {
    name: "Tom Holland",
    age: 18,
    cgpa: 8.5,
    isPass: true
};
for (let key in student) {
    console.log(key, ":", student[key]);
}

//String
/*
String is a sequence of characters used to represent text
*/

let string;
string = "Welcome to the universe of JS";
console.log(string.length);
console.log(string[0]);

//Template Literals
/*
A way to have embedded expressions in strings
*/
/*
String Interpolation:
To create strings by doing substitution of placeholders
*/
let literals = `Student name is ${student.name} & his age is ${student.age}`;
console.log(literals);

//String Method
let string_method = "    I am iron man     ";
console.log(string_method.toUpperCase())
console.log(string_method.toLowerCase())
console.log(string_method.trim()) //removes whitespaces
console.log(string_method.slice(0,9));