import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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