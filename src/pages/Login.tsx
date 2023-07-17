import React from 'react';
import LoginForm from '../components/LoginForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Login.css'; // <-- Import here
import loginbg1 from '../assets/loginbg1.jpeg';
import loginbg2 from '../assets/loginbg2.jpeg';
import loginbg3 from '../assets/loginbg3.jpeg';
import loginbg4 from '../assets/loginbg4.jpeg';

const Login: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={6000}
        transitionTime={6000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        stopOnHover={false}
        dynamicHeight={false}
        centerMode
      >
        <div>
          <img src={loginbg1} alt="Background 1" />
        </div>
        <div>
          <img src={loginbg2} alt="Background 2" />
        </div>
        <div>
          <img src={loginbg3} alt="Background 3" />
        </div>
        <div>
          <img src={loginbg4} alt="Background 4" />
        </div>
      </Carousel>

      <LoginForm />
    </div>
  );
};

export default Login;
