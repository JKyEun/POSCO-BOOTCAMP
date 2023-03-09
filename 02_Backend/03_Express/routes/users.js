// @ts-check
const express = require('express');

const router = express.Router();

const USER = {
  1: {
    id: 'jke123',
    name: '장경은',
  },
};
const userArr = [
  {
    id: 'jke123',
    name: '장경은',
    email: 'jke123123123',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: 'pororo@ebs.com',
  },
];

// http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { userArr, userCounts: userArr.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('Cannot Found');
  }
});

router.post('/add', (req, res) => {
  if (req.query.id && req.query.name) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };
    USER[Object.keys(USER).length + 1] = newUser;
    res.send('회원 등록 완료!');
  } else {
    res.send('요청이 잘못되었습니다.');
  }
});

// eslint-disable-next-line consistent-return
router.put('/modify/:id', (req, res) => {
  const num = req.params.id;
  if (!USER[num]) {
    return res.send('요청하신 ID가 없습니다.');
  }
  if (req.query.id && req.query.name) {
    const modifiedUser = {
      id: req.query.id,
      name: req.query.name,
    };
    USER[num] = modifiedUser;
    res.send('회원 수정 완료!');
  } else {
    res.send('요청이 잘못되었습니다.');
  }
});

router.delete('/delete/:id', (req, res) => {
  const num = req.params.id;
  if (USER[num]) {
    delete USER[num];
    res.send('회원 삭제 완료!');
  } else {
    res.send('요청하신 ID가 없습니다.');
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');
  for (let i = 0; i < userArr.length; i++) {
    res.write(`<h2>USER ID is ${userArr[i].id}</h2>`);
    res.write(`<h2>USER name is ${userArr[i].name}</h2>`);
  }
  res.end();
});

module.exports = router;
