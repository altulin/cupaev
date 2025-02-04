import clsx from "clsx";
import Header from "../components/header/Header";
import style from "./Template.module.scss";

import { Outlet } from "react-router-dom";
import Footer from "@/components/footer/Footer";

const Template = () => {
  return (
    <>
      <Header />
      <main className={clsx(style.main)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
