//Prototypal Inheritance

var x = function (j) {
    this.j = j
    this.GetJ = function () {
        return this.j
    }

}
//create object of x
//x1,x2 inherits all the methods and properties
let x1 = new x(2)
let x2 = new x(3)
console.log(x1.GetJ())
console.log(x2.GetJ())


//Creating a prototype
var y = function (j) {
    this.j = j
}
y.prototype.GetJ = function () {
    return this.j
}
//create object of x
//y1,y2 uses y's method instead on inheritng it
let y1 = new y(10) // Looks up to its parent componenet, here proto
let y2 = new y("Value")
console.log(y1.GetJ())
console.log(y2.GetJ())

