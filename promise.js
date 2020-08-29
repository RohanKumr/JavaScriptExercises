//PROMISE 
//Promise to do ths
var cleanTheRoom = new Promise(function (resolve, reject) {
  //thing to do
  let isClean = false;

  //has it been done
  if (isClean) {
    resolve("Clean");
  } else {
    reject("notClean");
  }
});

//if done
cleanTheRoom
  .then(function (fromResolve) {
    console.log("Promise example: The room is " + fromResolve);
  })
  .catch(function (fromReject) {
    console.log("Promise example: The room is " + fromReject);
  });



//MULTIPLE PROMISES
let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("cleanedRoom");
  });
}
let garbage = function (msg) {
  return new Promise(function (resolve, reject) {
    return resolve(msg + " garbage");
  });
}
let iceCream = function (msg) {
  return new Promise(function (resolve, reject) {
    return resolve(msg + " iceCream");
  });
}
//Case 1
//Complete promises in order
cleanRoom().then(function (result) {
  return garbage(result);
}).then(function (result) {
  return iceCream(result);
}).then(function (result) {
  console.log("Case 1: Completed " + result)
});
//Case 2
//Complete all promises
Promise.all([cleanRoom(), garbage(), iceCream()]).then(function () {
  console.log("Case 2: ALL DONE")
});
//Case 3
//Complete any one of them 
Promise.race([cleanRoom(), garbage(), iceCream()]).then(function () {
  console.log("Case 3: One of them completed")
});

console.log("Examples")

