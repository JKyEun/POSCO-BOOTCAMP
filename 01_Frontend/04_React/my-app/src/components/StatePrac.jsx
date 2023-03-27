import { useState } from 'react';

export default function StatePrac() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter((cur) => cur - 1)}>-</button>
      <button onClick={() => setCounter((cur) => cur + 1)}>+</button>
    </div>
  );
}
