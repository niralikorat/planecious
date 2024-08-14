'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-row items-center justify-between mx-4 lg:mx-16 p-4">
        <Link href="/">
          <img src="/planecious.svg" width="128px" alt="Planecious Logo" />
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
        <button
          data-collapse-toggle="navbar-sticky"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span
                    className={`block py-2 px-3 rounded md:p-0 ${
                      pathname === item.href
                        ? 'text-white bg-[#37ACC5] md:bg-transparent md:text-[#37ACC5] '
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#37ACC5] dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
