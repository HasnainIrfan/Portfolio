import React from 'react'
import './Experience.css'
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Experience = () => {


    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div
                   
                    className="circle"
                    style={{
                        color: darkMode ? 'var(--orange)' : ''
                    }}
                >1+</div>
                <span>Years</span>
                <span>Experience</span>

            </div>

            <div className="achievement">
                <div className="circle"
                    style={{
                        color: darkMode ? 'var(--orange)' : ''
                    }}
                >5+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>

            <div className="achievement">
                <div className="circle"
                    style={{
                        color: darkMode ? 'var(--orange)' : ''
                    }}
                >2+</div>
                <span>Companies</span>
                <span>Work</span>

            </div>
        </div>
    )
}

export default Experience