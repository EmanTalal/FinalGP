import React, { useEffect, useState } from "react";

import { GiFeather } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaCloud } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import Footer from "./Footer";

import { FaMoon } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { HiCheck } from "react-icons/hi";

import { FaPrayingHands } from "react-icons/fa";
import axios from "axios";

import Navbar from "./Navbar";

const Makkah = () => {
  const MakkahPosition = [21.3891, 39.8579];
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: "21.3891",
              lon: "39.8579",
              appid: "3a4ca5c3c49d094a0cb382dc4dcdf489",
              units: "metric",
            },
          }
        );
        console.log(response.data);
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather(); // Fetch weather initially

    const intervalId = setInterval(() => {
      fetchWeather(); // Fetch weather every second
    }, 86);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="overflow-x-hidden md:overflow-visible">
      <Navbar />
      <div className="bg-white h-[100vh]">
        <div className="bg-white w-full flex flex-col  justify-center">
          <img
            className="w-full h-[70vh] object-cover"
            src="https://scth.scene7.com/is/image/scth/New-makkah-view-homepage:crop-660x337?defaultImage=New-makkah-view-homepage"
            alt
          />

          <div className="flex flex-col items-start px-20 mt-10  mb-10 ">
            <h1 className="text-black text-2xl md:text-5xl font-bold mt-10 mb-6 tracking-wider">
              About Makkah
            </h1>
            <p>
              Makkah, the birthplace of Prophet Muhammad and where the Quran was
              revealed, is a pivotal city in Islam. It hosts the annual Hajj
              pilgrimage, one of the five pillars of Islam, and welcomes
              millions for the Umrah pilgrimage year-round. Key sites include Al
              Masjid Al Haram, the largest mosque in the world, and the historic
              Masjid-e-Aisha. Beyond its spiritual significance, visitors can
              explore the Makkah Museum's pre-Islamic artifacts or shop and play
              at Makkah Mall.
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
          <h1 className=" px-20 text-black text-2xl md:text-5xl font-bold mt-28 mb-6 tracking-wide">
            Things to Do in Makkah
          </h1>
          <div className="px-20  mb-10 grid grid-cols-1 md:flex mt-7 flex-row gap-3 ">
            <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
              <GiFeather className="text-[#F97316] text-lg" />

              <h1>Culture & History</h1>
            </div>
            <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
              <FaPrayingHands className="text-[#F97316] text-lg" />

              <h1>Religious Sites</h1>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:flex flex-row justify-around w-full md:w-full h-[100vh] px-20 mb-96 md:mb-0">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-row items-start  w-[95%] duration-200 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-md  ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/ain-zubaida-in-makkah-city-1:crop-1920x1080?defaultImage=ain-zubaida-in-makkah-city-1&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Makkah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Historic Site</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Ain Zubaidah</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/al-masjed-alharam-1:crop-1920x1080?defaultImage=al-masjed-alharam-1&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col ">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Makkah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Religious Site</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Al Masjed Al Haram</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/hira-cultural-district-makkah-2:crop-1920x1080?defaultImage=hira-cultural-district-makkah-2&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Makkah</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Culture & History</h1>
                      </div>
                      <h1 className="text-2xl font-bold">
                        Hira Cultural District
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237685.105751114!2d39.68173120578411!3d21.43593475941401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1721650776165!5m2!1sen!2seg"
              width="600"
              height="450"
             className="rounded-lg hover:scale-100 w-[270px] md:w-[600px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col h-[90vh] mt-14 md:mt-0 mb-72 md:mb-0">
            <h1 className="text-black text-xl md:text-5xl font-bold mt-10 mb-6 tracking-wide px-20">
              Complete Guide to Makkah
            </h1>
            <div className="grid grid-cols-1 md:flex flex-row w-full gap-8 px-20 mt-10">
              {/**first */}
              <div className="bg-gray-100 flex flex-col h-[300px] w-full md:w-[40%] rounded-md p-6">
                <h1 className="text-black font-bold text-lg">Weather</h1>
                <div className="flex flex-col items-center gap-2 ">
                  <div className="flex flex-row items-center gap-2">
                    <FaCloud className="text-[#F97316] text-3xl" />
                    <h1 className="text-3xl font-semibold text-black">{temperature} °C</h1>
                  </div>
                  {/* <h2 className="text-[#000000bd]">Clouds</h2> */}
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between mt-10 ">
                    <h1 className="font-medium">Winter</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316] " />
                        <h1>14°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>23°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Spring</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>18°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>41°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Summer</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>24°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>43°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Autumn</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>21°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>39°C</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**middle */}
              <div className="bg-gray-100 flex flex-col h-[300px] w-full md:w-[40%] rounded-md p-6">
                <h1 className="text-black font-bold text-lg">
                  Best Time To Visit
                </h1>
                <div className="flex flex-row items-center mr-9 justify-between">
                  <FaPrayingHands className="text-[#F97316] text-2xl" />
                  <h1>
                    Hajj Season <br />
                    <span className="opacity-50 text-sm text-black">
                      June to July
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
              <div className="bg-gray-100 flex flex-col h-[300px] w-full md:w-[40%] rounded-md p-6">
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

export default Makkah;
