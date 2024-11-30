import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('')
    const [userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault(); //to not allow to get fresh page on clicking login
        setUserData({
          username:{
            firstName:firstName,
            lastName:lastName
          },
          email:email,
          password:password
        })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'/>

<form onSubmit={(e)=>{
    submitHandler(e)
}}>
<h3 className='text-lg font-medium mb-2'>What's your name?</h3>
<div className='flex gap-4 mb-5'>
<input 
  value={firstName}
  onChange={(e)=>{
    setFirstName(e.target.value)
  }}
  className='bg-[#eeee] w-1/2 rounded mb-5 px-4 py-2 border  text-lg placeholder:text-base'
  required type='text' placeholder='First Name'/>
  <input 
  value={lastName}
  onChange={(e)=>{
    setLastName(e.target.value)
  }}
  className='bg-[#eeee] w-1/2 mb-5 rounded px-4 py-2 border  text-lg placeholder:text-base'
  required type='text' placeholder='Last Name'/>
  </div>
  <h3 className='text-lg font-medium mb-2'>What's your email??</h3>
  <input 
  value={email}
  onChange={(e)=>{
    setEmail(e.target.value)
  }}
  className='bg-[#eeee]  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
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
    <p className='text-center'>Already have a account?   <Link to='/login' className='text-blue-600'>Login Here !</Link>
</p>
</form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, whatsapp or SMS messages,including by automated means, from xTrip and its affiliaters to the email provided</p>
        </div>
    </div>
  )
}

export default UserSignup
