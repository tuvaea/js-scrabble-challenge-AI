// Letter values mapping
const letterScores = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

// Main scrabble function
function scrabble(word) {
  if (!isValidWord(word)) return 0;

  // Check if it's a double or triple word score
  let wordMultiplier = 1;
  word = word.trim();
  if (word.startsWith('{') && word.endsWith('}')) {
    wordMultiplier = 2;
    word = word.slice(1, -1);
  } else if (word.startsWith('[') && word.endsWith(']')) {
    wordMultiplier = 3;
    word = word.slice(1, -1);
  }

  let totalScore = 0;
  let i = 0;
  while (i < word.length) {
    let char = word[i].toUpperCase();
    let letterMultiplier = 1;

    if (char === '{' && word[i + 2] === '}') {
      letterMultiplier = 2;
      char = word[i + 1].toUpperCase();
      i += 2;
    } else if (char === '[' && word[i + 2] === ']') {
      letterMultiplier = 3;
      char = word[i + 1].toUpperCase();
      i += 2;
    }

    totalScore += (letterScores[char] || 0) * letterMultiplier;
    i++;
  }

  return totalScore * wordMultiplier;
}

// Helper function to validate the input
function isValidWord(word) {
  return typeof word === 'string' && word.trim() !== '';
}


module.exports = scrabble;
