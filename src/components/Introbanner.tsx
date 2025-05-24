import { Box, Typography } from '@mui/material';

export default function IntroBanner() {
  return (
    <Box
      sx={{
        
        width: '100vw', // ocupa todo el ancho de la pantalla
        py: 4, // padding vertical
        px: 2, // padding horizontal
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: '900px', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 500}}>
          Content in English & Spanish | Lifestyle · Skincare · Fitness · Travel
        </Typography>
      </Box>
    </Box>
  );
}
