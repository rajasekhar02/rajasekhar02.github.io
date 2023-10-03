import "./style.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import BackGroundLayer from "./components/BackGroundLayer";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <BackGroundLayer></BackGroundLayer>
      <div className="relative flex w-full flex-col">
        <NavBar />
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
