import React from 'react';
import './Tab02.css';

const Tab02 = () => {
    return (
        <div style={{ paddingBottom: '40px', color: '#4D4D4D' }}>
            <table className="custom-table" style={{ paddingLeft: '20px', width: '80%' }}>
                <thead style={{ backgroundColor: 'rgb(0, 223, 162)', color: 'white' }}>
                    <tr style={{ gap: '7vh' }}>
                        <th style={{ width: '15%' }}>Pax Type</th>
                        <th style={{ width: '15%' }}>Base Fare(BDT)</th>
                        <th style={{ width: '15%' }}>Tax(BDT)</th>
                        <th style={{ width: '15%' }}>Total(BDT)</th>
                        <th style={{ width: '10%' }}>Pax Count</th>
                        <th style={{ width: '15%' }}>Service Fee(BDT)</th>
                        <th style={{ width: '15%' }}>Sub Total(BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: '#97FEED', textAlign: 'right' }}>
                        <td>Adult x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                    <tr style={{ backgroundColor: 'white', textAlign: 'right' }}>
                        <td>Child x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                    <tr style={{ backgroundColor: '#97FEED', textAlign: 'right' }}>
                        <td>infant x1</td>
                        <td>4090 TK</td>
                        <td>275 TK</td>
                        <td>4815 TK</td>
                        <td>1</td>
                        <td>0 BDT</td>
                        <td>4815 TK</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tab02;
