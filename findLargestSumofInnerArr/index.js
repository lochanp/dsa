function sumArray(arr) {
  let largestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    if (sum > largestSum) {
      largestSum = sum;
    }
  }

  return largestSum;
}

console.log(
  sumArray([
    [3, 4, 3],
    [5, 3, 1],
    [2, 9, 1]
  ])
);
