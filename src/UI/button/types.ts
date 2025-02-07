import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode } from "react";
import { HashLinkProps } from "react-router-hash-link";

export interface IPressElement {
  class_name?: string;
  label?: string;
  icon?: ReactNode;
  icon_pos?: "left" | "right";
  modifier?: string;
  label_text?: boolean;
  children?: ReactNode;
}

export let TPressComponent: Pick<
  IPressElement,
  "label" | "icon" | "icon_pos" | "children"
>;

export interface IPressBtn
  extends IPressElement,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IPressLink
  extends IPressElement,
    LinkHTMLAttributes<HTMLAnchorElement> {}

export interface IPressHashLink extends IPressElement, HashLinkProps {}
