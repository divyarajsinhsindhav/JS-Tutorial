// const user1 = {
//     name: "Peter",
//     age: 67,
//     printName: function() {
//         console.log(this.name);
//     },
// };

// user1.printName();

// const user2 = {
//     name: "Frank",
//     age: 78,
// };

// user1.printName.call(user2); //function borrowing

const member1 = {
    name: "Frank Underwood",
    age: 58,
}

const member2 = {
    name: "Joe",
    age: 40,
};

let printDetails = function(){
    console.log(this);
};

let printName = function(city, country) {
    console.log(this.name + " , " + city + " , " + country);
}

printDetails.call(member1);
printDetails.call(member2);

//We can also pass the arguments
printName.call(member1, "NewYork", "USA");

//Using apply we can pass the arguments in array formate
printName.apply(member2, ["SanFransisco", "USA"]);

//Bind
let newFun = printName.bind(member1, "Florida", "USA");
newFun();
