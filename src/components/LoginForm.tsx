import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIService from '../services/APIService';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Pets } from '@mui/icons-material';
import useLocalStorage from '../hooks/useLocalStorage';

const defaultTheme = createTheme();

const LoginForm: React.FC = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Invalid email format. Please try again.');
      return;
    }
    try {
      await APIService.authenticate({ name, email });
      navigate('/about');
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error('Login Failed:', err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '1rem',
          borderRadius: '0.5rem',
          boxShadow: defaultTheme.shadows[10],
          maxWidth: 280,
          minHeight: ['250px', '350px', '400px'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon fontSize="small" />
          </Avatar>
          <Typography component="h1" variant="h6">
            Sign in to
          </Typography>

          <Typography
            component="span"
            variant="h5"
            color="primary"
            sx={{ fontWeight: 700 }}
          >
            <Pets />
            FetchPups
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1, width: '100%' }} // Ensure the form takes full width of its parent
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter Any Name"
              placeholder="Enter Any Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              sx={{ bgcolor: 'white' }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Any Email"
              placeholder="Enter Any Email"
              name="email"
              autoComplete="email"
              value={email}
              error={!isValidEmail(email) && email !== ''}
              helperText={
                !isValidEmail(email) && email !== ''
                  ? 'Invalid email format.'
                  : ''
              }
              sx={{ bgcolor: 'white' }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
            {error && <Typography color="error">{error}</Typography>}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
