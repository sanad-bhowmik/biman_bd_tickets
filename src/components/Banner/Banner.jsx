import { Tab, Tabs } from '@mui/material';
import React from 'react';
import Tab01 from '../TabContents/Tab01/Tab01';
import Tab02 from '../TabContents/Tab02/Tab02';
import Tab03 from '../TabContents/Tab03/Tab03';
import Tab04 from '../TabContents/Tab04/Tab04';

const Banner = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const tabContent = [
        <Tab01 />,
        <Tab02 />,
        <Tab03 />,
        <Tab04 />
    ];

    return (
        <div style={{ marginLeft: '1vh' }}>
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab
                    label="FLIGHT DETAILS"
                    sx={{
                        backgroundColor: selectedTab === 0 ? 'rgb(0, 223, 162)' : 'inherit',
                        marginRight: '12vh',
                        borderRadius: '15px'
                    }}
                />
                <Tab
                    label="FARE SUMMERY"
                    sx={{
                        backgroundColor: selectedTab === 1 ? 'rgb(0, 223, 162)' : 'inherit',
                        marginRight: '12vh',
                        borderRadius: '15px'
                    }}
                />
                <Tab
                    label="TFARE POLICY"
                    sx={{
                        backgroundColor: selectedTab === 2 ? 'rgb(0, 223, 162)' : 'inherit',
                        marginRight: '12vh',
                        borderRadius: '15px'
                    }}
                />
                <Tab
                    label="BAGGAGE"
                    sx={{
                        backgroundColor: selectedTab === 3 ? 'rgb(0, 223, 162)' : 'inherit',
                        marginRight: '12vh',
                        borderRadius: '15px'
                    }}
                />
            </Tabs>
            <div style={{ marginTop: '1rem' }}>
                {tabContent[selectedTab]}
            </div>
        </div>
    );
};

export default Banner;
