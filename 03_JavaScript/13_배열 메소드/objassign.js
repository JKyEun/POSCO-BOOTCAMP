const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const returnObj = Object.assign(obj1, obj2);

console.log(obj1); // { a: 1, b: 3, c: 4 }
console.log(obj2); // { b: 3, c: 4 }
console.log(returnObj);// { a: 1, b: 3, c: 4 }