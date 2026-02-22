// Map method
// we use map method when we want to perform some operation on each element of an array and return a new array with the result

const number = [1,2,3,4,5];
const double = number.map(num => num *2);
console.log(double);

// why we use map method
// because it is more concise and readable than a for loop
// and it is a functional programming approach
// and it does not modify the original array

console.log(number);
