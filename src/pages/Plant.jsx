import Hero from '../compment/Hero';
import PlanButtons from '../compment/PlanButtons';
import CardPlan from './CardPlan';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Plant() {
  const location = useLocation();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const {
    formData = {},
    sentiment = '',
    cityDescription = '',
    // imageUrl = ""
  } = location.state || {};
  const [plans, setPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    if (formData.destination) {
      const fetchCoordinates = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
              formData.destination
            )}&format=json&limit=1`
          );
          const data = await response.json();

          if (data.length > 0) {
            const { lat, lon } = data[0];
            setLatitude(lat);
            setLongitude(lon);
          } else {
            console.error('Error fetching coordinates.');
          }
        } catch (error) {
          console.error('Error fetching coordinates:', error);
        }
      };

      fetchCoordinates();
    }
  }, [formData.destination]);
  return (
    <>
      <div className=" bg-white  h-fit">
        {/* ===============HERO=============== */}
        <Hero formData={formData} cityDescription={cityDescription} />
        <br />
        {/* ================CONTAINER AND CONTENET=============== */}
        <div className="bg-white flex flex-wrap justify-center gap-4">
          <CardPlan sentiment={sentiment} formData={formData} />
        </div>
        <br />
        {/* ===============BUTTON=============== */}
        <div className="flex justify-center ">
          {/* <PlanButtons formData={formData} sentiment={sentiment} /> */}
        </div>
        <div className="Container bg-white">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <div className="flex gap-1 mb-3">
                    <img
                      src="https://img.icons8.com/?size=100&id=59795&format=png&color=888888"
                      className="w-5"
                    />
                    <p className="text-sm font-bold tracking-tight text-gray-600">
                      This trip is powered by AI
                    </p>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                    Your {formData.group} trip to {formData.destination} for
                    {formData.numberOfDays} days
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {cityDescription}
                  </p>

                  {/* */}
                </div>
              </div>
            </div>
            {/*Sultan's map function */}
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 -z-0 ">
              <div className="mt-6">
                {latitude && longitude ? (
                  <MapContainer
                    center={[latitude, longitude]}
                    zoom={7}
                    style={{ height: '400px', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[latitude, longitude]}>
                      <Popup>{formData.destination}</Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <p>Loading map...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============================== */}
    </>
  );
}
export default Plant;
