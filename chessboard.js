// CHESSBOARD

var height = 100;
var width = 100;

for (i = 1; i < height + 1; i++) {
  var line = "";

  for (j = 1; j < width + 1; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        line += " ";
      } else {
        line += "#";
      }
    } else {
      if (j % 2 !== 0) {
        line += "#";
      } else {
        line += " ";
      }
    }

    if (j === width - 1) {
      console.log(line);
    }
  }
}
