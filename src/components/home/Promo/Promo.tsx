import { FC, useEffect } from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";
import { useLazyGetSeminarsQuery } from "@/store/rtk/seminars/get";
import { RotatingLines } from "react-loader-spinner";

import Card from "./Card";
import { ICard } from "./types";
import Title from "@/UI/title/Title";
import { checkArr } from "@/service/checkArr";
import Paginate from "./Paginate";
import useIsSmallDevice from "@/hooks/IsSmallDevice";
import Slider from "./Slider";
import { firstQuery } from "./script";

const Promo: FC = () => {
  const [trigger, { data, isLoading, isSuccess }] = useLazyGetSeminarsQuery({});
  const isTablet = useIsSmallDevice();

  useEffect(() => {
    // запрос списка карточек
    trigger({ url: firstQuery(isTablet) });
  }, [isTablet, trigger]);

  return (
    <div
      className={clsx(
        style.promo,
        "container",
        isLoading && style["promo--loading"],
      )}
    >
      {isLoading && <RotatingLines strokeColor="#177165" />}

      {isSuccess && (
        <>
          <Title
            label={
              checkArr(data.res) ? "список семинаров" : "список семинаров пуст"
            }
          />
          {checkArr(data.res) && (
            <>
              {!isTablet ? (
                <>
                  <ul className={clsx(style.list)}>
                    {data.res.map((item: ICard, i: number) => (
                      <Card key={i} {...item} trigger={trigger} />
                    ))}
                  </ul>

                  <Paginate totalCount={data.totalCount} trigger={trigger} />
                </>
              ) : (
                <Slider trigger={trigger} arr={data.res} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Promo;
