import React from 'react';
import './Tab03.css'


const Tab03 = () => {
    return (
        <section className='cancel' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
                <h4 className='green'>Cancellation</h4>
                <h3>Refund Amount = Paid Amount - Airline Cancellation Fee</h3>
                <h3 className='green'>Re-issue</h3>
                <h3>Re-issue Fee = Airline's Fee + Fare Difference</h3>
            </div>
            <div style={{ flex: 1 }}>
                <h4 className='green'>Void</h4>
                <h3>Re-issue Fee = Airline's Fee + Fare Difference</h3>
                <h3 className='green'>Refund</h3>
                <h3>Re-issue Fee = Airline's Fee + Fare Difference</h3>
            </div>
        </section>
    );
};

export default Tab03;
