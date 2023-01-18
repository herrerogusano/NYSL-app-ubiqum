import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import LabelBottomNavigation from './Components/Navbar';
import HomePage from './Pages/HomePage';
import LayoutPage from './Pages/LayoutPage';
import SchedulePage from './Pages/SchedulePage';
import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<HomePage />} />
          <Route path="schedule" element={<SchedulePage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
