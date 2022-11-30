import React from 'react'
import SolutionCard from './SolutionCard'

const Solutions = () => {
  return (
    <div className='text-white  text-[16px] pb-[100px] box-border font-[400] text-start leading-[24px]  bg-gradient-to-br from-[rgb(4,20,56)] to-[rgba(4,20,56)] '>
      <div className='container 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[768px] sm:max-w-[540px] px-[12px] m-auto'>
        <div className='mb-[24px] uppercase leading-[75px] text-[50px] text-center '>
          defi solutions from cfb
        </div>
        <p className='max-w-[984px] m-auto italic font-[300] text-[20px] leading-[30px] text-center'>
          The focal point of creating an integrated system like Solster is to help initiate and manage decentralized finances. Solster will introduce the following solutions through its decentralized ecosystem.
        </p>
        <div className='flex  mt-[48px] mx-[-12px]'>
          <div className=' px-[12px] max-w-[100%] lg:w-[100%] md:w-[100%] '>
            <div className='flex flex-wrap  mx-[-12px] '>
              <SolutionCard imgurl='/nobgCFB1.png' heading='IDO Launchpad for Decentralized Fundraising' summary='Cfb Launchpad will facilitate upcoming Solana ecosystem projects to raise funds in decentralized manner. All the Solster token staked users will get priority pass based on their staked amount.' />
              <SolutionCard imgurl='/nobgCFB1.png' heading='DEXs for  Crypto Trading' summary='Cfb DEX will make open Serum DEX. The platform will improve trading features and rich UI designs. It will also offer a custom UI where the participants get to design their DEX screen based on their needs.' />
              <SolutionCard imgurl='/nobgCFB1.png' heading='Token Swapping' summary='Cfb Token swaps platforms are used for private and public token swaps. Private token swaps are only available to the users with token purchases and public swap is available to everyone on the Solster platform.'  />
              <SolutionCard imgurl='/nobgCFB1.png' heading='Lottery Platform' summary='The platform lets users indulge in lottery and earn through their luck. The lottery smart contract shall select winners from the pool. It makes the lottery decentralized and fair. Whitepaper talks about multiple lottery types.' />
              <SolutionCard imgurl='/nobgCFB1.png' heading='Token Staking' summary='Cfb lets STR token users earn rewards if they stake STR tokens. The more they stake STR tokens, more the rewards they will have from the platform.'/>
              <SolutionCard imgurl='/nobgCFB1.png' heading='Token Vesting' summary='Cfb launchpad projects to lock the tokens. Teams, companies, and any user can lock their tokens that will be released on maturity dates through smart contract.'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions