import React from 'react';
import About from 'components/dashboard/About';
import CurrentEvent from 'components/dashboard/CurrentEvent';
import Home from 'components/dashboard/Home';
import Sponsors from 'components/dashboard/Sponsors';
import UpcomingEvent from 'components/dashboard/UpcomingEvent';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Home />
            {/* <About /> */}
            <CurrentEvent />
            <UpcomingEvent />
            <Sponsors />
            
        </React.Fragment>

    )
}

export default Dashboard;
