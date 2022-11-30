import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footers = () => {
    return (
        <div className='bg-gradient-to-br from-[rgb(4,20,56)] to-[rgba(4,20,56)]'>
            <div className='pt-[16px] md:pt-[48px] text-center'>
                <div className='container  2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[540px] mx-auto px-[12px] '>
                    <div className='flex flex-wrap mx-[-12px] md:text-left text-center'>
                        <div className=' shrink-0 md:order-2 md:text-left text-center px-[12px] md:w-[50%]'>
                            <div className='flex flex-wrap justify-between   text-left mx-[-12px]'>
                                <div className='uppercase text-left px-[12px] mb-[8px] max-w-[100%] '>
                                    <p className='text-[25px] text-[rgb(113,229,184)] font-[500] mb-[16px] leading-[37.5px]'>
                                        info
                                    </p>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        getting started
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        buy cfb
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        Tiers system
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        roadmap
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        apply for ido
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        terms and condition
                                    </a>
                                </div>
                                <div className='uppercase text-left px-[12px] mb-[48px] max-w-[100%]'>
                                    <p className='text-[25px] text-[rgb(113,229,184)] font-[500] mb-[16px] leading-[37.5px]'>
                                        products
                                    </p>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        ido launchpad
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        token swap
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        dex for trading
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        token staking
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        lottery giveaway
                                    </a>
                                    <a href='#' className='block cursor-pointer text-[18px] font-[300] '>
                                        token vesting
                                    </a>
                                </div>
                            </div>
                            <div className='block mt-[24px]  text-[16px] leading-[24px] text-center md:text-left max-w-[100%] font-[400] '>
                                <div className='leading-[37.5px] text-[25px] font-[500] text-[rgb(113,229,184)]'>
                                    <strong>Powered by: SOLANA</strong>
                                </div>
                            </div>



                        </div>
                        <div className='shrink-0 md:mt-[0px] mt-[8px] md:text-left text-center  md:order-1 px-[12px] md:w-[50%]'>
                            <div className='mb-[4px] flex justify-center md:justify-start  '>
                                <Image src='/nobg.png' alt='pix' width={1000} height='1000' className='h-[50px] w-[70px] align-middle text-center md:text-left' />
                            </div>
                            <p className='mt-[30px] mb-[16px] md:mb-[48px] text-[25px] font-[600] leading-[35px] text-center md:text-left'>
                                Diversifying<br />
                                Decentralized Finances
                            </p>
                            <div className='font-[500] text-[25px] text-[rgb(113,229,184)]'>
                                CONNECT
                            </div>
                            <div className='mb-[8px]'>
                                <div className='inline-block '>
                                    <a className='ml-[-3px] inline-flex w-[50px] items-center justify-center mt-[20px] h-[40px] mr-[10px] text-start cursor-pointer decoration-[rgb(255,255,255)]' href="https://t.me/cfg" title="Telegram" target="_blank">
                                        <SocialIcon style={{ width: '40px', height: '40px' }} bgColor='#fff' url='https://t.me/cfg' />
                                    </a>
                                    <a className='inline-flex mt-[20px] w-[50px] h-[40px] mr-[10px] text-center cursor-pointer' href="https://twitter.com/cfg" title="Twitter" target="_blank">
                                        <SocialIcon style={{ width: '40px', height: '40px' }} bgColor='#fff' url='https://twitter.com/cfg' />
                                    </a>
                                    <a className='inline-flex w-[50px] mt-[20px] h-[40px] mr-[10px] text-center cursor-pointer' href="https://www.linkedin.com/cfg" title="Linkedin" target="_blank">
                                        <SocialIcon style={{ width: '40px', height: '40px' }} bgColor='#fff' url='https://www.linkedin.com/cfg' />
                                    </a>
                                    <a className='inline-flex w-[50px] mt-[20px] h-[50px] mr-[10px] text-center cursor-pointer' href="https://medium.com/cfg" title="medium" target="_blank">
                                        <SocialIcon style={{ width: '40px', height: '40px' }} bgColor='#fff' url='https://www.medium.com/cfg' />
                                    </a>
                                </div>

                            </div>
                            <div className='flex md:text-left text-center'>
                                <div className='text-[16px] font-[400]'>
                                    <a className='bg-[rgb(29,234,183)] items-center justify-center flex cursor-pointer  w-[193px] text-[rgb(33,37,41)] text-[18px] font-[300] leading-[35px] mr-[20px] py-[8px] px-[16px] rounded-[3px]' href='#'>
                                        <span className='text-center'>Email</span>
                                    </a>
                                </div>
                                <div>
                                    <a className='bg-[rgb(29,234,183)] cursor-pointer flex justify-center w-[193px] text-[rgb(33,37,41)] text-[18px] font-[300] leading-[35px] mr-[20px] py-[8px] px-[16px] rounded-[3px] ' href='#'>
                                        <span className='text-center'>Press Kit</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-[45px] pb-[24px] justify-center item-center mx-[-12px] flex flex-wrap text-center text-[16px] font-[400]'>
                        <div className='uppercase text-[14px] font-[300] max-w-[100%] text-center leading-[21px] text-[rgb(153,153,153)] '>
                            Copyright 2022 CFB Finance. All rights reserved.
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footers