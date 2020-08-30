let promise = new Promise(function (resolve, reject) {
    let status = false;
    status ? resolve("Fulfilled") : reject("Pending")

});

promise
    .then((fromResolve) => console.log("Promise is " + fromResolve))
    .catch((fromReject) => console.log("Promise is " + fromReject))


let promise1 = () => new Promise((resolve) => resolve("promise1"))
let promise2 = (msg) => new Promise((resolve) => resolve(msg + " promise2"))
let promise3 = (msg) => new Promise((resolve) => resolve(msg + " promise3"))

promise1()
    .then((result) => promise2(result))
    .then((result) => promise3(result))
    .then((result) => console.log(result + " ALL DONE!"))

Promise.all([promise1(), promise2(), promise3()]).then(() => console.log("All completed"))
Promise.race([promise1(), promise2(), promise3()]).then(() => console.log("One Completed"))
