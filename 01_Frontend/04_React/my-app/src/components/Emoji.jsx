import { useState } from 'react';

export default function Emoji() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2
        onClick={() => {
          setCounter((cur) => cur + 1);
        }}
      >
        {counter >= 10 ? '😎' : '👍'}
      </h2>
      <div>{counter}</div>
    </div>
  );
}
