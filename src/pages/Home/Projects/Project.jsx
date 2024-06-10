// import MediaControlCard from "../../components/Card/ProjectCard";
// import img from "../../assets/work/image 1.svg";
import img1 from "../../../assets/Projects/Rectangle 16.svg";
import img2 from "../../../assets/Projects/Rectangle 17.svg";
import img3 from "../../../assets/Projects/Rectangle 18.svg";
import img4 from "../../../assets/Projects/Rectangle 19.svg";

const Project = () => {
  return (
    <main className="h-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="red-color text-[1.3rem]">Projects</h2>
        <h1 className="text-[3.4rem] text-color new-font">
          I made for clients
        </h1>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <div className="flex justify-center space-x-9">
          <a href="/barber_project">
            <img src={img1} alt="imageu" />
          </a>
          <a href="/atrangi_project">
            <img className="pt-[100px]" src={img2} alt="image" />
          </a>
        </div>
        <div className="flex justify-center space-x-10">
          <a href="/broker_project">
            <img className="mt-[-150px]" src={img3} alt="image" />
          </a>
          <a href="/gdsc_project">
          <img className="pt-[60px]" src={img4} alt="image" />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14  ">
        <button className="bg-red-600 w-[300px] text-white py-3 px-6 rounded-md">
          EXPLORE MORE PROJECTS
        </button>
      </div>
    </main>
  );
};

export default Project;
