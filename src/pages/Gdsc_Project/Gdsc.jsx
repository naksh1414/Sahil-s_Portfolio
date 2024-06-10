import Nav from "../../components/Navbar/nav";
import Foot from "../../components/Footer/Foot";
import { FaArrowLeft } from "react-icons/fa";
import sideImg from "../../assets/barber/Group 79.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import gdscImg from "../../assets/gdsc/MacBook Pro 16_ - 1 (2) 3.svg";
import { Button4 } from "../../components/Buttons/Button";
const Gdsc = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="flex ">
          <a className="ml-20 mt-14" href="/">
            <FaArrowLeft className="h-8 w-8 text-white" />
          </a>
          <div className="h-full flex justify-center items-center">
            {/* left text area  */}
            <div className="text-white mt-[200px]">
              <h2>Web Design</h2>
              <h1 className="text-[3.43rem]">
                GDSC KIET web <br /> redesign
              </h1>
              <p className="mt-10">
                The Developer Student Clubs (DSC) website for KIET Group of
                Institutions <br /> serves as a platform to engage students in
                development and design, <br /> fostering a healthy development
                culture. The website aims to inform, <br /> engage, and
                encourage students to join the DSC community, participate in{" "}
                <br /> events, and take advantage of learning opportunities.
              </p>
              <h1 className="mt-10">Objectives</h1>
              <ul className="list-disc ml-10 mt-4">
                <li>Create an inviting and professional online presence</li>
                <li>{`Inform users about the club's activities, events, and benefits.`}</li>
                <li>
                  Encourage students to join and participate in the community.
                </li>
                <li>Provide easy access to resources and support channels.</li>
              </ul>
            </div>
            {/* right text area  */}
            <div className="flex">
              <img
                className="flex justify-end ml-[300px]"
                src={sideImg}
                alt="iameg"
              />
              <div className="absolute right-0 top-52 text-white flex flex-col justify-center items-center space-y-12 ">
                <FaInstagram className="h-6 w-6" />
                <FaXTwitter className="h-6 w-6" />
                <FaLinkedin className="h-6 w-6" />
                <h1 className="tilt text-[1.25rem] ">Follow us -</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <img src={gdscImg} alt="image" />
          <a className="mt-10" href="">
            <Button4 data={"Review Prototype"} />
          </a>
          <h1 className="text-white text-[4rem] my-10">Thanks for Watching</h1>
        </div>
      </main>
      <Foot />
    </>
  );
};

export default Gdsc;
