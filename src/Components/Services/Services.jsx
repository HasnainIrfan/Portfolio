import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Cards/Card";
import Resume from './HASNAIN_CV.pdf';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import { motion } from 'framer-motion';

const Services = () => {

    const transition = { duration: 1, type: 'spring' }

    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id="Services">

            <div className="s-left">
                <div className="awesome">
                    <span
                        style={{
                            color: darkMode ? 'white' : ''
                        }}>My Awesome</span>
                    <span>Services</span>
                    <span>
                        Full Stack web
                        developer with solid understanding of front – end
                        <br/>
                        and back-end technologies, Node / React / MongoDB
                       
                    </span>
                    <a href={Resume} download>
                        <button className="btn btn-a">Download CV</button>
                    </a>
                    <div className="blur s-blur1"></div>
                </div>
            </div>

            <div className="s-card">
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Designer'}
                        detail={"HTML , CSS , BootStrap , JavaScrip , Adobe"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '-8rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}

                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"React  , Nodejs , Express , Mongodb , Redux "}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '28rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}

                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'ADDITIONAL SKILLS'}
                        detail={"Ms Offic , Git"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>




        </div>
    )
}

export default Services;