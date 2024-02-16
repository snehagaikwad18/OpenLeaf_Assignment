import React from 'react'
import bellIcon from '../assets/bell.svg'
import infoIcon from '../assets/info_outline.svg'
import moonIcon from '../assets/moon.svg'
import profileIcon from '../assets/profile.png'

const Nav = () => {
  return (
    <div className='lg:w-[1150px] 2xl:w-[1300px] xl:w-[1250px] h-[93px] lg:h-[80px] w-full sm:h-[60px] md:px-10  py-[16px] sm:py-[0px] sm:px-12  xl:px-[32px] flex justify-center sm:justify-between  items-center sm:gap-[300px] bg-white sm:bg-bg-color '>        
        <h1  className='font-bold text-[34px] lg:text-[34px] sm:text-[14px] text-blue-950 text-center '>RTO Savings</h1>
        <div className="w-[196px] h-[61px] sm:h-[50px] sm:w-[150px] hidden bg-white rounded-full sm:flex sm:justify-center sm:items-center gap-5 ">
        <img src={bellIcon} alt="" />
        <img src={infoIcon} alt="" />
        <img src={moonIcon} alt="" />
        <img src={profileIcon} alt="" className='w-[40px]' />
        
        </div>
    </div>
  )
}

export default Nav