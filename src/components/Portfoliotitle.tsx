import { Typography } from '@mui/material';

export default function PortfolioTitle() {
  return (
    <Typography
      id="portfolio"
      component="h2"
      variant="h4"  // tamaño visual, puedes ajustar (h3, h5, etc)
      sx={{
        pt: 4,
        //py: 4, // padding vertical
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600,
        textAlign: 'center',
        mb: 3,
      }}
    >
      INFLUENCER - UGC
    </Typography>
  );
}
