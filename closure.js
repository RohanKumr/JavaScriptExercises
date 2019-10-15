console.log("Working");

function wrapper() {
  var one = 1;
  function closure() {
    console.log("Closure Value: " + one);
  }
  return closure;
}

const closure = wrapper();

closure();
