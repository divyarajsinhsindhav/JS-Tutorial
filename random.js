const randomNumber = (number) => {
    const random = Math.floor(Math.random() * number.length)
    return number[random]
}

number = [1,2,6,7,8]
console.log(randomNumber(number))
