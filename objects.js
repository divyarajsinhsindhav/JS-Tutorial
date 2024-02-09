const mySym = Symbol("Platinum");


//Here key is consider as string.
const Product = {
    id: 1,
    name: "iPhone 15 pro max",
    brand: "Apple",
    price: "$999",
    color: ["Black", "White", "Green"],
    [mySym]: "Key1"
}

console.log(Product);
console.log(Product.id)
console.log(Product["color"])
console.log(Product[mySym])

Object.freeze(Product) //After this we can't apply any change in Product Object