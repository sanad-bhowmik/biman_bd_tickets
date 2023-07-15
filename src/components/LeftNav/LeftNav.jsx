import React from 'react';
import img from '../../assets/image/download.png'
import { Step, StepLabel, Stepper } from '@mui/material';
import './LeftNav.css'

const LeftNav = () => {
    return (
        <div style={{ width: '30vh', paddingTop: '20px', marginRight: '15vh' }}>
            <img src={img} style={{ height: '50px' }} alt="" />
            <h1>Biman Bangladesh <br />Airlines</h1>
            <p>BG 178| W & BG 671| E</p>
            <h4 style={{color:'gray', paddingLeft:'30%'}}>5H 35MIN</h4>
            <div >
                <div class="container">
                    <div id="app"></div>
                    <div class="Stepper">
                        <div class="Stepper__step">
                            <div class="Stepper__indicator">
                                <span class="Stepper__info" style={{backgroundColor:'gray', border:'none'}}></span>
                            </div>
                            <div class="Stepper__panel">
                            </div>
                        </div>
                        <div class="Stepper__step">
                            <div class="Stepper__indicator">
                                <span class="Stepper__info " style={{marginLeft:'6vh'}}></span>
                            </div>
                            <div class="Stepper__panel">
                            </div>
                        </div>
                        <div class="Stepper__step">
                            <div class="Stepper__indicator">
                                <span class="Stepper__info"></span>
                            </div>
                            <div class="Stepper__panel">
                            </div>
                        </div>
                        <div class="Stepper__step">
                            <div class="Stepper__indicator">
                                <span class="Stepper__info" style={{backgroundColor:'gray', border:'none', marginLeft:'6vh'}}></span>
                            </div>
                            <div class="Stepper__panel">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 style={{color:'gray', paddingLeft:'30%'}}>2 STOPS</h4>
        </div>
    );
};

export default LeftNav;