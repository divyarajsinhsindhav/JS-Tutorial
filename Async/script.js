// const orderSoup = () => console.log('Soup is Ready')

// setTimeout(orderSoup, 2000) //1000ms = 1s

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isReady = [true, false][Math.floor(Math.random()*2)]
        isReady ? resolve('✅ Soup is Ready') : reject('❌ Soup is not Ready')
    }, 2000)
})

// console.log(
//     promise1
//     .then(success => console.log({success}))
//     .catch(error => console.log({error}))
// )

// RESOLVED - if waiter brings you soup
// tip the waiter
// you pay for soup
// REJECTED - leave a bad
// review, no tip

const getSoup = async () => {
    const data = {tip: null, pay: null, rating: null, review: null}
    try{
        const soup = await promise1
        console.log(soup)
        data.tip = 0.2
        data.pay = 100
        data.rating = 5
        data.review = 10
        return data
    } catch(error) {
        console.log(error)
        data.tip = 0
        data.pay = 100
        data.rating = 1
        data.review = 0
        return data
    }
}

const main = async () => {
    try {
        const result = await getSoup();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main()

