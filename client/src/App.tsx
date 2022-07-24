import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Singup from './Pages/Signup/Singup';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
