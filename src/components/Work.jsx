// import React from 'react';
import WorkItem from './WorkItem'

const data = [
    {
        year:2023,
        title: 'Project Manager',
        duration: '1 year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, autem fuga? Nihil quaerat voluptate facilis ipsum sapiente iure eos eum temporibus magnam voluptatem. Fuga veritatis cumque nihil suscipit, rem vitae?'
    },
    {
        year:2020,
        title: 'Staffing Manager',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, autem fuga? Nihil quaerat voluptate facilis ipsum sapiente iure eos eum temporibus magnam voluptatem. Fuga veritatis cumque nihil suscipit, rem vitae?'
    }
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto m:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'></h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx}
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details}
                />
            ))}
        </div>
    )
}

export default Work