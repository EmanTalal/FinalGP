import React, { useEffect, useState } from "react";
import { PiFlowerTulipThin } from "react-icons/pi";
import { GiFeather } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaCloud } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaCloudRain } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GiCampingTent } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";

const Riyad = () => {
  const RiyadPosition = [24.7136, 46.6753];
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: "24.7136",
              lon: "46.6753",
              appid: "a5a18abece62aa42c05fd44b6887299d", // استبدل بـ API key الخاص بك
              units: "metric",
            },
          }
        );
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
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
    <div className="bg-white">
      <Navbar />
      <div className="bg-white h-[100vh]">
        <div className="bg-white w-full flex flex-col  justify-center">
          <img
            className="w-full h-[70vh] object-cover"
            src="https://scth.scene7.com/is/image/scthacc/faisaliah-tower:crop-660x337?defaultImage=faisaliah-tower"
            alt
          />

          <div className="bg-white flex flex-col items-start px-20 mt-10  mb-10 ">
            <h1 className="text-black text-2xl md:text-5xl font-bold mt-10 mb-6 tracking-wider">
              About Riyadh
            </h1>
            <p>
              Riyadh combines ancient history with modern dynamism, offering a
              glimpse into Arabia’s past and future. Explore the city's rich
              heritage through souqs, museums, and historical architecture, and
              experience its modern side with high-rises and a thriving art
              scene, highlighted by the Riyadh Art initiative that turns the
              city into an open-air gallery. Don't miss Riyadh Season, featuring
              themed zones like Boulevard City and the Riyadh Zoo, open
              year-round. For dining, try local delicacies at Najd Village
              restaurant.
            </p>
            <div className="bg-white grid grid-cols-1 md:flex mt-7 flex-row gap-10 ">
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
          <h1 className=" px-20 text-black text-2xl md:text-5xl font-bold mt-40  tracking-wide">
            Things to Do in Riyadh
          </h1>
          <div className="bg-white px-20  mb-10 grid grid-cols-1 md:flex mt-7 flex-row gap-3 ">
            <div className="flex gap-1  border-2 border-gray-300 rounded-full px-2 items-center flex-row">
              <ImSpoonKnife className="text-[#F97316] text-lg" />

              <h1>Food & Beverages</h1>
            </div>

            <div className="flex gap-1 border-2 h-10 w-42 border-gray-300 rounded-full px-2 items-center flex-row">
              <GiFeather className="text-[#F97316] text-lg" />

              <h1>Culture & History</h1>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:flex flex-row justify-around w-full h-[100vh] px-20 mb-0">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-row items-start  w-[95%] duration-200 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-md  ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/a-o-k-restaurant:crop-1920x1080?defaultImage=a-o-k-restaurant&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center  text-black">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Riyadh</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Food & Beverages</h1>
                      </div>
                      <h1 className="text-2xl font-bold">A.O.K Restaurant</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/abstract-art-gallery:crop-1920x1080?defaultImage=abstract-art-gallery&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col ">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Riyadh</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Culture & History</h1>
                      </div>
                      <h1 className="text-2xl font-bold">
                        Abstract Art Gallery
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start  w-[95%] duration-300 ease-in-out hover:bg-white h-[100vh ]  hover:border-2 hover:border-gray-100  rounded-lg hover:shadow-xl ">
                <div className="flex flex-col ">
                  <div className=" grid grid-cols-1 md:flex flex-row items-center gap-3">
                    <img
                      className="w-full md:w-64 md:h-42 rounded-lg"
                      src="https://scth.scene7.com/is/image/scth/neighborhood-addoho-hero-1:crop-1920x1080?defaultImage=neighborhood-addoho-hero-1&wid=1920&hei=1080"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center text-black ">
                        <CiLocationOn className="text-[#F97316]" />
                        <h1 className="font-bold text-sm">Riyadh</h1>
                        <div className="text-gray-400">l</div>
                        <h1 className="font-bold text-sm">Historic Site</h1>
                      </div>
                      <h1 className="text-2xl font-bold">
                        Addoho Neighborhood
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3417564343!2d46.16302444436181!3d24.72374981109545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1721650212072!5m2!1sen!2seg"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-lg hover:scale-100 w-[270px] md:w-[600px]"
            ></iframe>
          </div>
          <div className="bg-white flex flex-col h-[90vh] mb-72 md:mb-0 mt-96 md:mt-7">
            <h1 className="text-black text-xl md:text-5xl font-bold mt-22 mb-6 tracking-wide px-20">
              Complete Guide to Riyadh
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
                        <h1>13°C</h1>
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
                        <h1>24°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>38°C</h1>
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
                        <h1>45°C</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2 ">
                    <h1 className="font-medium">Autumn</h1>
                    <div className="flex flex-row  items-center  gap-4">
                      <div className="flex flex-row items-center ">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>18°C</h1>
                      </div>
                      <div className="flex flex-row items-center">
                        <FaTemperatureThreeQuarters className="text-[#F97316]" />
                        <h1>35°C</h1>
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
                      Novmber to March
                    </span>
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <GiCampingTent className="text-[#F97316] text-2xl" />
                  <h1>
                    Camping Season <br />
                    <span className="opacity-50 text-sm text-black">
                      Novmber to March
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

export default Riyad;
