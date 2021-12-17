import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div class="logo">
                <img src="images/logo.png" alt="" />
            </div>

            <div class="navs">
                <div class="nav-controls">
                    <div class="nav-icon" tabindex="1000">
                        <i class="fal fa-bars"></i>
                    </div>
                    <ul class="nav-links">
                        <li>About</li>
                        <li>Events</li>
                        <li>Gallery</li>
                    </ul>
                </div>

                <div class="cta">
                    enroll now
                </div>


            </div>


        </nav>

    )
}

export default Header
