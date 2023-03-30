import { useRef } from 'react';
import React from 'react';

export default function ColorInput() {
  const inputEl = useRef();
  const divEl = useRef();
  const changeColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
