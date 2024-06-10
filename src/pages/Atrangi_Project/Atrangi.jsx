import Nav from "../../components/Navbar/nav";
import Foot from "../../components/Footer/Foot";
import { FaArrowLeft } from "react-icons/fa";
import sideImg from "../../assets/barber/Group 79.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Button4 } from "../../components/Buttons/Button";
import Atrngi from "../../assets/Atrangi/home 1.svg"
const Atrangi = () => {
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
                Atrangi - <br /> Sustainable <br /> Fashion Brand
              </h1>
              <p className="mt-10">
                Atrangi is a sustainable fashion brand focused on offering
                eco-friendly <br /> and stylish clothing and accessories. The
                website aims to promote its <br /> commitment to sustainability
                while providing an engaging and seamless <br /> shopping
                experience for its users.
              </p>
              <p className="mt-10">Objectives</p>
              <ul className="list-disc mt-10 ml-10">
                <li>Communicate the brand’s commitment to sustainability.</li>
                <li>Showcase products effectively to drive sales.</li>
                <li>Provide an intuitive and enjoyable user experience.</li>
                <li>Encourage users to join the community and stay updated.</li>
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
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={Atrngi} alt="image" />
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

export default Atrangi;
