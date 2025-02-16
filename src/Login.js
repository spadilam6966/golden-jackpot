// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'password' && password === 'xnxx') {
      setAuthenticated(true); // Set authentication state to true
      navigate('/Adminpvrb');  // Redirect to the Admin page
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {/* Optional: Add a forgot password link */}
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .login-container {
          display: flex;
          justify-content: center; /* Center horizontally */
          align-items: center;     /* Center vertically */
          height: 100vh;           /* Full viewport height */
          background-color: #f0f0f0; /* Light background color */
        }

        .login-form {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .login-form h2 {
          margin-bottom: 20px;
          font-family: 'Arial', sans-serif;
          font-size: 24px;
          color: #333;
        }

        .login-form input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          box-sizing: border-box;
        }

        .login-form button {
          width: 100%;
          padding: 12px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-form button:hover {
          background-color: #45a049;
        }

        .login-form input:focus,
        .login-form button:focus {
          outline: none;
          border-color: #4CAF50;
        }

        .login-form .forgot-password {
          font-size: 14px;
          color: #4CAF50;
          text-decoration: none;
          margin-top: 10px;
        }

        .login-form .forgot-password:hover {
          text-decoration: underline;
        }

        /* Responsive design for small screens */
        @media (max-width: 500px) {
          .login-form {
            padding: 20px;
            width: 100%;
          }

          .login-form h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
