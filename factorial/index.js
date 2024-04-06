function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(factorial(5));

function factorial1(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial1(n - 1);
}

console.log(factorial1(5));
