// var → hoisted but initialized as undefined
getName(); // Hello JS
console.log(greet); // undefined => function expression not hoisted
console.log(day); // undefined => function expression not hoisted
console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization

var x = 7;
let y = 9; // let → not hoisted

var greet = () => {
    console.log("Hi there!");
}

var day = function() {
    console.log("Today is Friday");
}

function getName() {
    console.log("Hello JS");
}

