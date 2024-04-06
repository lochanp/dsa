function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return console.log(alphabet[startIndex + i], arr[i]);
    }
  }
  return '';
}
findMissingLetter(['l', 'm', 'o']);
