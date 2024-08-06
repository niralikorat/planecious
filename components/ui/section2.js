'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CarouselComponent from '../carousel';

export default function Section2() {
  const section2Data = [
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-1.png', title: 'Seals', detail: 'Assum aperiris his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-2.png', title: 'Owls', detail: 'Assum aperiris his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-3.png', title: 'Penguins', detail: 'Assum aperoros his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-1.png', title: 'Seals', detail: 'Assum aperiris his eam mea', button: '' }
  ];

  const videoData = [
    {
      url: 'https://www.youtube.com/embed/6Reaa3gH9dc?si=v6TY2XDLDwBxLm9Z',
      category: 'SUSTAINABILITY',
      heading: 'Sustainability and DEI Expert',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
    {
      url: 'https://www.youtube.com/embed/WJUo697afdc?si=SkfYiIbJXx6KaTw3',
      category: 'NATURE',
      heading: 'ESG Reporting & Rating Consultant',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
    {
      url: 'https://www.youtube.com/embed/PatHQFStlZI?si=3PY9bvDe4ghwlx0J',
      category: 'CARBON',
      heading: 'Introducing Planecious',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
  ];

  const communityPosts = [
    {
      url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7226182797361606657',
      category: 'COMMUNITY',
      heading: 'Volunteer in Our Community',
      paragraph: 'Join our community and make a difference!',
    }
  ];

  return (
    <div className='flex flex-col'>
      <div className='section2 py-24 px-4 md:px-12 flex flex-col text-white'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <p className='example text-xs text-center p-4 -rotate-12'>OUR MISSION</p>
          <p className='text-4xl font-bold'>Saving Endangered Species is Crucial</p>
          <p>Lorem ipsum dolor sit amet, in audire fabulas cotidieque eos.</p>
        </div>
        <div className='flex flex-wrap md:gap-16 lg:gap-20 xl:gap-28 justify-center items-center '>
          {section2Data.map((data, index) => (
            <div key={index} className={`${index % 2 !== 0 && 'md:mt-40'} mt-12 flex flex-col justify-center items-center gap-4`}>
              <img src={data.imgUrl} className='w-[120px]' alt={data.title} />
              <p>{data.title}</p>
              <p>{data.detail}</p>
              <Link className='underline' href={'/'}>TAKE ACTION</Link>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-row items-center bgPrimary w-full md:w-3/4'>
          <div className='flex flex-col text-white justify-center items-start gap-4 p-20 py-32'>
            <p className='example -rotate-6'>WHALE LOVE</p>
            <p className='text-4xl font-semibold max-w-xl'>New Research Reveals That Whales and Dolphins Have a Rich Social Life</p>
            <button className='bg-white px-10 py-4 rounded-3xl text-sm font-semibold text-black mt-2'>VIEW MORE</button>
          </div>
          <div className='triangle-right'></div>
        </div>
        <img src={'/sec3img.jpg'} className='w-full md:w-5/6' alt='img' />
      </div>

      <div className='flex flex-col md:flex-row bgPodcast p-4 md:px-20 py-32 justify-between gap-20'>
        <div className='flex flex-col gap-4 items-start justify-center w-full '>
          <p className='example -rotate-6'>funds</p>
          <p className='font-semibold text-4xl text-black'>Help & Donate</p>
          <p className='max-w-md'>Vim audire labores insolens ut. Iisque imperdiet sea at, ea est porro appart.</p>
          <button className='bgPrimary px-10 py-4 rounded-3xl text-sm font-semibold text-white mt-2'>VIEW MORE</button>
        </div>
        <CarouselComponent videoList={videoData} autoPlay={true} />
      </div>

      <div className='bgSection3 flex flex-col py-32 md:px-20 gap-4 items-center text-white'>
        <p className='example -rotate-6'>COMMUNITY</p>
        <p className='font-semibold text-4xl text-white max-w-sm text-center'>Become a Volunteer in Our Community</p>
        {/* <CarouselComponent videoList={communityPosts} autoPlay={true} /> */}
      </div>
    </div>
  );
}
