import React from 'react';
import './Work.css';
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazone from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import { motion } from 'framer-motion';
import Resume from '../Services/HASNAIN_CV.pdf';


const Work = () => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span
                    style={{
                        color: darkMode ? 'white' : ''
                    }}>
                    Works for All these</span>
                <span>Brands & Clints</span>
                <span>
                    KFC PAKISTAN
                    <br />
                    Ecommerce
                    <br />
                    Cambridge Hospital

                </span>
                <a href={Resume} download>
                <button className="btn btn-a">Download CV</button>
                </a>
                <div className="blur s-blur1"></div>
            </div>

            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCricle">

                    <div className="w-secCricle">
                        <a href="https://www.facebook.com/hasnainirfan112/">
                            <img src={Upwork} alt="" />
                        </a>
                    </div>

                    <div className="w-secCricle">
                        <a href="https://www.facebook.com/hasnainirfan112/" className='fiver-icon'>
                            <img src={Fiver} alt="" />
                        </a>
                    </div>

                    <div className="w-secCricle">
                        <a href="https://www.facebook.com/hasnainirfan112/">
                            <img src={Amazone} alt="" />
                        </a>
                    </div>

                    <div className="w-secCricle">
                        <a href="https://www.facebook.com/hasnainirfan112/">
                            <img src={Shopify} alt="" />
                        </a>
                    </div>

                    <div className="w-secCricle">
                        <a href="https://www.facebook.com/hasnainirfan112/">
                            <img src={Facebook} alt="" />
                        </a>
                    </div>
                    
                </motion.div>
                <div className="w-backCricle blueCricle"></div>
                <div className="w-backCricle YellowCricle"></div>
            </div>
        </div>
    )
}

export default Work