import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('컴포넌트가 언마운트 되었습니다. 타이머가 종료됩니다.');
    };
  }, []);
  return <div>타이머 실행 중</div>;
}
