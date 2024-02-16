import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { login } from '../services/userService';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/memes'); 
    }
  }, [navigate]);

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await login(data.username, data.password);
      if (response.status === 200) {
        setError('');
        localStorage.setItem('isLoggedIn', 'true'); 
        navigate('/memes');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        console.error('Error logging in:', error);
        setError('An error occurred while logging in');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: '20px' }}>
        Bienvenidos MemeApp
      </Typography>
      <Typography color="error">{error}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          {...register('username', { required: 'Username is required' })}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};
