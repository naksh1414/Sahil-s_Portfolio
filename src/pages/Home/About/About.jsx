import SImage from "../../../assets/about/Rectangle 3 (1).svg";
import Progress from "../../../components/Progress/Progress";
import imgbg from "../../../assets/about/Rectangle 2.svg"
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
    <main className="h-[100vh] mt-[100px]">
      <div className="flex flex-row">
        {/* left image div  */}
        <div className="w-[50%] flex justify-center items-center">
          <img className="absolute mr-20 mt-20 " src={imgbg} alt="bg" />
          <img className="relative" src={SImage} alt="image"/>
        </div>
        {/* Right text div  */}
        <div className="w-50%">
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
          <div className="mt-10">
            <h1 className="text-white new-font text-[1.87rem] font-semibold">
              Expertise Field
            </h1>
            <div className="mt-4 w-full flex flex-row">
              <Progress data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
