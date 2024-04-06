function sumOfEvenNums(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  let sum = 0;
  for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
  }
  return sum;
}

console.log(sumOfEvenNums([2, 4, 2, 4, 5]));

function SumOfEvenSquares(numbers) {
  const evenNumSquares = numbers
    .filter(num => num % 2 === 0)
    .map(num => num ** 2)
    .reduce((sum, num) => sum + num, 0);
  return evenNumSquares;
}

console.log(SumOfEvenSquares([3, 1, 3, 1, 4, 5, 6, 1]));
