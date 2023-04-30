import React from 'react';
import { FaArtstation, FaChevronRight, FaDashcube, FaRegSun, FaSchlix, FaTachometerAlt, FaUser} from "react-icons/fa";

function Sidebar() {
  return (
    <div className='bg-[#000000] m-[20px] px-[40px] h-screen px-[25px] rounded-3xl mb-[30px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center'>
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer font-sans text-2xl'>Board.</h1>
        </div>
        <div className='flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
          <FaDashcube color='white'/>
          <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        </div>
        <div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaArtstation color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white'>Transactions</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaSchlix color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white'>Schedules</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaUser color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white'>Users</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaUser color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white'>Settings</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar