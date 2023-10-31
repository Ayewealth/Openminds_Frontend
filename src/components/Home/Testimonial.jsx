import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Testimony from './Testimony'

const Testimonial = () => {
    const breakpoints = {
        425: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
    };

    return (
        <div className='small__section bg'>
            <div className="container">
                <div className="review__container">
                    <div className="review__head">
                        <div id='rev_head_txts'>
                            <h3>What our students are saying about us</h3>
                        </div>
                        <p>
                            You learn today and earn tomorrow. The roots of education are bitter but the fruit are sweet. if you learn today you can lead tomorrow. See what our students are saying
                        </p>
                    </div>
                    <div className="reviews">
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

export default Testimonial