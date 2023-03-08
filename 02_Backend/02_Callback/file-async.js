// const fs = require('fs');

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
//   fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번', data.toString());
//     fs.readFile('test.txt', 'utf-8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번', data.toString());
//       fs.readFile('test.txt', 'utf-8', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번', data.toString());
//       });
//     });
//   });
// });

const fs = require('fs').promises;

fs.readFile('test.txt', 'utf-8')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .catch((err) => {
    throw err;
  });
