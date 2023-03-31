import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  const fetchData = async () => {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return 'Err';

    const data = await resFetch.json();
    setDataArr(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => (
        <ProfileComponent
          key={el.name}
          name={el.name}
          age={el.age}
          nickName={el.nickName}
        />
      ))}
    </>
  );
}
