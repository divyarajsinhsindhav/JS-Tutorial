import User, { printName, printAge } from './user.mjs';
import math from './maths.mjs';

const user = new User('bob', 23);
console.log(user);

printName(user);
printAge(user);

console.log(`Sum of 1 & 2 is ${math.add(1,2)}`);
console.log(`Substraction of 3 & 1 is ${math.sub(3,1)}`);
console.log(`Multiplication of 3 & 2 is ${math.multiple(2,3)}`);