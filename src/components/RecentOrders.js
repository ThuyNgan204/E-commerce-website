import React from 'react';
import { recentOrders } from '../data/mockData';

export default function RecentOrders() {
  return (
    <div className="recent-orders">
      <h3>Latest User</h3>
      <table>
        <thead>
          <tr>
            <th>Tên KH</th>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá tiền</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map(order => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total.toLocaleString()} đ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
