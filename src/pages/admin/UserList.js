// src/pages/admin/UserList.jsx
import React from 'react';
import { users } from '../../data/mockData';
import './UserList.css'; // nếu muốn style

export default function UserList() {
  return (
    <div className="user-list">
      <h2>Danh sách người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Username</th>
            <th>Email</th>
            <th>SĐT</th>
            <th>Địa chỉ</th>
            <th>Ngày tham gia</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.address}</td>
              <td>{u.joinDate}</td>
              <td>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
