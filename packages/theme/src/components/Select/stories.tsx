import React from "react";
import { action } from "@storybook/addon-actions";

import WidthDecorator from "../../../.storybook/WidthDecorator";
import { Select } from "./select";

export default {
  component: Select,
  title: "Select",
  excludeStories: /.*Data$/,
  decorators: [WidthDecorator("50%")],
};

export const SelectData = {
  name: "testSelect",
};

export const actionsData = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
};

export const Default = () => (
  <Select {...SelectData} {...actionsData}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
);

export const Focus = () => (
  <Select {...SelectData} {...actionsData} status="focus">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
);

export const Error = () => (
  <Select {...SelectData} {...actionsData} status="error">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
);
