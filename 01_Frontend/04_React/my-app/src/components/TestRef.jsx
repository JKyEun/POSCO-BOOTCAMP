import { useState, useRef } from 'react';
import React from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요!');
  const inputValue = useRef();

  const onChangeRef = () => {
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
