// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let result = 0;
//   for (let char of str.toLowerCase()) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     )
//       result++;
//   }
//   return result;
// }

function vowels(str) {
  let result = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) result++;
  }
  return result;
}

// Regular expression solution

module.exports = vowels;
