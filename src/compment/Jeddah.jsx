import React, { useEffect, useState } from 'react';
import Footer from './Footer';

import { GiFeather } from 'react-icons/gi';
import { PiFlowerLotusBold } from 'react-icons/pi';
import { PiFlowerTulipBold } from 'react-icons/pi';
import { FaMoon } from 'react-icons/fa6';
import { FaTemperatureThreeQuarters } from 'react-icons/fa6';

import { FaCarAlt } from 'react-icons/fa';
import { FaTaxi } from 'react-icons/fa6';
import { FaBus } from 'react-icons/fa6';
import { FiSun } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { RiShoppingBagFill } from 'react-icons/ri';
import { HiCheck } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import axios from 'axios';
import Navbar from '../compment/Navbar';

const Jeddah = () => {
  const JeddahPosition = [21.4858, 39.1925];
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              lat: '21.4858',
              lon: '39.1925',
              appid: 'a5a18abece62aa42c05fd44b6887299d', // استبدل بـ API key الخاص بك
              units: 'metric',
            },
          }
        );
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather(); // Fetch weather initially

    const intervalId = setInterval(() => {
      fetchWeather(); // Fetch weather every second
    }, 86400000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" bg-white overflow-x-hidden md:overflow-visible">
      <Navbar />
      <div className="bg-white h-[100vh]">
        <div className="w-full bg-white flex flex-col  justify-center">
          <img
            className="w-full h-[70vh] object-cover "
            src="https://scth.scene7.com/is/image/scth/jeddah-banner:crop-660x337?defaultImage=jeddah-banner"
            alt=""
          />

          <div className="bg-white flex flex-col items-start px-20 mt-10  mb-10 ">
            <h1 className="text-black text-2xl md:text-5xl font-bold mt-10 mb-6 tracking-wider">
              About jeddah
            </h1>
            <p>
              Experience the charm of Jeddah’s heritage as you wander through
              the historic streets of Al Balad. Discover a shopping paradise at
              the Mall of Arabia and Red Sea Mall. Dive into the refreshing
              waters of the Red Sea or take a leisurely stroll along the Jeddah
              Corniche. Don't miss the spectacular King Fahd Fountain, a marvel
              that shoots water 312 meters into the sky.
            </p>
            <div className="grid grid-cols-1 md:flex mt-7 flex-row gap-10 ">
              <div className="flex gap-1 border-2 md:h-10  md:w-24 border-gray-300 rounded-full px-2 items-center flex-row">
                <PiFlowerTulipBold className="text-[#F97316] text-lg" />

                <h1>Nature</h1>
              </div>
              <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
                <GiFeather className="text-[#F97316] text-lg" />

                <h1>Culture & History</h1>
              </div>
              <div className="flex gap-1 border-2 border-gray-300 rounded-full px-2 items-center flex-row">
                <PiFlowerLotusBold className="text-[#F97316] text-lg" />

                <h1>Beauty & Relax</h1>
              </div>
            </div>
          </div>
          <h1 className="bg-white px-20 text-black  text-2xl md:text-5xl font-bold mt-36 mb-6 tracking-wide">
            Things to Do in Jeddah
          </h1>
          <div className="px-20  mb-10 grid grid-cols-1 md:flex mt-7 flex-row gap-3 ">
            <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
              <ImSpoonKnife className="text-[#F97316] text-lg" />

              <h1>Food</h1>
            </div>

            <div className="flex gap-1 border-2 h-10 w-full md:w-32 border-gray-300 rounded-full px-2 items-center flex-row">
              <RiShoppingBagFill className="text-[#F97316] text-lg" />

              <h1>Shopping</h1>
            </div>
          </div>

          {/**things to do */}

          <div className=" grid grid-cols-1 md:flex flex-row justify-around w-full md:w-full h-[100vh] px-20">
            <div className="flex flex-col items-start gap-5 w-full">
              {/**div hover card */}
              <div className="flex flex-row items-start  w-[95%] duration-200 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-md  ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-40 rounded-xl"
                      src="https://scth.scene7.com/is/image/scth/al-balad-market-3:crop-1920x1080?defaultImage=al-balad-market-3&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Jeddah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Shopping</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Al Balad Market</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/El_Khayyat_Center_outdoor-2:crop-1920x1080?defaultImage=El_Khayyat_Center_outdoor-2&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col ">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Jeddah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Shopping</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Al Khayyat Center</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/saddeh:crop-1920x1080?defaultImage=saddeh&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Jeddah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Saudia Cuisine</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Al Saddah</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              className="rounded-lg hover:scale-100 w-[270px] md:w-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950656.3803641511!2d38.55163519502157!3d21.448831030230465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1721649908010!5m2!1sen!2seg"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" bg-white flex flex-col h-[90vh] mt-72 md:mt-0 mb-60 md:mb-0 ">
            <h1 className="text-black text-xl md:text-5xl font-bold  mb-6 tracking-wide px-20">
              Complete Guide to Jeddah
            </h1>
            <div className="grid grid-cols-1 md:flex flex-row w-full gap-8 px-20 mt-10">
              {/**first */}
              <div className="bg-gray-100 flex flex-col h-[300px] w-full md:w-[40%] rounded-md p-6">
                <h1 className="text-black font-bold text-lg">Weather</h1>
                <div className="flex flex-col items-center gap-2 ">
                  <div className="flex flex-row items-center gap-2">
                    <FiSun className="text-[#F97316] text-3xl" />
                    <h1 className="text-3xl font-semibold text-black">
                      {temperature}°C
                    </h1>
                  </div>
                  {/* <h2 className="text-[#000000bd]">Clear</h2> */}
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between mt-10 ">
                    <h1 className="font-medium">Winter</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316] " />
                        <h1>21°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>31°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Spring</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>23°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>39°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Summer</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>25°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>41°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Autumn</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>23°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>37°C</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**middle */}
              <div className="bg-gray-100 flex flex-col gap-4 p-6 h-[300px] rounded-md w-full md:w-[20%]">
                <h1 className="text-black font-bold text-lg">
                  Best Time To Visit
                </h1>
                <div className="flex flex-row items-center justify-between">
                  <FiSun className="text-[#F97316] text-2xl" />
                  <h1>
                    Summer Season <br />
                    <span className="opacity-50 text-sm text-black">
                      October to April
                    </span>
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <FaMoon className="text-[#F97316] text-2xl" />
                  <h1>
                    Ramadan Season <br />
                    <span className="opacity-50 text-sm text-black">
                      March to April
                    </span>
                  </h1>
                </div>
              </div>
              {/**last */}
              <div className="bg-gray-100 flex flex-col gap-4 p-6 h-[300px] rounded-md  w-full md:w-[26%]">
                <h1 className="text-black font-bold text-lg">Transportation</h1>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col gap-6">
                    <FaCarAlt className="text-[#F97316] text-lg" />
                    <FaBus className="text-[#F97316] text-lg " />
                    <FaTaxi className="text-[#F97316] text-lg " />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1>Private Car</h1>
                    <h1> Public Transportation</h1>
                    <h1> Ride Hailing</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Jeddah;
