function printWithDelay(delay) {
    setTimeout(() => {
        console.log("Logged!");
    }, delay);
}

const delays = [100, 200, 500, 4667];

for(let delay of delays) {
    printWithDelay(delay);
}

console.log("Completed");
