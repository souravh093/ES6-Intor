const max = Math.max(13, 82, 99, 123);
// console.log(max);

const numbers = [12, 32, 923, 1234, 1235, 12];

const largest = Math.max(numbers);
console.log(Math.max(...numbers));
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(532);
numbers2.push(432); 
console.log(numbers);
console.log(numbers2);

