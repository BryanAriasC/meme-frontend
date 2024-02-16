import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { createMeme } from '../services/memeService';
import { Meme } from '../models/Meme';
import {Layout} from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

export const CreateMemePage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Meme>();
  const navigate = useNavigate();

  const onSubmit = (data: Meme) => {
    createMeme(data)
      .then(response => {
        console.log('Meme creado correctamente:', response.data);
        navigate('/memes');
      })
      .catch(error => {
        console.error('Error al crear el meme:', error);
      });
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ padding: '20px' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Nuevo Meme
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', { required: 'Este campo es obligatorio' })}
            label="Nombre"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            {...register('description', { required: 'Este campo es obligatorio' })}
            label="Descripción"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
          <TextField
            {...register('image', { required: 'Este campo es obligatorio' })}
            label="URL de imagen"
            fullWidth
            margin="normal"
            error={!!errors.image}
            helperText={errors.image && errors.image.message}
          />
          <TextField
            {...register('likes')}
            type="number"
            label="cantidad de likes"
            fullWidth
            margin="normal"
          />
          <TextField
            {...register('comments')}
            type="number"
            label="Cantidad de comentarios"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Crear Meme
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

