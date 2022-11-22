console.log('Array Methods in Javascript');

const myArray = [1,,2,3,4,5,6,7,8,9];

console.log(myArray['2']);
console.log(Object.keys(myArray))
console.log(Object.values(myArray))

console.log('every method'); // return true (if all element returns true using callback) or false (if all element returns false using callback) 

let result = myArray.every((x) => x>0);
console.log(result);
