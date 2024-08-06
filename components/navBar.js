'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { navs } from '@/site/siteConfig';

export default function NavBar() {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-between mx-4 p-4'>
      <Image src="/planecious.svg" width={128} height={128} alt='Planecious Logo' />
      <div className='flex flex-row gap-8'>
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
      <img src='/burger-bar.png' className='w-[32px]' alt='Menu' />
    </div>
  );
}
