import React, { useState, useRef, useEffect } from 'react';

export default function PracticeTimer() {
  const count = useRef(0);
  const [render, setRender] = useState(true);
  const showTimer = () => {
    setRender(!render);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      count.current++;
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);
  return (
    <>
      <h1>{count.current}</h1>
      <button onClick={showTimer}>시간보기</button>
    </>
  );
}
