/* First-class functions 
are when functions in that language are treated like any other variable */

//Assign a function as a variable
let sayHello = () => "Hello";
console.log(sayHello())

//Pass a function as an argument
let greetThePerson = (greet, name) => console.log(greet + name)
greetThePerson(sayHello(), " Random Person")

//Return a functiom from a function
//a.k.a Higher Order functions

let greeter = (greeting) => {
    return function (name) {
        console.log(greeting + " " + name)
    }
}

let greet = greeter("Welcome")
greet("Rohan")
//use double parentheses to invoke the returned function as well
greeter("Hey")("Rohan")
