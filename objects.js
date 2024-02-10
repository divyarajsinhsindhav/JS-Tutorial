const mySym = Symbol("Platinum");

//Here key is consider as string.
//Non-Singlton Object
const Product = {
    id: 1,
    name: "iPhone 15 pro max",
    brand: "Apple",
    price: "$999",
    color: ["Black", "White", "Green"],
    [mySym]: "Key1",
    addTocart: function(){
        console.log("This can't be print");
    }
}

console.log(Product);
console.log(Product.id)
console.log(Product["color"])
console.log(Product[mySym])

// Object.freeze(Product) //After this we can't apply any change in Product Object


//Get property Description of Object key
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

const descriptorOfProperty = Object.getOwnPropertyDescriptor(Product, "name")
console.log(descriptorOfProperty)

//define Property
Object.defineProperty(Product, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Product, "name"));

//loop in Objects
/*
 * Here name is not print becuase enumerable property of "name" is false 
 */
for (let [key, value] of Object.entries(Product)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); 
    }
}

//Singlton Object
const amazonUser = new Object();

amazonUser.id = "23489abc0102"
amazonUser.userName = "Jhon"
amazonUser.fullName = {
    userFullname: {
        firstName: "Jhon",
        lastName: "Doe"
    }
} 

console.log(amazonUser.fullName.userFullname.lastName)

//Object assign
const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"c", 4:"d" }

/*
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

@param target — The target object to copy to.

@param source1 — The first source object from which to copy properties.

@param source2 — The second source object from which to copy properties.
 */
const obj3 = Object.assign( {}, obj1, obj2 )
console.log(obj3)

/*
Spread Operator
...
*/
const obj4 = {...obj1, ...obj2}
console.log(obj4)

//We get data from database in this formate
const gmailId = [
    {
        id: 123,
        username: "Aryan",
        email: "aryan@gmail.com",
        gender: "male"
    },
    {
        id: 345,
        username: "Priya",
        email: "priya@gmail.com",
        gender: "female"
    },
    {
        id: 932,
        username: "Vatsal",
        email: "vatsal@gmail.com",
        gender: "male"
    }
]

//Map and Filter in Object
gmailId.map(userId => {
    console.log(userId)
})
let filterGmailId = gmailId.filter((userId) => {
    return userId.gender == 'male'
})
console.log(filterGmailId)

//Some methods
console.log(Object.keys(amazonUser))
console.log(Object.values(amazonUser))
console.log(Object.entries(amazonUser))
console.log(Object.entries(amazonUser.fullName))

//Check property is exist or not in Object
console.log(amazonUser.hasOwnProperty('fullName'))

const youtubeChannle = {
    id: "f4GnbC5Hj90",
    name: "Computer Science Stack",
    owner: "David J. Malan"
}

const {owner} = youtubeChannle
console.log(owner);
