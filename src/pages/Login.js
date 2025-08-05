import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/mockData';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'admin') navigate('/admin/dashboard');
      else navigate('/shop');
    } else {
      setError('Invalid credentials or not verified.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow w-100" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="/login-banner.jpg"
              alt="Login"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-6 p-4">
            <h2 className="mb-4 text-primary">Sign In</h2>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="alert alert-danger">{error}</div>}

            <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
              Sign In
            </button>

            <div className="d-flex justify-content-between text-sm">
              <label>
                <input type="checkbox" className="me-2" />
                Remember Me
              </label>
              <a href="#" className="text-primary">Forgot Password?</a>
            </div>

            <p className="text-center mt-4">
              Not a member? <a href="/register" className="fw-semibold text-primary">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
