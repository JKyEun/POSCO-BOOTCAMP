let nums = [-1.23, 13, 14.52, -33.53, 30];
let average = 0;

const indexMin = nums.indexOf(Math.min(...nums));
const indexMax = nums.indexOf(Math.max(...nums));

nums[indexMin] = Math.floor(nums[indexMin]);
nums[indexMax] = Math.floor(nums[indexMax]);

for (let i = 0; i < nums.length; i++) {
  nums[i] = Math.abs(nums[i]);
  average += nums[i];
}
average = average / nums.length;

let ranNum = Math.floor(Math.random()*100);

console.log(nums, average, ranNum);