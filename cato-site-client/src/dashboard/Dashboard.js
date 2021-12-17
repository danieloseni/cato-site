import React from 'react';
import About from './About';
import CurrentEvent from './CurrentEvent';
import Home from './Home';
import Sponsors from './Sponsors';
import UpcomingEvent from './UpcomingEvent';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Home />
            <About />
            <CurrentEvent />
            <UpcomingEvent />
            <Sponsors />
            
        </React.Fragment>

    )
}

export default Dashboard;
