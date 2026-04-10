// Map method
// we use map method when we want to perform some operation on each element of an array and return a new array with the result

const number = [1,2,3,4,5];
const double = number.map(num => num *2);

// why we use map method
// because it is more concise and readable than a for loop
// and it is a functional programming approach
// and it does not modify the original array

const users = [
    {  
        name: "Piyush",
        age: 22
    },
    {   name: "Pankaj",
        age: 19
    },
    {
        name: "Bhaskar",
        age: 25
    }
];

//map method
console.log(users.map(user => {
    return {
        ...user, // spread operator to copy all properties of the user object
        age: user.age + 5
    }
}));

//for loop
const newUsers = [];
for(let i=0; i<users.length; i++){
    newUsers.push({
        ...users[i],
        age: users[i].age + 7
    });
}
console.log(newUsers);

//for each loop
const newUsers2 = [];
users.forEach(user => {
    newUsers2.push({
        ...user,
        age: user.age + 9
    });
});
console.log(newUsers2);