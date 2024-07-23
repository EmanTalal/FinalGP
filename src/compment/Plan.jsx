import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Plan = () => {
  const location = useLocation();
  const { sentiment } = location.state || { sentiment: "No data available" };
  const [plans, setPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    // تقسيم النص إلى مصفوفة بناءً على وجود "Day" ككلمة فصل بين الأيام
    if (sentiment !== "No data available") {
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

  return (
    <div>
      <h3>Your Plan</h3>
      {sentiment}
      <select onChange={handleDayChange} value={selectedDay}>
        {plans.map((plan, index) => (
          <option key={index} value={index}>
            اليوم {index + 1}
          </option>
        ))}
      </select>
      <p className="text-white">
        {plans[selectedDay] || "No plan available for this day"}
      </p>
    </div>
  );
};

export default Plan;
