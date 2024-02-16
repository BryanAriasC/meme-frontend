import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const Navbar: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verificar si el usuario está logeado

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Eliminar el estado de inicio de sesión al cerrar sesión
    //localStorage.removeItem('username'); // Eliminar el nombre de usuario al cerrar sesión
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Memes App
        </Typography>
        <Button component={Link} to="/memes" color="inherit">Memes</Button>
        <Button component={Link} to="/create-meme" color="inherit">Crear Meme</Button>
        {isLoggedIn ? ( // Mostrar el botón de cierre de sesión si el usuario está logeado
          <Button component={Link} to="/login" color="error" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        ) : (
          <Button component={Link} to="/login" color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
