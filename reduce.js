// sum all of the net worths
// SUM: Think reduce
// reduce takes in a function as an argument
//reduce loops and gives you back the accumulator

function sum(a, b){
    return a+b
}

function greterThan(a ,b){
    if(a>b){
        return a
    } else {
        return b
    }
}

const array = [1,2,3,7,5,6]
// let result = (array.reduce(sum))
// let result = (array.reduce((a,b)=>a+b))
let result = (array.reduce(greterThan))
console.log(result)