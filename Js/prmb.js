const str = "121";

const reversestr   = str.split('').reverse().join('');

if (reversestr == str) {
    console.log("Given string is palindrome");
} else {
    console.log("Given string is not palindrome")
}
console.log(reversestr);

console.log([] + {});
console.log([] + []);

var a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
console.log(a);
test();
console.log(a);