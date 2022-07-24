import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Singup from './Pages/Signup/Singup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
