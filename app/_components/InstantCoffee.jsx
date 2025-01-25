'use client'
import Image from 'next/image'
import React from 'react'
import coffeemid from '../../public/assests/coffee-mid.png'
const InstantCoffee = () => {
  return (
    <>
    <div className="bg-gray-50 ">
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-16  py-24">
            <div className="order-2 flex relative mx-auto" data-aos="fade-left"
    data-aos-anchor-placement="center-bottom"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="0"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
     >
                <Image src='/assests/coffee-banner.png' alt='img' className='rounded-2xl border-2 border-gray-100 absolute top-0 left-20 z-20' width={250} height={250}/>
                <Image src='/assests/coffee-banner.png' alt='img' className='rounded-2xl border-2 border-gray-100 -rotate-12 z-10' width={250} height={250}/>
                <img src='/assests/hand-drawn.png' alt='img' className='absolute top-20 -left-16 max-w-md ' />
            </div>
            <div className=" order-1" data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"
     data-aos-offset="200"
     data-aos-delay="0"
     data-aos-duration="0"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"
    >
              <h1 className="text-5xl font-bold">Instant Coffee At Your Home</h1>
              <p className="text-lg text-gray-500 py-8 text-justify">Revitalize your day with the crisp, refreshing taste of MyAlowishus bottled orange brew, or savor the comforting richness of our flavorful coffees, crafted to perfection.</p>
              <a className="btn hover:bg-white bg-black text-lg hover:text-black text-white">
   Download App 
    </a>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default InstantCoffee