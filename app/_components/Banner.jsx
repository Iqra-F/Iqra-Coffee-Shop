"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero from "../../public/assests/hero1.png";
import hero2 from "../../public/assests/alowishus-coffee.png";
import cafe from "../../public/assests/cafe.png";
import coffeemid from "../../public/assests/coffee-mid.png";

const Banner = () => {
  return (
    <div className="container  mx-auto max-w-screen-lg px-8 pt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* ____________________ */}
        <SwiperSlide>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div className="text-left flex flex-col gap-3 "
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
               data-aos-offset="200"
               data-aos-delay="0"
               data-aos-duration="0"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
              >
                <div className="relative">
                  <h1 className=" text-6xl  md:text-7xl lg:text-8xl mb-5 font-bold">
                    Brewing Stories, One Sip
                  </h1>
                  <Image
                    src={cafe}
                    alt="Cafe"
                    width={80}
                    height={80}
                    className="my-4 bottom-0 absolute hidden lg:left-36"
                  />
                </div>
                <p className=" text-lg">
                  Start your day with a cup that energizes your soul and
                  inspires your journey.
                </p>
                <div className="my-4 ">
                  <a className="btn  hover:bg-white w-full sm:w-auto text-lg shadow-sm  mb-4 sm:mb-0 sm:mr-3 md:tracking-wider bg-black hover:text-black text-white">
                    Download App
                  </a>
                  <a className="btn hover:bg-black w-full sm:w-auto text-lg font-semibold shadow-sm  bg-white md:tracking-wider hover:text-white text-black">
                   Shop Iqra's Coffee
                  </a>{" "}
                </div>
              </div>
              <div
                className="text-right relative "
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="0"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Image
                  src={hero}
                  alt="Coffee Cup"
                  width={600}
                  height={600}
                  className="my-4"
                  placeholder="blur"
                />
                <Image
                  src={cafe}
                  alt="Cafe"
                  width={100}
                  height={100}
                  className="my-4 top-0 absolute right-10"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ____________________ */}
        <SwiperSlide>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div className="text-left flex flex-col gap-3 "
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
               data-aos-offset="200"
               data-aos-delay="0"
               data-aos-duration="0"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
              >
                <div className="relative">
                  <h1 className=" text-6xl  md:text-7xl lg:text-8xl mb-5 font-bold">
                    Brewing Stories, One Sip
                  </h1>
                  <Image
                    src={cafe}
                    alt="Cafe"
                    width={80}
                    height={80}
                    className="my-4 bottom-0 absolute hidden lg:left-36"
                  />
                </div>
                <p className=" text-lg">
                  Start your day with a cup that energizes your soul and
                  inspires your journey.
                </p>
                <div className="my-4 ">
                  <a className="btn  hover:bg-white w-full sm:w-auto text-lg shadow-sm   mb-4 sm:mb-0 sm:mr-3 md:tracking-wider bg-black hover:text-black text-white">
                    Download App
                  </a>
                  <a className="btn hover:bg-black w-full font-semibold sm:w-auto text-lg  shadow-sm  bg-white md:tracking-wider hover:text-white text-black">
                    Shop Iqra's Coffee
                  </a>{" "}
                </div>
              </div>
              <div
                className="text-right relative"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Image
                  src={hero2}
                  alt="Coffee Cup"
                  width={600}
                  height={600}
                  className="my-4"
                  placeholder="blur"
                />
                <Image
                  src={cafe}
                  alt="Cafe"
                  width={100}
                  height={100}
                  className="my-4 top-0 absolute right-10"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ____________________ */}
        <SwiperSlide>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div className="text-left flex flex-col gap-3 "  
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
               data-aos-offset="200"
               data-aos-delay="0"
               data-aos-duration="0"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
              >
                <div className="relative">
                  <h1 className=" text-6xl  md:text-7xl lg:text-8xl mb-5 font-bold">
                    Brewing Stories, One Sip
                  </h1>
                  <Image
                    src={cafe}
                    alt="Cafe"
                    width={80}
                    height={80}
                    className="my-4 bottom-0 absolute hidden lg:left-36"
                  />
                </div>
                <p className=" text-lg">
                  Start your day with a cup that energizes your soul and
                  inspires your journey.
                </p>
                <div className="my-4 ">
                  <a className="btn  hover:bg-white w-full sm:w-auto text-lg shadow-sm  mb-4 sm:mb-0 sm:mr-3 md:tracking-wider bg-black hover:text-black text-white">
                    Download App
                  </a>
                  <a className="btn hover:bg-black font-semibold w-full sm:w-auto text-lg  shadow-sm  bg-white md:tracking-wider hover:text-white text-black">
                    Shop Iqra's Coffee
                  </a>{" "}
                </div>
              </div>
              <div
                className="text-right relative mt-10"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Image
                  src={coffeemid}
                  alt="Coffee Cup"
                  width={600}
                  height={600}
                  className=""
                  placeholder="blur"
                />
                <Image
                  src={cafe}
                  alt="Cafe"
                  width={70}
                  height={70}
                  className="mb-6 top-0 absolute right-10"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="fixed bottom-4 right-4 text-sm z-50 text-cyan-800 animate-pulse">
  <p>Designed and developed by Iqra Fatima  <span className="text-red-700">♥</span></p>
</div>


    </div>
  );
};

export default Banner;
