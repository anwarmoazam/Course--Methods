console.log('Array Methods in Javascript');

const fruits = [];
fruits.push('banana','apple','peach');
console.log('Length of fruits array : ',fruits.length)
fruits[5] = 'mango';
console.log(fruits[5])
console.log(Object.keys(fruits));
console.log('Length of fruits array : ',fruits.length)
fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits));
console.log('Length of fruits array : ',fruits.length)
console.log(fruits[8]);
fruits.length = 2;
console.log(Object.keys(fruits));
console.log('Length of fruits array : ',fruits.length);


console.log('1. Concate method');
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);

const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);

num1.push(4);
console.log(num1);
console.log(numbers);

console.log('2. Every method');
// return true (if all element returns true using callback) or false (if all element returns false using callback) 

const myArray = [1,,2,3,4,5,6,7,8,9];

console.log(myArray['2']);
console.log(Object.keys(myArray))
console.log(Object.values(myArray))
console.log(myArray['2'] !== myArray['02'])

console.log('every method'); 

let result = myArray.every((x) => x>0);
console.log(result);

console.log('at method');
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integrs. Negative integers count back from the last item in the array

const array1 = [5,12,8,130,44];

let index = 2;

console.log(`Using an index of ${index} in the Array [${array1}] the item returned is ${array1.at(index)}`);

index = -2;

console.log(`Using an index of ${index} in the Array [${array1}] the item returned is ${array1.at(index)}`);
