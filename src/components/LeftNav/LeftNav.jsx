import React from 'react';
import img from '../../assets/image/download.png'
import { Step, StepLabel, Stepper } from '@mui/material';
import './LeftNav.css'

const LeftNav = () => {
    return (
        <div style={{ width: '30vh' , paddingTop:'20px', marginRight:'15vh'}}>
            <img src={img} style={{ height: '50px' }} alt="" />
            <h1>Biman Bangladesh <br />Airlines</h1>
            <p>BG 178| W & BG 671| E</p>
            <div style={{ }}>
                <div class="container">
                    <div class="stepper-wrapper">
                        <div class="progress"></div>
                        <div class="screen-indicator "></div>
                        <div class="screen-indicator completed"></div>
                        <div class="screen-indicator completed"></div>
                        <div class="screen-indicator"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;