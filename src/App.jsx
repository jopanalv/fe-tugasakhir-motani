import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileMenu from './pages/ProfileMenu';
import './App.css';
import ProductDetail from './pages/ProductDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProfileMenu />} />
        <Route path='/detail' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
