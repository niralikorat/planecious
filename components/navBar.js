'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react'
import Image from 'next/image';

const navItems = [

  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  




  return (
    <nav className=" fixed top-0 w-full z-40  border-gray-200 dark:border-gray-600">
      <div className="flex flex-row items-center justify-between px-8 lg:px-20 py-4 " >
        <Link href="/">
          <Image src="/Planecious.svg" width={164} height={36} alt="Planecious Logo" className='scale-125 ' />
        </Link>
        <div className="lg:flex lg:flex-row lg:gap-8 hidden lg:block text-white">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`text-base ${
                  pathname === item.href ? 'underline' : ''
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <Hamburger toggled={isOverlayOpen} toggle={setIsOverlayOpen} size={20} />
      </div>

  

      {/* Overlay Navigation */}
      {isOverlayOpen && (

         
          <div className='fixed  inset-x-0 bg-black  bg-opacity-70  h-screen  p-8 md:p-20 text-white flex flex-col justify-between bgNav'>
          <div className='flex flex-col gap-4 md:gap-8 font-semibold'>
          <Link className= 'text-4xl md:text-5xl hover:font-bold hover:textPrimary' href="#">About</Link>
            <Link className= 'text-4xl md:text-5xl hover:font-bold hover:textPrimary' href="#">Services</Link>
            <Link className= 'text-4xl md:text-5xl hover:font-bold hover:textPrimary' href="#">Clients</Link>
            <Link className= 'text-4xl md:text-5xl hover:font-bold hover:textPrimary' href="#">Contact</Link>
          </div>
          <div className='mb-20'>
        <p className='example -rotate-6  text-4xl md:text-5xl font-thin bgfooterText'>For causes </p>
        <p className='example -rotate-6  text-4xl md:text-5xl font-thin bgfooterText'>that really </p>
        <p className='example -rotate-6  text-4xl md:text-5xl font-thin bgfooterText'> matter</p>
        </div>
           
          </div>

      )}
    </nav>
  );
};

export default Navbar;
