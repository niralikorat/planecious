'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { navs } from '@/site/siteConfig';

export default function NavBar() {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-between mx-4 p-4'>
      <img src="/planecious.svg" alt='Planecious Logo' className='w-[128px] h-[128px]' />
      <div className='lg:flex lg:flex-row lg:gap-8 hidden lg:block'>
        {navs.map((nav, index) => (
          <a 
            key={index}
            href={nav.route}
            className={`text-base ${router.pathname === nav.route ? 'underline' : ''}`}
          >
            {nav.title}
          </a>
        ))}
      </div>
      <img src='/burger-bar.png' className='w-[32px] h-[32px]' alt='Menu' />
    </div>
  );
}
