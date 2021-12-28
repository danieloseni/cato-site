import React, {useState} from 'react'
import Logo from 'images/logo.png'
const Header = () => {
    const [navbarMinimized, updateMinimizedState] = useState<boolean>(false);
    const changeNavbarStyling = () => {
        if(window.scrollY >= 120 && !navbarMinimized){
            updateMinimizedState(true)
        }else if(window.scrollY < 120 && navbarMinimized){
            updateMinimizedState(false)
        }
    }

    window.addEventListener('scroll', changeNavbarStyling)

    return (
        //@ts-ignore
        <nav className = {(navbarMinimized) && "navbar-mini"}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navs">
                <div className="nav-controls">
                    {/* <div className="nav-icon" tabIndex={1}>
                        <i className="fal fa-bars"></i>
                    </div> */}
                    {/* <ul className="nav-links">
                        <li>About</li>
                        <li>Events</li>
                        <li>Gallery</li>
                    </ul> */}
                </div>



            </div>


        </nav>

    )
}

export default Header
