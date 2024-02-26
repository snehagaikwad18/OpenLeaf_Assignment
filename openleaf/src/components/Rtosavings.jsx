import React, { useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import logoIcon from '../assets/logo.svg';

const Rtosavings = () => {


  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);
  const [E, setE] = useState(0);
  const [F, setF] = useState(0);

  const G = () => {
    return (A * (B / 100)) * (C + D + E);
  };

  const H = () => {
    const monthlyRTOLoss = G();
    const reducedRTOCost = ((A * (F / 100)) * (C + D + E));
    const reducedRTONewLoss = ((((B - F) / 100) * A) * C);

    return monthlyRTOLoss - (reducedRTOCost + reducedRTONewLoss);
  };

  const I = () => {
    return H() / A;
  };


  return (
    <>
      <h1 className='text-4xl font-bold text-text-col text-center md:text-start md:pl-10  xl:pl-[220px] xl:pb-5 xl:pt-5 lg:pl-16 sm:pt-5' >RTO Calculator</h1>
      <div className=' text-text-col md:flex md:flex-row flex flex-col  md:justify-center md:items-start  w-full h-full md:gap-5 md:pl-10 md:pr-5 bg-bg-color' >
        <div className=" lg:w-[640px] md:w-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:w-[700px]  bg-bg-color md:bg-white md:rounded-[20px]  p-5 flex flex-col">
          <div className="flex-col flex gap-5 pb-8 ">
            <h1 className='text-[16px] text-text-col font-semibold lg:text-[18px]' >Fill out the information below to know how much you can SAVE!</h1>
            <div className="gap-[24px] md:flex md:flex-row">
              <div className="flex flex-col gap-2">
                <p className='text-[14px] md:text-[11px] lg:text-[16px] '>Total Number of monthly orders</p>
                <input type="number" value={A} onChange={(e) => setA(Number(e.target.value))}
                  className=' md:w-[190px] lg:w-[270px] xl:-[284px]  h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter order volume' />
              </div>

              <div className="flex flex-col  gap-2">
                <p className='text-[14px] md:text-[11px] lg:text-[16px] '>Current RTO Percentage %</p>
                <input
                  type="number" value={B} onChange={(e) => setB(Number(e.target.value))}
                  className=' md:w-[190px] lg:w-[270px] xl:w-[284px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter %' />
              </div>
            </div>

            <div className=" flex flex-col gap-[24px] md:flex-row">
              <div className="flex flex-col gap-2">
                <p className='text-[14px] md:text-[11px] lg:text-[16px] '>Avg. forward shipping cost</p>
                <input type="number" value={C} onChange={(e) => setC(Number(e.target.value))}
                  className=' md:w-[130px] lg:w-[181px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter cost' />
              </div>

              <div className="flex flex-col gap-2">
                <p className='text-[14px] md:text-[11px] lg:text-[16px]'>Avg. RTO shippping cost</p>
                <input type="number" value={D} onChange={(e) => setD(Number(e.target.value))} className=' md:w-[130px] lg:w-[181px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter cost' />
              </div>

              <div className="flex flex-col gap-2">
                <p className='text-[14px] md:text-[11px] lg:text-[16px]'>Avg. margin per order</p>
                <input type="number" value={E} onChange={(e) => setE(Number(e.target.value))} className=' md:w-[130px] lg:w-[181px] h-[48px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter margin' />
              </div>
            </div>

            <div className="gap-3 flex flex-col">
              <h1 className='md:text-[11px] lg:text-[16px]' >Monthly RTO Loss</h1>
              <h1 className='flex items-center' > <FaRupeeSign size={16} color='red' /> {G()}</h1>
            </div>

          </div>




          {/* 2nd half */}
          <div className=" py-5 gap-8 flex flex-col ">
            <div className="flex flex-col gap-2">
              <p className='text-[14px] md:text-[11px] lg:text-[16px] '>If RTO reduced to:</p>
              <input type="number" value={F} onChange={(e) => setF(Number(e.target.value))} className=' md:w-[200 px] h-[48px] xl:w-[250px] border-gray-200 border-[0.5px] rounded-[12px] placeholder:text-gray-400 placeholder:font-bold pl-5' placeholder='Enter %' />
            </div>

            {/* <div className="sm:flex sm:flex-row gap-">
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
          </div> */}
          </div>

        </div>


        <div className=" text-text-col h-[216px] lg:w-[500px] 2xl:w-[400px] bg-bg-color md:bg-white md:w-[500px] md:rounded-[20px] px-5  justify-evenly flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className='text-[14px] lg:text-[16px] text-text-col ' >Total Savings</h1>
            <h1 className='text-green-600 text-[24px]  2xl:text-2xl font-bold flex flow-row items-center '> <FaRupeeSign size={16} /> {H()}</h1>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className='text-[14px]  lg:text-[16px] text-text-col ' >Per Order Savings</h1>
            <h1 className='text-green-600  text-[24px] 2xl:text-2xl font-bold flex items-center '><FaRupeeSign size={16} /> {isNaN(I()) ? 0 : I()}</h1>
          </div>

        </div>

      </div>
      <div className="flex items-center justify-center md:pt-10 xl:pt-10 bg-bg-color pb-5 ">
        <img src={logoIcon} alt="" />
        <h1 className='text-openleaf font-semibold' >Openleaf</h1>
      </div>
      
    </>
  )
}

export default Rtosavings