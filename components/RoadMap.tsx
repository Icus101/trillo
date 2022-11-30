import React from 'react'
import RoadmapProp from './RoadmapProp'

const RoadMap = () => {
    return (
        <div className=' bg-gradient-to-br from-[rgb(4,20,56)] to-[rgba(4,20,56)] box-border text-[rgb(255,255,255)] text-[16px] leading-[24px] pt-[48px] pb-[100px] text-start font-[400]'>
            <div className='container 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[540px]  mx-[auto] px-[12px] '>
                <div className='mb-[24px] text-[50px] font-[700] leading-[75px] uppercase text-center'>
                    roadmap
                </div>
                <p className='max-w-[793px] m-[auto] text-[20px] italic font-[300] text-center leading-[30px]'>
                    "We follow these roadmap for launching the cfb ecosystem.We may experience certain setbacks while developing the whole CFB ecosystem,but our team has a right attitude to stick to the course,no matter what!"
                </p>

                <div className='relative m-[auto]  mt-[50px] pl-[64px] max-w-[700px]  '>

                    <RoadmapProp date='15TH DECEMBER 2023' item="Use Case and MVP Development" />
                    <RoadmapProp date='15TH DECEMBER 2023' item="Social Website" />
                    <RoadmapProp date='15TH DECEMBER 2023' item="Social Website" />
                    <RoadmapProp date='15TH DECEMBER 2023' item="Social Website" />
                    {/* <RoadmapProp date='15TH DECEMBER 2023' item="Social Website" /> */}

                </div>

            </div>
        </div>
    )
}

export default RoadMap