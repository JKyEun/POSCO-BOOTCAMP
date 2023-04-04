import React from 'react';
import dogImg from '../images/goorm.jpg';

export default function ImageComponent2() {
  return (
    <div>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/goorm.jpg" width="500" alt="구름이" />
      <h1>SRC 폴더</h1>
      <img src={dogImg} width="500" alt="구름이2" />
    </div>
  );
}
