import React from "react";
import { action } from "@storybook/addon-actions";
import { BsCheckCircle } from "react-icons/bs";

import { IconList } from "./icon-list";

export default {
  component: IconList,
  title: "IconList",
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <IconList {...actionsData}>
    <IconList.Item {...actionsData}>Item 1</IconList.Item>
    <IconList.Item {...actionsData}>Item 2</IconList.Item>
  </IconList>
);

export const AlternativeColor = () => (
  <IconList {...actionsData}>
    <IconList.Item {...actionsData} iconColor="secondary">
      Item 1
    </IconList.Item>
    <IconList.Item {...actionsData} iconColor="accent">
      Item 2
    </IconList.Item>
  </IconList>
);

export const AlternativeIcon = () => (
  <IconList {...actionsData}>
    <IconList.Item {...actionsData} icon={BsCheckCircle}>
      Item 1
    </IconList.Item>
    <IconList.Item {...actionsData} icon={BsCheckCircle}>
      Item 2
    </IconList.Item>
  </IconList>
);
