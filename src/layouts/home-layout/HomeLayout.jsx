import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import HomeFooter from "../../components/home-footer/HomeFooter";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <HomeFooter />
    </>
  );
};

export default HomeLayout;
