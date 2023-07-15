import React from 'react';
import img from '../../../assets/image/download.png'
import arrow from '../../../assets/image/halfarrow.png'
const Tab01 = () => {
    return (
        <>
            <section style={{ width: '110vh', display: 'flex', gap: '60px', color: '#4E6E81', marginTop: '7vh' }}>
                <div>
                    <img src={img} style={{ height: '50px' }} alt="" />
                    <h3>Biman Bangladesh Airlines</h3>
                    <h4 style={{ color: 'rgb(0, 223, 162)' }}>BG 671</h4>
                    <h4>Operation by: BG</h4>
                    <h4>Economy: G</h4>
                </div>
                <div>
                    <h4 style={{ color: '#9DB2BF' }}>Depart</h4>
                    <h1>JFK</h1>
                    <h4>Dhaka, BD | 15.00</h4>
                    <h4>Terminal, Hazrat Sha Jalal <br />International Airport</h4>
                    <h4 style={{ color: '#9DB2BF' }}>Sun, 3rd june 2022</h4>
                </div>
                <div>
                    <img src={arrow} style={{ width: '180px', height: '160px' }} alt="" />
                </div>
                <div>
                    <h4 style={{ color: '#9DB2BF' }}>Depart</h4>
                    <h1>DXB</h1>
                    <h4>Dhaka, BD | 15.00</h4>
                    <h4>Terminal, Hazrat Sha Jalal <br />International Airport</h4>
                    <h4 style={{ color: '#9DB2BF' }}>Sun, 3rd june 2022</h4>
                </div>
            </section>
            <div style={{
                backgroundColor: '#98EECC', width: '80vh', paddingLeft: '70px', paddingRight: '70px',
                marginLeft: '10vh', color: '#435B66', fontFamily: 'inherit'
            }}>
                <h4 style={{ textAlign: 'center', paddingTop: '5px', paddingBottom: '5px' }}>Change planes at International |Kuwait |KW |Kuwait(KWI), Connecting Time:04h:10m</h4>
            </div>
            <section style={{ width: '110vh', display: 'flex', gap: '60px', color: '#4E6E81', marginTop: '7vh' }}>
                <div>
                    <img src={img} style={{ height: '50px' }} alt="" />
                    <h3>Biman Bangladesh Airlines</h3>
                    <h4 style={{ color: 'rgb(0, 223, 162)' }}>BG 671</h4>
                    <h4>Operation by: BG</h4>
                    <h4>Economy: G</h4>
                </div>
                <div>
                    <h4 style={{ color: '#9DB2BF' }}>Depart</h4>
                    <h1>DXB</h1>
                    <h4>Dhaka, BD | 15.00</h4>
                    <h4>Terminal, Hazrat Sha Jalal <br />International Airport</h4>
                    <h4 style={{ color: '#9DB2BF' }}>Sun, 3rd june 2022</h4>
                </div>
                <div>
                    <img src={arrow} style={{ width: '180px', height: '160px' }} alt="" />
                </div>
                <div>
                    <h4 style={{ color: '#9DB2BF' }}>Depart</h4>
                    <h1>DAC</h1>
                    <h4>Dhaka, BD | 15.00</h4>
                    <h4>Terminal, Hazrat Sha Jalal <br />International Airport</h4>
                    <h4 style={{ color: '#9DB2BF' }}>Sun, 3rd june 2022</h4>
                </div>
            </section>
        </>
    );
};

export default Tab01;