import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

const Hero = () => {

    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Mohan Teja",
            "<I-likes-Full-stack-development />",
            "But Loves DataScience More..!",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen pt-20 flex flex-col space-y-10 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full mx-auto object-cover'
                src="/photo.jpg"
                alt="My Picture"
                width={150}
                height={150}
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>

                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero