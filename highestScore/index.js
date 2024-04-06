function highestScoringWord(str) {
  const words = str.toLowerCase().split(' ');
  const scores = words.map(word => {
    let score = 0;
    for (const letter of word) {
      score = letter.charCodeAt(0) - 96;
    }
    return score;
  });
  let higestScore = scores[0];
  for (const rank of scores) {
    if (rank > higestScore) {
      higestScore = rank;
    }
  }
  return higestScore;
}

console.log(highestScoringWord('I z lochan potdar'));
