import React from 'react'
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Contact = () => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    const form = useRef()

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yegl8c7', 'template_9ew0u8r', form.current, 'Z7RrwIQ051m9fM4rD')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome c-text">
                    <span
                        style={{
                            color: darkMode ? 'white' : ''
                        }}
                    >Get in Touch</span>
                    <span>Contact me</span>
                </div>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' className='user' name='to_name' required />
                    <input type="email" placeholder='Email' className='user' name='from_email' required />
                    <textarea name="message" className='user' placeholder='Message' required />
                    <input type="submit" value="Send" className='btn c-btn' />
                    <span>{done && "Thanks For Contacting US ..."}</span>

                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>

                </form>
            </div>
        </div>
    )
}

export default Contact