"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <div className=" bg-white pb-20">
        <div className="grid grid-cols-6 text-center pt-10">
          <div className="col-start-2 col-span-4 pt-20">
            <h1
              className=" text-5xl font-bold"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="0"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              Client Testimonials
            </h1>
            <p
              className=" py-4 text-gray-500 text-center"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="0"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              Quench your thirst with our bottled orange brew or relax with a
              warm, delicious coffee.
            </p>
          </div>
        </div>
        {/* rating */}
        <div
          className="mt-10 flex items-center justify-center gap-x-6 pb-10"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="0"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="hidden sm:block -space-x-2 overflow-hidden">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="boder-none sm:border-l-2 border-black sm:pl-8">
            <div className="flex justify-center sm:justify-start">
              <h3 className="text-2xl font-semibold mr-2">4.6</h3>
              <div className="rating rating-md">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                  defaultChecked
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm">Rated by 25k on google.</h3>
            </div>
          </div>
        </div>
        {/* clients */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              // Screens larger than 640px
              slidesPerView: 2, // Two slides
            },
            1024: {
              // Screens larger than 1024px
              slidesPerView: 3, // Three slides
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div
              className="w-[300px] rounded-md border mx-auto bg-white dark:bg-gray-800 shadow-lg hover:scale-110 ease-in-out transition-all duration-500 md:m-8"
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
                src="/assests/man.png"
                alt="Laptop"
                width={320}
                height={320}
                className=" rounded-t-md bg-gray-200 object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Muhammad Suleman &nbsp;
                  {/* stars */}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </h1>
                <p className="mt-3 py-4  text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                >
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* ____________________ */}

          <SwiperSlide>
            <div
              className="w-[300px] mx-auto rounded-md border bg-white dark:bg-gray-800 shadow-lg hover:scale-110 ease-in-out transition-all duration-500 md:m-8"
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
                src="/assests/man.png"
                alt="Laptop"
                width={320}
                height={320}
                className=" rounded-t-md bg-gray-200 object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Muhammad Suleman &nbsp;
                  {/* stars */}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </h1>
                <p className="mt-3 py-4  text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                >
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* ____________________ */}

          <SwiperSlide>
            <div
              className="w-[300px] mx-auto rounded-md border bg-white dark:bg-gray-800 shadow-lg hover:scale-110 ease-in-out transition-all duration-500 md:m-8"
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
                src="/assests/man.png"
                alt="Laptop"
                width={320}
                height={320}
                className=" rounded-t-md bg-gray-200 object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Muhammad Suleman &nbsp;
                  {/* stars */}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </h1>
                <p className="mt-3 py-4  text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                >
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* ____________________ */}

          <SwiperSlide>
            <div
              className="w-[300px] mx-auto rounded-md border bg-white dark:bg-gray-800 shadow-lg hover:scale-110 ease-in-out transition-all duration-500 md:m-8"
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
                src="/assests/man.png"
                alt="Laptop"
                width={320}
                height={320}
                className=" rounded-t-md bg-gray-200 object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Muhammad Suleman &nbsp;
                  {/* stars */}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </h1>
                <p className="mt-3 py-4  text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                >
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* ____________________ */}

          <SwiperSlide>
            <div
              className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg hover:scale-110 ease-in-out transition-all duration-500 md:m-8"
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
                src="/assests/man.png"
                alt="Laptop"
                width={320}
                height={320}
                className=" rounded-t-md bg-gray-200 object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Muhammad Suleman &nbsp;
                  {/* stars */}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </h1>
                <p className="mt-3 py-4  text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi, debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                >
                  Read
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
