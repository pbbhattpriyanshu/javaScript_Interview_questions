//Currying: Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument.

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(2)(9));

//without currying
function add(a, b, c) {
    return a + b + c;
}

console.log(add(2, 2, 9));

//why we use currying
//1.Partial Application: Currying allows you to create partial applications of a function, where you can fix some of the arguments and return a new function that can be called with the remaining arguments.
//2.Function Composition: Currying makes it easier to compose functions, where you can chain multiple functions together to create a new function.
//3.Memoization: Currying can be used to memoize the results of a function, where you can store the results of a function and return the cached result when the same arguments are passed again.
