// Rules for using async / await
// 1. You must create a function
// 2. You must use the keyword async
// 3. Use the word await

const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getDog()