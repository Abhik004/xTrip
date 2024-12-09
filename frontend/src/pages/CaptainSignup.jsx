import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain,setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
    
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            },
        };
    
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/captains/register`,
                captainData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    },
                }
            );
    
            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error('Error creating captain account:', error.response?.data?.message || error.message);
        }
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src='https://static.vecteezy.com/system/resources/previews/006/562/085/non_2x/taxi-cab-service-semi-flat-rgb-color-illustration-male-taxi-driver-wearing-uniform-isolated-cartoon-character-on-white-background-vector.jpg' />
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's our Captain's name?</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeee] w-1/2 rounded mb-5 px-4 py-2 border text-lg placeholder:text-base'
                            required
                            type='text'
                            placeholder='First Name'
                        />
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeee] w-1/2 mb-5 rounded px-4 py-2 border text-lg placeholder:text-base'
                            required
                            type='text'
                            placeholder='Last Name'
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's our Captain's email?</h3>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        type='email'
                        placeholder='email@example.com'
                    />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        type='password'
                        placeholder='password'
                    />
                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type='text'
                            placeholder='Vehicle Color'
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type='text'
                            placeholder='Vehicle Plate'
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-4 mb-7'>
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type='number'
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value='' disabled>
                                Select Vehicle Type
                            </option>
                            <option value='car'>Car</option>
                            <option value='auto'>Auto</option>
                            <option value='moto'>Moto</option>
                        </select>
                    </div>
                    <Link to='/captain-home' className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                        Create Captain Account!
                    </Link>
                    <p className='text-center'>
                        Already have an account?{' '}
                        <Link to='/captain-login' className='text-blue-600'>
                            Login Here!
                        </Link>
                    </p>
                </form>
            </div>
            
        </div>
    );
};

export default CaptainSignup;
