"use client";
import Image from "next/image";
import React from "react";
import coffeemid from "../../public/assests/coffee-mid.png";
const Order = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-16  py-24">
            <div className=""
             data-aos="zoom-out-left"
             data-aos-anchor-placement="center-bottom"
             data-aos-offset="200"
             data-aos-delay="0"
             data-aos-duration="0"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false">
              <Image src={coffeemid} width={600} height={600} />
            </div>
            <div
              className=""
              data-aos="zoom-out-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="0"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h1 className="text-5xl font-bold">
                Experience the World of Alowishus
              </h1>
              <p className="text-lg text-gray-500 py-8 text-justify">
                Revitalize your day with the crisp, refreshing taste of
                MyAlowishus bottled orange brew, or savor the comforting
                richness of our flavorful coffees, crafted to perfection.
              </p>
              <a className="btn hover:bg-white bg-black text-lg hover:text-black text-white">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
