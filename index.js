// index.js

// Function expression called divide
const divide = function (a, b) {
  return a / b;
};

// Arrow function called square
const square = (x) => x * x;

// Arrow function called add
const add = (a, b) => a + b;

// Export the functions to make them accessible in other files (like your test file)
module.exports = {
  divide,
  square,
  add,
};
