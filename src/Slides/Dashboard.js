import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaPaste } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';

const data = [
  {
    name: 'Week1',
    Guest: 200,
    User: 100,
    
  },
  {
    name: 'Week2',
    Guest: 400,
    User: 450,

  },
  {
    name: 'Week3',
    Guest: 250,
    User: 150,
    
  },
  {
    name: 'Week4',
    Guest: 300,
    User: 460,

  },
  
];

function Dashboard() {
  return (
    <div className='pt-[25px] px-[25px] '>
        <div className='flex items-center justify-between'>
            <h1 className='text-[28px] font-normal'>Dashboard</h1>
            <div className='flex items-center justify-between'>
            <div className='flex items-center rounded-[5px]'>
                <input type='text'  className='bg-[#F8F9FC] h-[30px] outline-none pl-[13px] w-[150px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search'></input>
                 <div className='bg-[#F8F9FC] h-[30px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px] text-gray-300'><FaSearch></FaSearch></div>
            </div>
            <div className='bg-[#F8F9FC] ml-[20px] mr-[20px] h-[30px] px-[10px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                <FaBell></FaBell>
            </div>
            <div className='bg-[#F8F9FC] h-[40px] px-[10px] flex items-center justify-center cursor-pointer rounded-[100px]'>
                <FaRegUser fontSize={28}></FaRegUser>
            </div>
            </div>
            
        </div>
        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <div className='h-[100px] rounded-[12px] bg-[#E3F2C1] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
            <div className='flex items-center justify-center mt-[20px]'>
            <h2 className='font-normal text-[18px] mr-[30px]'>Total Revenue</h2>
            <FaDownload fontSize={28}></FaDownload>
            
            </div>
            <div className='flex items-center justify-center'>
            <h1 className='text-[25px] font-bold mt-[5px]'>$2,192,430</h1>
            </div>
            
           
            </div>
            <div className='h-[100px] rounded-[12px] bg-[#FFE5CA] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
            <div className='flex items-center justify-center mt-[20px]'>
            <h2 className='font-normal text-[18px] mr-[30px]'>Total Transactions</h2>
            <FaPaste fontSize={28}></FaPaste>
            
            </div>
            <div className='flex items-center justify-center'>
            <h1 className='text-[25px] font-bold mt-[5px]'>1,520</h1>
            </div>
            
           
            </div>
            <div className='h-[100px] rounded-[12px] bg-[#FCC8D1] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
            <div className='flex items-center justify-center mt-[20px]'>
            <h2 className='font-normal text-[18px] mr-[30px]'>Total Likes</h2>
            <FaThumbsUp fontSize={28}></FaThumbsUp>
            
            </div>
            <div className='flex items-center justify-center'>
            <h1 className='text-[25px] font-bold mt-[5px]'>9,721</h1>
            </div>
            
           
            </div>
            <div className='h-[100px] rounded-[12px] bg-[#CBE4DE] cursor-pointer hover:shadow-lg transform hover:scale-[103%]'>
            <div className='flex items-center justify-center mt-[20px]'>
            <h2 className='font-normal text-[18px] mr-[30px]'>Total Users</h2>
            <FaUserFriends fontSize={28}></FaUserFriends>
            
            </div>
            <div className='flex items-center justify-center'>
            <h1 className='text-[25px] font-bold mt-[5px]'>892</h1>
            </div>
            
           
            </div>
           
        </div>
        <div className='bg-white rounded-3xl'>
            <div  className='flex items-center justify-between m-[10px] pl-[20px]'>
               <div className='font-bold'>
                 Activities
              </div>
              {/* <div className='flex'>
                <div className='flex'>
                    <div>

                    </div>
                    <div>
                      Guest
                    </div>
                </div>
                <div>User</div>
              </div> */}
            </div>
          <div>
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Guest" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="User" stroke="#82ca9d" />
        </LineChart>
      
          </div>
        
        
        </div>
    </div>
  )
}

export default Dashboard
