class Student {
    //Setup
    constructor(name, age, branch) {
        console.log("The Student is created");
        this.name = name;
        this.age = age;
        this.branch = branch;
        let detail = `Student name is ${name}, and the age is ${age}. Study in the ${branch}.`;
        console.log(detail);
    }

    getStudent() {
        let student_detail = {
            name: this.name,
            age: this.age,
            branch: this.branch
        }
        console.log(student_detail);
    }
}

let student1 = new Student("Divyrajsinh", "19", "AI & DS");
let student2 = new Student("Devid", "20", "Computer Science");

let students = [];
students.push(student1);
students.push(student2);

students.forEach(student => student.getStudent());




