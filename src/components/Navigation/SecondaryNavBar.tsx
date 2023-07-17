import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navButtons = [
  { name: 'About', path: '/about' },
  { name: 'Search', path: '/search' },
  { name: 'Dog Care', path: '/tips' },
];

const SecondaryNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-evenly p-2">
        {navButtons.map((button) => (
          <button
            className={`${
              location.pathname === button.path
                ? 'text-indigo-700'
                : 'text-custom-blue'
            } px-2 py-1 rounded-md hover:text-indigo-700 text-lg font-lexend font-medium transition-colors duration-200`}
            onClick={() => navigate(button.path)}
            key={button.name}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecondaryNavBar;
