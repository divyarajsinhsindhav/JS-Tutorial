const cart = {
    1: "Vision",
    2: "MacMini",
    3: "iMac",
}

//Consumer Side Code
createOrder(cart)
    .then(function(orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) { 
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function(err) {
        console.log(err.message);
    })
    .then(function() {
        console.log("What ever happen this will be called because this statment is after .catch")
    })

////////////////////////////////////////////////////////

//Producer Side Code
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!emptyCart(cart)) {
            const er = new Error("Cart is Empty");
            reject(er);
        }
        const orderId = "3fGh6780";
        if(orderId) {
            resolve(orderId);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful for " + orderId)
    });
}

function emptyCart() {
    return true;
}

