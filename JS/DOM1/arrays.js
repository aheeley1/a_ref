


//avoid mutating arrays and objects when possible
//prefer creating a new one
// more predicatable, less unexpected bugs, especially when working with libraries like React
// improves performance in reactive frameworks
// safer code and easier to debug
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];  // not numbers.push(4)
console.log(numbers);

// use Set to remove a duplicate item from an array
// instead of looping manually, simple, efficient
const numbers2 = [1,2,2,3,4,4,5];
const uniqueNumbers = [new Set(numbers2)];
const uniqueNumbers2 =  Array.from(new Set(numbers));
console.log(uniqueNumbers);
console.log(uniqueNumbers2);