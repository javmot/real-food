import { Theme as ThemeUI } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

export interface Theme extends Omit<ThemeUI, "buttons"> {
  text: { [k: string]: SystemStyleObject };
  forms: { [k: string]: SystemStyleObject };
  buttons: { [k: string]: SystemStyleObject };
  layout: { [k: string]: SystemStyleObject };
  iconList: { [k: string]: SystemStyleObject };
}
