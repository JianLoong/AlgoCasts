// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Second way
// function reverse(str) {
//   let result = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

//Third way
// function reverse(str) {
//   let result = "";
//   for (let char of str) {
//     result = char + result;
//   }
//   return result;
// }

//Forth way
function reverse(str) {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
