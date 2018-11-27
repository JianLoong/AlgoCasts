// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Will always right and left pad 2
function pyramid(n) {
  let padAmount = n - 1;
  let result = "";
  for (let a = 0; a < n; a++) {
    for (let b = a; b < padAmount; b++) {
      result += " ";
    }
    let hashNumber = a * 2 + 1;
    for (let c = 0; c < hashNumber; c++) result += "#";

    for (let b = a; b < padAmount; b++) {
      result += " ";
    }
    console.log(result);
    result = "";
  }
}

module.exports = pyramid;
