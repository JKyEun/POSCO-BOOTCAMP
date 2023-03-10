const express = require('express');

const router = express.Router();

const POST = [
  {
    title: '안녕하세요, 첫 번째 글입니다.',
    content: '봄이 왔습니다.',
  },
  {
    title: '안녕하세요, 두 번째 글입니다.',
    content: '일교차 조심하세요.',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POST, postCounts: POST.length });
});

router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('제목과 내용을 모두 입력하여야 합니다.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('내용을 입력하세요!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
