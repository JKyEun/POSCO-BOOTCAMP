import React, { useRef, useState } from 'react';

export default function Calculate() {
  const operatorArr = ['+', '-', 'X'];
  const [stage, setStage] = useState(1);
  const inputEl = useRef();
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = operatorArr[Math.floor(Math.random() * 3)];

  // 정답을 확인하는 함수
  const checkAnswer = () => {
    // 정답 변수에 정답 저장
    let answer = 0;
    if (operator === '+') {
      answer = num1 + num2;
    } else if (operator === '-') {
      answer = num1 - num2;
    } else if (operator === 'X') {
      answer = num1 * num2;
    } else {
      answer = null;
    }

    // 정답일 경우 Stage가 1 증가하고 이때 state가 변화하여 랜더링이 일어남
    if (parseInt(inputEl.current.value) === answer) {
      alert('정답입니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
      setStage((cur) => cur + 1);
    } else {
      alert('틀렸습니다! 다시 도전하세요!');
      inputEl.current.value = '';
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <h1>문제 {stage}</h1>
      <h1>
        {num1} {operator} {num2}
      </h1>
      <input ref={inputEl} />
      <button onClick={checkAnswer}>정답 제출!</button>
    </div>
  );
}
