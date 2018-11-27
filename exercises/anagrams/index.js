// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMapA = generateCharMap(stringA);
  const charMapB = generateCharMap(stringB);

  return charMapA === charMapB;
  //return JSON.stringify(charMapA) === JSON.stringify(charMapB);
}

function generateCharMap(str) {
  let charMap = {};
  str = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  //   for (let char of str) {
  //     //let ascii = char.toUpperCase().charCodeAt();
  //     //if (ascii >= 65 && ascii <= 90)
  //     if (!charMap[char]) charMap[char] = 1;
  //     else charMap[char]++;
  //   }
  //   return charMap;

  return str;
}

module.exports = anagrams;
