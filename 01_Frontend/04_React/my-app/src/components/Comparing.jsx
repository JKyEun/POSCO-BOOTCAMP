import { useState, useRef } from 'react';
import React from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const [render, setRender] = useState(true);
  const countRef = useRef(0);
  let countVar = 0;

  const countUpState = () => {
    setCountState((cur) => cur + 1);
    console.log('state:' + countState);
  };

  const countUpRef = () => {
    countRef.current++;
    console.log('ref:' + countRef.current);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('variable:' + countVar);
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State Up!</button>
      <button onClick={countUpRef}>Ref Up!</button>
      <button onClick={countUpVar}>Var Up!</button>
      <button onClick={reRender}>Rendering!</button>
    </div>
  );
}
