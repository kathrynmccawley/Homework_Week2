function pyramidPattern(rowNumber) {
  for (let i = 1; i <= rowNumber; i++) {
    var row = " ";
    for (let j = 1; j <= i; j++) {
      row += "#";
    }
    console.log(row);
  }
}

pyramidPattern(8);
