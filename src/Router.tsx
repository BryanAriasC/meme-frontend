// src/Router.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CreateMemePage } from './pages/CreateMemePage';
import { MemeDetailPage } from './pages/MemeDetailPage';
import { MemeListPage } from './pages/MemeListPage';

export const Router: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/memes" element={<MemeListPage />} />
        <Route path="/memes/:id"  element={<MemeDetailPage />} />
        <Route path="/create-meme" element={<CreateMemePage />} />

        <Route path="/*" element={<LoginPage />} />
      </Routes>
  );
};
