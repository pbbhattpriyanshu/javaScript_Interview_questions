console.log(a); // undefined
console.log(b); // not defined
console.log(c); // undefined

var a = 10;
var c;

console.log(a); // 10
console.log(c); // undefined


//undefined -> variable 'a' is hoisted and initialized as undefined
//not defined -> variable 'b' is not declared at all, so accessing it throws a ReferenceError