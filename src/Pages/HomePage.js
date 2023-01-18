import React from 'react';
import '../App.css';
import EventCard from '../Components/EventsCard';
import Contact from '../Components/Contact';

function HomePage() {
  return (
    <div>
      <EventCard/>
      <Contact />
    </div>
  );
}

export default HomePage;
