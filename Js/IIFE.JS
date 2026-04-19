//IIFE is stand for Immediately Invoked Function Expression
// It is a function that is executed immediately after it is defined
// It is used to create a private scope for variables
// It is also used to avoid polluting the global scope
// It is a function that is executed immediately after it is defined
// It is used to create a private scope for variables
// It is also used to avoid polluting the global scope


//normal function
function greet(){
    console.log("Namaste");
}

greet();

//IIFE
(function(){
    console.log("Hello World");
})();