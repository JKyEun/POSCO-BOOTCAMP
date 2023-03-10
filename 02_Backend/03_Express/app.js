const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express World!');
});

// 에러를 받아주는 미들웨어
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + '<a href="/">홈으로</a>');
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중 . . .`);
});
