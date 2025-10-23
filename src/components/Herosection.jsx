import { motion } from 'motion/react';
import profilepic from '../assets/ProfilePic.jpeg';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';
import resume from '../assets/YuireisingResume.pdf';

export default function Herosection(){
    return(<section className="py-15 overflow-hidden md:pt-15 px-2 max-w-[1240px] mx-auto backdrop-blur-sm md:flex md:flex-row-reverse justify-around items-center">
        {/* Profile picture container */}
        <motion.div 
            animate={{scale:[0,1]}}
            transition={{duration:2}}
            className='flex-1 justify-center items-center flex py-15'>
            <div className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full shadow-2xl p-2'>
                <img src={profilepic} alt="profile_picture" loading='lazy' className='w-full h-full object-cover rounded-full' />
            </div>
        </motion.div>

        {/* Profile info container */}
        <motion.div 
            animate={{x:[-100,0]}}
            transition={{duration:2}}
            className="text-center md:mt-0 grid gap-4 flex-1 rounded-2xl py-5">
            <h1 className='text-5xl font-extrabold py-2'>Yuireising Ngalung</h1>
            <h2 className="text-2xl font-bold italic">Full Stack Web Developer</h2>
            <p className="font-extralight">HTML | CSS | Tailwind CSS | JavaScript | React JS | Java </p>
            <div className='grid sm:flex sm:justify-center sm:items-center gap-3'>
                <motion.button 
                    whileHover={{scale:0.9}}
                    transition={{duration:.5}}
                    className="border rounded-full py-3 px-7"
                >Get In Touch
                </motion.button>

                <motion.button 
                    whileHover={{scale:0.9}}
                    transition={{duration:.5}}
                    className="border rounded-full py-3 px-7"
                ><a href={resume} download='resume' className='flex gap-2 justify-center items-center'><FaDownload /> Resume</a> 
                </motion.button>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <button>
                    <FaGithub className='text-2xl'/>
                </button>
                <button>
                    <FaLinkedin className='text-2xl'/>
                </button>  
            </div>
        </motion.div>
        
        

        
    </section>)
}