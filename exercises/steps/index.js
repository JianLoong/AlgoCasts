// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    let x = 0;
    for (x = 0; x <= i; x++) {
      result += "#";
    }
    for (let a = x; a < n; a++) {
      result += " ";
    }
    console.log(result);
    result = "";
  }
}

module.exports = steps;
