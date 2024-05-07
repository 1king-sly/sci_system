'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic from '@/public/students.png';
import pic2 from '@/public/club.jpg';
import pic3 from '@/public/students.png';
import { usePathname } from 'next/navigation';
import Cards from './(pages)/Component/Cards';
import UpcomingEvents from './(pages)/Component/UpcomingEvents';
import DeptMission from './(pages)/Component/DeptMission';
import DeanSection from './(pages)/Component/DeanSection';
import Footer from './(pages)/Component/Footer';
import Image from 'next/image';

export default function Home() {
  const datas = [
    { image: '/students.png', desc: 'First picture', data: 'Welcome to Department of Computer Science,Home of technology' },
    { image: '/club.jpg', desc: 'Second picture', data: 'Welcome to Our Clubs, Where We Share Our Knowledge and Expertise' },
    { image: '/students.png', desc: 'Third picture', data: 'Welcome to Department of Computer Science,Home of technology' },
  ];

  const pathname = usePathname();

  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [datas.length]);

  return (
    <>
      <div className="w-full h-full flex gap-10 flex-col">
        {/* Hero Section */}
        <div className="relative">
          <Swiper
            className="w-full h-[70vh]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay ={true}
            onSlideChange={(swiper) => setCurrentDataIndex(swiper.activeIndex)}
          >
            {datas.map((data) => (
              <SwiperSlide key={data.desc}>
                <div className="relative">
                  <Image src={data.image} alt="hero-images" className="absolute inset-0 object-cover w-full h-[70vh]" width={1000}
  height={1000} />
                  <div className="relative bg-gray-900 bg-opacity-75 h-[70vh]">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                      <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                          <h2 className="max-w-lg my-24 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            {data.data}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <DeanSection />
        <DeptMission />
        <div className="px-4  w-full py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-h-screen-lg lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
            <Cards />
            <Suspense>
              <UpcomingEvents />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
