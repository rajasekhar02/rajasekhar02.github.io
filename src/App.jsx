import "./style.scss";
import { Outlet } from "react-router-dom";
import BackGroundLayer from "./components/BackGroundLayer";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
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
