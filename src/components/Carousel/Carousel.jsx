import './Carousel.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useDeviceDetections from '../../hooks/useDeviceDetection'


import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

function App({ elements }) {
    const device = useDeviceDetections();

    return (
        <div className="swiper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
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