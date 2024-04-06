//string that reads the same forwards and backwards eg. madam
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = formattedStr.split('').reverse().join('');
  console.log(formattedStr, reversedString);
  if (formattedStr === reversedString) {
    console.log('is Palindrome');
  } else {
    console.log('not a palindrom');
  }
}
isPalindrome('madam');
