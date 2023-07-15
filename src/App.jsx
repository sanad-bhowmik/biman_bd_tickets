import React, { useState } from 'react';
import './App.css';
import LeftNav from './components/leftnav/leftnav';
import { Container, Divider } from '@mui/material';
import MiddleNav from './components/MiddleNav/MiddleNav';
import RightNav from './components/RightNav/RightNav';
import Banner from './components/Banner/Banner';

function App() {
  const [showBanner, setShowBanner] = useState(false);

  const handleFlightDetailsClick = () => {
    setShowBanner(!showBanner);
  };

  return (
    <Container maxWidth="lg" style={{ fontFamily: 'Victor Mono', backgroundColor: 'white', marginTop: '50px', marginLeft: '150px' }}>
      <section style={{ display: '', gap: '70px' }}>
        <div style={{ display: 'flex' }}>
          <LeftNav />
          <MiddleNav />
          <div style={{ backgroundColor: 'white', zIndex: 1, marginLeft: '44vh', width: '150vh', paddingLeft: '10vh', paddingRight:'10vh' }}>
            <RightNav onFlightDetailsClick={handleFlightDetailsClick} />
          </div>
        </div>
      </section>
      {showBanner && <Banner />}
    </Container>
  );
}

export default App;
