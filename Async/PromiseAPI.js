const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("ERROR in P1"), 3000);
    // setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("ERROR in P2"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("ERROR in P3"), 2000);
});

//Promise.all()
/**
 * Executes multiple promises concurrently and returns a new promise that is fulfilled with an array of the results.
 * If any of the promises reject, the returned promise will be rejected with the reason of the first promise that rejects.
 */

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });


//Promise.allSettled()
/**
 * Wait for all promises to be settled, and return a promise that is fulfilled with an array of promise state snapshots, but only after all the original promises have settled, i.e. become either fulfilled or rejected.
 */

Promise.allSettled([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });

//Promise.race()
/**
 * Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
 */
Promise.race([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });

//Promise.any()
/**
 * Returns a promise that fulfills as soon as one of the promises in an iterable fulfills, or rejects if all of the promises in the iterable reject.
 */
Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors);
    });






