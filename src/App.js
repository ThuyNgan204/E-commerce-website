import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardHome from './pages/admin/DashboardHome';
import ProductList from './pages/admin/ProductList';
import UserList from './pages/admin/UserList';
import AdminLayout from './layouts/AdminLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="users" element={<UserList />} />
          <Route path="products" element={<ProductList />} />
        </Route>
        {/* Route khác nếu có */}
      </Routes>
    </BrowserRouter>
  );
}
