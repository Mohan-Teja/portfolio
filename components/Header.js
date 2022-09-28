import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>

                {/* Social Icons */}
                <SocialIcon
                    url='https://www.facebook.com/profile.php?id=100077629333543'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/MohanTeja515'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/prince_mohanteja/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.youtube.com/channel/UCl1zMkb_I229h1imvwcNcdA'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/dharmavarapu-mohan-teja-1b3329106/'
                    fgColor='gray'
                    bgColor='transparent'
                />

            </motion.div>

            {/* <Link to='#contact'> */}

                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>

                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />

                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        Get In Touch
                    </p>

                </motion.div>
            {/* </Link> */}

        </header>
    )
}

export default Header