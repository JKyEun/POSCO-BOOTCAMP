import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const weight = useSelector((state) => state);
  return (
    <>
      <h1>프로필 페이지입니다. 몸무게는 {weight}</h1>
    </>
  );
}
