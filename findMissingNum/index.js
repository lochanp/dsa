function findMissingNum(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  // let actualSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   actualSum += arr[i];
  // }
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNum([1, 3, 4, 5, 6]));
