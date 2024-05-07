import Banners from "../components/others/Banners";
import imgs from "../assets/images/banner/3.jpg";
import InfoCard from "../components/serviceDetails/InfoCard";
import StepCard from "../components/serviceDetails/StepCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import downloadIcon from "../assets/icons/download.svg";
import logo from "../assets/footer.svg";

const ServiceDetails = () => {
  return (
    <div className="container px-6 py-8 mx-auto">
      <Banners />
      <div className="mt-24 flex gap-8">
        <div className="w-2/3">
          <img className="rounded-xl" src={imgs} alt="" />
          <h2 className="text-dark-1 font-bold text-2xl py-8">
            Unique Car Engine Service
          </h2>
          <p className="text-dark-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
          <p className="text-dark-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn t anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h2 className="text-dark-1 font-bold text-2xl pt-12 pb-8">
            3 Simple Steps to Process
          </h2>
          <p className="text-dark-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn t anything embarrassing hidden in the
            middle of text
          </p>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StepCard />
            <StepCard />
            <StepCard />
          </div>
          <div className="mt-8">
            <img className="rounded-xl" src={imgs} alt="" />
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-dark-7 rounded-xl p-10">
            <h2 className="font-bold text-dark-1 text-2xl">Services</h2>
            <ul className="mt-3 space-y-4">
              <li>
                <Link className="font-semibold text-dark-1 flex bg-white items-center justify-between transition-all hover:text-white hover:bg-red p-5 rounded-lg">
                  Full Car Repair <FaArrowRight className="text-red" />
                </Link>
              </li>
              <li>
                <Link className="font-semibold bg-white text-dark-1 flex items-center justify-between p-5 transition-all hover:text-white hover:bg-red rounded-lg">
                  Engine Repair <FaArrowRight className="text-red" />
                </Link>
              </li>
              <li>
                <Link className="font-semibold bg-white text-dark-1 flex items-center justify-between p-5 transition-all hover:text-white hover:bg-red rounded-lg">
                  Automatic Services
                  <FaArrowRight className="text-red" />
                </Link>
              </li>
              <li>
                <Link className="font-semibold bg-white text-dark-1 flex items-center justify-between p-5 transition-all hover:text-white hover:bg-red rounded-lg">
                  Engine Oil Change
                  <FaArrowRight className="text-red" />
                </Link>
              </li>
              <li>
                <Link className="font-semibold bg-white text-dark-1 flex items-center justify-between p-5 transition-all hover:text-white hover:bg-red rounded-lg">
                  Battery Charge
                  <FaArrowRight className="text-red" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-dark-1 p-10 rounded-xl space-y-5 mt-8">
            <h2 className="text-white font-bold text-2xl">Download</h2>
            <div className="flex items-center justify-between">
              <div className="flex justify-center gap-4">
                <img src={downloadIcon} alt="" />
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Our Brochure
                  </h2>
                  <p className="text-dark-4">Download</p>
                </div>
              </div>
              <button className="bg-red text-white text-2xl py-4 px-6 rounded-lg">
                <FaArrowRight />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex justify-center gap-4">
                <img src={downloadIcon} alt="" />
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Company Details
                  </h2>
                  <p className="text-dark-4">Download</p>
                </div>
              </div>
              <button className="bg-red text-white text-2xl py-4 px-6 rounded-lg">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="text-center bg-dark-1 p-12 rounded-xl mt-8">
            <img className="w-1/4 mx-auto mb-5" src={logo} alt="" />
            <h2 className="text-white font-bold text-xl">Need Help? We Are Here To Help You</h2>
            <div className="bg-white py-12 px-4 rounded-xl mt-5 relative">
                <h2 className="text-dark-1 font-bold text-xl"><span className="text-red">Car Doctor</span> Special</h2>
                <h2 className="text-dark-3 font-bold pt-2">Save up to <span className="text-red">60% off</span></h2>
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-lg bg-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">Get A Quote</button>
            </div>
          </div>
          <h2 className="text-dark-1 font-bold text-4xl py-8">Price $250.00</h2>
          <button className="text-lg w-full bg-red font-semibold px-5 py-4 rounded-md text-white hover:bg-opacity-85 transition">Proceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
