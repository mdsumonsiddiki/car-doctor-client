import { Link } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import SoclialProvider from "../components/socialProvidor/SoclialProvider";

const LogIn = () => {
  return (
    <div className="container px-6 mx-auto flex items-center justify-between py-24">
      <div className=" w-3/5 mx-auto">
        <img className="mx-auto" src={loginImg} alt="" />
      </div>
      <div className="w-2/5 border border-red p-16 rounded-xl mx-auto">
        <h2 className="font-semibold text-4xl text-dark-2 text-center pb-10">
          Sign Up
        </h2>
        <div className="flex flex-col w-full border-opacity-50">
          <form className="space-y-5 ">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red focus:ring-red  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <button className="text-lg w-full bg-red font-semibold px-5 py-3 rounded-md text-white hover:bg-opacity-85 transition">
              Sign In
            </button>
          </form>
          <div className="divider pt-5">Or Sign In with</div>
          <div className="text-center">
            <SoclialProvider/>
            <h2 className="text-lg font-medium text-dark-3">
              Have an account?{" "}
              <Link className="font-bold text-red">Sign In</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
