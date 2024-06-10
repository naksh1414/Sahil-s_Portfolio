import Arrow from "../../../assets/reviews/Arrow 3.svg";
import SwiperCards from "./Swiper";
const Reviews = () => {
  return (
    <main id="review" className="h-full">
      <div className="flex flex-row ml-20 mt-[100px]">
        <h1 className="new-font text-color text-[3.43rem]">
          See what <br />
          Client said
        </h1>
        <img className="ml-10 mt-20" src={Arrow} alt="arrow" />
      </div>
      <div className="mt-[-100px] h-[100vh]">
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
