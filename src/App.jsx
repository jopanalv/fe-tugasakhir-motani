import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileMenu from './pages/ProfileMenu';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import CategoryDetail from './pages/CategoryDetail';
import DashboardSeller from './pages/DashboardSeller';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProfileMenu />} />
        <Route path='/detail' element={<ProductDetail />} />
        <Route path='/category' element={<CategoryDetail />} />
        <Route path='/dashboard' element={<DashboardSeller />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/edit' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
