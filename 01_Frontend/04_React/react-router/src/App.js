import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ListContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
