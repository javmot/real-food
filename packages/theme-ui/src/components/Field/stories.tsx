import React from "react";
import { action } from "@storybook/addon-actions";
import { Select } from "theme-ui";

import Field from "./index";

export default {
  component: Field,
  title: "Field",
  excludeStories: /.*Data$/,
};

export const fieldData = {
  name: "testField",
  label: "Test Field",
};

export const actionsData = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
};

export const Default = () => <Field {...fieldData} {...actionsData}></Field>;

export const Focus = () => (
  <Field {...fieldData} {...actionsData} status="focus"></Field>
);

export const Error = () => (
  <Field
    {...fieldData}
    {...actionsData}
    status="error"
    error="Error Message"
  ></Field>
);

export const DefaultValue = () => (
  <Field {...fieldData} {...actionsData} defaultValue="default value"></Field>
);

export const SelectComponent = () => (
  <Field
    sx={{
      textAlign: "center",
    }}
    {...fieldData}
    {...actionsData}
    as={Select}
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Field>
);
