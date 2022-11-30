import React from 'react'

interface Prop {
    date: string,
    item: string,
}

const RoadmapProp = ({ date, item }: Prop) => {
    return (
        <div className='relative bg-[rgb(1,14,44)]  mb-[40px] '>
            <div className=' text-start font-[400]  text-[16px] px-[20px] pt-[20px] pb-[15px]'>
                <h4 className='text-[24px] font-[500] mb-[22.4px] leading-[28.8px]'>
                    <span className='inline-block px-[8px] py-[4px] text-[18px] text-center font-[400] align-baseline'>{date}</span>
                </h4>
                <ul className='mb-[16px] pl-[32px] leading-[24px] list-disc'>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                </ul>
            </div>

        </div>
    )
}

export default RoadmapProp