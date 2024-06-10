import { Button3 } from "../../components/Buttons/Button";
import Nav from "../../components/Navbar/nav";
import Foot from "../../components/Footer/Foot";
import resume from "../../assets/download/Resume.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Download = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="h-full justify-center flex flex-col items-center my-10">
          <div className="absolute right-0 top-52 text-white flex flex-col justify-center items-center space-y-12 ">
            <FaInstagram className="h-6 w-6" />
            <FaXTwitter className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
            <h1 className="tilt text-[1.25rem] ">Follow us -</h1>
          </div>
          <Button3 data={"Download Resume"} download={resume} />
          <img className="my-10" src={resume} alt="resume" />
        </div>
      </main>
      <Foot />
    </>
  );
};

export default Download;
