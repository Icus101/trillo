import React from 'react'
import Image from 'next/image'

interface Props {
    tier: string,
    percent: string,
    or: string,
    lp: string
}

const Cardprops = ({ tier, percent, or, lp }: Props) => {
    return (
        <div className='px-[12px] md:mb-[16px] mb-[8px] lg:w-[33.33333%] leading-[24px] text-start box-border translate-y-[0px] hover:translate-y-[-15px] max-w-[100%] md:w-[50%]  '>
            <div className='mt-[24px] p-[35px] border-b-[3px] bg-[rgb(1,14,44)]'>
                <div className='h-[70px] mb-[4px] w-[70px] cursor-pointer '>
                    <Image src='/gold-2.png' alt='logo' width='70' height='70' className='' />
                </div>
                <div className='text-[rgb(133,251,195)] text-[25px] text-start font-[900] leading-[37.5px] cursor-pointer'>{tier}</div>
                <div className='text-[rgb(255,255,255)] box-border text-[40px] font-[900] leading-[60px] text-start cursor-pointer'>
                    {percent}
                    <sub className='text-[rgb(133,251,195)] text-[11px] text-start align-baseline relative bottom-[-2.75px]'>
                        POOL WEIGHT
                    </sub>
                </div>
                <p className=' cursor-pointer text-[14px] text-start font-[400] leading-[21px] '>
                    {or} STAKED STR OR <br/>
                    {lp} STAKED STR LP <br />
                    <br />
                    GUARANTEED ALLOCATION
                </p>
            </div>
        </div>
    )
}

export default Cardprops