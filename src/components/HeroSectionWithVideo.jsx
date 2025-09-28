import bgVideo from "../assets/video1.mp4";
import { motion } from "motion/react";
import profilepic from '../assets/ProfilePic.jpeg';

export default function HeroSectionWithVideo(){
    return(<section className="relative h-[100vh]">
        <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={bgVideo} type="video/mp4"/>
        </video>

        <div className="overlay absolute top-0 z-[5] bg-white/5 backdrop-blur-sm w-full h-full"></div>

        <div className="absolute z-10 top-0 md:flex md:flex-row-reverse md:justify-around items-center p-2 w-full h-full">
            
            {/* Profile picture container */}
            <motion.div 
                className='mt-20 mb-10 md:mt-0 md:mb-0 justify-center items-center flex'>
                <div className='w-[250px] h-[250px] rounded-full bg-white/5 backdrop-blur-sm p-2 shadow-2xl'>
                    <img src={profilepic} alt="profile_picture" loading="lazy" className='w-full h-full object-cover rounded-full' />
                </div>
            </motion.div>

            <motion.div 
                className="text-center p-10 md:mt-0 grid gap-3 bg-white/5 backdrop-blur-sm outline rounded-2xl">
                <h1 className="text-5xl font-extrabold text-shadow">Yuireising Ngalung</h1>
                <h2 className="text-2xl font-bold italic">Full Stack Web Developer</h2>
                <p className="font-extralight">HTML | CSS | Tailwind CSS | JavaScript | React JS | Java</p>
                <div>
                    <motion.button 
                        whileHover={{scale:0.9}}
                        transition={{duration:.5}}
                        className="border rounded-full py-2 px-5"
                    >Contact Me
                    </motion.button>
                </div>
            </motion.div>


        </div>

    </section>)
}