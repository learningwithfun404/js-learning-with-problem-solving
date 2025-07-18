// array.reduce((accumulator, currentValue) => {
//   // logic
// }, initialValue);

// acc = 0
// acc = 10
// acc = 35
// acc = 65

const multiple = (arr) => {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const numbers = [10, 25, 30];

const result = multiple(numbers);

console.log(result);
