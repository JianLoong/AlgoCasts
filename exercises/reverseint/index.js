// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  n = (n + "").split("");

  if (sign === -1) n.shift();

  const result = parseInt(n.reverse().join(""));

  return sign !== -1 ? parseInt(result) : result * -1;

  // return sign !== -1
  //   ? parseInt(n.reverse().join(""))
  //   : parseInt("-" + n.reverse().join(""));
}

module.exports = reverseInt;
