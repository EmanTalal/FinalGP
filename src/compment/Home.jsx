import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Discover The Best Destinations In The World
              </h1>
              <button
                onClick={() => {
                  const isLoggedIn =
                    localStorage.getItem("loggedIn") === "true";
                  if (isLoggedIn) {
                    navigate("/FormPage");
                  } else {
                    navigate("/Login");
                  }
                }}
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-400	transform transition-transform duration-300 hover:scale-105 transition duration-300"
              >
                Get Start
              </button>{" "}
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 ">
              <div className="relative">
                <img
                  src="https://scth.scene7.com/is/image/scth/albujairi-terrace-in-diriyah:crop-660x337?defaultImage=albujairi-terrace-in-diriyah."
                  alt="Destination 1"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100+ Destinations
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://scth.scene7.com/is/image/scth/naila-art-gallery-in-riyadh:crop-660x337?defaultImage=naila-art-gallery-in-riyadh "
                  alt="Destination 2"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-gray-800 font-semibold">
                  100% Beautiful
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://halayallaimages-new.s3.me-south-1.amazonaws.com/images/venues/provider_venue_661e62672372f."
                  alt="Destination 3"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 h-full"
                />
              </div>
              <div className="relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Destination 4"
                  className="rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105
 "
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section Recommend  */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-7">
              <img
                src="https://scth.scene7.com/is/image/scth/about-taif_hero_banner_desktop-2:crop-1920x1080?defaultImage=about-taif_hero_banner_desktop-2&wid=1920&hei=1080"
                alt="Destination 1"
                className="w-48 h-48 rounded-2xl	 object-cover shadow-md transform transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://scth.scene7.com/is/image/scth/about-alula_hero_banner_desktop-2:crop-1920x1080?defaultImage=about-alula_hero_banner_desktop-2&wid=1920&hei=1080"
                alt="Destination 2"
                className="w-48 h-48 rounded-2xl	object-cover shadow-md transform transition-transform duration-300 hover:scale-105 "
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 lg:text-left">
              {/* <h2 className="text-xl font-semibold text-gray-900">About</h2> */}
              <h1 className="text-4xl font-bold  text-gray-900">
                Most Visites destinations{" "}
              </h1>
              <p className="mt-4 text-gray-600 ">
                Let's make your dream destinations here. We provide many
                destinations, and we offer the best places to visit every month.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">60M+</h3>
                  <p className="text-gray-600">Tourist</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                  <p className="text-gray-600">Destinations</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">20+</h3>
                  <p className="text-gray-600">Years Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Feuter! */}
      <div className="bg-gray-100">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 class="text-orange-500 text-lg font-semibold">What We Give</h2>
            <h3 className="text-4xl font-bold text-gray-800">
              Best Features For You
            </h3>
            <p className="text-gray-600 mt-4">
              We will provide the best features for those of you who want to
              travel comfortably .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4 ">
                <svg
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-12 h-12 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h12M9 21V3M9 3l3.5 6.5L17 3v18"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Personalized Trip Creation
              </h4>
              {/* <p class="text-gray-600 mt-2">We have provided several choices of destinations and very cheap traveling packages.</p> */}
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-12 h-12 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Downloadable Itineraries
              </h4>
              {/* <p class="text-gray-600 mt-2">We provide an experienced tour guide and promise to help you and understand the places.</p> */}
            </div>
            {/* <!-- Feature 3 --> */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105
"
            >
              <div className="text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-12 h-12 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M5 7v14a2 2 0 002 2h10a2 2 0 002-2V7"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                Integrated Map View
              </h4>
              {/* <p class="text-gray-600 mt-2">We will also make it easier for users to book tickets or hotels in the place you want.</p> */}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 mt-4">
              We are committed to providing the best travel experiences for our
              customers, combining technology and expertise to deliver
              exceptional services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://scth.scene7.com/is/image/scth/visit-maraya-in-alula-1:crop-460x620?defaultImage=visit-maraya-in-alula-1 "
                alt="About Us"
                class="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 "
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2024, our mission has always been to make travel
                planning as seamless and enjoyable as possible. With a team of
                dedicated professionals and cutting-edge technology, we strive
                to create unforgettable travel experiences for our clients.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
                We envision a world where travel is accessible to everyone,
                where planning a trip is as exciting as the journey itself. We
                are continually innovating to bring the best services to our
                customers, ensuring every trip is a memorable one.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600">
                Our team of experts is passionate about travel and technology.
                We work tirelessly to understand your needs and provide
                personalized travel plans that exceed your expectations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
