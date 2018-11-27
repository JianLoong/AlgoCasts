// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

// function fib(n) {
//   let mem = [];
//   mem[0] = 0;
//   mem[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     mem[i] = mem[i - 1] + mem[i - 2];
//   }

//   return mem[n];
// }

// function fib(n) {
//   if (n <= 1) return n;
//   let fib = 1;
//   let prevFib = 1;

//   for (let i = 2; i < n; i++) {
//     let temp = fib;
//     fib += prevFib;
//     prevFib = temp;
//   }
//   return fib;
// }

// Recursive solution
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
