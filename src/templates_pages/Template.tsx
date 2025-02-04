import clsx from "clsx";
import Header from "../components/header/Header";
import style from "./Template.module.scss";

// import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Header />
      <main className={clsx(style.main)}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Template;
