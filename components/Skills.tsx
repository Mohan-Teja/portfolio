import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill.js'


type Props = {}

const Skills = (props: Props) => {
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
      className='flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over me for current proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill image='/tensorflow.png' proficiency='75%' />
        <Skill image='/django.png' proficiency='80%' />
        <Skill image='/firebase.png' proficiency='70%' />
        <Skill image='/metasploit.png' proficiency='65%' />
        <Skill image='/php.png' proficiency='55%' />
        <Skill image='/react.png' proficiency='85%' />
        <Skill image='/sanity.png' proficiency='65%' />
        <Skill image='/scikit.png' proficiency='75%' />
        <Skill image='/sql.png' proficiency='80%' />
        <Skill image='/wireshark.png' proficiency='65%' />
        <Skill image='/yolo.png' proficiency='90%' />
      </div>
    </motion.div>
  )
}

export default Skills