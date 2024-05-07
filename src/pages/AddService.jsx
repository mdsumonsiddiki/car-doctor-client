import Banners from "../components/others/Banners";

const AddService = () => {
    return (
        <div className="container px-6 py-8 mx-auto">
        <Banners title="Add New Service" name="Service" />
        <div className="mt-24 bg-dark-7 rounded-xl p-24">
        <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 dark:text-gray-200">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
  
                  <div>
                    <label className="text-gray-700 dark:text-gray-200">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
  
                  <div>
                    <label className="text-gray-700 dark:text-gray-200">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
  
                  <div>
                    <label className="text-gray-700 dark:text-gray-200">
                      Password Confirmation
                    </label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="text-gray-700 dark:text-gray-200">
                    Your Message
                    </label>
                    <textarea  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none" rows='8' name="" id=""></textarea>
                  </div>
                </div>
  
                <div className="flex justify-end mt-6">
                <button className="text-lg w-full bg-red font-semibold px-5 py-4 rounded-md text-white hover:bg-opacity-85 transition">Submit</button>
                </div>
              </form>
        </div>
      </div>
    );
};

export default AddService;