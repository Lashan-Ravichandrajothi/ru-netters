import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const history = useNavigate();

  // Simulate backend authentication (replace with your actual API call)
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Check credentials (replace with your actual authentication logic)
    if (email === "admin@gmail.com" && password === "admin1234") {
      setIsLoggedIn(true);
      history('/4234kjlkjkl6sd78f6s78f6'); // Redirect to dashboard
    } else {
      setError('Invalid email or password.');
    }
  };

  // Check login state on mount and update history accordingly
  useEffect(() => {
    if (isLoggedIn) {
      history('/4234kjlkjkl6sd78f6s78f6'); // Redirect to dashboard if already logged in
    }
  }, [isLoggedIn, history]);

  return (
    <div className="login-form">
      <h2>Login as an admin</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
        <p>Note: Only the Admin is allowed to login</p>
      </form>
    </div>
  );
};

export default Login;
