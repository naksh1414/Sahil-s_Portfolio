import SImage from "../../../assets/about/Rectangle 3 (1).svg";
import Progress from "../../../components/Progress/Progress";
import imgbg from "../../../assets/about/Rectangle 2.svg";
const About = () => {
  const data = [
    {
      percentage: "80",
      Name: "RESEARCH",
    },
    {
      percentage: "90",
      Name: "USER FLOW",
    },
    {
      percentage: "95",
      Name: "WIREFRAMING",
    },
    {
      percentage: "80",
      Name: "PROTOTYPING",
    },
  ];
  return (
    <main id="about" className="h-full mt-[100px]">
      <div className="flex flex-col md:flex-row">
        {/* left image div  */}
        <div className="w-[50%] hidden  md:flex justify-center items-center mb-10 md:mb-0">
          <img
            className="absolute left-14 w-[200px] md:w-[300px] mr-20 mt-18 md:ml-32"
            src={imgbg}
            alt="bg"
          />
          <img
            className="relative md:ml-36 md:mt-20"
            src={SImage}
            alt="image"
          />
        </div>
        {/* Right text div  */}
        <div className="w-50% p-5">
          <p className="p-color text-[1rem] font-semibold text">About Me</p>
          <h1 className="text-[2.3rem] md:text-[4.3rem] text-white new-font font-semibold">
            Why Hire Me ?
          </h1>
          <p className="mt-[50px] text-color">
            As a UI/UX designer, I offer a blend of creativity and technical
            skill,
            <br /> specializing in intuitive interfaces that balance aesthetics
            with user <br /> experience. Proficient in Sketch, Figma, and other
            design tools.
          </p>
          <p className="mt-[50px] text-color">
            I create visually striking and user-friendly designs. I conduct
            thorough <br /> user research and usability testing to optimize
            experiences, thriving in <br /> collaborative, innovative
            environments.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center">
            <h1 className="text-white new-font text-[1.87rem] font-semibold">
              Expertise Field
            </h1>
            <div className="mt-4 w-full h-full justify-center items-center text-center flex md:flex-row">
              <Progress data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
