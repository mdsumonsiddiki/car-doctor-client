import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

const Nav = () => {
  const link = (
    <>
    <NavLink
        to="/"
        className="font-medium text-lg px-5"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#FF3811",
                border: "2px solid #FF3811",
                borderRadius: "5px",
                padding: "4px 18px",
              }
            : {
                color: "#444444",
                padding: "4px 18px",
                border: "2px solid #fff",
                borderRadius: "5px",
              }
        }
      >
        Home  
      </NavLink>
      <NavLink
        to="/"
        className="font-medium text-lg px-5"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#FF3811",
                border: "2px solid #FF3811",
                borderRadius: "5px",
                padding: "4px 18px",
              }
            : {
                color: "#444444",
                padding: "4px 18px",
                border: "2px solid #fff",
                borderRadius: "5px",
              }
        }
      >
        About  
      </NavLink>
      <NavLink
        to="/singup"
        className="font-medium text-lg"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#FF3811",
                border: "2px solid #FF3811",
                borderRadius: "5px",
                padding: "4px 18px",
              }
            : {
                color: "#444444",
                padding: "4px 18px",
                border: "2px solid #fff",
                borderRadius: "5px",
              }
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/singup"
        className="font-medium text-lg"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#FF3811",
                border: "2px solid #FF3811",
                borderRadius: "5px",
                padding: "4px 18px",
              }
            : {
                color: "#444444",
                padding: "4px 18px",
                border: "2px solid #fff",
                borderRadius: "5px",
              }
        }
      >
        Blog 
      </NavLink>
      <NavLink
        to="/singup"
        className="font-medium text-lg"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#FF3811",
                border: "2px solid #FF3811",
                borderRadius: "5px",
                padding: "4px 18px",
              }
            : {
                color: "#444444",
                padding: "4px 18px",
                border: "2px solid #fff",
                borderRadius: "5px",
              }
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to='/'>
            <img
              className="h-14"
              src={logo}
              alt=""
            />
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              X
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col gap-1 md:flex-row md:mx-6">{link}</div>
          <div className="flex justify-center md:block">
            <Link className="text-lg bg-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
