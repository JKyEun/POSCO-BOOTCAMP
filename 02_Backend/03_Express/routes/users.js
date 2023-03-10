const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'jke123',
    name: '장경은',
    email: 'jke123@naver.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: 'pororo@ebs.com',
  },
];

// http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
    err.statusCode = 404;
    throw err;
  }
});

router.post('/add', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.send('회원 등록 완료!');
    } else {
      const err = new Error('ID, Name, Email을 모두 입력하여야 합니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('ID, Name, Email을 모두 입력하여야 합니다.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('ID, Name, Email을 모두 입력하여야 합니다.');
    err.statusCode = 400;
    throw err;
  }
});

// eslint-disable-next-line consistent-return
router.put('/modify/:id', (req, res) => {
  if (req.query.email && req.query.name) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못되었습니다.');
    err.statusCode = 400;
    throw err;
  }
});

router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1);
    res.send('회원 삭제 완료!');
  } else {
    const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');
  for (let i = 0; i < USER.length; i++) {
    res.write(`<h2>USER ID is ${USER[i].id}</h2>`);
    res.write(`<h2>USER name is ${USER[i].name}</h2>`);
  }
  res.end();
});

module.exports = router;
