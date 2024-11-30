import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [captainData,setCaptainData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault(); //to not allow to get fresh page on clicking login
        setCaptainData({
            email:email,
            password:password
        })
        setEmail('')
        setPassword('')
    }
    
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='h-15 w-16 mb-10' src='https://static.vecteezy.com/system/resources/previews/006/562/085/non_2x/taxi-cab-service-semi-flat-rgb-color-illustration-male-taxi-driver-wearing-uniform-isolated-cartoon-character-on-white-background-vector.jpg'/>

<form onSubmit={(e)=>{
    submitHandler(e)
}}>
  <h3 className='text-lg font-medium mb-2'>What's your email??</h3>
  <input 
  value={email}
  onChange={(e)=>{
    setEmail(e.target.value)
  }}
  className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  required type='email' placeholder='email@example.com'/>
  <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
  <input 
  value={password}
  onChange={(e)=>{
    setPassword(e.target.value)
  }}
  className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  required type='password' placeholder='password'/>
  <button
  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
  >Login</button>
    <p className='text-center'>Join a fleet?   <Link to='/captain-signup' className='text-blue-600'>Register as a captain! </Link>
</p>
</form>
        </div>
        <div>
        <Link
        to='/login'
  className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
  >Sign in as User??</Link>
        </div>
    </div>
  )
}

export default Captainlogin
