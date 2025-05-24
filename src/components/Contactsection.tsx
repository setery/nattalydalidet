import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import { Email, Instagram, MusicNote } from '@mui/icons-material';

const contacts = [
  {
    title: 'TikTok',
    description: 'Conoce más sobre mi experiencia profesional.',
    icon: <MusicNote sx={{ fontSize: 40, color: '#69C9D0' }} />,
    url: 'https://www.tiktok.com/@nattalydalidet',
  },
  {
    title: 'Instagram',
    description: 'Revisa mis proyectos de código abierto y colaboraciones.',
    icon: <Instagram sx={{ fontSize: 40, color: '#E1306C' }} />,
    url: 'https://www.instagram.com/natty_dalidet',
  },
  {
    title: 'Email',
    description: 'Contáctame directamente para proyectos o consultas.',
    icon: <Email sx={{ fontSize: 40, color: '#555' }} />,
    url: 'mailto:Natt.dalidet@gmail.com',
  },
];

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: '#fefefe',
        py: 8,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
        Conéctate conmigo
      </Typography>

      <Grid container spacing={4} justifyContent="center" maxWidth="lg" mx="auto">
        {contacts.map(({ title, description, icon, url }) => (
           <Grid container spacing={4} justifyContent="center" maxWidth="lg" mx="auto">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ textDecoration: 'none' }}
              color="inherit"
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  transition: '0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  color: 'inherit',
                }}
              >
                {icon}
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
