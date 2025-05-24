import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1f2937', paddingX: 3 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
        letterSpacing: '0.03em',
        userSelect: 'none',
      }}
    >
      Nattaly Dalidet Maureira
    </Typography>
        <Box>
          <Button color="inherit" href="#portfolio">Portfolio</Button>
          <Button color="inherit" href="#about">About Me</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
