//https://superheroapi.com/api/access-token/character-id

const access_token = 892932775685421

const BASE_URL = `https://superheroapi.com/api.php/${access_token}`

const superheroImg = document.getElementById('superhero-img')
const Name = document.getElementById('name-value')
const fullName = document.getElementById('full-name-value')
const placeOfBirth = document.getElementById('place-of-birth-value')
const first_appearance = document.getElementById('first-appearance-value')
const newSuperhero = document.getElementById('new-Superhero')
// const search = document.getElementById('search-input')
// const searchButton = document.getElementById('search-button')


const getRandomSuperhero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            superheroImg.innerHTML = `<img src="${json.image.url}" height="400px" width="300px"/>`
            Name.innerText = `${json.name}`
            fullName.innerText = `${json.biography["full-name"]}`
            placeOfBirth.innerText = `${json.biography["place-of-birth"]}`
            first_appearance.innerText = `${json.biography["first-appearance"]}`
        })
}

// const getSuperhero = (name) => {
//     fetch(`${BASE_URL}/search/${name}`)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             superheroImg.innerHTML = `<img src="${json.image.url}" height="400px" width="300px"/>`
//             Name.innerText = `${json.name}`
//             fullName.innerText = `${json.biography["full-name"]}`
//             placeOfBirth.innerText = `${json.biography["place-of-birth"]}`
//             first_appearance.innerText = `${json.biography["first-appearance"]}`
//         })
// }

const randomHero = () => {
    const random = Math.floor(Math.random()*731)
    return random
}

// searchButton.onclick = () => getSuperhero(search.value)

newSuperhero.onclick = () => getRandomSuperhero(randomHero())