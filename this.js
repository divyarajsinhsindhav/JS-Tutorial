//'use strict';

/*
global scope
*/
console.log(this) //globalObject

/*
inside the Function
=>If we use strict mode then output is undefined
else globalObject
*/
function node(){
    //Depends on strict / non-strict mode
    console.log(this);
}
node();

/* 
this inside non-strict mode - (this keyword substitution)
// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode
*/ 

/*
this keywordvalue is depends on how the function is called
*/
node(); //globalObject
// window.node(); in case of strict mode gives globalObject window

/**
 * this keyword inside the object's method
 */
const obj = {
    a: 10,
    //this is the method
    x: function() {
        console.log(this); //Inside the method value of this keyword is object
    },
};
obj.x();

/*
 *call, apply, bind (sharing method)
 */
const student1 = {
    name: "Peter",
    printName: function() {
        console.log(this);
    },
};
student1.printName();

const student2 = {
    name: "MJ",
}
//function borrowing
student1.printName.call(student2); //Here, this keyword value is override by student2.name


/**
 * this keyword inside the arrow function
 */

const obj1 = {
    name: "Stark",
    //enclosing lexical context
    //global
    printName: () => {
        console.log(this) //Here, this keyword is behave like globalObject
    }
}
obj1.printName();

/**
 * this keyword inside the nested arrow function
 */
const obj2 = {
    name: "Steve",
    x: function() {
        //enclosing lexical context
        //function
        //Here arrow function behave like console.log(this) inside the function
        const printName = () => {
            console.log(this)
        }
        printName();
    }
}

obj2.x()


