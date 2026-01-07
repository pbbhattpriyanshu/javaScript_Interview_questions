function first() {
  second();
  console.log("Done"); //2nd
}

function second() {
  console.log("Hello"); //1st
}

first();