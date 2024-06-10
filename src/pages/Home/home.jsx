import Hero from "./Hero/Hero";
import About from "./About/About";
import Work from "./Work/Work";
import Project from "./Projects/Project";
import Reviews from "./Review/Reviews";
import Nav from "../../components/Navbar/nav";
import Foot from "../../components/Footer/Foot";
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Project />
      <Reviews />
      <Foot />
    </div>
  );
};

export default Home;
