function knockDoor(sec, name, callback) {
  console.log('노크를 하고 기다립니다...');
  setTimeout(() => {
    console.log(`${sec}초 동안 기다렸습니다.`);
    callback(name);
  }, sec * 1000);
}

function callName(name) {
  console.log(`${name}이가 문을 열고 나왔습니다!`);
}

knockDoor(3, '영식', callName);
