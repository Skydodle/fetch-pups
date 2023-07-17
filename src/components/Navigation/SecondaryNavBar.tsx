import React from 'react';
import { useNavigate } from 'react-router-dom';

const navButtons = [
  { name: 'About', path: '/about' },
  { name: 'Search', path: '/search' },
  { name: 'Dog Care Tips', path: '/tips' },
];

const SecondaryNavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="flex justify-evenly p-2">
        {navButtons.map((button) => (
          <button
            className="text-custom-blue text-lg font-bold"
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
