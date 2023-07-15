import React from 'react';

const Tab04 = () => {
    return (
        <div style={{ paddingBottom: '40px', color: '#4D4D4D' }}>
            <table className="custom-table" style={{ paddingLeft: '20px', width: '80%' }}>
                <thead style={{ backgroundColor: 'rgb(0, 223, 162)', color: 'white' }}>
                    <tr style={{ gap: '7vh' }}>
                        <th style={{ width: '15%' }}>Baggage</th>
                        <th style={{ width: '15%' }}>Check - in</th>
                        <th style={{ width: '15%' }}>Cabin</th>

                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: '#97FEED', textAlign: 'center' }}>
                        <td>Adult</td>
                        <td>20 KG</td>
                        <td>M</td>

                    </tr>
                    <tr style={{ backgroundColor: 'white', textAlign: 'center' }}>
                        <td>Child</td>
                        <td>20 KG</td>
                        <td>M</td>

                    </tr>
                    <tr style={{ backgroundColor: '#97FEED', textAlign: 'center' }}>
                        <td>infant</td>
                        <td>20 KG</td>
                        <td>M</td>

                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Tab04;