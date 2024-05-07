import PropTypes from "prop-types";

const SectionTitle = ({secName, title, description}) => {
    return (
        <div className="text-center w-1/2 mx-auto">
            <small className="text-red font-bold text-xl">{secName}</small>
            <h2 className="text-dark-1 font-bold text-4xl pt-3">{title}</h2>
            <p className="text-dark-3 pt-5">{description}</p>
        </div>
    );
};
SectionTitle.propTypes = {
    secName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };
export default SectionTitle;