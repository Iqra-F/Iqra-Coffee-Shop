'use client';
import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Order from "./_components/Order";
import SellingCoffee from "./_components/SellingCoffee";
import InstantCoffee from "./_components/InstantCoffee";
import Testimonial from "./_components/Testimonial";
import Footer from "./_components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true, // Ensures the animation happens only once
      });
    }
  }, []);
  return (
    <>
    <div className="bg-slate-100 overflow-hidden">
    {/* <div className="container items-center justify-items-center min-h-screen  pb-20 font-jost"> */}
     <Header/>
     <Banner/>
     <Explore/>
     <Order/>
     <SellingCoffee/>
     <InstantCoffee/>
     <Testimonial/>
     <Footer/>
    {/* </div> */}
    </div>
    </>
  );
}
