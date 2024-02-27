'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

export default function ProgramCard({ name, desc, link, image }: { name: string; desc: string; link: string; image: StaticImageData }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={link}>
            <div
                className='relative w-[200px] h-[200px] flex flex-col items-center justify-center bg-purple-500 overflow-hidden'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h1 className='absolute top-0 w-full h-full  flex items-center justify-center text-xl px-5 z-30 opacity-90'>{name}</h1>
                <Image src={image} alt='Card image' className='w-full h-full absolute object-cover' />
                <p className={`absolute bottom-0 w-full text-center py-2 bg-white ${isHovered ? 'opacity-100 transition-opacity duration-300 ease-in-out' : 'opacity-0'}`}>
                    {desc}
                </p>
                <div className={`w-full h-full bg-purple-500 opacity-25 absolute top-0 ${isHovered ? 'bottom-auto' : 'bottom-0'}`} />
            </div>
        </Link>
    );
}
