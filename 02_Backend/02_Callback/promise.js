const tetz = 'old';

const promise = new Promise((resolve, reject) => {
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 2000);
  } else {
    reject(new Error('tetz is not old'));
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
