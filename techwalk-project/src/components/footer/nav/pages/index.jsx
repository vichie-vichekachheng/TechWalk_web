import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Products from './products.json';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
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
                                <h3>Experience the Future of Innovation <br />
                                    Powerful performance. Stunning design. Next-level technology.</h3>
                                <a href="" className="btn btn-dark">SHOP NOW</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-wrap hero-wrap2">
                            <div className="hero-content">
                                <h1>Affordable Laptops</h1>
                                <h3>Trusted Quality <br />
                                    Pre-owned laptops carefully selected to give you great performance at the best price.</h3>
                                <a href="" className="btn btn-dark">SHOP NOW</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="product-container py-5 my-5">
                <div className="container position-relative">
                    <div className="row">
                        <div className="second-title product-title mb-5 text-center">
                            <h2 className="fw-bold fs-1 text-uppercase">Featured Deals of the WeekS</h2>
                            <p className="text-muted my-3">Experience every type of devices!</p>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={6}
                        spaceBetween={50}
                        modules={[Navigation]}
                        navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
                        breakpoints={{
                            1399: { slidesPerView: 6 },
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3.5 },
                            0: { slidesPerView: 3 },
                        }}
                        className="mt-4 swiper position-relative"
                    >
                        {Products.filter(product => product.id >=1 && product.id<=14).map(product=>(
                            <SwiperSlide key={product.id}>
                                  <div className="product-item text-center position-relative">
                                    <div className="product-image w-100 position-relative overflow-hidden">
                                        <img src={product.image} alt="" className="img-fluid"style={{height:"170px", width:"280px"}} />
                                        <img src={product.secondimage} className="img-fluid" style={{height:"170px", width:"280px"}} alt="" />
                                    </div>
                                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                                        <div className="product-details py-2">
                                            <h5 className="" style={{fontSize:"14px"}}>{product.productname}</h5>
                                            <h6 className="text-warning">${product.price}</h6>
                                        </div>
                                    </Link>    
                                    <div className="d-flex align-items-center justify-content-between">
                                        <button className="btn btn-outline-dark fs-5"><i class="fa-solid fa-heart"></i></button>
                                        <button className="btn btn-outline-dark fs-5"><i class="fa-solid fa-bag-shopping"></i></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                   

                </div>
            </div>
        </>
    );
}