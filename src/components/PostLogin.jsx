import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GenerateKey from './GenerateKey';

const PostLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login');
      return;
    }
    setUser(storedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>You are now logged in.</p>
        <GenerateKey firstName={user.firstName} dob={user.dob} />
      </div>
    </div>
  );
};

export default PostLogin; 