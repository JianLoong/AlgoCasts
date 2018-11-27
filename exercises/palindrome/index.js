// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   if (str === reverse(str)) return true;
//   return false;
// }

function reverse(str) {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// function palindrome(str) {
//   const maxIndex = str.length - 1;
//   for (let i = 0; i <= maxIndex; i++)
//     if (str[i] != str[maxIndex - i]) return false;
//   return true;
// }

//Every helper does a boolean check on every element on the array.

module.exports = palindrome;
