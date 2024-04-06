function validatePassword(pass) {
  const isValidLength = pass.length > 8;
  const hasUpperCase = pass.split('').some(char => char === char.toUpperCase() && char !== char.toLowerCase());
  const hasLowerCase = pass.split('').some(char => char !== char.toUpperCase() && char === char.toLowerCase());
  const hasDigitCase = pass.split('').some(char => !isNaN(parseInt(char)));

  console.log(isValidLength, hasUpperCase, hasLowerCase, hasDigitCase, !isNaN(parseInt('223edcc')));
  return isValidLength && hasDigitCase && hasUpperCase && hasLowerCase;
}
console.log(validatePassword('PPPAAasssssss@32223'));
