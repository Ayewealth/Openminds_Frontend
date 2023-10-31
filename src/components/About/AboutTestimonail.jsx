import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Testimony from '../Home/Testimony';

const AboutTestimonail = () => {
    const breakpoints = {
        425: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
    };

    return (
        <div className='small__section bg2'>
            <div className="container">
                <div className="testimonial__container">
                    <div className="testimonail__head">
                        <h3>Improving Lives Through Learning</h3>
                        <p>
                            Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
                        </p>
                    </div>
                    <div className="testimonial">
                        <Swiper
                            breakpoints={breakpoints}
                            spaceBetween={30}
                            autoplay={{ delay: 6000 }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Testimony /></SwiperSlide>
                            <SwiperSlide><Testimony /></SwiperSlide>
                            <SwiperSlide><Testimony /></SwiperSlide>
                            <SwiperSlide><Testimony /></SwiperSlide>
                            <SwiperSlide><Testimony /></SwiperSlide>
                            <SwiperSlide><Testimony /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTestimonail