import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import HomePage from './HomePage';
import Seaarch from './Seaarch';
import File from './File';
import './App.css';
import NoPage from './NoPage';
import Microsoft from './markus.jpg';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/file" element={<File />} />
          <Route path="/search" element={<Seaarch />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <img
        src={Microsoft}
        alt="React"
        width="1260px"
        height="550px"
      />
    </>
  );
};
export default App;
