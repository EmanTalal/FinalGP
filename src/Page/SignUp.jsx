import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function SignUp() {
//useSate 
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);
//navigate
const navigate = useNavigate();

//Functions CheckAccount .
const handleSubmit = async (e) => {
  e.preventDefault();

  let hasError = false;

  if (!name ) {
    hasError = true;
    setError('Please Enter your and Must name 4 charter.');
  } else if (!email) {
    hasError = true;
    setError('Please enter your email address.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    hasError = true;
    setError('Please enter a valid email address.');
  } else if (!password) {
    hasError = true;
    setError('Please enter your password.');
  }

  if (hasError) return;

  setIsLoading(true);

  try {
    const uniqueId = Math.floor(Math.random() * 1000000);

    const response = await axios.post(
      'https://6657373e9f970b3b36c869e6.mockapi.io/api',
      {
        name:name,
        email:email,
        password:password,
        id: uniqueId,
      }
    );

    setError(null);
    setIsLoading(false);

    console.log('created successfully:', response.data);

    navigate('/Login');
  } catch (error) {
    console.error(error);
    setError('Signup failed. Please try again.');
    setIsLoading(false);
  }
};


  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className='flex justify-center'> 
              <img src="logo.png" className="w-32" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">


                  <label className='m-1 block'>Enter Name</label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                    type="text" placeholder="Enter your name"onChange={(e)=>setName(e.target.value)} value={name} id='name' />



                  <label className='m-1 block'>Enter Email</label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                    type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} id='email'/>



                  <label className='m-1 block'>Enter password</label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                    type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} id='password'/>
                  <button 
                    className="mt-5 tracking-wide font-semibold bg-orange-50 text-white-500 w-full py-4 rounded-lg bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                    </svg>
                    <span className="ml-">
                      Sign Up
                    </span>
                  </button>
                  <div className="mt-6 flex flex-col items-center">
                  <Link to="/Login" className="mt-2 text-m text-gray-600 hover:text-gray-900">
                      Already have an account? <b>Login</b>
                    </Link>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-gray-100 text-center hidden lg:flex h-full w-full">
            <video className='video-bg scale-1 h-full w-full object-cover' src="IMG_7098.MP4" autoPlay loop muted></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
