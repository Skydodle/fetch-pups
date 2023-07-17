import React from 'react';
import { Pets, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import APIService from '../../services/api';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await APIService.logout();
      navigate('/');
    } catch (err) {
      console.error('Logout Failed:', err);
    }
  };

  const handleLogoClick = () => {
    navigate('/search');
  };

  return (
    <nav className="bg-custom-blue">
      <div className="flex justify-between items-center p-4">
        <button
          className="flex items-center text-white"
          aria-label="Return to search"
          onClick={handleLogoClick}
        >
          <Pets style={{ color: 'inherit' }} />
          <span className="text-2xl font-bold">FetchPups</span>
        </button>
        <button
          className="flex items-center text-white"
          aria-label="Logout"
          onClick={handleLogout}
        >
          <Logout className="mr" />
          <span className="text-base font-bold">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
