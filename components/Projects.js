import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {

    const projects = [
        ['Real Estate', 'Real estate app is a web and mobile applications aimed at making the process of property transactions easy. These apps are designed in a way that makes it easy for buyers, sellers, realtors, landlords, and investors to find each other quickly and conveniently', '/real estate.png'],
        ['Cyber World', 'It is an education application which contains all the cyber security basic concepts','/react.png'],
        ['Object Detection', 'Object tracking implemented with YOLOv4, DeepSort, and TensorFlow. YOLOv4 is a state of the art algorithm that uses deep convolutional neural networks to perform object detections. We can take the output of YOLOv4 feed these object detections into Deep SORT (Simple Online and Realtime Tracking with a Deep Association Metric) in order to create a highly accurate object tracker.', '/yolo.png']
    ];

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
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen' key={project}>
                        <motion.img
                        initial={{
                            y:-300,
                            opacity: 0,
                        }}
                        transition={{
                            duration:1.2,
                        }}
                        whileInView={{
                            opacity:1,
                            y:0,
                        }}
                        viewport={{
                            once: true,
                        }}
                            src={project[2]}
                            alt='project'
                            className='h-40 w-40'
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>The {project[0]}:</span> Project
                            </h4>
                            <p className='text-lg text-center  md:text-left'>
                                {project[1]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects