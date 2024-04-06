function checkValidIP(ipAdd) {
  let arr = ipAdd.split('.');
  const numbersArray = arr.map(str => parseInt(str));
  console.log(numbersArray);
  for (let i = 0; i < numbersArray.length; i++) {
    console.log(arr);
    if (numbersArray[i] > 255 || numbersArray[i] < 0 || numbersArray[i].length < 2 || numbersArray.length !== 4) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(checkValidIP('12.032.34.232'));
