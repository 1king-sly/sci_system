'use client'
import React, { useState, useEffect, Suspense } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for styling

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [datas.length]);

  return (
    <div className="w-full h-full flex gap-10 flex-col">
      {/* Hero Section */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
        keyboardNavigation={true}
        items={datas.map((data) => (
          <div key={data.desc}>
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
          </div>
        ))}
        onSlideChanged={(e) => setCurrentIndex(e.item)}
      />
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
  );
}
