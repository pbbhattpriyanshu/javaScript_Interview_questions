//What is closure
// A closure is a function that has access to its outer function's scope even after the outer function has returned.
// In simple words, a closure is a function that remembers the environment in which it was created.

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter(); //Clousre don't remind values instead it reminds variable, in this case count is the variable, increment only works is keep function alive
console.log( increment());