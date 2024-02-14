// IIFE creation and execution. 
(function() {
    console.log("Hello, there");
})();

function test() {
    console.log("Pass 1"); //<--First give this in output
    (function() {
        console.log("Pass 2") //<-- Second output
    })();
    console.log("Pass 3");
};
test();