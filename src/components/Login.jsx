import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const storedUsers = JSON.parse(localStorage.getItem('storedUsers')) || [];
    const user = storedUsers.find(u => u.username === formData.username);

    if (!user || user.password !== formData.password) {
      setError('Invalid username or password');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    navigate('/post-login');
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <div className="form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 