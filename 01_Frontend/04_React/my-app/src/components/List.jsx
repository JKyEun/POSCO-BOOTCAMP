import React from 'react';
import ListChild from './ListChild';

export default function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      detail: 'state 사용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      detail: '자료구조 정복하기',
    },
    {
      title: '집에 가기',
      detail: '구름이 산책',
    },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      {dataArr.map((el, index) => (
        <ListChild key={index} title={el.title} content={el.detail} />
      ))}
    </div>
  );
}
