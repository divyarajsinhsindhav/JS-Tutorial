const obj = {
    name: this,
    age: this,
    getDetails: function() {
        return [{name: this.name, age: this.age}];
    }
}

const mainObj = {
    name: "Tom",
    age: 26,
    __proto__: obj
}

let user = mainObj.getDetails();
console.log(user);



const cities = ["Tokyo"];
Array.prototype.show = function() {
    return this;
}

console.log(cities.show())

Array.prototype.convertIntoObject = function() {
    let newObj = {};
    this.forEach( element => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject());




