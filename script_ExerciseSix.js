let rows = " ";

for (var x = 1; x <= 8; x++) {
  for (var y = 1; y <= 8; y++) {
    if ((x + y) % 2) {
      rows += " ";
    } else {
      rows += "#";
    }
  }
  rows += "\n";
}

console.log(rows);
