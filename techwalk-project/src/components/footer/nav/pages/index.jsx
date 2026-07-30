import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
    return (
        <div className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3700,
                    disableOnInteraction: false
                }}
            >   
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap1">
                        <div className="hero-content">
                            <h1>iPhone 17</h1>
                            <h3>Experience the Future of Innovation <br></br>
                                Powerful performance. Stunning design. Next-level technology.</h3>
                                <a href="" className="btn btn-dark">SHOP NOW</a>
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className="hero-wrap hero-wrap2">
                        <div className="hero-content">
                            <h1>Affordable Laptops</h1>
                            <h3>, Trusted Quality
Pre-owned laptops carefully selected to give you great performance at the best price. <br></br>
                                Powerful performance. Stunning design. Next-level technology.</h3>
                                <a href="" className="btn btn-dark">SHOP NOW</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}