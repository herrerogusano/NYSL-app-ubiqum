import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import SchedulePage from './pages/SchedulePage';
import GamesPage from './pages/GamesPage';
import LocationsPage from './pages/LocationsPage';
import ChatPage from './pages/ChatPage';
import NoPage from './pages/NoPage';





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
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="games/:id" element={<GamesPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
