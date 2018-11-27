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

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

// function steps(n) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     let x = 0;

//     // Generate the hashes
//     for (x = 0; x <= i; x++) {
//       result += "#";
//     }

//     //Right pad
//     for (let a = x; a < n; a++) {
//       result += " ";
//     }
//     console.log(result);
//     result = "";
//   }
// }

module.exports = steps;
