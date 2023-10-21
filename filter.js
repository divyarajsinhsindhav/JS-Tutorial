// const filter = (numbers, greterThan) => {
//     let result = []
//     for (const number of numbers) {
//         if (number > greterThan) {
//             result.push(number)
//         }
//     }
//     return result
// }

// console.log(filter([1,2,3,4,5,6,7], 4))

const array = [2,4,5,6,8,10,11,23,45]
let result = array.filter(num => num>4 && num<23 )
console.log(result)

const superhero = [
    {name: 'Iron Man', universe: 'Marvel'},
    {name: 'Spider man', universe: 'Marvel'},
    {name: 'Batman', universe: 'DC'},
    {name: 'Homelander', universe: 'Vought'}
]

let sups = superhero.filter(hero => hero.universe=='Marvel')
console.log(sups)
 