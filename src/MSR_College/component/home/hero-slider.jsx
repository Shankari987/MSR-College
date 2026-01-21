import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { useEffect, useState } from "react";

const slider_data = [
    {
        id: 1,
        src: '/assets/images/engineering_slider/slider3.webp',
    },   
];

const HeroSlider = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    return (
        <div className="hero-banner hero-style-3">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={loop}
                pagination={false}
                grabCursor={true}
                draggable={true}
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                className="swiper university-activator"
                speed={1000}
                autoplay={{
                    delay: 5500
                }}
                navigation={{
                    nextEl: ".slide-next",
                    prevEl: ".slide-prev"
                }}
                lazy={{
                    loadPrevNext: false,
                    loadPrevNextAmount: 1
                }}
            >
              {slider_data.map((item) => {
                    const {id, src } = item;
                    return (
                        <SwiperSlide key={id}>
                            <img  src={src} className="swiper-lazy" alt="image" />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default HeroSlider;