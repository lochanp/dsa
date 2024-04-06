function hashtagGenerator(str) {
  if (str.length > 140 || str === 0) {
    return false;
  }
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  const camelCase = '#' + words.join('');
  return camelCase;
}
console.log(hashtagGenerator('Javscript is the best'));
