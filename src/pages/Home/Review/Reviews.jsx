import Arrow from "../../../assets/reviews/Arrow 3.svg";
import SwiperCards from "./Swiper";
const Reviews = () => {
  return (
    <main id="review" className="h-full mb-20">
      <div className="flex flex-row justify-center md:justify-start mb-10 md:ml-20 mt-[100px]">
        <h1 className="new-font hidden md:flex text-color text-[2rem] md:text-[3.43rem]">
          See what <br />
          Client said
        </h1>
        <h1 className="new-font flex md:hidden text-color text-[1.8rem] md:text-[3.43rem]">
          See what Client said
        </h1>
        <img className="hidden md:flex ml-10 mt-20" src={Arrow} alt="arrow" />
      </div>
      <div className=" mt-10 md:mt-[-100px] h-full">
        <SwiperCards />
      </div>

      {/* <div className="flex justify-center">
        <img className="absolute" src={rect} alt="Rectangle" />
        <h1 className="text-color relative mt-[350px] ml-[-780px] text-[1.25rem]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut
          enim ad <br />
          minim veniam, quis nostrud{" "}
        </h1>
        <h1 className="text-color relative mt-[550px] ml-[-430px] text-[1.25rem]">
          AbhiRoop Rai
        </h1>
        <img className="absolute ml-[600px]" src={img} alt="image" />
      </div> */}
    </main>
  );
};

export default Reviews;
