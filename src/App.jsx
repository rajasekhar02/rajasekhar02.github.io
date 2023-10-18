import "./style.scss";
import { Outlet } from "react-router-dom";
import BackGroundLayer from "./components/BackGroundLayer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import { useAboutMe } from "./routes/AboutMe/AboutMeContext";
import { getUserDetails } from "src/services/contentful";

export default function App() {
  const aboutMeContext = useAboutMe();
  useEffect(() => {
    (async () => {
      const response = await getUserDetails();
      aboutMeContext.setUserDetails(response);
      console.log(response);
    })();
  }, []);
  return (
    <>
      <BackGroundLayer></BackGroundLayer>
      <div className="relative flex w-full flex-col">
        <Header />
        <div
          className="flex-none"
          style={{ height: "var(--content-offset)" }}
        ></div>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}
