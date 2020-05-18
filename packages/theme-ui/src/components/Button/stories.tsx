import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

export const buttonData = {
  id: "1",
  children: "Test Button",
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <>
    <Button {...buttonData} {...actionsData}></Button>
  </>
);

export const Secondary = () => (
  <Button {...buttonData} {...actionsData} variant="secondary"></Button>
);
