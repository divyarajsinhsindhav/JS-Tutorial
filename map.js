//.map() loops and returns the array
const array = [1,2,3,4,5]
array.map(numbers => {
    console.log(numbers)
}) 

let result = array.map(numbers => numbers*2)
console.log(result) 