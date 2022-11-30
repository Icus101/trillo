import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
    return (
        <div className="relative hero_bg h-[100vh] ">
            <div>
                <nav className='  flex  flex-nowrap items-center text-[#fff] pb-[8px] relative text-[16px] font-[400] leading-[24px] pt-[50px] '>
                    <div className=' flex  w-[100%] justify-between mx-auto px-auto'>
                        <a href='#' className='flex items-center  mr-[16px]  whitespace-nowrap cursor-pointer '>
                            <Image src='/nobg5.png' alt='logo' width='1000' height='1000' className='h-[70px] w-[10rem] rounded-[50%] ml-[1rem]  leading-[30px]' />
                            <span className='text-[30px] font-[700]'>CFB</span>
                        </a>
                        <div className='flex items-center lg:basis-auto basis-[100%] grow leading-[24px] text-start '>
                            <ul className=' flex  font-[400] text-[16px] text-start self-stretch ml-[auto]  '>
                                <li className='mr-[20px] flex justify-center items-center border-[1px] text-left  font-[400] leading-[24px]'>
                                    <a href='#' className=' flex justify-center items-center px-[8px] text-left text-[18px] font-[700] w-[193px] decoration-solid decoration-auto'>
                                        <span className='relative z-[10000] font-[700] leading-[42px] '>Apply for Grant</span>
                                    </a>
                                </li>
                                <li className='mr-[20px] flex justify-center items-center border-[1px] text-left  font-[400] leading-[24px]'>
                                    <a href='#' className='flex justify-center items-center  px-[8px] text-left font-[700] w-[193px] decoration-solid decoration-auto'>
                                        Launch App
                                    </a>
                                </li>
                                <li className='mr-[20px] border-[1px] flex items-center justify-center   text-left  font-[400] leading-[24px]'>
                                    <a href='#' className='flex justify-center items-center   px-[8px] text-left font-[700] w-[193px] decoration-solid decoration-auto'>
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>

                <div className=' box-border text-start text-[16px] leading-[24px]'>
                    <div className='container 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[540px]  font-[400] m-auto leading-[24px] pt-[100px] text-start'>
                        <div className=' justify-between flex  items-center  text-[16px] font-[400] leading-[24px]  text-start '>
                            <div>
                                <div className='flex flex-wrap pb-[16px] pt-[4px] text-start mx-[-12px]'>
                                    <div className='xl:w-[50%] lg:w-[50%] md:w-[100%] box-border flex items-center justify-center shrink-0 text-[16px] font-[400] leading-[24px] my-[0px] max-w-[100%] order-1 md:order-2 px-[12px] text-start '>
                                        <Image src='/NOBGCFB2.png' alt='logo' width='1000' height='1000' className='align-middle h-[400px] w-[500px] box-border text-[rgb(33 ,37 , 41)]  max-w-[100%]' />
                                    </div>
                                    <div className='xl:w-1/2 lg:w-1/2 md:w-[100%] lg:order-1 max-w-[100%] box-border flex flex-col flex-wrap shrink-0 text-[16px] font-[400] leading-[24px]  pl-[12px] pr-[12px] order-2 '>
                                        <div className='box-border block text-[110px] italic font-[900] leading-[160px] mb-[8px] text-left uppercase'>
                                            CFB
                                        </div>
                                        <div className='box-border text-[rgb(255,255,255)] italic text-[20px] leading-[30px] mb-[8px] max-w-[84%] text-start'>
                                            IDO Launchpad | Decentralized Exchange | DeFi | Swap | Token Staking | Token Vesting | Lottery Platform
                                        </div>
                                        <div className='box-border flex text-[16px] font-[400] mb-[4px] leading-[24px] text-start '>
                                            <div className='border-[1px] justify-center items-center mt-[24px] cursor-pointer mb-[4px] mr-[20px] relative text-center text-[18px] font-[700] leading-[42px] w-[193px] px-[12px] py-[6px] '>
                                                <a>
                                                    <span>Launch App</span>
                                                </a>
                                            </div>
                                            <div className='border-[1px] justify-center items-center mt-[24px] cursor-pointer mb-[4px] mr-[20px] relative text-center text-[18px] font-[700] leading-[42px] w-[193px] px-[12px] py-[6px] '>
                                                <a>
                                                    <span>Apply for IDO</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-[16px] leading-[24px] text-start font-[400] mb-[4px] ">
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div >
    )
}

export default Header