import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenerateKey from './GenerateKey';

const Profile = () => {
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
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="container">
        <div className="profile-container">
          <div className="profile-header">
            <h2>Profile Information</h2>
          </div>
          <div className="profile-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Middle Name:</strong> {user.middleName || 'N/A'}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString()}</p>
          </div>
          <GenerateKey firstName={user.firstName} dob={user.dob} />
        </div>
      </div>
    </div>
  );
};

export default Profile; 