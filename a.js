// const num1 = [[1]];
const num2 = [2, [3, 3]];

const numbers = num2.concat(2,[3,3]);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
// num1[0].push(4);

// console.log(numbers);
// results in [[1, 4], 2, [3]]
// const letters = Array.from(new Set(["a","b","c"]));
// console.log(letters)
const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
