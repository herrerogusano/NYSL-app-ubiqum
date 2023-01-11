import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function EventCard() {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 275, m: 'auto', boxShadow: '3' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Upcoming events
        </Typography>
        <Typography variant="h5" component="div">
          August 4
        </Typography>
        <Typography variant="body2">
          NYSL fundraiser
        </Typography>
      </CardContent>

    </Card>
  );
}