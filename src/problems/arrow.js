const add = (arr) => {
  let temp = 1;
  arr.map((number) => (temp = temp * number));
  return temp
};

const numbers = [10, 5, 10];

const result = add(numbers)

console.log(result)

