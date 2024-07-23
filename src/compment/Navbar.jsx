

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem('loggedIn');
//     setIsLoggedIn(loggedIn === 'true');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('loggedIn');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <div className="bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div>
//             <Link to='/'>
//             <img src="logo.png" className="h-14" alt="Logo" />
//             </Link>
//           </div>
//           <nav className="flex space-x-4">
//             <Link to="/Destinations" className="text-gray-700 hover:text-orange-500 transform transition-transform duration-300 hover:scale-105">
//               Destinations
//             </Link>
//           </nav>
//           <div className="space-x-2">

//             {isLoggedIn ? (
//                 <>
//                 <div className='flex gap-3'>
//               <button
//                 className="bg-orange-500 hover:bg-orange-400transform transition-transform duration-300 hover:scale-105	 text-white px-4 py-2 rounded"
//                 onClick={handleLogout}
//               >
//                 Log Out
//               </button>

//               <Link to='/Profile'>
//     <button class="flex text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-200 transform transition-transform duration-300 hover:scale-105">
//         <img class="w-6 h-6 mr-1" src="https://img.icons8.com/?size=100&id=7820&format=png&color=f97316"  alt="Profile"/>
//         <span className='g-2'>Profile</span>
//     </button>
//     </Link>
//     </div>
//               </>
              
//             ) : (
//               <>
//                 <Link to="/SignUp">
//                   <button className="text-orange-500 border hover:bg-orange-400	 border-orange-500 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
//                     Sign Up
//                   </button>
//                 </Link>
//                 <Link to="/Login">
//                   <button className="bg-orange-500 text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
//                     Login
//                   </button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <Link to="/">
              <img src="logo.png" className="h-14" alt="Logo" />
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <nav className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/Destinations" className="text-gray-700 hover:text-orange-500 transform transition-transform duration-300 hover:scale-105">
              Destinations
            </Link>
          </nav>
          <div className={`lg:flex lg:space-x-2 ${isOpen ? 'block' : 'hidden'}`}>

            {isLoggedIn ? (
              <div className='flex flex-col lg:flex-row gap-3'>
                <button
                  className="bg-orange-500 hover:bg-orange-400 transform transition-transform duration-300 hover:scale-105 text-white px-4 py-2 rounded"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
                <Link to='/Profile'>
                  <button className="flex text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-200 transform transition-transform duration-300 hover:scale-105">
                    <img className="w-6 h-6 mr-1" src="https://img.icons8.com/?size=100&id=7820&format=png&color=f97316" alt="Profile" />
                    <span className='g-2'>Profile</span>
                  </button>
                </Link>
              </div>
            ) : (
              <div className='flex flex-col lg:flex-row gap-3'>
                <Link to="/SignUp">
                  <button className="text-orange-500 border hover:bg-orange-400 border-orange-500 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                    Sign Up
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

