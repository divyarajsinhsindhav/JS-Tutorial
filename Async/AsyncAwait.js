/**
 * Async function always return a promise.
 * Without write Promise it will return the promise.
 * If return is not promise then it will wrapped inside the promise.
 * If return value is already promise then it will not wrapped in another promise.
 */
async function getData() {
    return "getData";
}
const data = getData();
console.log(data); 

data.then((res) => {
    console.log(res);
})

