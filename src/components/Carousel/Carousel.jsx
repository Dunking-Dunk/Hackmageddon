import './Carousel.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, EffectCoverflow } from 'swiper/modules';

function App({ elements }) {
    return (
        <div className="swiper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"

            >
                {elements?.map((ele, key) => {
                    return <SwiperSlide key={key}>
                        {ele}
                    </SwiperSlide>
                })}

            </Swiper>
        </div>
    );
}

export default App;