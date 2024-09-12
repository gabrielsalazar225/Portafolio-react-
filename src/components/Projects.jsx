import React from 'react';
import ProjectItem from './ProjectItem';
import codingImg from '../public/coding.jpg'
import coolImg from '../public/cool.jpg'
import reactImg from '../public/react.jpg'
import softwaredevImg from '../public/software.jpg'

const Projects = () => {
return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e'>Project</h1>
        <p className='text-center py8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aliquam qui nemo eos suscipit sit rerum, labore architecto corrupti officia deleniti incidunt, ducimus at quo dolorem sapiente dolor exercitationem tempore?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem/>
        </div>
    </div>
 )
}


export default Projects