function reverseString(str) {
  let reversed = '';
  for (let i = str.length; i >= 0; i--) {
    reversed += str[i];
  }
  return console.log(reversed);
}
reverseString('lochan');
