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

function chunk(array, size) {
  let result = [];
  //const array = array;

  for (let i = 0; i < array.length; i = i + size) {
    // const clone = array.slice();
    // const spliced = clone.splice(i, size);
    // result.push(spliced);
    // i = i + size - 1;
    //result.push(array.splice(i, size));
    //array.splice(0, size);
    const slice = array.slice(i, size + i);
    result.push(slice);
  }

  return result;
}

module.exports = chunk;
