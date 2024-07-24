


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState(false);

  const navigate = useNavigate();

  const handleCheck = () => {
    setEvent(true);
  };

  useEffect(() => {
    if (event) {
      if (email !== '' && password !== '') {
        setIsLoading(true);
        axios.get('https://6657373e9f970b3b36c869e6.mockapi.io/api')
          .then((res) => {
            const result = res.data;
            const user = result.find((el) => el.email === email && el.password === password);
            if (user) {
              localStorage.setItem('loggedIn', 'true'); 
              navigate('/FormPage');
            } else {
              setError('Invalid email or password. Please try again.');
            }
          })
          .catch((err) => {
            setError(' Please try again later.');
          })
      } else {
        setError('Both fields are required.');
        setEvent(false);
      }
    }
  }, [event, email, password, navigate]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className='flex justify-center'>
              <img src="logo.png" className="w-32" alt="Logo" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                  <label className='m-1 block'>Enter email</label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                    type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  <label className='m-1 block'>Enter password</label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                    type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 mt-2 block">
                    Forgot your password?
                  </a>
                  <button onClick={handleCheck}
                    className="mt-5 tracking-wide font-semibold bg-orange-50 text-white-500 w-full py-4 rounded-lg bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                    </svg>
                    <span className="ml-">
                      Login
                    </span>
                  </button>
                  <div className="mt-6 flex flex-col items-center">
                    <Link to="/SignUp" className="mt-2 text-m text-gray-600 hover:text-gray-900">
                      Don’t have an account? <b>Sign up</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 text-center hidden lg:flex h-full w-full">
            <video className='video-bg scale-1 h-full w-full object-cover' src="IMG_7098.MP4" autoPlay loop muted></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
