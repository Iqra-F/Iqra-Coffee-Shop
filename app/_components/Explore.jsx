"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import card3 from "../../public/assests/card3.png";
import card2 from "../../public/assests/card2.png";
import card1 from "../../public/assests/card1.png";

const Explore = () => {
  return (
    <>
      <div className=" bg-white">
        <div className="grid grid-cols-6 text-center py-10">
          <div className="col-start-2 col-span-4 py-20">
            <h1 className=" text-5xl font-bold">Explore Our Alowishus</h1>
            <p className=" py-4 text-gray-500 text-center">
              Quench your thirst with our bottled orange brew or relax with a
              warm, delicious coffee.
            </p>
          </div>
        </div>
        {/* ____________________ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pb-28 mx-20 xl:mx-24">
          <div
            className="1 card hover:scale-105 transition-all bg-white hover:shadow-2xl shadow-xl"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Our Catering</h2>
              <p>Lorem ipsum dolor sit amet dolor consectetur.</p>
              <Image
                src={card1}
                alt="Shoes"
                width={400}
                height={400}
                className="rounded-xl p-5"
              />
              <div className="card-actions">
                <button
                  aria-label="Order Catering"
                  className="btn text-lg hover:scale-95 hover:duration-200 hover:bg-white bg-black text-white hover:text-black hover:border-black  hover:transition-transform hover:ease-in-out "
                >
                  Order Catering
                </button>
              </div>
            </div>
          </div>
          {/* ____________________ */}
          <div
            className="2 card  lg:scale-105 hover:scale-110 transition-all bg-white hover:shadow-2xl shadow-xl"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">The Food</h2>
              <p>Lorem ipsum dolor sit amet dolor consectetur.</p>
              <Image
                src={card2}
                alt="Shoes"
                width={400}
                height={400}
                className="rounded-xl p-5"
              />
              <div className="card-actions">
                <button
                  aria-label="Food Menu"
                  className="btn text-lg hover:scale-95 hover:duration-200 hover:bg-white bg-black text-white hover:text-black hover:transition-transform hover:ease-in-out hover:border-black "
                >
                  Food Menu
                </button>
              </div>
            </div>
          </div>
          {/* ____________________ */}
          <div
            className="3 card hover:scale-105 transition-all bg-white hover:shadow-2xl shadow-xl"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="card-body items-center text-center">
              <div className="text-start">
                <h2 className="card-title text-3xl font-bold mb-4">
                  The Getato
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet dolor consectetur.
                </p>
              </div>
              <Image
                src={card3}
                alt="Shoes"
                width={400}
                height={400}
                className="rounded-xl p-5"
              />
              <div className="card-actions">
                <button
                  aria-label="Discover More"
                  className="btn text-lg hover:scale-95 hover:duration-200 hover:bg-white bg-black hover:border-black  text-white hover:text-black hover:transition-transform hover:ease-in-out "
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
