import React from 'react'

const Rtosavings = () => {
  return (
    <div className='flex flex-row justify-center w-full gap-10' >
        <div className="w-[592px]  h-[640px] bg-white rounded-2xl ">Rtosavings</div>
        <div className="h-[216px] w-[464px] rounded-2xl bg-white px-5  justify-evenly flex flex-col">
            <div className="">
                <h1 className='text-xl font-bold' >Total Savings</h1>
                <h1 className='text-green-600  text-3xl font-bold '>0.00</h1>
            </div>

            <div className="">
                <h1 className='text-xl font-bold' >Per Order Savings</h1>
                <h1 className='text-green-600  text-3xl font-bold '>0.00</h1>
            </div>

           
        </div>
    </div>
  )
}

export default Rtosavings