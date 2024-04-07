import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import Camera from './pages/Camera';
import MapPage from './pages/MapPage';
import Validation from './pages/Validation';
// import Cauta from './pages/Cauta/Cauta';
// import Chat from './pages/Chat/Chat';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/acasa" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/validation" element={<Validation />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
