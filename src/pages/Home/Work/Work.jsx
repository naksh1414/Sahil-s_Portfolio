import Arrow from "../../../assets/work/Arrow 1.svg";
import DArrow from "../../../assets/work/Arrow 2.svg";
// import pic from "../../assets/work/image 1.svg";
import ul from "../../../assets/work/Line 2.svg";
import RecipeReviewCard from "../../../components/Card/Card";
const Work = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-row">
        {/* left div  */}
        <div className="w-[50%] hidden md:flex justify-between items-start flex-col ">
          <div className="flex ml-20 ">
            <h1 className="text-white new-font hidden md:flex text-[1rem] md:text-[3.4rem]">
              See How I <br />
              Work
            </h1>
            <h1 className="text-white new-font flex md:hidden text-[1rem] md:text-[3.4rem]">
              See How I
              Work
            </h1>
            <img className="mt-20" src={Arrow} alt="arrow" />
          </div>
          <div className="flex ml-20 mt-[200px]">
            <h1 className="text-white new-font text-[3.4rem]">
              Read my <br /> Latest Blogs
            </h1>
            <img className="ml-10 mt-10" src={DArrow} alt="Downarrow" />
          </div>
          {/* <img className="mt-[-200px] ml-20" src={pic} alt="picture" /> */}
          <div className="ml-20 mt-4">
            <RecipeReviewCard />
          </div>
          <a href="">
            <h1 className="text-color ml-20 mt-5">MORE BLOG POST</h1>
          </a>
          <img className="ml-20" src={ul} alt="underline" />
        </div>

        {/* Right div  */}
        <div>
          <div className="p-4">
            <h1 className="new-font text-color text-[2.25rem] mt-10 space-y-4">
              Reserach
            </h1>
            <div className="text-color flex flex-row mt-2">
              <h1 className="mr-4 grey-color ">Step-1</h1>
              <p>
                Research is vital in UI/UX design, helping designers <br />{" "}
                understand user behaviors to create intuitive interfaces that{" "}
                <br /> meet needs and expectations, resulting in engaging
                digital <br /> experiences.
              </p>
            </div>
          </div>
          <div className="p-4">
            <h1 className="new-font text-color text-[2.25rem] mt-14 space-y-4">
              Wireframing
            </h1>
            <div className="text-color flex flex-row mt-2">
              <h1 className="mr-4 grey-color">Step-2</h1>
              <p>
                Wireframing in UI/UX design is the skeletal blueprint, outlining{" "}
                <br />
                the structure and functionality of a digital interface before{" "}
                <br />
                visual design, serving as a crucial step in the design process{" "}
                <br />
                for clarity and user flow optimization.
              </p>
            </div>
          </div>
          <div className="p-4">
            <h1 className="new-font text-color text-[2.25rem] mt-14 space-y-4">
              ProtoTyping
            </h1>
            <div className="text-color flex flex-row">
              <h1 className="mr-4 grey-color">Step-3</h1>
              <p>
                Prototyping in UI/UX design is like a blueprint for a building,
                <br />
                allowing designers to test functionality and user experience{" "}
                <br />
                before final development, ensuring a smoother and more effective{" "}
                <br />
                end product.
              </p>
            </div>
          </div>
          <div className="p-4">
            <h1 className="new-font text-color text-[2.25rem] mt-14 space-y-4">
              Hand Off
            </h1>
            <div className="text-color flex flex-row mt-2">
              <h1 className="mr-4 grey-color">Step-4</h1>
              <p>
                Handoff in UI/UX design is the seamless transfer of design{" "}
                <br />
                assets and specifications from designers to developers, ensuring{" "}
                <br />
                accurate implementation of the user interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;
