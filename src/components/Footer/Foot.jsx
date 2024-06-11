import { useState } from "react";
import footerImg from "../../assets/footer/image 3.svg";
import { IoArrowRedoOutline } from "react-icons/io5";
import Joker from "../../assets/footer/JOKER.svg";
import { FaInstagram } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
const Foot = () => {
  const [email, setEmail] = useState("");

  return (
    <main className="mt-10 h-full">
      <div className="flex bg-red-600 -z-40">
        {/* text and form  */}
        <div className="w-[50%] flex flex-col justify-center items-center text-center">
          <h1 className="new-font text-white text-[1.5rem] md:text-[3.43rem] font-semibold">
            Ready to Discuss <br /> Your Project ?
          </h1>
          <div className=" relative mt-10 flex justify-center">
            <div className=" absolute ml-44 md:ml-0 mt-2 flex justify-end w-[200px] md:w-[400px] -z-1">
              <a className="ml-44" href="">
                <IoArrowRedoOutline className="text-white" />
              </a>
            </div>

            <input
              className="bg-transparent ml-44 md:ml-0 text-white border-b-2 w-[250px] md:w-[400px] h-[30px] z-10 placeholder:text-white/90 focus:border-none"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
        </div>
        {/* image  */}
        <div className="w-[50%]">
          <img className="mt-[-50px]" src={footerImg} alt="" />
        </div>
      </div>
      {/* footer starts  */}
      <div className="md:h-full mt-10 w-full flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row">
          {/* left div  */}
          <div className="w-[50%] p-5 flex flex-col justify-center items-center h-[40vh]">
            <img src={Joker} alt="img" />
            <div className="text-white flex space-x-12 mt-10">
              <a href="https://www.instagram.com/ch_sahilpanwar?igsh=MXJ1MXp5ZTZhNnQ2OA%3D%3D&utm_source=qr">
                <FaInstagram className="h-8 w-8 " />
              </a>
              <a href="https://www.behance.net/sahilpanwar6">
                <SiBehance className="h-8 w-8 " />
              </a>
            </div>
          </div>
          {/* right div  */}
          <div className="flex md:flex-row flex-col justify-center items-center space-x-10 w-full leading-loose">
            <div className="text-white md:ml-[80px] md:w-full text-center">
              <h1 className="text-[1.25rem] font-semibold">Useful Links</h1>
              <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Review</li>
              </ul>
            </div>
            <div className="text-white hidden md:flex flex-col md:mt-[-30px] text-center">
              <h1 className="text-[1.25rem] font-semibold">Contact</h1>
              <ul>
                <li>+91 9319146135</li>
                <li>sahilpanwar0710@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Foot;
