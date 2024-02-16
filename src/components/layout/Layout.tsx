import React, { ReactNode } from 'react';
import {Navbar} from './Navbar';
import { Container } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginLeft: '240px', marginTop: '64px' }}>{children}</Container>
    </div>
  );
};

