import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/mockData';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setError('Email already exists.');
    } else {
      // Simulate saving new user
      const newUser = { ...form, verified: false, role: 'user' };
      localStorage.setItem('tempUser', JSON.stringify(newUser));
      navigate('/verify-otp');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="text-primary text-center mb-4">Sign Up</h2>

        <input
          className="form-control mb-3"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {error && <div className="alert alert-danger">{error}</div>}

        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>

        <p className="mt-3 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-primary fw-semibold">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
