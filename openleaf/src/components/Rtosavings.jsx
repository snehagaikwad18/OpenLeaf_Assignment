import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

const Rtosavings = () => {
  return (
    <div className='md:flex md:flex-row flex flex-col sm:justify-center sm:items-center md:justify-around md:items-start  w-full h-full gap-10 md:gap-5 md:pl-10 md:pr-10 lg:gap-5 bg-bg-color' >
      <div className=" lg:w-[640px] sm:w-[620px] sm:h-[592px] md:w-[600px] bg-bg-color sm:bg-white sm:rounded-2xl p-5 flex flex-col">
        <div className="flex-col flex gap-5 pb-8 ">
          <h1 className='text-[16px] text-blue-950 font-bold' >Fill out the information below to check your total savings</h1>
          <div className="sm:flex sm:justify-between gap-[24px]">
            <div className="flex flex-col gap-2">
              <p className='text-[14px]'>Total Number of monthly orders</p>
              <input type="text" className='sm:w-[200px] xl:-[284px]  h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='9876543210' />
            </div>

            <div className="flex flex-col  gap-2">
              <p className='text-[14px]'>RTO Percentage %</p>
              <input type="text" className='sm:w-[200px] xl:w-[284px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter %' />
            </div>
          </div>

          <div className="sm:flex sm:justify-between flex flex-col sm:flex-row gap-[24px]">
            <div className="flex flex-col gap-2">
              <p className='text-[14px]'>Avg. forward shipping cost</p>
              <input type="text" className='sm:w-[181.33px] md:w-[173px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='00.00' />
            </div>

            <div className="flex flex-col gap-2">
              <p className='text-[14px]'>Avg. RTO shippping cost</p>
              <input type="text" className='sm:w-[181.33px] md:w-[173px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='00.00' />
            </div>

            <div className="flex flex-col gap-2">
              <p className='text-[14px]'>Avg. margin</p>
              <input type="text" className='sm:w-[181.33px] md:w-[173px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='00.00' />
            </div>
          </div>

          <div className="gap-3 flex flex-col">
            <h1>RTO Loss</h1>
            <h1 className='flex items-center' > <FaRupeeSign size={16} color='red' /> 0.00</h1>
          </div>

        </div>




        {/* 2nd half */}
        <div className="border-t-2 sm:border-gray-300 py-5 gap-8 flex flex-col ">
          <div className="flex flex-col gap-2">
            <p className='text-[14px]'>If RTO reduced to:</p>
            <input type="text" className='sm:w-[284px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter %' />
          </div>

          <div className="sm:flex sm:flex-row gap-">
            <div className="gap-3 flex flex-col  ">
              <h1>RTO Loss</h1>
              <h1 className='w-[181.33px] h-[48px] flex items-center'> <FaRupeeSign size={16} color='red' /> 0.00</h1>
            </div>

            <div className="gap-3 flex flex-col">
              <h1>Saings</h1>
              <h1 className='w-[181.33px] h-[48px] flex items-center' > <FaRupeeSign size={16} color='green' /> 0.00</h1>
            </div>

            <div className="gap-3 flex flex-col">
              <h1>Forward Cost</h1>
              <h1  className='w-[181.33px] h-[48px] flex items-center'> <FaRupeeSign size={16} /> 0.00</h1>
            </div>
          </div>
        </div>

      </div>


      <div className="h-[216px] sm:w-[620px] md:w-[270px] lg:w-[500px] sm:rounded-2xl bg-bg-color md:bg-white px-5  justify-evenly flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className='text-[14px] font-bold' >Total Savings</h1>
          <h1 className='text-green-600 text-[24px]  2xl:text-3xl font-bold flex flow-row items-center '> <FaRupeeSign size={16} /> 0.00</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className='text-[14px] font-bold' >Per Order Savings</h1>
          <h1 className='text-green-600  text-[24px] 2xl:text-3xl font-bold flex items-center '><FaRupeeSign size={16} /> 0.00</h1>
        </div>

      </div>
      
    </div>
  )
}

export default Rtosavings