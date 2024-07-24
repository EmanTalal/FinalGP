import React, { useEffect, useState } from "react";

import { GiFeather } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaCloud } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaCloudRain } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import Footer from "./Footer";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import axios from "axios";

import Navbar from "./Navbar";

const Alula = () => {
  const alulaPosition = [26.6187, 37.9316];
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: "26.6187",
              lon: "37.9316",
              appid: "3a4ca5c3c49d094a0cb382dc4dcdf489",
              units: "metric",
            },
          }
        );
        console.log(response.data);
        if (response.data.main && response.data.main.temp) {
          setTemperature(response.data.main.temp);
        } else {
          console.error("Temperature data not found in response.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather(); // Fetch weather initially

    // تحديد فترة التحديث إلى 24 ساعة
    const intervalId = setInterval(() => {
      fetchWeather(); // Fetch weather every 24 hours
    }, 86400000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <div className=" h-[300vh]">
        <div className="bg-white w-full flex flex-col  justify-center">
          {/* <img
            className="w-full h-[70vh] object-cover object-center "
            src="https://scth.scene7.com/is/image/scth/Alula-banner:crop-660x337?defaultImage=Alula-banner"
            alt
          /> */}
          <header className="h-[550px] flex items-end bg-cover bg-[url('https://scth.scene7.com/is/image/scth/Alula-banner:crop-660x337?defaultImage=Alula-banner')] bg-center"></header>

          <div className="flex flex-col items-start px-20 mt-10  mb-10 ">
            <h1 className="text-black  text-2xl md:text-5xl font-bold mt-10 mb-6 tracking-wider">
              About AlUla
            </h1>
            <p>
              Explore AlUla, Saudi Arabia's first UNESCO World Heritage Site,
              nestled in the northwest desert. Marvel at ancient tombs from
              7,000 years of civilization and stunning rock formations like the
              52-meter Elephant Rock. Enjoy the lush AlUla Oasis, adventure
              sports, and innovative art installations Each September,
              experience the Azimuth AlUla festival of art and music set in
              breathtaking landscapes Stay in luxury at Banyan Tree AlUla's
              tented villas or the desert resort, Habitas AlUla.
            </p>
            <div className="grid grid-cols-1 md:flex mt-7 flex-row gap-2 md:gap-10 ">
              <div className="flex gap-1 border-2 h-10 w-24 border-gray-300 rounded-full px-2 items-center flex-row">
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
          {/**things to do */}
          <h1 className=" px-20 text-black text-2xl  md:text-5xl font-bold mt-36 mb-6 tracking-wide">
            Things to Do in AlUla
          </h1>
          <div className="px-20  mb-10  grid grid-cols-1 md:flex mt-7 flex-row gap-3 ">
            <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
              <GiFeather className="text-[#F97316] text-lg" />

              <h1>Culture & History</h1>
            </div>

            <div className="flex gap-1 border-2 h-10 w-32 border-gray-300 rounded-full px-2 items-center flex-row">
              <RiShoppingBagFill className="text-[#F97316] text-lg" />

              <h1>Shopping</h1>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-3 mb-64 md:mb-0 md:flex flex-row justify-around w-full h-[100vh] px-20">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-row items-start  w-[95%] duration-200 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-md  ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-40 rounded-xl"
                      src="https://scth.scene7.com/is/image/scth/aljadidah-place-to-go-hero-banner:crop-1920x1080?defaultImage=aljadidah-place-to-go-hero-banner&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Alula</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Shopping</h1>
                      </div>
                      <h1 className="text-2xl font-bold">
                        Al Jadidah Arts District
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/almanshiya-plaza-place-to-go-hero:crop-1920x1080?defaultImage=almanshiya-plaza-place-to-go-hero&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col ">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Alula</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Shopping</h1>
                      </div>
                      <h1 className="text-2xl font-bold">Al Manshiyah Plaza</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-64 h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/Alula-Old-Town_New:crop-1920x1080?defaultImage=Alula-Old-Town_New&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Alula</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Historic Site</h1>
                      </div>
                      <h1 className="text-2xl font-bold">
                        AlUla Old Town Village
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114177.32994973999!2d37.87866579389928!3d26.583041586736876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a5ab96a9136819%3A0x39bae58691885d6!2sAlUla%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1721649582880!5m2!1sen!2seg"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-lg hover:scale-100 w-[270px] md:w-[600px]"
            ></iframe>
          </div>

          <div className="flex bg-white flex-col h-[90vh] mt-20 md:mt-0 mb-60 md:mb-0">
            <h1 className="text-black text-xl md:text-5xl font-bold  mb-6 tracking-wide px-20">
              Complete Guide to AlUla
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
                        <FaTemperatureThreeQuarters className="text-[#F97316] mr-2" />
                        <h1>6°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>25°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Spring</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>17°C</h1>
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
                        <h1>23°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>45°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Autumn</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>16°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>36°C</h1>
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
                  <FaCloudRain className="text-[#F97316] text-2xl" />
                  <h1>
                    Winter Season <br />
                    <span className="opacity-50 text-sm text-black">
                      October to April
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

export default Alula;
