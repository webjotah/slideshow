/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules';

register();
import 'swiper/css'
import 'swiper/css/navigation' //import das setas
import 'swiper/css/pagination' //import da paginação
import 'swiper/css/scrollbar'  //import da scrollbar
import 'swiper/css/effect-coverflow'

const Home: React.FC = () => {

  const data = [
    { id: '1', image: 'https://w.wallhaven.cc/full/ex/wallhaven-ex9gwo.png' },
    { id: '2', image: 'https://w.wallhaven.cc/full/we/wallhaven-we628p.jpg' },
    { id: '3', image: 'https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png' },
    { id: '4', image: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg' },
    { id: '5', image: 'https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg' }
  ]
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 ml-[40%] text-slate-100">3D Coverflow Slider</h1>
      <Swiper
        effect={'coverflow'}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <div className='mt-7'>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="slider"
                className='slide-item'
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Home;