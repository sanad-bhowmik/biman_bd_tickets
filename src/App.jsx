// App.js
import React, { useState } from 'react';
import './App.css';
import LeftNav from './components/leftnav/leftnav';
import { Container } from '@mui/material';
import MiddleNav from './components/MiddleNav/MiddleNav';
import RightNav from './components/RightNav/RightNav';
import Banner from './components/Banner/Banner';
import Tab01 from './components/TabContents/Tab01/Tab01';

function App() {
  const [showBanner, setShowBanner] = useState(false);
  const [departureAirport, setDepartureAirport] = useState('DAC');
  const [arrivalAirport, setArrivalAirport] = useState('JFK');

  const handleFlightDetailsClick = () => {
    setShowBanner(!showBanner);
  };

  const handleAirportChange = (departure, arrival) => {
    setDepartureAirport(departure);
    setArrivalAirport(arrival);
  };

  return (
    <Container maxWidth="lg" style={{ fontFamily: 'Victor Mono', backgroundColor: 'white', marginTop: '50px', marginLeft: '150px' }}>
      <section style={{ display: '', gap: '70px' }}>
        <div style={{ display: 'flex' }}>
          <LeftNav />
          <MiddleNav departureAirport={departureAirport} arrivalAirport={arrivalAirport} onAirportChange={handleAirportChange} />
          <div style={{ backgroundColor: 'white', zIndex: 1, marginLeft: '44vh', width: '150vh', paddingLeft: '10vh', paddingRight:'10vh' }}>
            <RightNav onFlightDetailsClick={handleFlightDetailsClick} />
          </div>
        </div>
      </section>
      {showBanner && <Banner departureAirport={departureAirport} arrivalAirport={arrivalAirport} onAirportChange={handleAirportChange} />}
      {/* <Tab01 departureAirport={departureAirport} arrivalAirport={arrivalAirport} onAirportChange={handleAirportChange} /> */}
    </Container>
  );
}

export default App;
