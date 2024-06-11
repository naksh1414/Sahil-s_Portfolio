import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:space-x-5">
      {data.map((item, index) => (
        <div
          key={index}
          style={{ width: 100, height: 100 }}
          className="w-full text-red-500 flex flex-col justify-center items-center mb-4"
        >
          <CircularProgressbar
            value={item.percentage}
            text={`${item.percentage}%`}
            styles={{
              text: {
                fill: "#f88",
                fontSize: "16px",
              },
              path: {
                stroke: "rgba(222, 17, 47, 1)",
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
            }}
          />
          <h1 className="mt-4 text-[0.8rem] text-center text-color">
            {item.Name}
          </h1>
        </div>
      ))}
    </div>
  );
};

Progress.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Progress;
