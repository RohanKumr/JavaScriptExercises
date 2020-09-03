//Immediately Invoked Function Expression


//function express
let greet = function (name) {
    var greetWith = "Hey, "
    return console.log(greetWith + "" + name)
}
//invoke 
greet("Rohan");

// IIFE 
// anonymous function
(function (name) {
    var greetWith = "Hey, "
    return console.log(greetWith + "" + name)
})("Person");

// Example
let counter = (function () {
    var i = 0;
    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val
            return i;
        },
        increment: function () {
            return ++i
        }
    }
})();

console.log(counter.get())
counter.set(7)
console.log(counter.get())
console.log(counter.increment())
