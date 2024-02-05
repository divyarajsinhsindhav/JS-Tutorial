let array = [5,10,14,59];
console.log(array);

console.log("2nd Element of array: ", array[1]);

//Length of array
console.log("Length: ", array.length);

//for-loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("Element: ", element);
}

//for_each loop
array.forEach(element => {
    console.log(element);
});

//method
array.push(45); //add to end
console.log(array);

array.pop(); //delete to end
console.log(array);

let cart = ["MacBook", "AirPod", "iMac", "iPhone"];
console.log(cart.toString()) //convert array into string

console.log(array.concat(cart)) //join to array in the new array

array.unshift(9); //add to start
console.log(array);

console.log(array.shift()); //remove form start
console.log(array)


