import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'


const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object left scale-x-[-1] "
             src='../public/Main-bg.jpg'
             alt='Back ground laptop image '/>
            
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
            <h1> I'm Gabriel Salazar</h1>
            <h2> I'm a
            <TypeAnimation
      sequence={[
        'Developer',
        2000, 
        'Coder',
        2000,
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h2>
            <div>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaFacebookF className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
            </div>
            </div>
        </div>
    )
}

export default Main