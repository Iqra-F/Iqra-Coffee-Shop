import React from 'react'
import { GiShoppingBag } from "react-icons/gi";
import Image from 'next/image';
import logo from '../../public/assests/logo.png';
const Header = () => {
  return (
    <div className='container bg-gray-100 mx-auto'>
      <div className="navbar container bg-gray-100 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <Image src={logo} width={80} alt='logo' height={80} className='md:w-full'/>
        {/* Cup Chronicles */}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
        <li>
          <a>Cafe Menu</a>
          <ul className="p-2">
          <li><a>Coffee 1</a></li> 
          <li><a>Coffee 2</a></li>
          </ul>
        </li>
        <li><a>About Us</a></li>
        <li><a>Find Us</a></li>
        <li><a>Alowishus Catering</a></li>
      </ul>
    </div>
    <a className="hidden lg:block btn btn-ghost text-xl">
    {/* Cup Chronicles */}
    <Image src={logo} width={80} alt='logo' height={80} className='md:w-full'/>
    </a>
  </div>
  <div className="navbar-center hidden font-semibold lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Cafe Menu</summary>
          <ul className="p-2">
            <li><a>Coffee 1</a></li>
            <li><a>Coffee 2</a></li>

          </ul>
        </details>
      </li>
      <li><a>About Us</a></li> 
      <li><a>Find Us</a></li>
      <li><a>Alowishus Catering</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="p-3 mr-2 rounded-full hover:text-white hover:bg-black text-sm  text-black cursor-pointer shadow-sm shadow-black">
    <GiShoppingBag />
    </a>
    <a className="btn hover:bg-white bg-black hover:text-black text-white">
    Buy Gift Vouchers
    </a>
  </div>
</div>
    </div>
  )
}

export default Header
