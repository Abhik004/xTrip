import React from 'react'
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'><i className="ri-home-5-line text-lg font-medium"></i></Link>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'/>
      </div>
      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
      <img className='h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU'/>
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Abhik</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>WB04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
      </div>
      <div className='flex gap-2 flex-col justify-between items-center'>
      <div className='w-full mt-5'>
       
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="ri-map-pin-user-fill"></i>        <div>
          <h3 className='text-lg font-medium'>562/11-A</h3>
          <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahmedabad</p>
        </div>
        </div>
        <div className='flex items-center gap-5 p-3 '>
        <i className="ri-money-rupee-circle-fill"></i>        <div>
          <h3 className='text-lg font-medium'>₹ 192.20</h3>
          <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
        </div>
        </div>
      </div>
      </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding
