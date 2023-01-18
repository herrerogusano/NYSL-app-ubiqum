import * as React from 'react';
import { useEffect } from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import HomePage from '../Pages/HomePage';




export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  //const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 0 }} elevation={12}>
      
      
      <BottomNavigation sx={{ }} value={value} onChange={handleChange}>
        <BottomNavigationAction
           component={Link}
           to="/home"
          label="Home"
          value="home"
         
          icon={<HomeIcon />}
          element={ <HomePage /> }
        />
        <BottomNavigationAction
          component={Link}
          to="/schedule"
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
          label="Locations"
          value="locations"
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