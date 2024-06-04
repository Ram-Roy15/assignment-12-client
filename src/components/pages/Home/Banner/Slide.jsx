import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";

const Slide = ({ image, text }) => {
  return (
    <div
      className="bg-center w-full bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-800/50">
        <div className="text-center">
          <h1 className="font-semibold text-gray-200 px-16 text-center my-3 text-xl">
            {text}
          </h1>
          <br />
          <Link
            to={"/join-manager"}
            className="px-5 py-4 mt-4 text-sm text-white font-medium capitalize transition-colors duration-300 transform bg-[#064694] rounded-md  lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Join as HR Manager
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  image: checkPropTypes.isRequired,
  text: checkPropTypes.isRequired,
};
