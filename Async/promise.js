/*
const cart = ["White Night", "The Metamorphosis", "Steve Jobs"];

const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
});
*/

/*
const GITHUB_API = 'https://api.github.com/users/divyarajsinhsindhav';

const user = fetch(GITHUB_API);

user.then(function(data) {
    console.log(data);
});
*/

//Insted of callback hell use promise chaining
createOrder(cart)
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        return showOrderSummery(paymentInfo);
    })
    .then(function() {
        return updateWalletBalance();
    });