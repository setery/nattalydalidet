import { Box } from '@mui/material';

export default function Gradientlayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(90deg,rgb(204, 229, 218) 0%,rgb(64, 225, 198)50%,rgb(13, 163, 243) 100%)',
        // Opcional: para que el fondo no se mueva con el scroll
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Box>
  );
}
