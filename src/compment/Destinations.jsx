import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Footer from './Footer';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { MdOutlineLightMode } from 'react-icons/md';

// Default coordinates for the map (e.g., Saudi Arabia)
const defaultPosition = [23.8859, 45.0792];

const Destinations = () => {
  const [cities, setCities] = useState([
    {
      name: 'AlUla',
      img: 'https://scth.scene7.com/is/image/scth/Alula-banner:crop-660x337?defaultImage=Alula-banner',
      // temperature: {temperature1},
      position: [26.6187, 37.9316],
      title: 'Nature,Culture&,...',
    },
    {
      name: 'Jeddah',
      img: 'https://scth.scene7.com/is/image/scth/jeddah-banner:crop-660x337?defaultImage=jeddah-banner',
      // temperature: "41.3 °C",
      position: [21.4858, 39.1925],
      title: 'Nature,Culture&,...',
    },
    {
      name: 'Riyad',
      img: 'https://scth.scene7.com/is/image/scthacc/faisaliah-tower:crop-660x337?defaultImage=faisaliah-tower',
      // temperature: "43.1 °C",
      position: [24.7136, 46.6753],
      title: 'Culture & History,...',
    },
    {
      name: 'Asser',
      img: 'https://scth.scene7.com/is/image/scth/about-abha_hero_banner_desktop-1:crop-660x337?defaultImage=about-abha_hero_banner_desktop-1',
      // temperature: "28.3 °C",
      position: [18.2167, 42.5],
      title: 'Natuer , Culture &...',
    },
    {
      name: 'Al Ahsa',
      img: 'https://scth.scene7.com/is/image/scth/alahsa-new-banner:crop-660x337?defaultImage=alahsa-new-banner',
      // temperature: "46.3 °C",
      position: [25.3836, 49.5861],
      title: 'Nature,Culture&,...',
    },
    {
      name: 'The Red Sea',
      img: 'https://scth.scene7.com/is/image/scth/red-sea-one:crop-660x337?defaultImage=red-sea-one',
      // temperature: "35.9 °C",
      position: [20.6276, 38.8851],
      title: 'Nature , Luxury ,...',
    },
    {
      name: 'KAEC',
      img: 'https://scth.scene7.com/is/image/scth/KAEC-banner:crop-660x337?defaultImage=KAEC-banner',
      // temperature: "32.5 °C",
      position: [22.3642, 39.0911],
      title: 'Sports , Entertainment ,...',
    },
    {
      name: 'Makkah',
      img: 'https://scth.scene7.com/is/image/scth/New-makkah-view-homepage:crop-660x337?defaultImage=New-makkah-view-homepage',
      // temperature: "42.2 °C",
      position: [21.3891, 39.8579],
      title: 'Historic Site,Shopping,...',
    },
    {
      name: 'Madinah',
      img: 'https://scth.scene7.com/is/image/scthacc/about-madinah_hero_banner_desktop-2:crop-660x337?defaultImage=about-madinah_hero_banner_desktop-2',
      // temperature: "41.3 °C",
      position: [24.5247, 39.5692],
      title: 'Culture & History,...',
    },
    {
      name: 'Taif',
      img: 'https://scth.scene7.com/is/image/scth/Taif-banner-new:crop-660x337?defaultImage=Taif-banner-new',
      // temperature: "32.6 °C",
      position: [21.4373, 40.5127],
      title: 'Culture & History ,...',
    },
    {
      name: 'Dammam',
      img: 'https://scth.scene7.com/is/image/scth/new-hero-dammam-banner:crop-660x337?defaultImage=new-hero-dammam-banner',
      // temperature: "45.1 °C",
      position: [26.4207, 50.0888],
      title: 'Nature,Shopping,...',
    },
    {
      name: 'Diriyah',
      img: 'https://www.visitsaudi.com/content/dam/wvs/destinations/diriyah/Newest-Deriyah-Baneer-Image.jpg',
      // temperature: "42.3 °C",
      position: [24.7371, 46.5753],
      title: 'Culture & History,Food,...',
    },
    {
      name: 'Tabuk',
      img: 'https://scth.scene7.com/is/image/scth/New-Tabuk_Image-Banner:crop-660x337?defaultImage=New-Tabuk_Image-Banner',
      // temperature: "4.3 °C",
      position: [28.3834, 36.555],
      title: 'Culture & History , Nature,...',
    },
    {
      name: 'Yanbu',
      img: 'https://scth.scene7.com/is/image/scth/yanbu-new-hero-banner:crop-660x337?defaultImage=yanbu-new-hero-banner',
      // temperature: "40 °C",
      position: [24.0943, 38.049],
      title: 'Nature , Beaches,...',
    },
    {
      name: 'Al Baha',
      img: 'https://scth.scene7.com/is/image/scth/Albaha-banner:crop-660x337?defaultImage=Albaha-banner',
      // temperature: "32.7 °C",
      position: [20.0129, 41.4677],
      title: 'Adventure , Nature ,...',
    },
    {
      name: 'Jazan',
      img: 'https://scth.scene7.com/is/image/scth/about-jazan_hero_banner_desktop-3:crop-660x337?defaultImage=about-jazan_hero_banner_desktop-3',
      // temperature: "37.9 °C",
      position: [16.8893, 42.551],
      title: 'Culture & History ,...',
    },
    {
      name: 'Hail',
      img: 'https://scth.scene7.com/is/image/scthacc/about-hail_hero_banner_desktop-1:crop-660x337?defaultImage=about-hail_hero_banner_desktop-1',
      // temperature: "39 °C",
      position: [27.5136, 41.7208],
      title: 'Nature , Adventure ,...',
    },
    {
      name: 'al Jubail',
      img: 'https://scth.scene7.com/is/image/scthacc/about-al-jubail_hero_banner_desktop:crop-660x337?defaultImage=about-al-jubail_hero_banner_desktop',
      // temperature: "46.3 °C",
      position: [27.0047, 49.6589],
      title: 'Nature , Sports , Food &...',
    },
    {
      name: 'Najran',
      img: 'https://scth.scene7.com/is/image/scth/New-Najran-Banner-Image:crop-660x337?defaultImage=New-Najran-Banner-Image',
      // temperature: "39.4 °C",
      position: [17.4917, 44.1322],
      title: 'Culture & History ,...',
    },
    {
      name: 'Qassim',
      img: 'https://scth.scene7.com/is/image/scth/alqassim-new-banner:crop-660x337?defaultImage=alqassim-new-banner',
      // temperature: "40.5 °C",
      position: [26.3285, 43.975],
      title: 'Culture & History ,...',
    },
  ]);

  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchWeatherForCities = async () => {
      try {
        const updatedCities = await Promise.all(
          cities.map(async (city) => {
            try {
              const response = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather',
                {
                  params: {
                    lat: city.position[0],
                    lon: city.position[1],
                    appid: 'a5a18abece62aa42c05fd44b6887299d', // استبدل بمفتاح API الخاص بك
                    units: 'metric',
                  },
                }
              );
              return {
                ...city,
                temperature: response.data.main.temp,
              };
            } catch (error) {
              console.error(
                `Error fetching weather data for ${city.name}:`,
                error
              );
              return {
                ...city,
                temperature: 'N/A',
              };
            }
          })
        );
        setCities(updatedCities);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherForCities(); // Fetch weather initially

    const intervalId = setInterval(() => {
      fetchWeatherForCities(); // Fetch weather every 24 hours
    }, 86400000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <header className="h-[550px] flex items-end bg-[url('https://scth.scene7.com/is/image/scthacc/saudi-destionations:crop-1920x768?defaultImage=saudi-destionations')] bg-center">
        <h1 className="text-white text-[4rem] md:text-[5rem] p-0 md:p-[6rem] bg-[#0001] w-[100%]">
          Destinations
        </h1>
      </header>
      <section className="px-0 bg-white md:px-20">
        <h1 className="text-black text-4xl font-semibold mt-10 mb-6 tracking-wider">
          Saudi Destinations
        </h1>
        <div className="flex h-[648px]">
          <div className="w-[500px] overflow-auto">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`p-[10px] overflow-auto rounded-md mb-[15px] cursor-pointer hover:scale-95 duration-500 ${
                  selectedCity && selectedCity.name === city.name
                    ? 'border-2 border-[#F97316]'
                    : ''
                }`}
                onClick={() => setSelectedCity(city)}
              >
                <img
                  className="w-[100%] rounded-md"
                  src={city.img}
                  alt={city.name}
                />
                <div className="px-[2px] py-[2px] flex flex-row items-center justify-between">
                  <div className="text-[14px] text-black font-semibold mt-1 uppercase">
                    {city.title}
                  </div>
                  <div className="flex flex-row items-center mt-1 text-black">
                    <MdOutlineLightMode />
                    <div>{city.temperature}</div>
                  </div>
                </div>
                <h3>{city.name}</h3>
              </div>
            ))}
          </div>
          <div className="w-full h-[648px] ">
            <MapContainer
              center={defaultPosition}
              zoom={6}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=QNshRhDNGWzH9fjeZ9In"
                attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> & <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {selectedCity && (
                <Marker position={selectedCity.position}>
                  <Popup>{selectedCity.name}</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </section>
      <section className="p-2 bg-gray-100 flex flex-col gap-10 mt-16 ">
        <h1 className="px-0 text-center md:px-48 text-black text-xl md:text-4xl font-semibold mt-10 mb-6 tracking-wider">
          All Destinations
        </h1>
        <div className=" grid grid-cols-1 md:flex flex-row gap-2 m-auto w-[70%] justify-center">
          <Link to="/alula">
            <div className="  w-[100%] h[70vh]">
              <img
                className=" h-[50vh] md:h-[75vh] rounded-md w-[100%] object-center"
                src="https://media.istockphoto.com/id/1859622254/photo/jabal-alfil-elephant-rock-in-evening-landscape-illuminated-text-alula-and-arabic-translation.jpg?b=1&s=612x612&w=0&k=20&c=a4gxhVySfGMcPPi64UapI4xc6wp1E9FdUGvQ1YJwmSM="
                alt
              />
              <div className=" flex flex-row items-center justify-around">
                <div className="text-[14px] text-gray-500 font-semibold mt-1 uppercase   ">
                  Nature, Culture & History& Relax
                  <h3 className="text-black">AlUla</h3>
                </div>

                <p>
                  {/* <div className="flex flex-row mb-3">
                    <span className="material-symbols-outlined">
                      light_mode
                    </span>
                    <div>39.3 °C</div>
                  </div> */}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col h-[50%] w-[100%] md:w-[120%] gap-12 items-start">
            <Link to="/Jeddah">
              <div className="w-full ">
                <img
                  className="rounded-md h-[42vh] w-full"
                  src="https://scth.scene7.com/is/image/scth/jeddah-banner:crop-660x337?defaultImage=jeddah-banner"
                  alt
                />
                <div className=" flex flex-row items-center px-8">
                  <div className="text-[14px] text-gray-500 font-semibold mt-1 uppercase   ">
                    Nature, Culture & History, shopping
                    <h3 className="text-black">Jeddah</h3>
                  </div>
                  <p>
                    {/* <div className="flex flex-row mb-3">
                      <span className="material-symbols-outlined">
                        light_mode
                      </span>
                      <div>41.3 °C</div>
                    </div> */}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex flex-row gap-1 ">
              <Link to="/riyad">
                <div className="card">
                  <img
                    className="rounded-md"
                    src="https://scth.scene7.com/is/image/scthacc/faisaliah-tower:crop-660x337?defaultImage=faisaliah-tower"
                    alt=""
                  />
                  <div className="px-[2px] py-[2px] flex flex-row items-center justify-around">
                    <div className="text-[14px] text-gray-500 font-semibold mt-1 uppercase   ">
                      Culture, History & Nature,...
                      <h3 className="text-black">Riyadh</h3>
                    </div>
                    <p>
                      {/* <div className="flex flex-row mb-3 gap-1">
                        <span className="material-symbols-outlined">
                          light_mode
                        </span>
                        <div>43.1 °C</div>
                      </div> */}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/asser">
                <div className="card">
                  <img
                    className="rounded-md"
                    src="https://scth.scene7.com/is/image/scth/about-abha_hero_banner_desktop-1:crop-660x337?defaultImage=about-abha_hero_banner_desktop-1"
                    alt=""
                  />
                  <div className=" flex flex-row items-center justify-around">
                    <div className="text-[14px] text-gray-500 font-semibold mt-1 uppercase   ">
                      Nature, Culture & History,...
                      <h3 className="text-black">Asser</h3>
                    </div>
                    <p>
                      {/* <div className="flex flex-row mb-3">
                        <span className="material-symbols-outlined">
                          light_mode
                        </span>
                        <div>28.3 °C</div>
                      </div> */}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:flex flex-row gap-2 m-auto mb-10 w-[70%] justify-center">
          <div className="flex flex-col h-[50%] w-[100%] md:w-[120%] gap-12 items-start">
            <Link to="/alahsa">
              <div className="w-full ">
                <img
                  className="rounded-md h-[42vh] w-full"
                  src="https://scth.scene7.com/is/image/scth/alahsa-new-banner:crop-660x337?defaultImage=alahsa-new-banner"
                  alt=""
                />
                <div className=" flex flex-row items-center px-8">
                  <div className="text-[14px]  text-gray-500 font-semibold mt-1 uppercase   ">
                    Nature, Culture & History, Shopping
                    <h3 className="text-black">Al Ahsa</h3>
                  </div>
                  <p>
                    {/* <div className="flex flex-row mb-3">
                      <span className="material-symbols-outlined">
                        light_mode
                      </span>
                      <div>46.2 °C</div>
                    </div> */}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex flex-row gap-1 items-center ">
              <Link to="/redsea">
                <div className="card">
                  <img
                    className="rounded-md"
                    src="https://scth.scene7.com/is/image/scth/red-sea-one:crop-660x337?defaultImage=red-sea-one"
                    alt=""
                  />
                  <div className="px-[2px] py-[2px] flex flex-row items-center justify-around">
                    <div className="text-[14px]  text-gray-500 font-semibold mt-1 uppercase ">
                      Nature,Culture & Sustanability,...
                      <h3 className="text-black">The Red Sea</h3>
                    </div>
                    <p>
                      {/* <div className="flex flex-row mb-3 ">
                        <span className="material-symbols-outlined">
                          light_mode
                        </span>
                        <div>35.9 °C</div>
                      </div> */}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/kaec">
                <div className="card">
                  <img
                    className="rounded-md "
                    src="https://scth.scene7.com/is/image/scth/KAEC-banner:crop-660x337?defaultImage=KAEC-banner"
                    alt=""
                  />
                  <div className="px-[2px] py-[2px] flex flex-row items-center justify-around">
                    <div className="text-[14px]  text-gray-500 font-semibold mt-1 uppercase   ">
                      SPORTS,Entertainment & Nature,...
                      <h3 className="text-black">KAEC</h3>
                    </div>
                    <p>
                      {/* <div className="flex flex-row mb-3 gap-1">
                        <span className="material-symbols-outlined">
                          light_mode
                        </span>
                        <div>32.5 °C</div>
                      </div> */}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/makkah">
            <div className="  w-[100%] h[70vh]">
              <img
                className=" h-[50vh] md:h-[75vh] rounded-md w-[900px] object-cover"
                src="https://images.unsplash.com/photo-1709944750859-87c5f6851f00?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className=" flex flex-row items-center justify-around">
                <div className="text-[14px] text-gray-500  font-semibold mt-1 uppercase   ">
                  historic site, shopping, religious site
                  <h3 className="text-black">Makkah</h3>
                </div>
                <p>
                  {/* <div className="flex flex-row mb-3">
                    <span className="material-symbols-outlined">
                      light_mode
                    </span>
                    <div>40.8 °C</div>
                  </div> */}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Destinations;
