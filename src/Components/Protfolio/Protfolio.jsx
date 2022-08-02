import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SlideBar from '../../img/sidebar.png';
// import Ecommerce from '../../img/ecommerce.png';
// import HOC from '../../img/hoc.png';
// import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import './Protfolio.css';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import Hospital from './2.png';
import FITCLUB from './FITCLUB.png';
import KFC from './KFC.png';
import Ecom from './Ecom.png';


const Protfolio = () => {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Protfolio" id='Protfolio'>

      <span
        style={{
          color: darkMode ? 'white' : ''
        }}
      >Recent Projects</span>
      <span>Protfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >

        <SwiperSlide>
          <a href="https://fitclubhasnainirfan.pages.dev/">
            <img src={FITCLUB} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={KFC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecom} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Hospital} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Protfolio