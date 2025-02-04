import clsx from "clsx";
import style from "../../Form.module.scss";
import { EnumTextInput, ITextInput } from "../../utils/types";

export const wrapClass = "select";
export type ITextInput_Modifier = ITextInput[EnumTextInput.modifier];

const makeStyles = (element: string, modifier: ITextInput_Modifier) => {
  return clsx(
    style[`${wrapClass}__${element}`],
    modifier && style[`${wrapClass}__${element}--${modifier}`],
  );
};

export const getClasses = (modifier: ITextInput_Modifier, isError: boolean) => {
  return {
    control: () =>
      clsx(
        makeStyles("control", modifier),
        isError && style["select__control--error"],
      ),
    valueContainer: () => makeStyles("valueContainer", modifier),
    placeholder: () => makeStyles("placeholder", modifier),
    indicatorsContainer: ({
      selectProps: { menuIsOpen },
    }: {
      selectProps: { menuIsOpen: boolean };
    }) =>
      clsx(
        makeStyles("indicatorsContainer", modifier),
        menuIsOpen && style["select__indicatorsContainer--menu_open"],
      ),
    indicatorSeparator: () => makeStyles("indicatorSeparator", modifier),
    menu: () => makeStyles("menu", modifier),
    menuList: () => makeStyles("menuList", modifier),
    option: ({ isFocused }: { isFocused: boolean }) =>
      clsx(
        makeStyles("option", modifier),
        isFocused && style["select__option-focused"],
        modifier && isFocused && style[`select__option-focused--${modifier}`],
      ),
    singleValue: () => makeStyles("singleValue", modifier),
    input: () => makeStyles("input", modifier),
  };
};
