import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            props.setvehiclePanel(false)
          }}><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle!</h3>
          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className='flex border-2 w-full  active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xGO <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className='flex border-2 w-full active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xMOTO <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>7 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.70</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className='flex border-2 w-full  active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xAUTO <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>7 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118.80</h2>
          </div>

    </div>
  )
}

export default VehiclePanel
