// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let result = [];
//   let temp = [];
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (temp.length != size) temp.push(array[i]);
//     if (temp.length == size) {
//       result.push(temp);
//       temp = [];
//       count++;
//     }

//     if (i === array.length - 1 && array.length - count * size > 0)
//       result.push(temp);
//   }

//   return result;
// }

// Difference between slice and splice.
// Splice changes the array, slice does not.
// function chunk(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i = i + size) {
//     const slice = array.slice(i, size + i);
//     result.push(slice);
//   }

//   return result;
// }

function chunk(array, size) {
  const result = [];
  for (let element of array) {
    const last = result[result.length - 1];
    if (!last || last.length === size) {
      result.push([element]);
    } else {
      last.push(element);
    }
  }

  return result;
}

module.exports = chunk;
