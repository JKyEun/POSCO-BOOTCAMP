// @ts-check
const express = require('express');

const server = express();
const PORT = 4000;

// http://localhost:4000/
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청 시간은 ${req.reqTime} 입니다.`);
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버가 ${PORT}번 포트에서 작동 중입니다.`);
});
