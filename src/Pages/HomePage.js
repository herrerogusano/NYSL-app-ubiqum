import React from 'react';
import '../App.css';
import EventCard from '../components/EventsCard';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <div>
      <EventCard/>
      <Contact />
    </div>
  );
}

export default HomePage;
