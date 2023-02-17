const user = {
  id: 1,
  name: "장경은",
  email: "j56237@naver.com",
	address: "korea",
};
const { id, name, email, address } = user;
console.log(id);
console.log(name);
console.log(email);
console.log(address);

const fruits = ["사과", "딸기", "망고", "수박"]; 
const [a, b, c, d] = fruits;
console.log(a, b, c, d);