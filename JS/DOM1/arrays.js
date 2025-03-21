


//avoid mutating arrays and objects when possible
//prefer creating a new one
// more predicatable, less unexpected bugs, especially when working with libraries like React
// improves performance in reactive frameworks
// safer code and easier to debug
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];  // not numbers.push(4)
console.log(numbers);