import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/mockData';

export default function OTP() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    const tempUser = JSON.parse(localStorage.getItem('tempUser'));

    if (otp === '123456') {
      // Save to "database"
      const newUser = { ...tempUser, verified: true };
      users.push(newUser);
      localStorage.removeItem('tempUser');
      navigate('/login');
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <h4 className="text-center text-primary mb-4">Enter OTP</h4>

        <input
          className="form-control mb-3"
          placeholder="Enter OTP code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {error && <div className="alert alert-danger">{error}</div>}

        <button className="btn btn-success w-100" onClick={handleVerify}>
          Verify
        </button>

        <p className="mt-3 text-center text-muted">
          OTP default: <strong>123456</strong>
        </p>
      </div>
    </div>
  );
}
