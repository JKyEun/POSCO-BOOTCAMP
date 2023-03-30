import { useRef } from 'react';

export default function Count() {
  const count = useRef(0);

  const increaseRef = () => {
    count.current = count.current + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>{count.current}</h2>
      <button onClick={increaseRef}>증가</button>
    </div>
  );
}
