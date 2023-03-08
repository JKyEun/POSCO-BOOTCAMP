const lucky = true;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');
  setTimeout(() => {
    console.log('3년의 시간이 흐르고....');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject(new Error('망했습니다..'));
    }
  }, 1000);
});

async function howMuch() {
  try {
    const result = await promise;
    if (result) {
      console.log(`기다림의 보상으로 ${result} 원을 벌었습니다!`);
    }
  } catch (err) {
    console.log(err);
  }
}

howMuch();
