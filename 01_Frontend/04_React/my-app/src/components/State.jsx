import { useState } from 'react';

export default function State() {
  const [name, setName] = useState('장경은');
  const convertLang = () => {
    name === '장경은' ? setName('JKE') : setName('장경은');
  };
  return (
    <div>
      <button onClick={convertLang}>한/영 변환!</button>
      <div>{name}</div>
    </div>
  );
}
