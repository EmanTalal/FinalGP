import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import ShareButtons from './ShareButtons';
// import PlanButtons from './PlanButtons';

const PlanButtons = ({ formData, sentiment }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { sentiment } = location.state || { sentiment: 'No data available' };
  const [plans, setPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    // تقسيم النص إلى مصفوفة بناءً على وجود "Day" ككلمة فصل بين الأيام
    if (sentiment !== 'No data available') {
      const splitSentiment = sentiment
        .split(/Day \d:/)
        .filter(Boolean)
        .map((plan, index) => `Day ${index + 1}:${plan.trim()}`);
      setPlans(splitSentiment);
    }
  }, [sentiment]);

  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value));
  };

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: [20, 20],
  });
  const PDFgen = (e) => {
    doc.text(e, 0.5, 0.5);
    doc.save('Plan.pdf');
  };
  const url = `[put your file here.]`;
  const title = 'Check out my plat trip from ITravel';

  const API_KEY = import.meta.env.API_KEY;

  const regeneratePlan = async () => {
    const prompt = `Give me a detailed plan for ${formData.numberOfDays} days in ${formData.destination}. 
    The plan should consider the following:
    - Group: ${formData.group}
    - Number of People: ${formData.numberOfPeople}
    - Children: ${formData.children}
    - Activities: ${formData.activities}
    - Cuisine: ${formData.cuisine}
    - Special Requests: ${formData.other}`;

    const APIBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Create a detailed travel plan for the user based on the provided information.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
    };

    const descriptionPrompt = `Provide a brief description of ${formData.destination}.`;

    const descriptionBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Provide a brief description of the city based on the user's input.",
        },
        {
          role: 'user',
          content: descriptionPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1,
    };

    const [planResponse, descriptionResponse] = await Promise.all([
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(APIBody),
      }),
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(descriptionBody),
      }),
    ]);

    const [planData, descriptionData] = await Promise.all([
      planResponse.json(),
      descriptionResponse.json(),
    ]);

    if (planData.choices && planData.choices.length > 0) {
      const travelPlan = planData.choices[0].message.content;
      const cityDescription = descriptionData.choices[0].message.content;

      navigate('/Plant', {
        state: {
          sentiment: travelPlan,
          cityDescription,
          formData,
        },
      });
    } else {
      console.error('Error.');
    }
  };

  return (
    <div>
      <div className="CARDCONTAINER flex justify-center">
        <div className="flex flex-wrap justify-center bg-gray-100 rounded-lg relative w-fit h-auto ">
          <div className="w-full sm:w-fit flex justify-center p-2">
            <div className="dropdown w-full">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-orange-500 hover:text-white text-black w-full"
                onClick={regeneratePlan}
              >
                Replan
                <img
                  src="https://img.icons8.com/?size=100&id=35635&format=png&color=000000"
                  className="w-5 ml-2"
                  alt="Replan icon"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit flex justify-center p-2">
            {/* ===============SAVE AS PDF BUTTON=============== */}
            <div className="dropdown w-full">
              <div
                onClick={() => PDFgen(`${sentiment}`)}
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-orange-500 hover:text-white text-black w-full"
              >
                Save as PDF
                <img
                  src="https://img.icons8.com/?size=100&id=LmcGmjPSQXSa&format=png&color=000000"
                  className="w-5 ml-2"
                  alt="Save as PDF icon"
                />
              </div>
              {/* <div
                tabIndex={0}
                className="dropdown-content card card-compact  bg-orange-500 text-white z-[1] w-64 p-2 shadow"
              >
                <div className="card-body">
                  <h3 className="card-title">
                    Your Travel plan is being downloaded!
                  </h3>
                  <p>Have a nice Trip.</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full sm:w-fit flex justify-center p-2">
            {/* ===============SAVE AS PDF BUTTON=============== */}
            <div className="dropdown w-full">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-orange-500 hover:text-white text-black w-full"
              >
                Share
                <img
                  src="https://img.icons8.com/?size=100&id=114329&format=png&color=000000"
                  className="w-5 ml-2"
                  alt="Share icon"
                />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact  bg-white text-white z-[1] w-64 p-2 shadow"
              >
                <div className="card-body">
                  <h3 className="card-title text-orange-500 ">
                    Where you want to share it
                  </h3>
                  <div>
                    <ShareButtons url={url} title={title} />
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit flex justify-center p-2">
            {/* ===============DAYS BUTTON=============== */}
            <details className="dropdown w-full bg-none">
              <summary className="btn btn-ghost hover:bg-orange-500 hover:text-white text-black w-full">
                Today's plan
                <img
                  src="https://img.icons8.com/?size=100&id=eJVE7jKWVMMN&format=png&color=000000"
                  className="w-5 ml-2"
                  alt="Today's plan icon"
                />
              </summary>
              <ul className="menu dropdown-content bg-white rounded-box z-10 w-52 p-2 text-black shadow-md">
                <li onClick={handleDayChange} value={selectedDay}>
                  {plans.map((plan, index) => (
                    <option
                      className="btn btn-ghost btn-outline text-orange-500 border-none hover:bg-orange-500 hover:text-white"
                      key={index}
                      value={index}
                    >
                      Day {index + 1}
                    </option>
                  ))}
                </li>
              </ul>
            </details>
          </div>
          {/* ===============DAYS BUTTON=============== */}
        </div>
      </div>

      {/* <div className="flex gap-4">
      <button
        onClick={regeneratePlan}
        className="bg-[#F97316] p-1 w-40 items-center justify-center rounded-full hover:bg-[#b9550e] hover:text-white duration-300 ease-in-out"
      >
        Regenerate Plan
      </button>
    </div> */}
    </div>
  );
};

export default PlanButtons;
