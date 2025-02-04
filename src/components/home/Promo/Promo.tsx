/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";
import { PressBtn } from "@/UI/button/PressElement";
import ExampleForm from "@/UI/form_hook/example/ExampleForm";

const Promo: FC = () => {
  return (
    <div className={clsx(style.promo, "container")}>
      <ExampleForm />
      <PressBtn
        label="Кнопка"
        type="submit"
        form="form"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />
    </div>
  );
};

export default Promo;
