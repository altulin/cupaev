/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICard } from "./types";
import Card from "./Card";
import { IQuery } from "@/store/rtk/seminars/get";
import "swiper/css";
import clsx from "clsx";
import style from "./Promo.module.scss";
import Svg from "@/hoc/Svg";
import IconArr from "@/images/sprite/arr.svg";
import { Navigation } from "swiper/modules";

const NavBtn: FC<{ isReverse?: boolean }> = ({ isReverse }) => {
  return (
    <button
      className={clsx(
        style.navigation__btn,
        isReverse && style["navigation__btn--reverse"],
        isReverse
          ? style["navigation__btn--next"]
          : style["navigation__btn--prev"],
      )}
      type="button"
    >
      <Svg icon={IconArr} />
    </button>
  );
};

// `.${style[`button_slider--prev`]}`

const Slider: FC<{ arr: ICard[]; trigger: (e: IQuery) => any }> = ({
  arr,
  trigger,
}) => {
  return (
    <Swiper
      className={clsx(style.slider)}
      slidesPerView={1}
      spaceBetween={50}
      cssMode={true}
      loop={true}
      modules={[Navigation]}
      navigation={{
        nextEl: `.${style[`navigation__btn--next`]}`,
        prevEl: `.${style[`navigation__btn--prev`]}`,
      }}
    >
      {arr.map((item, i) => (
        <SwiperSlide className={clsx(style.slide)} key={i}>
          <Card trigger={trigger} {...item} />
        </SwiperSlide>
      ))}

      <div className={clsx(style.navigation)}>
        <NavBtn />
        <NavBtn isReverse={true} />
      </div>
    </Swiper>
  );
};
export default Slider;
