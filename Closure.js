function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter(); //Clousre don't remind values instead it reminds variable, in this case count is the variable, increment only works is keep function alive
console.log( increment());