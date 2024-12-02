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
    <div className='h-screen relative'>
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
        
      </div>
    </div>
  )
}

export default Home
