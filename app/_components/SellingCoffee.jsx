import Image from "next/image";
import React from "react";
import mid1 from "../../public/assests/mid1.png";
import mid2 from "../../public/assests/mid2.png";
import mid3 from "../../public/assests/mid3.png";

const SellingCoffee = () => {
  return (
    <>
      <div className="bg-white  pb-20">
        <div className="">
          <div className="grid grid-cols-6 text-center py-10">
            <div className="col-start-2 col-span-4 py-28">
              <h1 className=" text-5xl font-bold">Best Selling Coffee</h1>
              <p className=" py-4 text-gray-500 text-center">
                Quench your thirst with our bottled orange brew or relax with a
                warm, delicious coffee.
              </p>
            </div>
          </div>
          {/* ____________________ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-6 lg:px-14">
            <div
              className="1 rounded-lg shadow-lg p-8"
              data-aos="flip-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="100"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="grid grid-cols-2 gap-6 relative items-end pb-3">
                <div className="">
                  <p className="text-slate-600 text-lg mb-3">#1 Selling</p>
                  <h1 className="text-3xl font-bold ">Double Expresso</h1>
                </div>
                <Image
                  src={mid1}
                  width={220}
                  height={220}
                  alt="selling"
                  className="absolute bottom-0 -right-16"
                />
              </div>
              <p className="py-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                eos unde dignissimos tempore beatae laborum nihil odio
                explicabo, temporibus, a ipsam!{" "}
              </p>
              <div
                className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4
                  xl:gap-6 items-center py-4"
              >
                <h1 className="font-bold  text-2xl">$ 59.99</h1>
                <a className="btn hover:bg-white bg-black text-lg hover:text-black text-white">
                  Order Now
                </a>
              </div>
            </div>
            {/* ____________________ */}
            <div
              className="2 rounded-lg mt-10 md:mt-0 shadow-lg p-8"
              data-aos="flip-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="0"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="grid grid-cols-2 gap-6 relative items-end pb-3">
                <div className="">
                  <p className="text-slate-600 text-lg mb-3">#2 Selling</p>
                  <h1 className="text-3xl font-bold ">Double Expresso</h1>
                </div>
                <Image
                  src={mid2}
                  width={220}
                  height={220}
                  alt="selling"
                  className="absolute bottom-0 -right-16"
                />
              </div>
              <p className="py-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                eos unde dignissimos tempore beatae laborum nihil odio
                explicabo, temporibus, a ipsam!{" "}
              </p>
              <div
                className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4
                  xl:gap-6 items-center py-4"
              >
                <h1 className="font-bold  text-2xl">$ 59.99</h1>
                <a className="btn hover:bg-white bg-black text-lg hover:text-black text-white">
                  Order Now
                </a>
              </div>
            </div>
            {/* ____________________ */}
            <div
              className="3 rounded-lg mt-10 md:mt-0  shadow-lg p-8"
              data-aos="flip-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="0"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="grid grid-cols-2 gap-6 relative items-end pb-3">
                <div className="">
                  <p className="text-slate-600 text-lg mb-3">#3 Selling</p>
                  <h1 className="text-3xl font-bold ">Double Expresso</h1>
                </div>
                <Image
                  src={mid3}
                  width={220}
                  height={220}
                  alt="selling"
                  className="absolute bottom-0 -right-16"
                />
              </div>
              <p className="py-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                eos unde dignissimos tempore beatae laborum nihil odio
                explicabo, temporibus, a ipsam!{" "}
              </p>
              <div
                className="grid grid-cols-2  gap-2 sm:gap-3 lg:gap-4
                  xl:gap-6  items-center py-4"
              >
                <h1 className="font-bold  text-2xl">$ 59.99</h1>
                <a className="btn hover:bg-white bg-black text-lg hover:text-black text-white">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingCoffee;
