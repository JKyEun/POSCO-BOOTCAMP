import React from 'react';

export default function ProfileComponent({ name, age, nickName }) {
  return (
    <>
      <ul>
        <h2>{name}</h2>
        <p>나이: {age}</p>
        <p>별명: {nickName}</p>
        <hr />
      </ul>
    </>
  );
}
