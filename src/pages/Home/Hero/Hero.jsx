import heroImg from "../../../assets/hero/halloween-party-men-spooky-costumes-celebrate-generated-by-ai 1.svg";
// import textImg from "../../assets/hero/UX Designer.svg";
import "./Hero.css";
import { fadeIn } from "../../../utils/Variant";
import { motion } from "framer-motion";
import Button, { Button2 } from "../../../components/Buttons/Button";
import parImg from "../../../assets/hero/Group 5.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import TypewriterEffectSmoothDemo from "../../../components/Type/type";
const Hero = () => {
  return (
    <main>
      <div className="w-full flex flex-row">
        {/* Left text area  */}
        <div className="w-[50%] h-full md:mt-[150px] flex justify-center items-center">
          <motion.div
            variants={fadeIn("up", 2)}
            className="leadding-relaxed space-y-3 ml-20"
            data-aos="fade-right"
          >
            <h1 className="text-color text-[0.6rem] md:text-[1rem] ">
              HI THERE! THIS IS SAHIL PANWAR
            </h1>
            {/* <img className="w-[500px]" src={textImg} alt="textImg" /> */}
            <TypewriterEffectSmoothDemo />
            <h2 className="text-color2 text-[1rem] md:text-[2rem]">
              Crafting Imagination Into Reality
            </h2>
            <div className="flex text-[0.5rem] md:text-[1rem] ">
              <Button data={"Contact Me"} />
              <Button2 data={"Get Resume"} />
            </div>
          </motion.div>
        </div>
        {/* Right image area  */}
        <div className="w-[50%] mt-[-80px] h-auto">
          <div className="flex ">
            <img
              className="hidden md:flex p-5 pb-10 !-z-10"
              src={heroImg}
              alt="HeroImg"
            />
            <div className="absolute right-0 top-12 md:top-52 text-white flex flex-col justify-center items-center space-y-12 ">
              <a href="https://www.instagram.com/ch_sahilpanwar?igsh=MXJ1MXp5ZTZhNnQ2OA%3D%3D&utm_source=qr">
                <FaInstagram className=" h-4 md:h-6 w-4 md:w-6" />
              </a>
              <a href="https://x.com/sahilpanwa58776?s=21">
                <FaXTwitter className="h-4 md:h-6 w-4 md:w-6" />
              </a>
              <a href="https://www.linkedin.com/in/sahil-panwar-715370294/">
                <FaLinkedin className="h-4 md:h-6 w-4 md:w-6" />
              </a>
              <h1 className="tilt text-[0.75rem] md:text-[1.25rem]  ">
                Follow us -
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 h-[50px] md:h-[130px] w-full mt-[30px] md:mt-[-40px] !z-10 px-5">
        <img src={parImg} alt="Image" className="object-cover w-full p-2" />
      </div>

      <div className={`scroll-down-animation w-full z-10`}>
        <span className="mouse border-2 border-black dark:border-white">
          <span className="move bg-black dark:bg-white"></span>
        </span>
        <h2 className="Sd text-black dark:text-white">Scroll down</h2>
      </div>
    </main>
  );
};

export default Hero;
