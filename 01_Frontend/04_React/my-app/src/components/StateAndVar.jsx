import { useState } from 'react';

export default function StateAndVar() {
  const [state, setState] = useState(0);
  let a = 0;

  function plus() {
    a++;
    console.log(`state: ${state}, variable: ${a}`);
  }

  return (
    <div>
      <h1>
        {state} / {a}
      </h1>
      <button
        onClick={() => {
          setState((cur) => cur + 1);
          plus();
        }}
      >
        +1
      </button>
    </div>
  );
}
