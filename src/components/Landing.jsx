import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <div className="container">
        <h1>Welcome to Our Application</h1>
        <p>Please login or register to continue.</p>
      </div>
    </div>
  );
};

export default Landing; 