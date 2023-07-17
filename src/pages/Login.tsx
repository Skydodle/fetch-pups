import React from 'react';
import LoginForm from '../components/LoginForm';
import useMediaQuery from '@mui/material/useMediaQuery';

const Login: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div
      className=" min-h-screen flex flex-col items-center justify-start p-8 bg-center bg-cover"
      style={{ backgroundImage: `url(${require('../assets/bg1.jpeg')})` }}
    >
      <div className="flex flex-col items-center w-full h-full justify-start">
        <h1 className="text-center text-white mt-12 font-semibold text-3xl">
          Welcome to FetchPups
        </h1>
        <div
          className={`${
            matches
              ? 'flex flex-col items-center mt-60'
              : 'self-start mt-20 pl-20'
          }`}
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
