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
import EditProfile from './pages/EditProfile';
import DashboardSellerRented from './pages/DashboardSellerRented';
import DashboardSellerNego from './pages/DashboardSellerNego';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardAdminCategory from './pages/DashboardAdminCategory';
import DashboardAdminBanner from './pages/DashboardAdminBanner';
import MyOrder from './pages/MyOrder';
import DetailTransaction from './pages/DetailTransaction';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProfileMenu />} />
        <Route path='/detail/:slug' element={<ProductDetail />} />
        <Route path='/category/:id' element={<CategoryDetail />} />
        <Route path='/dashboard' element={<DashboardSeller />} />
        <Route path='/dashboard/rented' element={<DashboardSellerRented />} />
        <Route path='/dashboard/nego' element={<DashboardSellerNego />} />
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/category' element={<DashboardAdminCategory />} />
        <Route path='/admin/banner' element={<DashboardAdminBanner />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/edit/:slug' element={<EditProduct />} />
        <Route path='/profile/edit/:id' element={<EditProfile />} />
        <Route path='/order' element={<MyOrder />} />
        <Route path='/transaction/detail/:id' element={<DetailTransaction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;