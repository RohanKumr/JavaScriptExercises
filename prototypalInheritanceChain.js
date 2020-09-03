
//Base Class
let Job = function () {
    this.pays = true
};

//prototype method
Job.prototype.print = function () { console.log(this.pays ? "Hire" : "Pass") };

//Sub Class
let TechJob = function (title, pays) {
    Job.call(this)

    this.title = title;
    this.pays = pays;
}


TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

let softwarePosition = new TechJob("javascript", true)
let softwarePosition2 = new TechJob("C#", false)

softwarePosition.print()
softwarePosition2.print()