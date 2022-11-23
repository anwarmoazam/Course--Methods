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

console.log(myArray['1']);
console.log('Keys : ',Object.keys(myArray))
console.log('Values : ',Object.values(myArray))

console.log('every method'); 

let result = myArray.every((x) => x>0);
console.log(result);

console.log('3. Copy within');
// copyWithin(target)