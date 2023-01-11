import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Paper from '@mui/material/Paper';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 0 }} elevation={12}>
      <BottomNavigation sx={{ }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Schedule"
          value="schedule"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          label="Games"
          value="games"
          icon={<SportsSoccerIcon />}
        />
        <BottomNavigationAction
          label="Location"
          value="location"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction 
          label="Chat" 
          value="chat" 
          icon={<ChatIcon />} />
      </BottomNavigation>
    </Paper>
  );
}