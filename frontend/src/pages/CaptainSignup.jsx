import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('')
    const [userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault(); //to not allow to get fresh page on clicking login
        setUserData({
          fullName:{
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
        <img className='w-16 mb-10' src='https://static.vecteezy.com/system/resources/previews/006/562/085/non_2x/taxi-cab-service-semi-flat-rgb-color-illustration-male-taxi-driver-wearing-uniform-isolated-cartoon-character-on-white-background-vector.jpg'/>

<form onSubmit={(e)=>{
    submitHandler(e)
}}>
<h3 className='text-lg font-medium mb-2'>What's our Captain's name?</h3>
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
  <h3 className='text-lg font-medium mb-2'>What's our Captain's email??</h3>
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
    <p className='text-center'>Already have a account?   <Link to='/captain-login' className='text-blue-600'>Login Here !</Link>
</p>
</form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
    </div>
  )
}

export default CaptainSignup
