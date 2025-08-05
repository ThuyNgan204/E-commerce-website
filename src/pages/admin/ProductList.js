// src/pages/admin/ProductList.jsx
import React from 'react';
import { products } from '../../data/mockData';
import './ProductList.css'; // nếu muốn style

export default function ProductList() {
  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Mã SP</th>
            <th>Mô tả</th>
            <th>Giá bán</th>
            <th>Ngày nhập</th>
            <th>Ngày bán</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.code}</td>
              <td>{p.description}</td>
              <td>{p.price.toLocaleString()}đ</td>
              <td>{p.importDate}</td>
              <td>{p.saleDate}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
