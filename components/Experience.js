import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
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
      className='h-screen flex relative overflow-hidden flex-col
      text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory mt-24 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard title='Programmer Analyst' start='jan-2019' end='jun-2019' role='Internship' />
        <ExperienceCard title='Jr Pentester' start='jun-2019' end='jan-2020' role='PenTester' />
        {/* <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  )
}

export default Experience