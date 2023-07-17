import React from 'react';
import { Pets, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import APIService from '../../services/api';
import SecondaryNavBar from './SecondaryNavBar';

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
          <Pets className="mr-2" style={{ color: 'inherit' }} />
          <span className="text-lg font-bold">FetchPups</span>
        </button>
        <button
          className="flex items-center text-white"
          aria-label="Logout"
          onClick={handleLogout}
        >
          <Logout className="mr-2" />
          <span className="text-base font-bold">Logout</span>
        </button>
      </div>
      <SecondaryNavBar />
    </nav>
  );
};

export default NavBar;
