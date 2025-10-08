import { FaEnvelope, FaMapLocation, FaPhone } from 'react-icons/fa6';
import SectionHeaders from './SectionHeaders';
import contactImg from '../assets/contact.svg';

export default function Contact(){
    return(<section>
        <SectionHeaders text="Get In Touch" />
    
        <div className="md:flex justify-around items-center py-15">
            <div className='flex justify-center items-center'>
                <img
                    src={contactImg}
                    alt="graduation pic"
                    className="w-[300px] h-[300px]"
                />
            </div>
            
            
            <div className='flex flex-col gap-5 mt-10 md:mt-0'>
                <a className='flex gap-2 items-center justify-center md:justify-start bg-white/5 p-5' href='tel: +91 7430957097'><FaPhone /> (+91) 7430957095</a>
                <a className='flex gap-2 items-center justify-center md:justify-start bg-white/5 p-5' href='mailto: yuireisingngalung@gmail.com'><FaEnvelope /> yuireisingngalung@gmail.com</a> 
            </div>
      </div>
    </section>)
}