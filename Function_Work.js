let x = 10; // Global variable
test1(); // Outputs: 20
test2(); // Outputs: 30
console.log(x); // Outputs: 10
test3(); // Outputs: 40
 

function test1() {
    let x = 20; // Local variable
    console.log(x);
}

function test2() {
    let x = 30; // Local variable
    console.log(x);
}

function test3() {
    x = 40; // Modifies global variable
    console.log(x);
}