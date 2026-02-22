//Why we use: setTimeout
// setTimeout is used to delay the execution of a function
// It is also used to execute a function after a certain time interval

//setTimeout

const timeId = setTimeout(() => {
  console.log("This is from the Task Oueue (setTimeout)");
}, 1000);


//setInterval: It is used to execute a function after a certain time interval

const timeid = setInterval(() => {
  console.log("This is from the Task Oueue (setInterval)");
}, 1000);

//clearInterval: It is used to clear the interval set by setInterval

clearTimeout(timeId);
clearInterval(timeid);
