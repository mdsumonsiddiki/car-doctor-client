import PropTypes from "prop-types";

const Slider = ({ bgimg }) => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-cover rounded-xl py-28 bg-top z-10"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 rounded-xl bg-dark-1 bg-opacity-55 -z-10"></div>
      <div className="flex items-center pl-14 w-full h-full bg-gray-900/40 z-40">
        <div className="text-left w-1/3">
          <h1 className="text-3xl font-bold text-white lg:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className=" text-lg pt-7 text-white ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-3 mt-4">
            <button className="text-lg bg-red border-2 border-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">
              Discover More
            </button>
            <button className="text-lg border-2 border-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Slider.propTypes = {
  bgimg: PropTypes.img,
};
export default Slider;
