import SectionTitle from "../../others/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-40">
      <SectionTitle
        secName="About Us"
        title="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. "
      />

      <div className="grid grid-cols-3 gap-6 mt-14">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />

      
      </div>
      <div className="text-center mt-10">
          <button className="text-lg bg-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">
            More Services
          </button>
        </div>
    </div>
  );
};

export default Services;
