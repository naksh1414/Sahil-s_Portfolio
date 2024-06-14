import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ data }) => {
  return (
    <button className="w-[100px] md:w-[200px] h-[40px] md:h-[55px] bg-white transition duration-300 text-red-600 hover:bg-red-600 hover:text-white">
      {data}
    </button>
  );
};

export const Button2 = ({ data }) => {
  return (
    <a href="/download">
      <button className="w-[100px] md:w-[200px] ml-4 text-white h-[40px] md:h-[55px] transition duration-300 border-2 border-white hover:text-red-600 hover:border-red-600">
        {data}
      </button>
    </a>
  );
};
export const Button3 = ({ data, download }) => {
  return (
    <Link to="/download" download={download}>
      <button className="w-[200px] ml-4 text-white bg-red-600 h-[55px]">
        {data}
      </button>
    </Link>
  );
};
export const Button4 = ({ data }) => {
  return (
    <button className="w-[200px] ml-4 text-white bg-red-600 h-[55px]">
      {data}
    </button>
  );
};
Button.propTypes = {
  data: PropTypes.string.isRequired,
};
Button2.propTypes = {
  data: PropTypes.string.isRequired,
};
Button3.propTypes = {
  data: PropTypes.string.isRequired,
};
Button4.propTypes = {
  data: PropTypes.string.isRequired,
};
export default Button;
