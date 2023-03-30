import React, { useState, useEffect, useRef } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요!');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('🖱 버튼 클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('⌨️ 키 입력');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('항상 실행되는 useEffect');
  });

  useEffect(() => {
    console.log('버튼 클릭 시 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('텍스트 수정 시 실행되는 useEffect');
  }, [text]);

  useEffect(() => {
    console.log('최초 마운트 시에만 실행되는 useEffect');
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <input ref={inputValue} onChange={onInputChange} />
      <h1>{text}</h1>
    </>
  );
}
