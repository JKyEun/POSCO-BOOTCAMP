import { useState } from 'react';

export default function StateProblem() {
  const [state, setState] = useState([0]);
  console.log(state);
  return (
    <div>
      {state}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
