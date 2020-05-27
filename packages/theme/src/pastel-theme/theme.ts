import { Theme } from "../interfaces";
import base from "./base";
import buttons from "./buttons";
import styles from "./mdx";
import forms from "./forms";
import text from "./text";
import layout from "./layout";
import iconList from "./icon-list";

const theme: Theme = {
  ...base,
  ...buttons,
  text,
  forms,
  styles,
  layout,
  iconList,
};

export default theme;
