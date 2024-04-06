function countOccurances(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurances('hellloooo', 'o'));

function mostUsedCharacter(str) {
  // Initialize an empty object to store character counts
  let charCount = {};

  // Iterate through each character in the string
  for (let char of str) {
    // If the character already exists in the charCount object, increment its count
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // If the character doesn't exist in charCount object, initialize its count to 1
      charCount[char] = 1;
    }
  }

  let mostUsedChar = '';
  let maxCount = 0;
  // Iterate through the charCount object to find the character with the maximum count
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      mostUsedChar = char;
      maxCount = charCount[char];
    }
  }

  return mostUsedChar;
}

let str = 'hellloo';
console.log('Most used character:', mostUsedCharacter(str));
