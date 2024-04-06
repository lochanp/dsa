function countDownRecursion(num) {
  if (num <= 0) {
    console.log('Done');
    return;
  }
  console.log(num);
  num--;
  countDownRecursion(num);
}

countDownRecursion(31);

function sumupto(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumupto(num - 1);
}
console.log(sumupto(5));
