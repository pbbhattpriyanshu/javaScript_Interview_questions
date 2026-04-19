//Splice Method
//The splice()  Modifies the original array by adding, removing, or replacing elements. splice(startingindex, count element Remove, add, replace)

let fruits = ["Apple", "Mango", "Pineapple", "Watermelon", "Guvava"];

//Remove
fruits.splice(2,1)
console.log(fruits);

//Add
fruits.splice(2, 0, "Carrot");
console.log(fruits);

//Replace
fruits.splice(2,2,"Cucumber", "Kinu");
console.log(fruits);