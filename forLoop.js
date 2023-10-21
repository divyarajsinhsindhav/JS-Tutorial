const numbers = [1,2,3,4,5]
let sum = 0;

for (const number of numbers){
    sum = sum + number
}

// for (let i = 0; i<numbers.length; i++){
//     sum = sum + numbers
// }

console.log(sum)

const square = (array) => {
    let result = []
    for(const numbers of array){
        result.push(numbers**2)
    }
    return result
}

console.log('Square of numbers of array: ')
console.log(square([1,2,3,4,5,6]))