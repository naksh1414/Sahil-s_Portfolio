import { useState } from "react";
import footerImg from "../../assets/footer/image 3.svg";
import { IoArrowRedoOutline } from "react-icons/io5";
import Joker from "../../assets/footer/JOKER.svg";
import { FaInstagram } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
const Foot = () => {
  const [email, setEmail] = useState("");

  return (
    <main className="mt-10">
      <div className="flex bg-red-600 -z-40">
        {/* text and form  */}
        <div className="w-[50%] flex flex-col justify-center items-center text-center">
          <h1 className="new-font text-white text-[3.43rem] font-semibold">
            Ready to Discuss <br /> Your Project ?
          </h1>
          <div className="mt-10">
            <div className=" absolute mt-2 flex justify-end w-[400px] -z-1">
              {/* <label className="text-white/50 ml-3" htmlFor="">
                Email
              </label> */}
              <a href="">
                <IoArrowRedoOutline className="text-white" />
              </a>
            </div>

            <input
              className="bg-transparent text-white border-b-2 w-[400px] h-[30px] z-10 placeholder:text-white/50 focus:border-none"
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
      <div className="h-[20vh]">
        <div className="flex">
          {/* left div  */}
          <div className="w-[50%] flex flex-col justify-center items-center h-[40vh]">
            <img src={Joker} alt="img" />
            <div className="text-white flex space-x-12 mt-10">
              <FaInstagram className="h-8 w-8 " />
              <SiBehance className="h-8 w-8 " />
            </div>
          </div>
          {/* right div  */}
          <div className="flex justify-center items-center space-x-10 leading-loose">
            <div className="text-white text-center">
              <h1 className="text-[1.25rem] font-semibold">Useful Links</h1>
              <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Review</li>
              </ul>
            </div>
            <div className="text-white mt-[-30px]">
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
