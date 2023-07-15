import React from 'react';
import { Button } from '@mui/material';
import './RightNav.css'
const RightNav = ({ onFlightDetailsClick }) => {
  return (
    <div>
      <h1 style={{ color: '#001C30', fontSize: '5vh' }}>৳ 1850</h1>
      <Button
        style={{
          backgroundColor: '#00DFA2',
          color: 'white',
          marginTop: '40px',
          paddingLeft: '35px',
          paddingRight: '35px',
          borderRadius: '40px'
        }}
      >
        BOOK NOW
      </Button>
      <Button
        style={{ color: '#001C30', marginTop: '40px', marginLeft: '10vh' }}
        onClick={onFlightDetailsClick}
      >
        Flight Details
      </Button>
    </div>
  );
};

export default RightNav;
