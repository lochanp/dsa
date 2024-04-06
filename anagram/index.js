function anagrams(str1, str2) {
  const string1 = str1.toLowerCase().split('').sort().join('');
  const string2 = str2.toLowerCase().split('').sort().join('');
  if (string1 !== string2) {
    return false;
  } else {
    return true;
  }
}

console.log(anagrams('listen', 'slient'));
