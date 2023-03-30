import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [show, setShow] = useState(false);
  const onBtnClick = () => {
    setShow((cur) => !cur);
  };
  
  return (
    <>
      {show && <PracticeTimer />}
      <button onClick={onBtnClick}>타이머 실행/종료</button>
    </>
  );
}
