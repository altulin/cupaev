import clsx from "clsx";
import { FC } from "react";
import ReactPaginate from "react-paginate";
import style from "./Promo.module.scss";
import { IQuery } from "@/store/rtk/seminars/get";

const Paginate: FC<{ totalCount: number; trigger: (e: IQuery) => void }> = ({
  totalCount,
  trigger,
}) => {
  return (
    <ReactPaginate
      pageCount={Math.ceil(totalCount / 3)}
      containerClassName={clsx(style.pagination)}
      pageLinkClassName={clsx(style.pagination__link)}
      activeLinkClassName={clsx(style["pagination__link--active"])}
      previousLinkClassName={clsx(style["pagination__btn"])}
      nextLinkClassName={clsx(style["pagination__btn"])}
      previousLabel={"назад"}
      nextLabel={"вперед"}
      initialPage={0}
      onClick={(e) => {
        if (typeof e.nextSelectedPage !== "number") return;
        trigger({ url: `?_page=${e.nextSelectedPage + 1}&_limit=3` });
        return;
      }}
    />
  );
};
export default Paginate;
