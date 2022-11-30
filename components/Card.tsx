import React from 'react'
import Image from 'next/image'
import Cardprops from './Cardprops'

const Card = () => {
    return (
        <div className=' text-white font-[400] box-border bg-gradient-to-br from-[rgb(4,20,56)] to-[rgba(4,20,56)] pt-[px] '>
            <div className='container  2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[540px] mx-[auto] px-[12px] '>
                <div className='text-[50px] font-[700] text-center leading-[48px] mb-[24px]'>
                    USER POOL WEIGHT
                </div>
                <p className=' m-auto italic text-[20px] max-w-[793px] font-[300] text-center  mx-[251.500]  leading-[24px]'>
                    "CFB'S tiered system will help determine the user pool weight for guaranteed token allocation in a fair and decentralized manner."
                </p>
                <div className='flex justify-center flex-wrap items-center text-start mt-[48px] mx-[-12px] leading-[24px] font-[400] text-[16px] '>
                    <div className='px-[12px] shrink-0 max-w-[100%] lg:w-[83.333333%] md:w-[83.333333%]'>
                        <div className='flex flex-wrap justify-center mx-[-12px] text-start'>
                            <Cardprops tier="TIER 4 - GIGA" percent="49%" or="75000" lp="64000" />
                            <Cardprops tier="TIER 3 - MEGA" percent="29%" or="50000" lp="44000" />
                            <Cardprops tier="TIER 2 - MICRO" percent="14%" or="26000" lp="22000" />
                            <Cardprops tier="TIER 1 - NANO" percent="08%" or="14000" lp="12000" />

                            <div className='px-[12px] md:mb-[16px] mb-[8px] lg:w-[33.33333%] leading-[24px] text-start box-border translate-y-[0px] hover:translate-y-[-15px] max-w-[100%] md:w-[50%]  '>
                                <div className='mt-[24px] p-[35px] border-b-[3px] bg-[rgb(1,14,44)] text-start'>
                                    <div className='h-[70px] w-[70px] cursor-pointer text-center  text-[25px] font-[900] leading-[37.5px] mb-[4px] '>
                                        <Image src='/gold-2.png' alt='logo' width='70' height='70' className='' />
                                    </div>
                                    <div className='text-[rgb(133,251,195)] text-[24px] font-[900] leading-[37.5px]'>TIER 0 - PICO</div>
                                    <div className='text-[rgb(255,255,255)] box-border text-[30px] font-[900] leading-[60px] text-start cursor-pointer'>
                                        CUSTOM
                                        <sub className='text-[rgb(133,251,195)] text-[11px] text-start align-baseline relative bottom-[-2.75px]'>
                                            
                                        </sub>
                                    </div>
                                    <p className=' cursor-pointer text-[14px] text-start font-[400] leading-[21px] '>
                                        2000 STAKED STR OR <br />
                                        750 STAKED STR LP <br />
                                        <br />
                                        NO GUARANTEED ALLOCATION
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Card