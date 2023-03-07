function getTriangleArea(밑변, 높이) {
  return (밑변*높이)/2;
}

function getCircleArea(radius) {
  return Math.PI * radius**2;
}

function 피타고라스(밑변, 높이) {
  return Math.sqrt(밑변**2 + 높이**2);
}

console.log(getTriangleArea(3, 4)); // 6
console.log(getCircleArea(2)); // 12.56637...
console.log(피타고라스(3, 4)); // 5