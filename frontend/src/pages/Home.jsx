import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const[pickup,setPickup]=useState('')
  const[destination,setDestination]=useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef=useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler=(e)=>{
      e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      opacity:1,
      padding:24
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
  }else{
    gsap.to(panelRef.current,{
      height:'0%',
      opacity:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
  }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'/>
      <div className='h-screen w-screen'>
      {/* Image for temporary use */}
        <img className='h-full w-full object-cover' src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'/>
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={()=>{
          setpanelOpen(false)
        }} className='absolute opacity-0 top-6 right-6 text-2xl'><i className="ri-arrow-down-s-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
          <input 
          onClick={()=>{
            setpanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type='text' placeholder='Add a pick-up location'/>
          <input
          onClick={()=>{
            setpanelOpen(true)
          }} 
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full' type='text' placeholder='Enter your destination'/>
        </form>
        </div>
        <div ref={panelRef} className='bg-white opacity-0 h-0'>
          <LocationSearchPanel/>
        </div>
        <div className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 bg-white'>
          <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle!</h3>
          <div className='flex border-2 w-full  active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xGO <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
          <div className='flex border-2 w-full active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xMOTO <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>7 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.70</h2>
          </div>
          <div className='flex border-2 w-full  active:border-black p-3 mb-2 rounded-xl items-center justify-between'>
            <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>xAUTO <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>7 mins away</h5>
              <p className='font-normal text-xs texxt-gray-600'>Affordable, auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118.80</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
