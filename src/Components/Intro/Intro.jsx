import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Floatingdiv from '../FloatingDiv/Floatingdiv';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// import  Hasnain  from './hasnain.png';


const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro" id="Intro" >
            <div className="i-left">
                <div className="i-name">
                    <span style={{
                        color: darkMode ? 'white' : ''
                    }}>Hy! I am</span>
                    <span>Hasnain Irfan</span>
                    <span>MernStack Developer with high level of Exprience in website
                        designing and development, Production the quality work
                    </span>
                </div>
                <Link spy={true} smooth={true} to='Contact'>
                    <button className="btn i-button">
                        Hire me
                    </button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/HasnainIrfan">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/hasnain-irfan-4488a723a/">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/hasnain_irfan_x/">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={Glassesimoji} alt="" />

                <motion.div
                    initial={{ top: '-4%', left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}
                    className="floating-div"
                >
                    <Floatingdiv image={Crown} text1="Web" text2="Designer" />
                </motion.div>

                <motion.div
                    initial={{ top: '18.2rem', left: '8rem' }}
                    whileInView={{ left: '0.5rem' }}
                    transition={transition}
                    style={{ top: "18rem", left: "0rem" }}
                    className="floatings-div"

                >
                    <Floatingdiv image={Thumbup} text1="Web" text2="Developer" />
                </motion.div>

                <div className="blur"></div>

                <div className="blur"

                    style={{
                        background: "#C1f5ff",
                        top: "17rem",
                        width: "21rem",
                        left: "-9rem",
                        height: "11rem"
                    }}>

                </div>

            </div>
        </div>
    )
}

export default Intro