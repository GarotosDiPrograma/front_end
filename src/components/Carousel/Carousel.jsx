
import { Button } from '../Button/Button';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='carousel'>
                        <div className='oferta'>
                            <p className='pYellow'>Melhores ofertas personalizadas</p>
                            <h1>Queima de estoque Nike 🔥</h1>
                            <p>Aproveite descontos especiais em produtos selecionados. Ofertas exclusivas com até 30% de desconto na linha Nike.</p>
                            <Button
                                width={'13.75rem'}
                                height={'3rem'}
                            >Ver Ofertas</Button>
                        </div>
                        <div className='divTenis'>
                            <img src="../../../public/White-Nike.png" alt="Imagem do Tênis" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carousel'>
                        <div className='oferta'>
                            <p className='pYellow'>Novos modelos disponíveis</p>
                            <h1>Coleção Exclusiva Nike 👟</h1>
                            <p>Descubra os últimos lançamentos da Nike com designs inovadores e tecnologia de ponta.</p>
                            <Button
                                width={'13.75rem'}
                                height={'3rem'}
                            >Ver Ofertas</Button>
                        </div>
                        <div className='divTenis'>
                            <img src="../../../public/White-Nike.png" alt="Imagem do Tênis" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carousel'>
                        <div className='oferta'>
                            <p className='pYellow'>Promoção por tempo limitado</p>
                            <h1>50% OFF em tênis de corrida</h1>
                            <p>Aproveite descontos incríveis em nossa linha de tênis de corrida. Oferta válida enquanto durarem os estoques.</p>
                            <Button
                                width={'13.75rem'}
                                height={'3rem'}
                            >Ver Ofertas</Button>
                        </div>
                        <div className='divTenis'>
                            <img src="../../../public/White-Nike.png" alt="Imagem do Tênis" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carousel'>
                        <div className='oferta'>
                            <p className='pYellow'>Edição Especial</p>
                            <h1>Tênis Nike Air Jordan Retro 🏀</h1>
                            <p>Chegaram os novos Air Jordan Retro. Design clássico com tecnologia moderna para quadra e estilo.</p>
                            <Button
                                width={'13.75rem'}
                                height={'3rem'}
                            >Ver Ofertas</Button>
                        </div>
                        <div className='divTenis'>
                            <img src="../../../public/White-Nike.png" alt="Imagem do Tênis" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}