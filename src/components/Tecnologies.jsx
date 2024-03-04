import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './../styles/tecnologies.css';

export default function Tecnologies() {
  const [technologies, setTechnologies] = useState([]); 
  
  useEffect(() => {

    const fechTechnologies = async () => {
      try {
        const response = await fetch('https://portfolio-teven.koyeb.app/api/technology');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    }

    fechTechnologies();

  }, []);

  return (

    <div className='tecno-box'>
      <h1>&lt; Technologies /&gt;</h1>
      <br />
      <p className='tech-descrp'>These are some of the technologies that you use the most and in which I have the most knowledge.</p>
      <br />
      <div
        className='container-image'
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          slidesPerView={4}
          loop={true}
          
        >
          {technologies.map((image, index) => (
            <SwiperSlide className='image-box swiper' key={index}>
              <img className='tech-img'
                src={image.logo}
                alt={image.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
