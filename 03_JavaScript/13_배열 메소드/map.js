const fruits = ["사과", "파인애플", "오렌지", "수박"];

// fruits.map((item, index, originArr) => {
//   console.log(item, index, originArr);
// });

const fruitsObjArr = fruits.map((item, index) => {
  return { id: index, name: item };
});
console.log(fruitsObjArr);

const nums = [1, 2, 3, 4, 5, 6];

const newNums = nums.map(x => x * 2);
console.log(newNums);
