import Sidebar from '../compment/Sidebar';
import Navbar from '../compment/Navbar';
import Footer from '../compment/Footer';
function Profile() {
  return (
    <>
    <div>
    <Navbar/>
    
      <div className="flex justify-center bg-white h-screen mt-40 max-sm:mt-40 ">
        <div class=" h-fit w-fit bg-white overflow-hidden shadow rounded-lg border">
          <Sidebar />
          <div class="flex gap-4 px-4 py-5 sm:px-6 ">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h3 class="text-lg mt-5 ml leading-6 font-medium text-gray-900">
              John Doe
            </h3>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-800">Username</dt>
                <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-800">Email </dt>
                <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-800">Phone number</dt>
                <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  (123) 456-7890
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-800">Address</dt>
                <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  123 Main St
                  <br />
                  Anytown, USA 12345
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer/>

      </div>
      
    </>
  );
}
export default Profile;
