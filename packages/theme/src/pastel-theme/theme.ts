import { Theme as StyledTheme } from "theme-ui";
import base from "./base";
import buttons from "./buttons";
import styles from "./mdx";
import forms from "./forms";
import text from "./text";

interface Theme extends StyledTheme {
  text: any;
  forms: any;
  buttons: any;
}

const theme: Theme = {
  ...base,
  ...buttons,
  text,
  forms,
  styles,
};

export default theme;
