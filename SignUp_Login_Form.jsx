import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Fee_Project' && password === '6969') {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      {/* LOGIN FORM */}
      <div className="form login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don’t have an account?{' '}
            <span className="toggle" onClick={() => setIsActive(true)}>
              Register
            </span>
          </p>
        </form>
      </div>

      {/* REGISTER FORM */}
      <div className="form register-form">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="New Username" required />
          <input type="password" placeholder="New Password" required />
          <button type="button">Register</button>
          <p>
            Already have an account?{' '}
            <span className="toggle" onClick={() => setIsActive(false)}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
