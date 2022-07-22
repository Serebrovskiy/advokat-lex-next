import { useState, useEffect } from "react"
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/slider.module.scss'


export function Slider({ cases: wonCases, onOpenPopup }) {

 console.log('process.env.API_URL_LOCAL', process.env.API_URL_LOCAL)
// let src = process.env.API_URL_LOCAL || 'http://localhost:1337';
 let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

  // if(img){
  //   src += post.img.data.attributes.url;
  // } 
  
  return (
  <>
    <button className="custom_next slider_navs"></button>
    <button className="custom_prev slider_navs"></button>
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y]}
      // spaceBetween={30}
      slidesPerView={5}
      pagination={{ 
        clickable: true,
        // el: '.swiper-pagination' 
      }}
      navigation={{
        nextEl: ".custom_next",
        prevEl: ".custom_prev"
     }}
     breakpoints={{
      0: {
        slidesPerView: 3,
        pagination: { clickable: true }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 5,
      },
    }}
    >

         {wonCases.map(item => {
            if(item.attributes.slider){
            return (  
              <SwiperSlide className={styles.slide} key={item.id}>
                <div className={styles.slide_container} onClick={() => onOpenPopup(`imageList${JSON.stringify(item)}`)}> 
                  <Image loader={() => `${src+item.attributes.img.data[0].attributes.url}?w=192`} src={src+item.attributes.img.data[0].attributes.url} width={192} height={252} alt='' />
                </div>
              </SwiperSlide>
         )}})}
      
    </Swiper> 
  </>
  )
}
