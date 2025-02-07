import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { ICard } from "./types";
import CardBlock from "./CardBlock";
import Image from "rc-image";
import Placeholder from "./PLaceholder";
import { PressBtn } from "@/UI/button/PressElement";
import { IQuery } from "@/store/rtk/seminars/get";
import { useAppDispatch } from "@/hooks/hook";
import { setChangeModal, setWarningModal } from "@/store/modal/modalSlice";
import { format, parse } from "date-fns";

interface ICardProps extends ICard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: (e: IQuery) => any;
}

const Card: FC<ICardProps> = (props) => {
  const { title, description, date, time, photo, id } = props;
  const dispatch = useAppDispatch();

  // окно удаления
  const openWarning = () => {
    dispatch(setWarningModal({ text: `Вы хотите удалить семинар?`, id }));
  };

  const parseDate = parse(`${date} ${time}`, "dd.MM.yyyy HH:mm", new Date());

  // окно изменения
  const openChange = () => {
    dispatch(
      setChangeModal({
        id,
        title,
        description,
        date: parseDate,
        time: parseDate,
        photo,
      }),
    );
  };

  return (
    <li className={clsx(style.card)}>
      <Image
        src={photo}
        placeholder={<Placeholder />}
        fallback={new URL(`./assets/image.jpg`, import.meta.url).href}
      />

      <div className={clsx(style.card__wrap)}>
        <div className={clsx(style.card__date)}>
          <CardBlock label="Дата" text={format(parseDate, "dd.MM.yyyy")} />
          <CardBlock label="Время" text={format(parseDate, "HH:mm")} />
        </div>

        <h3 className={clsx(style.card__title)}>{title}</h3>
        <p className={clsx(style.card__description)}>{description}</p>

        <div className={clsx(style.card__control)}>
          <PressBtn label="Удалить" onClick={() => openWarning()} />
          <PressBtn
            label="Изменить"
            data-id={id}
            onClick={() => openChange()}
          />
        </div>
      </div>
    </li>
  );
};
export default Card;
