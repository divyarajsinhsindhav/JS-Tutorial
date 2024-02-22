/**
 * How Async Await behave different
 */

const promiseTest3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3 resolved.");
    }, 1000);
});

const promiseTest1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved.");
    }, 10000);
});

const promiseTest2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved.");
    }, 5000)
});

//Here both promise is the same so they both resolved together
async function testAsync1() {
    const p1 = await promiseTest3;
    console.log(p1);

    const p2 = await promiseTest3;
    console.log(p2)
} 
testAsync1();

//Here both promise is different 
//If we resolve promiseTest1 with 10sec timeout then both resolve after 10sec
//If we resolve promiseTest2 with 5sec timeout then it's first resolve and then give promiseTest1 resolve.
async function testAsync2() {
    const p1 = await promiseTest1;
    console.log("testAsync2: " + p1);

    const p2 = await promiseTest2;
    console.log("testAsync2: " + p2);
}
testAsync2();