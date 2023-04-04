import React from 'react';
import './App.css';
import FancyBorder from './components/FancyBorder';

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기능입니다!</p>
      </FancyBorder>
    </div>
  );
}

export default App;
