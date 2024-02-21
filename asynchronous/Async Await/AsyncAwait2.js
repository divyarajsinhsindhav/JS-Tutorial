/**
 * How Async Await behave different
 */

const promiseTest = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise is resolved after 10sec."), 10000);
});

//Promise resolved using Async Await
async function test() {
    //This execute before resolve the promise
    console.log("Execute before promise resolved");
    const testPromise = await promiseTest;
    console.log(testPromise);
    //This wait for resolve the promise and then execute
    console.log("This print after testPromise Execute.");
}
test();

//Promise resolve without Async Await
function testData() {
    promiseTest.then((res) => console.log(res));
    //This is not wait for resolve the promise and execute
    console.log("This will print without waiting.");
}
testData();
