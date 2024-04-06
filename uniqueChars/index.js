function areAllCharsUnique(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      return false;
    }
    charCount[str[i]] = true;
    // console.log(charCount[char]);
  }
  return true;
}
console.log(areAllCharsUnique('abscdra'));
