//Async/Await: Async/await is a modern JavaScript feature that provides a more concise and readable way to handle promises. It allows you to write asynchronous code that looks synchronous, making it easier to understand and maintain.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        
        const data = await response.json();
        console.log("Data fetched successfully", data);
    } catch (error) {
        console.log("Error: ", error)
    }
}

fetchData();