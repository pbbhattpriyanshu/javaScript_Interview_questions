//Destructring

const user = {
    name: "Piyush",
    age: 21,
    occupation: "Student"
}

/*let name = user.name;
let age = user.age;
let occupation = user.occupation; */

const { name, age, occupation} = user

console.log(name, age, occupation);