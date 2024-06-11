// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import rect from "../../../assets/reviews/Group 17.svg";
// import img from "../../../assets/reviews/Rectangle 9.svg";
import img2 from "../../../assets/reviews/Group 82.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SwiperCards() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex h-full my-10 justify-center items-center">
            <img src={img2} alt="" />
          </div>
          {/* <div className="flex justify-center p-4">
            <img className="absolute p-4" src={rect} alt="Rectangle" />
            <h1 className="text-color relative mt-[100px] md:mt-[350px] ml-[-300px] md:ml-[-780px] text-[0.45rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua. Ut enim ad <br />
              minim veniam, quis nostrud{" "}
            </h1>
            <h1 className="text-color relative hidden md:flex mt-[550px] ml-[-430px] text-[1.25rem]">
              AbhiRoop Rai
            </h1>
            <img className="absolute mt-[-50px] ml-[100px] md:ml-[600px] h-[150px] w-[150px]" src={img} alt="image" />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img src={img2} alt="" />
          </div>
          {/* <div className="flex justify-center p-4">
            <img className="absolute p-4" src={rect} alt="Rectangle" />
            <h1 className="text-color relative mt-[100px] md:mt-[350px] ml-[-300px] md:ml-[-780px] text-[0.45rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua. Ut enim ad <br />
              minim veniam, quis nostrud{" "}
            </h1>
            <h1 className="text-color relative hidden md:flex mt-[550px] ml-[-430px] text-[1.25rem]">
              AbhiRoop Rai
            </h1>
            <img className="absolute mt-[-50px] ml-[100px] md:ml-[600px] h-[150px] w-[150px]" src={img} alt="image" />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img src={img2} alt="" />
          </div>
          {/* <div className="flex justify-center p-4">
            <img className="absolute p-4" src={rect} alt="Rectangle" />
            <h1 className="text-color relative mt-[100px] md:mt-[350px] ml-[-300px] md:ml-[-780px] text-[0.45rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua. Ut enim ad <br />
              minim veniam, quis nostrud{" "}
            </h1>
            <h1 className="text-color relative hidden md:flex mt-[550px] ml-[-430px] text-[1.25rem]">
              AbhiRoop Rai
            </h1>
            <img className="absolute mt-[-50px] ml-[100px] md:ml-[600px] h-[150px] w-[150px]" src={img} alt="image" />
          </div> */}
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="flex justify-center">
            <img className="absolute" src={rect} alt="Rectangle" />
            <h1 className="text-color relative mt-[350px] ml-[-780px] text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua. Ut enim ad <br />
              minim veniam, quis nostrud{" "}
            </h1>
            <h1 className="text-color relative mt-[550px] ml-[-430px] text-[1.25rem]">
              AbhiRoop Rai
            </h1>
            <img className="absolute ml-[600px]" src={img} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="absolute" src={rect} alt="Rectangle" />
            <h1 className="text-color relative mt-[350px] ml-[-780px] text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua. Ut enim ad <br />
              minim veniam, quis nostrud{" "}
            </h1>
            <h1 className="text-color relative mt-[550px] ml-[-430px] text-[1.25rem]">
              AbhiRoop Rai
            </h1>
            <img className="absolute ml-[600px]" src={img} alt="image" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
