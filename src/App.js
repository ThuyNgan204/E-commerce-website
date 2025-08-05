import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardHome from './pages/admin/DashboardHome';
import ProductList from './pages/admin/ProductList';
import UserList from './pages/admin/UserList';
import AdminLayout from './layouts/AdminLayout';
import Register from './pages/Register';
import VerifyOTP from './pages/VerifyOTP';
import Login from './pages/Login';     

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="users" element={<UserList />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
