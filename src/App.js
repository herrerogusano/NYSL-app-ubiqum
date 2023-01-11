import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import LabelBottomNavigation from './Components/Navbar';
import Home from './Pages/Home';
import Banner from './Components/Banner';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      
      <Banner />

      <Home />

      <LabelBottomNavigation />
      
    </ThemeProvider>
  );
}

export default App;
