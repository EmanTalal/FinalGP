

// I CONECT the API FOR FORM TO PLAN PAGEFZ


import React, { useState } from "react";
import axios from "axios"; // تأكد من تثبيت axios إذا كنت ترغب في استخدامه
import image from "../assets/3.jpg";
import { CiTimer } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Plant from "../pages/Plant";

const FormPage = () => {
  const [formData, setFormData] = useState({
    destination: "",
    group: "",
    numberOfDays: "",
    numberOfPeople: "",
    children: "",
    activities: "",
    other: "",
    cuisine: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [sentiment, setSentiment] = useState(""); // لإدارة الحالة الخاصة بالبيانات التي تأتي من API

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "destination") {
      const isValid = /^[a-zA-Z\s]+$/.test(value);
      if (!isValid) {
        setError("City name must be in English.");
        return;
      } else {
        setError("");
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  {/** 8 inputs validation*/}
  const validateForm = () => {
    const requiredFields = [
      "destination",
      "group",
      "numberOfDays",
      "numberOfPeople",
      "activities",
      "cuisine",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`${field} is required.`);
        return false;
      }
    }
    return true;
  };
  {
    /**التاكد من ان الخطه تبدا ب day 1 ولا يوجد زيادات  */
  }
  const API_KEY = import.meta.env.API_KEY ;
  const parseTravelPlan = (travelPlan) => {
    const dayOneIndex = travelPlan.indexOf("Day 1:");
    return dayOneIndex !== -1 ? travelPlan.substring(dayOneIndex) : travelPlan;
  };

  async function callOpenAIAPI() {
    setLoading(true);
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const isValidCity = /^[a-zA-Z\s]+$/.test(formData.destination);
    if (!isValidCity) {
      setError("City name must be in English.");
      setLoading(false);
      return;
    }

    const prompt = `Give me a detailed plan for ${formData.numberOfDays} days in ${formData.destination}. 
    The plan should consider the following:
    - Group: ${formData.group}
    - Number of People: ${formData.numberOfPeople}
    - Children: ${formData.children}
    - Activities: ${formData.activities}
    - Cuisine: ${formData.cuisine}
    - Special Requests: ${formData.other}`;

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Create a detailed travel plan for the user based on the provided information.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
    };

    const descriptionPrompt = `Provide a brief description of ${formData.destination}.`;

    const descriptionBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Provide a brief description of the city based on the user's input.",
        },
        {
          role: "user",
          content: descriptionPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1,
    };

    try {
      const [planResponse, descriptionResponse] = await Promise.all([
        fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(APIBody),
        }),
        fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(descriptionBody),
        }),
      ]);

      const [planData, descriptionData] = await Promise.all([
        planResponse.json(),
        descriptionResponse.json(),
      ]);

      // استدعاء دالة fetchCityImage لجلب صورة المدينة

      if (planData.choices && planData.choices.length > 0) {
        const travelPlan = planData.choices[0].message.content;
        const cityDescription = descriptionData.choices[0].message.content;

        navigate("/Plant", {
          state: {
            sentiment: travelPlan,
            cityDescription,
            formData,
          },
        });
      } else {
        setError("Failed to fetch plan or description.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch data from OpenAI.");
    } finally {
      setLoading(false);
    }
  }

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "40%",
    height: "56vh",
    position: "relative",
    clipPath: "url(#waveClip)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="bg-white w-full overflow-x-hidden ">
      <Navbar />
      {/**all div */}
      <div className="flex bg-gradient-to-r from-orange-50 to-orange-100   flex-row gap-5  shadow-2xl  px-10 md:p-0 rounded-lg ml-20 md:ml-48 mt-10 w-[65%] h-[800px] md:h-[464px] mb-10 ">
        <div className="relative hidden md:block rounded-2xl" style={divStyle}>
          <svg width="0" height="0">
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path d="M1,0 C0.9,0.3 0.8,0.5 0.8,0.5 C0.9,0.7 0.85,0.95 1,1 V1 H0 V0 Z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 w-[60%] md:h-[60vh] gap-0 md:gap-8 mt-8 ">
          <div className="flex flex-col gap-3">
            <h3 className="text-[13px]  w-[300px] font-semibold text-black">
              Destination
            </h3>
            <div className="flex flex-row relative items-center w-[100px]">
              <input
                name="destination"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                className="p-1 w-[150px] bg-white border-2 border-gray-100 focus:outline-gray-200 rounded-lg items-center text-sm "
                placeholder="write  your destination"
              />
              {/* <FaPeopleGroup className="absolute right-1 text-[1.2rem] text-gray-400" /> */}
            </div>
          </div>
          <div className="flex flex-col w-[150px] md:w-full">
            <h3 className="text-[13px]  w-[300px] font-semibold text-black">
              Who is coming with you
            </h3>
            <div className="flex flex-row items-center w-full gap-1">
              <select
                name="group"
                value={formData.group}
                onChange={(e) =>
                  setFormData({ ...formData, group: e.target.value })
                }
                className="w-full md:w-[150px] text-sm p-1 rounded-lg mt-2 border-2 border-gray-100 focus:outline-gray-200 bg-white text-black"
              >
                <option value="Select"></option>
                <option value="Alone">Alone</option>
                <option value="Family">Family</option>
                <option value="Couple">Couple</option>
                <option value="Group">Group</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col  w-full">
            <h3 className="text-[13px] w-[300px] font-semibold text-black">
              How many days will your trip take?
            </h3>
            <div className="flex flex-row relative p-1 items-center w-[150px]">
              <input
                name="numberOfDays"
                value={formData.numberOfDays}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfDays: e.target.value })
                }
                className="w-[150px] border-2 text-sm border-gray-100 focus:outline-gray-200 p-1 rounded-lg items-center bg-white"
                placeholder="Write here"
              />
              <CiTimer className="absolute right-1 text-[1.2rem] text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col w-full  gap-1">
            <h3 className="text-[13px]  w-[300px] font-semibold text-black">
              How many number of people?
            </h3>
            <div className="flex flex-row relative items-center w-[150px]">
              <input
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfPeople: e.target.value })
                }
                className="p-1 w-[150px] text-sm bg-white border-2 border-gray-100 focus:outline-gray-200 rounded-lg items-center"
                placeholder="Write here"
              />
              <FaPeopleGroup className="absolute right-1 text-[1.2rem] text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[13px]  w-[300px] font-semibold text-black">
              Are you traveling with children?
            </h3>
            <div className="flex flex-row relative gap-2 items-center w-[150px]">
              <select
                name="children"
                value={formData.children}
                onChange={(e) =>
                  setFormData({ ...formData, children: e.target.value })
                }
                className="w-[150px] text-sm p-1 border-2 w- border-gray-100 focus:outline-gray-200 rounded-lg mt-2 bg-white text-black"
              >
                <option value="Select"></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[13px] w-[300px] font-semibold text-black">
              How do you want to spend your time?
            </h3>
            <select
              name="activities"
              value={formData.activities}
              onChange={(e) =>
                setFormData({ ...formData, activities: e.target.value })
              }
              className="w-[150px] text-sm p-1 border-2 border-gray-100 focus:outline-gray-200 rounded-lg mt-2 bg-white text-black"
            >
            <option value="Select"></option>
              <option value="Beach">Beach</option>
              <option value="Sports and Adventure">Sports and Adventure</option>
              <option value="Food">Food</option>
              <option value="Museum">Museum</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[13px]  w-[200px] font-semibold text-black">
              Other special requests
            </h3>
            <div className="flex flex-row relative items-center w-[150px]">
              <input
                name="other"
                value={formData.other}
                onChange={(e) =>
                  setFormData({ ...formData, other: e.target.value })
                }
                className="w-[150px] text-sm bg-white border-2 border-gray-100 focus:outline-gray-200 p-1 rounded-lg items-center"
                placeholder="Write here"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[13px]  w-[200px] font-semibold text-black">
              Cuisine type
            </h3>
            <select
              name="cuisine"
              value={formData.cuisine}
              onChange={(e) =>
                setFormData({ ...formData, cuisine: e.target.value })
              }
              className="w-[150px] text-sm p-1 border-2 border-gray-100 focus:outline-gray-200 rounded-lg  mt-2 bg-white text-black"
            >
            <option value="Select"></option>
              <option value="Mexican">Mexican</option>
              <option value="Korean">Korean</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>
          <button
            onClick={callOpenAIAPI} // استدعاء دالة OpenAI API عند النقر
            type="submit"
            className="bg-orange-500 w-[50%] h-10  hover:bg-orange-400 transform transition-transform ml-0 md:ml-36 duration-300  mb-0 md:mb-32 rounded-md hover:scale-105 text-white px-4 py-2 "
          >
            {loading ? "Loading..." : "Send"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
