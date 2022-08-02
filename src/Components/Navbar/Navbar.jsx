import React from 'react'
import Toogle from '../Toogle/Toogle'
import './Navbar.css'
import { Link } from 'react-scroll';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Navbar = () => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    return (
        <div className="n-wapper"
        style={{
            background: darkMode? 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))' : ''
          }}
        >
            <div className="n-left">
                <div className="n-name" 
              
            
                >Hasnain</div>
                <Toogle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} smooth={true} autoFocus="start" to='Intro' activeClass="activeClass">
                            <li>Home</li>
                        </Link>

                        <Link spy={true} smooth={true} to='Services'>
                            <li>Services</li>
                        </Link>

                        <Link spy={true} smooth={true} to='Experience'>
                            <li>Experience</li>
                        </Link>

                        <Link spy={true} smooth={true} to='Protfolio'>
                            <li>Protfolio</li>
                        </Link>

                        <Link spy={true} smooth={true} to='Testimonials'>  
                            <li>Testimonials</li>
                        </Link>

                    </ul>
                </div>

                <Link spy={true} smooth={true} to='Contact'  >
                <button className="n-button btn">
                        Contact
                </button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar