import React from 'react'
import Logo from 'images/logo.png'
const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navs">
                <div className="nav-controls">
                    <div className="nav-icon" tabIndex={1}>
                        <i className="fal fa-bars"></i>
                    </div>
                    <ul className="nav-links">
                        <li>About</li>
                        <li>Events</li>
                        <li>Gallery</li>
                    </ul>
                </div>

                <div className="cta">
                    enroll now
                </div>


            </div>


        </nav>

    )
}

export default Header
