import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Pets } from '@mui/icons-material';
import LoginForm from '../components/LoginForm';
import useMediaQuery from '@mui/material/useMediaQuery';

const defaultTheme = createTheme();

const Login = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${require('../assets/bg1.jpeg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="white"
            sx={{ marginTop: '3rem', fontWeight: 700 }}
          >
            Welcome to FetchPups
          </Typography>

          {matches ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '15rem',
              }}
            >
              <LoginForm />
            </Box>
          ) : (
            <Box
              sx={{
                alignSelf: 'flex-start',
                marginTop: '5rem',
                paddingLeft: '10%',
              }}
            >
              <LoginForm />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
