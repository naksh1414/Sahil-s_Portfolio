import logo from "../../assets/navbar/JOKER.svg";

const Nav = () => {
  const Navlinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Portfolio",
      link: "#projects",
    },
    {
      title: "Review",
      link: "#review",
    },
  ];
  return (
    <nav className="!z-20">
      <div className="h-[80px] w-full mt-2">
        <div className="text-white items-center flex flex-row">
          <div className="flex items-center justify-between w-[75vw]">
            <img src={logo} alt="Jlogo" className="p-5" />
          </div>
          <div className="hidden md:flex flex-row space-x-5 p-5 z-20">
            {Navlinks.map((item, index) => (
              <div key={index}>
                <a href={item.link}>
                  <h1 className="text-white text-[1.1rem] pt-1 font-bold hover:text-red-600">{item.title}</h1>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
