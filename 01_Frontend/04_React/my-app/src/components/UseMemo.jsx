import React, { useEffect, useMemo, useState } from 'react';

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      where: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 안 콘솔 로그');
  }, [location]);

  return (
    <>
      <h1>숫자 증감</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(() => parseInt(e.target.value))}
      />
      <br />
      <h1>Where Are You?</h1>
      <h2>위치 : {location.where}</h2>
      <button onClick={() => setIsKorea((cur) => cur + 1)}>위치 변경</button>
    </>
  );
}
