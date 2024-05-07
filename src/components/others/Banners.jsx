import bgimgs from "../../assets/images/banner/4.jpg";

const Banners = () => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-cover bg-center rounded-xl py-28  z-10"
      style={{ backgroundImage: `url(${bgimgs})` }}
    >
      <div className="absolute inset-0 rounded-xl bg-dark-1 bg-opacity-55 -z-10"></div>
      <div className="flex items-center pl-14 w-full h-full bg-gray-900/40 z-40">
        <div className="text-left w-1/3">
          <h1 className="text-3xl font-bold text-white lg:text-6xl">
            Service Details
          </h1>
        </div>
        <div className="bg-red py-3 px-9 rounded-t-3xl font-medium text-xl text-white absolute bottom-0 left-1/2 transform -translate-x-1/2"> 
            <h2>Home/Service Details</h2>
        </div>
      </div>
    </div>
  );
};

export default Banners;
