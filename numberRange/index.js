function numberRange(startnum, endNum) {
  if (startnum === endNum) {
    return [startnum];
  }
  const numbers = numberRange(startnum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

console.log(numberRange(3, 7));

function printNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [startNum];
  }
  const numbers = [];
  for (let i = startNum; i <= endNum; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(printNumbers(3, 7));
