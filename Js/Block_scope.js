var a = 10; // Globle scope
let b = 30;

{
    var a = 20; // mutate the global variable
    let b = 70;
    const c = 40;   
    console.log(a); // 20
    console.log(b); // 70 block >> global
    console.log(c); // 40
}

console.log(a); // 20
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined