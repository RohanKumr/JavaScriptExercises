//var Scope
function scope() {
    if (true) {
        var i = 1
    }
    //var respects function boundaries
    //but it doesnt respect if or for statements
    console.log(i)
}
scope()

//Hoisting
function x() {
    console.log(y) //No error, undefined
    var y = 1;
}
//It reads it as
function z() {
    var w;// lifts it up
    console.log(w)
    w = 1
}
x()
z()

//Hoisting Question
//What's the output?
var outside = 2;
function hoisting() {
    console.log("Hoisting output: " + outside)
    var outside = 1;
}

hoisting();

//let SCOPE
//function boundaries
//respects if else , for statement boundaries

let letItBe = function () {
    console.log(xyz);
    let xyz = 2; // No hoisting with  let

    if (true) {
        let pqr = 4;
    }
    console.log(pqr) // Doesnt exist
}
letItBe();
