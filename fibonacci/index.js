function fibonacciSeries(numTerms) {
  let fibSeries = [];

  // First two terms of Fibonacci series
  let num1 = 0;
  let num2 = 1;
  fibSeries.push(num1);
  fibSeries.push(num2);

  // Generate subsequent terms
  for (let i = 2; i < numTerms; i++) {
    let nextNum = num1 + num2;
    fibSeries.push(nextNum);
    num1 = num2;
    num2 = nextNum;
  }

  return fibSeries;
}
console.log(fibonacciSeries(10));

function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));
