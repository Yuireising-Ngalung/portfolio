import SectionHeaders from "./SectionHeaders";
import { motion } from 'motion/react';
import img1 from '../assets/coding.svg';
import img2 from '../assets/coding1.svg';
import img3 from '../assets/design.svg';
import img4 from '../assets/design1.svg';
import img5 from '../assets/design2.svg';


export default function Projects(){

    const projects = [
            {image:img1, title:"Portfolio"},
            {image:img2, title:"E-Commerce"},
            {image:img3, title:"Responsive Website"},
            {image:img4, title:"Dictionary"},
            {image:img5, title:"Todo List"}
        ]

    return(<section className="overflow-hidden">
        <SectionHeaders text="Projects" />
        <div>
             {
                projects && projects.length != 0
                ?
                <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-5 px-2 py-15">
                    {
                        projects.map((project,index) => {

                            const {image, title} = project;

                            return(
                                <motion.div key={index} className="outline rounded p-3 relative" whileHover={{scale:0.95}} transition={{duration:.5}}>
                                    <img src={image} alt={title} />
                                    <h3 className="absolute bottom-0 left-0 bg-white text-black py-3 w-full font-bold text-center">{title}</h3>
                                </motion.div>
                            )
                        })
                    }    
                </div>
                :
                    <h2 className="text-center py-10 text-3xl">Project's are not available</h2>
            }
                
        </div>
    </section>)
}