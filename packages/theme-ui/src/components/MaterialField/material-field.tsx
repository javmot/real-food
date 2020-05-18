/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Input, Label, Box } from "theme-ui";

let idx = 0;
const unique = () => `material-field-${idx++}`;

const MaterialField = ({ label, name = unique(), ...props }) => {
  const [hasValue, setValue] = useState(!!props.value);
  const [hasFocus, setFocus] = useState(false);

  const onChange = (e) => {
    setValue(!!e.target.value);

    if (props.onChange) props.onChange(e);
  };

  const onFocusChange = (focus) => (e) => {
    setFocus(focus);

    if (focus && props.onFocus) props.onFocus(e);
    if (!focus && props.onBlur) props.onBlur(e);
  };

  return (
    <Box>
      <Label
        htmlFor={name}
        sx={{
          lineHeight: 1,
          variant:
            hasValue || hasFocus
              ? "forms.label.materialFocus"
              : "forms.label.material",
        }}
        {...props}
      >
        {label}
      </Label>
      <Input
        {...props}
        onFocus={onFocusChange(true)}
        onBlur={onFocusChange(false)}
        onChange={onChange}
        id={name}
        name={name}
      ></Input>
    </Box>
  );
};

export default MaterialField;
