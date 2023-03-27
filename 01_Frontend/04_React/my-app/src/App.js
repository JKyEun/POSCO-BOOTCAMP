import './App.css';
import BtnToNaver from './components/BtnToNaver';
import MainHeader from './components/MainHeader';
import ImageComponent from './components/ImageComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className='App'>
      <MainHeader />
      <ImageComponent />
      <br />
      <BtnToNaver />
      <ClassComponent />
    </div>
  );
}

export default App;
