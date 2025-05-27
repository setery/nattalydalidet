import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';



const clips = [
  {
    title: 'Gym Routine',
    url: 'https://www.tiktok.com/embed/v2/7497301220021865783' // Usa el link de embed de TikTok
  },
  {
    title: 'Day in Melbourne',
    url: 'https://www.tiktok.com/embed/v2/7503379438332071173'
  },
  {
    title: 'Night Shift Life',
    url: 'https://www.tiktok.com/embed/v2/7500943759526595845'
  }
];

export default function ClipsSection() {
  return (
    <Box
      id="clips"
      sx={{
        py: 10,
        px: 2,
        background: 'linear-gradient(to right, #d0f0e0, #c0e8f9)',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 6 }}>
        Mis Clips de TikTok
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {clips.map((clip, index) => (
          <Grid  key={index}>
            <Card
              elevation={4}
              sx={{
                height: '600px', // Más altura para formato vertical
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <iframe
                src={clip.url}
                title={clip.title}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                style={{ border: 'none' }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {clip.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
