'use client'
import Navbar from '@/components/navBar';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 1.0 // 1.0 means the entire element must be in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('bgFixed');
        } else {
        //   entry.target.classList.remove('bgFixed');
        console.log
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div  className='flex flex-col text-white font-bold px-20 py-20 bgAbout h-[90vh]'>
        {/* <p className='fixed top-40'>Hello</p> */}
      </div>
      <div ref={el => sectionsRef.current[1] = el} className='flex flex-row justify-evenly items-center shadow-lg rounded-lg bg-blue-100 py-20 px-20 h-[90vh]'>
        <div className='flex flex-col max-w-lg gap-4 items-start'>
          <h2 className='text-4xl font-bold textPrimary'>We Are Sustainable</h2>
          <p className='text-gray-700'>
            Et quis ea mollit dolore Lorem dolor eiusmod. Voluptate Lorem esse ut elit aliqua et qui dolore nisi aliqua aliquip. Ullamco in minim est ullamco consectetur aliqua.
          </p>
          <Link className='bgPrimary px-10 py-4 rounded-3xl text-sm font-semibold text-white mt-2 hover:shadow-xl' href={'https://www.linkedin.com/groups/8147680/'}>JOIN COMMUNITY</Link>
        </div>
        {/* <img src='https://earthcare.qodeinteractive.com/wp-content/uploads/2022/07/about-us-img.jpg' className='max-w-[700px] h-auto' /> */}
      </div>
      <div ref={el => sectionsRef.current[2] = el} className='flex flex-row justify-evenly items-center shadow-lg rounded-lg py-20 px-20 bg-red-100 h-[90vh]'>
        <div className='flex flex-col max-w-lg gap-4 items-start'>
          <h2 className='text-4xl font-bold textPrimary'>We Are Sustainable</h2>
          <p className='text-gray-700'>
            Et quis ea mollit dolore Lorem dolor eiusmod. Voluptate Lorem esse ut elit aliqua et qui dolore nisi aliqua aliquip. Ullamco in minim est ullamco consectetur aliqua.
          </p>
          <Link className='bgPrimary px-10 py-4 rounded-3xl text-sm font-semibold text-white mt-2 hover:shadow-xl' href={'https://www.linkedin.com/groups/8147680/'}>JOIN COMMUNITY</Link>
        </div>
        <img src='https://earthcare.qodeinteractive.com/wp-content/uploads/2022/07/about-us-img.jpg' className='max-w-[700px] h-auto' />
      </div>
    </>
  );
}
