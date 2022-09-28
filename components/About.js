import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0
            }}
            whileInView={{
                x:0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration:1.2
            }}
            src='/photo.jpg'
            className='-mb-24 md:mb-0 flex-shrink-0 w-56 md:h-106 rounded-full object-fill
            md:rounded-lg md:pt-10 md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] xl:mt-5'
        />
        <motion.div 
            initial={{
                x:200,
                opacity: 0
            }}
            whileInView={{
                x:0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration:1.2
            }}

            className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold -mb-5'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>Little</span> about me
            </h4>
            <p className='text-base'>
            I am a full stack web and mobile developer with React as a frontend and Django as backend for web whereas
            I use Flutter for frontend mobile and Django for backend mobile development.
            Also good with AI, Machine Learning and Deep learning. Skilled with Data Analysis and engineer the data depending on the requirement. 
            Good with various machine learning frameworks like pandas, numpy, sklearn, scikit-learn, etc., 
            Also had experience with Neural network framework Pytorch. Done few projects based on Computer Vision, NLP and Reinforcement Learning.
            I have experienced in web application and system penetration testing and also had CEH certification. Worked as a penTester for 1 year in a Red Team.
            </p>
        </motion.div>
    </motion.div>
  )
}

export default About