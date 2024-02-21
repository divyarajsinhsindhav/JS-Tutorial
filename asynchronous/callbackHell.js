/**
 * In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.
 */

const message = function() {
    console.log("This is callback hell");
}
//Here, setTimeout is inbuilt callback function of javascript
setTimeout(message, 3000);

/**
 * What is an Anonymous Function?
Alternatively, we can define a function directly inside another function, instead of calling it. It will look like this:
 */
setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);

/**
 * Callback as an Arrow Function
 */
setTimeout(() => {
    console.log("Arrow function");
}, 2000)


//Use Promise is better then this method 
//This is called pyramid of doom
//This is callback hell
const cart = ["iMac", "Vision", "iPod"];
createOrder(cart, function(orderId) {
    proceedTopayment(orderId, function(paymentInfo) {
        showOrderSummery(paymentInfo, function() {
            updateWalletBalance();
        })
    });
})