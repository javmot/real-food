import React from "react";

import { addDecorator } from "@storybook/react";

import ThemeDecorator from "./ThemeDecorator";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Calistoga&display=swap:300,400,700",
      "Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap",
    ],
  },
});

addDecorator(ThemeDecorator);
