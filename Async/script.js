// const orderSoup = () => console.log('Soup is Ready')

// setTimeout(orderSoup, 2000) //1000ms = 1s

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random()*2)]
        isReady ? resolve('✅ Soup is Ready') : reject('❌ Soup is not Ready')
    }, 2000)
})

console.log(
    promise1
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
)