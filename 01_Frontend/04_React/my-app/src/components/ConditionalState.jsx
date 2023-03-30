import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditionalState() {
  const [condition, setCondition] = useState('보이기');

  const onChange = () => {
    condition === '보이기' ? setCondition('숨기기') : setCondition('보이기');
  };

  const conditionRender = condition === '숨기기' && <ConditionalRender />;
  return (
    <>
      <button onClick={onChange}>{condition}</button>
      {conditionRender}
      {conditionRender}
    </>
  );
}
