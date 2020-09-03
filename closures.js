//Basic Closure
let name = "xyz";

function x() {
    //inner function has access to the outer function
    console.log(name)
}
name = "Rohan"
x()
name = "ROHAN"
x()


//Passing function in closues
function Outerfunction(outer) {
    return function innerFunction(inner) {
        console.log("Outer: " + outer)
        console.log("Inner: " + inner)
    }
}

let NewFunction = Outerfunction("Out")
NewFunction("inner")

//preserving closure values
var mulTo = function (passed) {
    var multiply = function (inner) {
        return passed * inner;
    }
    return multiply;
}

var mul3 = new mulTo(3);
var mul2 = new mulTo(2);

console.dir(mul2)
console.log(mul2(5))
console.log(mul3(5))
