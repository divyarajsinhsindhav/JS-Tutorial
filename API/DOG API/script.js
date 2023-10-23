// https://dog.ceo/api/breeds/image/random
//. then - Promises
// asynchronous programming

const dogImg = document.getElementById('dog-image')
const getDog = document.getElementById('get-dog')

getDog.onclick = () => {
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json)
            dogImg.innerHTML = `<img src='${json.message}' style="width:300px; height: 300px;"/>`
    })
}