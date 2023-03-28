import { useState } from 'react';

export default function ChangeObj({ objArr }) {
  const len = objArr.length;
  const [idx, setIdx] = useState(0);
  const changeCharacter = () => {
    if (len - 1 > idx) {
      setIdx((cur) => cur + 1);
    } else {
      setIdx(0);
    }
  };
  console.log(idx);
  return (
    <div>
      <button onClick={changeCharacter}>다른 친구 보기</button>
      <div>이름: {objArr[idx].name}</div>
      <div>나이: {objArr[idx].age}살</div>
      <div>별명: {objArr[idx].nickName}</div>
    </div>
  );
}
