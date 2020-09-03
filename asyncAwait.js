//https://jsonplaceholder.typicode.com/users

//Async await with fetch

async function users() {

    const resonse = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await resonse.json();

    console.log(data)
}
users()