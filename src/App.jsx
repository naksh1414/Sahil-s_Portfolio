// import Foot from "./components/Footer/Foot";
// import Nav from "./components/Navbar/nav";
import Home from "./pages/Home/home";
import Download from "./pages/Download/Download";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Barber from "./pages/Barber_Project/Barber";
import Atrangi from "./pages/Atrangi_Project/Atrangi";
import Broker from "./pages/Broker_Buddy/Broker";
import Gdsc from "./pages/Gdsc_Project/Gdsc";
import Explore from "./pages/Explore_More/Explore";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/barber_project" element={<Barber />} />
          <Route path="/atrangi_project" element={<Atrangi />} />
          <Route path="/broker_project" element={<Broker />} />
          <Route path="/gdsc_project" element={<Gdsc />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
