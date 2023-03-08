// @ts-check

// function buySync(item, price, quantity, callback) {
//   console.log(`${item}을 ${quantity}개 골라서 점원에게 주었습니다.`);
//   setTimeout(() => {
//     const total = price * quantity;
//     console.log('점원이 계산을 완료했습니다.');
//     callback(total);
//   }, 1000);
// }

// function pay(total) {
//   console.log(`${total}원을 지불 하였습니다.`);
// }

// buySync('포켓몬빵', 1000, 5, pay);

function buySync(item, price, quantity, callback) {
  console.log(`${item}을 ${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    const total = price * quantity;
    console.log('점원이 계산을 완료했습니다.');
    callback(total);
  }, 1000);
}

buySync('포켓몬빵', 1000, 5, (total) => {
  console.log(`${total}원을 지불 하였습니다.`);
});
