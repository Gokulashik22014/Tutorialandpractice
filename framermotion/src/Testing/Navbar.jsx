import React, { useEffect, useState } from "react";
import ThemeChangeButton from "../components/ThemeChangeButton";
const Navbar = () => {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      const temp=window.scrolly
      if(temp>0) setSticky(true)
      else setSticky(false)
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.addEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <div className={`navbar bg-base-100 rounded-md border-b-2 border-white fixed z-20`}>
      <div className="navbar-start">
        <div className="flex items-center justify-start gap-2 pb-2">
          <div className="w-16 h-16 rounded-full object-cover">
            <img
              src="/images/dragon_1.jpg"
              alt="logo.."
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <p className="text-white text-xl">R.M.K. Engineering College</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeChangeButton />
      </div>
    </div>
  );
};

export default Navbar;
