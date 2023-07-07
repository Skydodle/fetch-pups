// inside Login.tsx
import React, { useState } from 'react';
import APIService from '../../services/api';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    // Perform login action here
    try {
      const response = await APIService.authenticate({ name, email });
      const token = response.data.token;
      localStorage.setItem('token', token);
      // Redirect the user to the home page or dashboard
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Name:
        <input
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
