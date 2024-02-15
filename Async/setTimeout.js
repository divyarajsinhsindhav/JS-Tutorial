function testTimeout() {
    console.log("Delay");
}

function test() {
    console.log("Without Delay");
}

setTimeout(testTimeout, 3000);
test();