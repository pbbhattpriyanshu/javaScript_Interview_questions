//Promises: A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//promise is replace by async/await in modern javascript

const response = fetch('https://jsonplaceholder.typicode.com/todos/2');
const data = response.then((res) => res.json())

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

fetchData().then((data) => {
    console.log("Data fetched successfully",data);
})
.catch((error) => {
    console.log("Error fetching data",error);
})