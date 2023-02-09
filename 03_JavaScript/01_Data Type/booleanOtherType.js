console.log(Boolean(1)); // true
console.log(Boolean(2)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("장경은")); // true
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false