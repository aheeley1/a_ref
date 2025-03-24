


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

//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.
//array.slice(start, end)
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(citrus);
const myBest = fruits.slice(-3, -1);
console.log(myBest);
const friends = ["Ben", "Lynn", "Alex"]
const first = friends.slice(0, 1) // ["Ben"]
console.log(first);

