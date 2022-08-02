import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile6.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { useContext } from 'react';
import { themeContest } from '../../Contest';


const Testimonial = () => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni beatae inventore aliquam quidem soluta."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni beatae inventore aliquam quidem soluta."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni beatae inventore aliquam quidem soluta."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni beatae inventore aliquam quidem soluta."
        }
    ]


    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Exceptional Work</span>
                <span> From me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
            >
                {
                    clients.map((client, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="testimonial"
                                    style={{
                                        background: darkMode ? 'rgba(255, 255, 255, 0.26)' : ''
                                    }}
                                >
                                    <img src={client.img} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })

                }
            </Swiper>


        </div>
    )
}

export default Testimonial