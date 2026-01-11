import React from 'react';
import Card from '../ui/Card';
import { SwiperSlide, Swiper } from 'swiper/react';
import Button from '../ui/Button';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function BooInfinity() {
  const slides = [
    {
      title: 'Teleport',
      description: 'Activate Boo Infinity to unlock unlimited teleports and other exclusive features.',
    },
    {
      title: 'Explore',
      description: 'Discover new worlds and connect with friends in the Boo universe.',
    },
    {
      title: 'Customize',
      description: 'Personalize your profile and make it uniquely yours.',
    },
  ];
  return (
    <Card>
      <div className='mb-4'>
        {/* Slides */}
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} loop={true} modules={[Autoplay]}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='text-center mb-4'>
                <div className='aspect-[4/3] bg-gray-700 rounded-xl mb-4 mx-auto h-24 mt-4'></div>
                <h2 className='text-white font-bold text-lg'>{slide.title}</h2>
                <p className='text-white text-sm mt-2'>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* !Slides */}
      </div>
      <Button fluid>ACTIVATE BOO INFINITY</Button>
    </Card>
  );
}
