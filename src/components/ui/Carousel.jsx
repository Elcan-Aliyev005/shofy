"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import 'swiper/css/navigation';
import "@/assets/style/swiper.css";
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

import Shape1 from "@/assets/img/photos/slider-shape-1.png";
import Shape2 from "@/assets/img/photos/slider-shape-2.png";
import Shape3 from "@/assets/img/photos/slider-shape-3.png";
import Shape4 from "@/assets/img/photos/slider-shape-4.png";
import Image from 'next/image';

export default function Carousel() {
    return (
        <div className='relative'>
            <Image alt='shape-img' className={"absolute z-[99] mix-blend-plus-lighter opacity-[0.2] top-0 right-0"} src={Shape1} />
            <Image alt='shape-img' className={"absolute right-[28%] bottom-[13%]"} src={Shape2} />
            <Image alt='shape-img' className={"absolute top-[8%] right-[33%]"} src={Shape3} />
            <Image alt='shape-img' className={"absolute top-[30%] left-[6%]"} src={Shape4} />
            <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

            >
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
                <SwiperSlide><div className='min-h-[520px]  w-full'> Slide </div></SwiperSlide>
            </Swiper>
        </div>
    );
}


