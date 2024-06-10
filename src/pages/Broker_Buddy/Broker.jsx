import Nav from "../../components/Navbar/nav";
import Foot from "../../components/Footer/Foot";
import { FaArrowLeft } from "react-icons/fa";
import sideImg from "../../assets/Broker/Frame 61.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import brokerImg from "../../assets/Broker/Frame 73.svg";
import { Button4 } from "../../components/Buttons/Button";
const Broker = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="flex ">
          <a className="ml-20 mt-14" href="/">
            <FaArrowLeft className="h-8 w-8 text-white" />
          </a>
          <div className="h-[100vh] flex justify-center items-center">
            {/* left text area  */}
            <div className="text-white mt-[200px]">
              <h2>App Design</h2>
              <h1 className="text-[3.43rem]">
                Broker Buddy - <br /> Money <br /> Investment App
              </h1>
              <p className="mt-10">
                Broker Buddy is a money investment app designed to make
                investing <br /> accessible and straightforward for everyone,
                from beginners to seasoned <br /> investors. The app aims to
                provide users with a seamless and informative <br /> investment
                experience, allowing them to manage their portfolios, track{" "}
                <br />
                market trends, and make informed investment decisions.
              </p>
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
          <img src={brokerImg} alt="image" />
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

export default Broker;
