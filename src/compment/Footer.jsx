import React from 'react'

function Footer() {
  return (
    <div>
        
    <div className="bg-gray-100">
    <footer className="bg-gray-100 text-black py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-lg font-semibold mb-4">Travel</h5>
                    <p>Providing the best travel experiences, combining technology and expertise to deliver exceptional services.</p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    {/* <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Destinations</a></li>
                    </ul> */}
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
                    <ul>
                        <li className="mb-2"><a href="tel:+1234567890" className="hover:underline">+966 05388783</a></li>
                        <li className="mb-2"><a href="mailto:info@company.com" className="hover:underline">travel@gmail.com</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                    <div className="flex space-x-4">
                            {/* <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.55 4.55 0 0119.44 24H4.56A4.55 4.55 0 010 19.47V4.53A4.55 4.55 0 014.56 0h14.89A4.55 4.55 0 0124 4.56zM9.31 20.45v-8.26H6.89v8.26zm-1.22-9.49a1.9 1.9 0 01-1.9-1.9 1.9 1.9 0 011.9-1.9 1.9 1.9 0 011.9 1.9 1.9 1.9 0 01-1.9 1.9zm12.36 9.49v-4.26c0-2.44-.5-4.43-3.37-4.43a3.64 3.64 0 00-3.64 2.74h-.05v-2.35h-2.42v8.26h2.42v-4.6c0-1.2.34-2.42 1.62-2.42s1.87 1.2 1.87 2.47v4.55h2.42z"/></svg>
                            </a> */}
                        <a href="https://x.com/TravelComp44402 " target='_blank' className="text-gray-400 hover:text-orange-500 ">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 5.64a8.77 8.77 0 01-2.5.68 4.38 4.38 0 001.92-2.41 8.7 8.7 0 01-2.77 1.06A4.36 4.36 0 0015.47 4a4.38 4.38 0 00-4.35 4.35 4.5 4.5 0 00.11 1A12.4 12.4 0 013 5.1a4.36 4.36 0 001.35 5.8 4.29 4.29 0 01-1.98-.55v.05a4.37 4.37 0 003.5 4.28 4.28 4.28 0 01-1.97.08 4.37 4.37 0 004.08 3A8.77 8.77 0 012 19.54a12.39 12.39 0 006.73 1.97c8.07 0 12.48-6.67 12.48-12.48l-.01-.57a8.85 8.85 0 002.15-2.26z"/></svg>
                        </a>
                        <a href="https://github.com/ITravel-5" target='_blank' className="text-gray-400 hover:text-orange-500 ">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 00-3.6 23.4c.57.1.77-.25.77-.55v-2c-3.14.66-3.81-1.52-3.81-1.52a3 3 0 00-1.26-1.67c-1.03-.7.08-.7.08-.7a2.34 2.34 0 011.7 1.13 2.38 2.38 0 003.25.93 2.4 2.4 0 01.7-1.5c-2.5-.3-5.14-1.25-5.14-5.52a4.32 4.32 0 011.14-3 4 4 0 01.11-2.95s.95-.3 3.12 1.16a10.92 10.92 0 015.68 0c2.17-1.46 3.12-1.16 3.12-1.16a4 4 0 01.11 2.95 4.32 4.32 0 011.14 3c0 4.3-2.64 5.2-5.14 5.52a2.7 2.7 0 01.79 2.07v3.1c0 .3.2.67.77.55A12 12 0 0012 0z"/></svg>
                        </a>
                        {/* <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2A10 10 0 1010 22v-7h2v7a10 10 0 002-19.8zM9.17 10h5.66c.9 0 1.34.44 1.34 1.34v.32c0 .9-.44 1.34-1.34 1.34H9.17C8.27 13 7.83 12.56 7.83 11.66v-.32C7.83 10.44 8.27 10 9.17 10z"/></svg>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
                &copy; 2024 Travel . All rights reserved.
            </div>
        </div>
    </footer>
    </div>
    
    </div>
  )
}

export default Footer