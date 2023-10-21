const person = {
    name: 'Divyarajsinh',
    age: '19',
    profession: 'student'
}

// console.log(person)
// console.log(person.name)

const introducton = (name, age, profession, assets, liabilities) => {
    const person = {
        name: name,
        age: age,
        profession: profession,
        assets: assets,
        liabilities: liabilities,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }
    const intro = `hi, my name is ${person.name} & my age is ${person.age}. I am ${person.profession}. My netWorth is $${person.netWorth()} USD.`
    return intro
}

console.log(introducton('Tony Stark', '35', 'Iron Man', 10000000, 4000000))