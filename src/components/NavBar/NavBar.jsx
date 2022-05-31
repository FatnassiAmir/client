import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const shoButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        shoButton();
    }, [])

    window.addEventListener('resize', shoButton)

    return (
        <>
            <nav className="navbar"  id="Home">
                <div className="navbar-container">
                    <div className='navbar-logoo'>
                        <img src="/assets/logo2.png" alt=""  className="logo-img"/>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                        <span style={{color:'#FFF'}}>X</span>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a className='nav-links' onClick={closeMobileMenu} href="#Home">
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-links' onClick={closeMobileMenu} href="#AboutMe">
                                AboutMe
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-links' onClick={closeMobileMenu} href="#Projects">
                                My Projects
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-links' onClick={closeMobileMenu} href="#Resume">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
