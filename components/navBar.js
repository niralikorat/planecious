'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';
import Image from 'next/image';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Walk The Talk', href: '#walkTheTalk' },
  { name: 'Initiatives', href: '#Initiatives' },
  { name: 'Join Now', href: '#JoinUs' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent text-white');

  useEffect(() => {
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-white shadow-md text-black');
      } else {
        setNavbarBg('bg-transparent text-white');

      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const closeSideNav = ()=>{
    setIsOverlayOpen(false)
  }
  return (
    <nav className={`fixed top-0 w-full z-40 border-gray-200 dark:border-gray-600 transition duration-300 ${navbarBg}`}>
      <div className="flex flex-row items-center justify-between px-4 lg:px-20 py-8">
        <Link href="/">
          <img src="/Planecious.svg" width={164} height={36} alt="Planecious Logo" className="lg:scale-125" />
        </Link>
        <div className="lg:flex lg:flex-row lg:gap-8 hidden lg:block  ">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={`text-base ${pathname === item.href ? 'underline' : ''} hover:text-[#37ACC5] font-semibold`}>{item.name}</span>
            </Link>
          ))}
        </div>

      <div className='flex lg:hidden'> <Hamburger toggled={isOverlayOpen} toggle={setIsOverlayOpen} size={20}  /></div> 
      </div>

      {/* Overlay Navigation */}
      {isOverlayOpen && (
        <div className="fixed inset-x-0 bg-black bg-opacity-70 h-screen p-8 md:p-20 text-white flex flex-col justify-between bgNav">
          <div className="flex flex-col gap-4 md:gap-8 font-semibold">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-4xl md:text-5xl hover:font-bold hover:textPrimary" onClick={closeSideNav}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mb-20">
            <p className="example -rotate-6 text-4xl md:text-5xl font-thin bgfooterText">For causes</p>
            <p className="example -rotate-6 text-4xl md:text-5xl font-thin bgfooterText">that really</p>
            <p className="example -rotate-6 text-4xl md:text-5xl font-thin bgfooterText">matter</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
