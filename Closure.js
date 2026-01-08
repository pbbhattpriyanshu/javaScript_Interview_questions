function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter(); //Clousre don't remind values instead it reminds variable, in this case increment is the variable
console.log( increment());