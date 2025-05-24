import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function AboutCard() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '2rem auto',
        px: 2,
      }}
    >
      <Card elevation={6} sx={{ borderRadius: 3 }}>
        <CardContent>
        <Typography variant="body1" component="p" sx={{ whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {`I have been modeling for seven years. I have worked on commercial, print, runway and event campaigns for brands such as Jeffries and Madison, Tully and Drive, Keel and Briar, Stipple Unlimited, and Beal and Harlow.`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
