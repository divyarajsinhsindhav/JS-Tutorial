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
