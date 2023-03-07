const fruits = ["Apple", "Banana", "Cherry"];
// const result1 = fruits.find(item => { return /^A/.test(item);
// })
// const result2 = fruits.findIndex(item => {
//     return /^C/.test(item);
// })
const result = fruits.findIndex(item => {
  return item === "Apple";
});
// console.log(result1);
// console.log(result2);
console.log(result);