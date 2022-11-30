import Image from 'next/image'
import React from 'react'

interface Props{
    imgurl : string,
    heading : string,
    summary : string
}



const SolutionCard = ({imgurl,heading,summary}:Props) => {
    return (
        <div className='box-border shrink-0 mb-[48px] max-w-[100%] px-[12px] lg:w-[33.33333333%] md:w-[50%]'>
            <div className='p-[45px] border-[1px] h-[100%] rounded-[10px]'>
                <div className='mb-[4px] flex justify-center'>
                    <Image className=" max-w-[100%] align-middle" src={imgurl} alt='image' width='100' height="50" />
                </div>
                <div className='my-[30px] box-border text-[25px] font-[700] text-center leading-[35px] text-[rgb(113,229,184)]'>
                    {heading}
                </div>

                <p className='text-[16px] mb-[16px] font-[300] text-center leading-[30px]'>
                    {summary}
                </p>
            </div>

        </div>
    )
}

export default SolutionCard