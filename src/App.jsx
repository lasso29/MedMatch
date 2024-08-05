import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/home-layout/HomeLayout";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import Services from "./pages/home/Services";
import Faqs from "./pages/home/Faqs";

function App() {
  return (
    <>
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
