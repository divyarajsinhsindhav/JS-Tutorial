// const red = document.getElementById('redBox')
// const blue = document.getElementById('blueBox')
// const green = document.getElementById('greenBox')

// let counterRed = 0

// red.onclick = function(){
//     counterRed++
//     console.log('Red: ', counterRed)
//     red.innerHTML = `<p style="font-size: 20px;">${counterRed}</p>`
// }

// let counterBlue = 0

// blue.onclick = function(){
//     counterBlue++
//     console.log('Blue: ', counterBlue)
//     blue.innerHTML = `<p style="font-size: 20px;">${counterBlue}</p>`
// }

// let counterGreen = 0

// green.onclick = function(){
//     counterGreen++
//     console.log('Green: ', counterGreen)
//     green.innerHTML = `<p style="font-size: 20px;">${counterGreen}</p>`
// }

const squares = document.querySelectorAll('.colorSquare')
const timeClicked = {'red': 0, 'blue': 0, 'green': 0}
squares.forEach(square=>{
    square.onclick = () => {
        timeClicked[square.value] += 1 
        square.innerText = timeClicked[square.value]
    }
})

function clearGame(){
    timeClicked.red = 0
    timeClicked.blue = 0
    timeClicked.green = 0
    squares.forEach(square => square.innerText = 0)
}

const resetGame = document.getElementById('resetButton')
resetGame.onclick = () => clearGame()

