import aboutPerson from "../../../assets/images/about_us/person.jpg";
import aboutParts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex pt-14 gap-14">
      <div>
        <div className="relative">
          <img className="w-4/5 rounded-xl" src={aboutPerson} alt="" />
          <img className="absolute top-1/2 left-1/3 w-3/5 border-8 border-white rounded-xl" src={aboutParts} alt="" />
        </div>
      </div>
      <div>
        <small className="text-red font-bold text-xl">About Us</small>
        <h2 className="text-dark-1 font-bold text-4xl pt-6 pb-10">
          We are qualified & of experience in this field
        </h2>
        <p className="text-dark-3 pb-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
          <span className="block pt-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </span>
        </p>
        <button className="text-lg bg-red font-semibold px-5 py-2 rounded-md text-white hover:bg-opacity-85 transition">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
