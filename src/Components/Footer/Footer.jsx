import React from 'react'
import Wave from '../../img/wave.png';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <div className="Footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>Hasnainirfan110@gmail.com</span>


                <div className="f-icons">

                    <a href="https://www.instagram.com/hasnain_irfan_x/">
                        <Insta color="white" size='3rem' />

                    </a>

                    <a href="https://www.facebook.com/hasnainirfan112/">
                        <Facebook color="white" size='3rem' />

                    </a>
                    <a href="https://github.com/HasnainIrfan">

                        <Github color="white" size='3rem' />
                    </a>

                </div>
            </div>
        </div >
    )
}

export default Footer