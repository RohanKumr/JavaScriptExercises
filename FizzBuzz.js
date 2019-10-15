for (i = 0; i < 100; i++) {
  if (i % 5 === 0) {
    if (i % 3 === 0) {
      console.log("                    " + i + ": FizzBuzz");
    } else if (i % 3 !== 0) {
      console.log("         " + i + ": Buzz");
    }
  } else if (i % 3 === 0) {
    console.log(i + ": Fizz");
  }
}
