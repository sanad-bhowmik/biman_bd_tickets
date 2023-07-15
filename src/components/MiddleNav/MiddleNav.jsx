import React from 'react';
import black from '../../assets/image/black-plane.png';
import white from '../../assets/image/white_plane.png';
import './MiddleNav.css'
const MiddleNav = ({ departureAirport, arrivalAirport, onAirportChange }) => {
  const handleBlackPlaneClick = () => {
    onAirportChange('DAC', 'JFK');
  };

  const handleWhitePlaneClick = () => {
    onAirportChange('JFK', 'DAC');
  };

  return (
    <section style={{ display: 'flex', gap: '50px' }}>
      <div>
        <h1 style={{ fontSize: '250%', color: '#001C30' }}>{departureAirport}</h1>
        <div style={{ color: 'gray' }}>
          <h4>Hazrat Shajalal Intl Airport</h4>
          <h3 style={{ color: '#00DFA2' }}>19:05</h3>
          <h3>SUN 4TH JUL 2022</h3>
        </div>
        <div style={{ color: '#00DFA2', display: 'flex', gap: '40px' }}>
          <h4>Refundable</h4>
          <h4>Class_W</h4>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <img
          style={{ height: '90px', cursor: 'pointer' }}
          src={black}
          alt=""
          onClick={handleBlackPlaneClick}
        />
        <img
          style={{ height: '90px', marginTop: '20px', position: 'absolute', cursor: 'pointer' }}
          src={white}
          alt=""
          onClick={handleWhitePlaneClick}
        />
      </div>
      <div style={{ marginLeft: '20%', textAlign: 'right' }}>
        <h1 style={{ fontSize: '250%', color: '#001C30' }}>{arrivalAirport}</h1>
        <div style={{ color: 'gray' }}>
          <h4>JF Kennedy Intl Airport</h4>
          <h3 style={{ color: '#00DFA2' }}>12:05</h3>
          <h3>MON 6TH JUL 2022</h3>
        </div>
        <div style={{ color: 'gray', paddingLeft: '50px', paddingTop: '30px' }}>
          <h3>Baggage:45KG</h3>
        </div>
      </div>
    </section>
  );
};

export default MiddleNav;
