const numbers = [1, 2, 3, 4, 5, 6];

// arr = numbers.filter(num => num > 3);
arr = numbers.filter((item, index, arr) => {
  console.log(item, index, arr);
  return item > 3;
});
console.log(arr);
