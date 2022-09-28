import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ExperienceCard = (props) => {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] xl:mt-10 snap-center bg-[#292929] p-10 hover:opacity-100
            opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{
                    once: true,
                }}
                className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
                object-cover object-center'
                src='/cognizant.png'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light'>
                    {props.title}
                </h4>
                <p className='font-bold text-2xl mt-1'>
                    {props.company}
                </p>
                <div className='flex space-x-5 my-2 w-full'>
                    <Image
                        src='/react.png'
                        alt='php'
                        height={30}
                        width={30}
                        className='rounded-full pr-2'
                    />
                    {/* <Image
                        src='/php.png'
                        alt='php'
                        height={20}
                        width={20}
                        className='rounded-full'
                    />
                    <Image
                        src='/php.png'
                        alt='php'
                        height={20}
                        width={20}
                        className='rounded-full'
                    />
                    <Image
                        src='/php.png'
                        alt='php'
                        height={20}
                        width={20}
                        className='rounded-full'
                    />
                    <Image
                        src='/php.png'
                        alt='php'
                        height={20}
                        width={20}
                        className='rounded-full'
                    /> */}
                </div>
                <p className='uppercase py-3 text-gray-300'>{props.start} - {props.end}</p>
                <ul className='list-disc space-y-2 ml-5 text-lg'>
                    <li>{props.role} as Programmer Analyst</li>
                    <li>Leant full stack development </li>
                    <li>React and PHP</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard