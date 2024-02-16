import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[80px] h-screen sm:flex sm:flex-col gap-5  items-center bg-white  hidden ' >

    <h1 className='text-6xl font-bold text-active py-[70px] border-b-2 border-gray-200' >o</h1>
    <i className=" py-[12px] px-[16px] text-active bg-hover-color-menu hover:text-active hover:rounded-[8px] fa-solid fa-house"></i>
    <i className=" py-[12px] px-[16px] hover:bg-hover-color-menu hover:text-active hover:rounded-[8px] text-menu fa-solid fa-cart-shopping"></i>
    <i className=" py-[12px] px-[16px] hover:bg-hover-color-menu hover:text-active hover:rounded-[8px] text-menu fa-solid fa-truck"></i>
    <i className=" py-[12px] px-[16px] hover:bg-hover-color-menu hover:text-active hover:rounded-[8px] text-menu fa-solid fa-code-fork"></i>
    <i className=" py-[12px] px-[16px] hover:bg-hover-color-menu hover:text-active hover:rounded-[8px] text-menu fa-solid fa-file-invoice-dollar"></i>


    </div>
  )
}

export default Sidebar