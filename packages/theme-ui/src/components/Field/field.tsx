/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Input, Label, Box, Text } from "theme-ui";

let idx = 0;
const unique = (prefix = "styled-field") => `${prefix}-${idx++}`;
const getInitialStatus = (initial, error) => {
  if (error) return "error";

  return initial;
};
export interface FieldProps {
  label: string;
  as?: any;
  name?: string;
  status?: string;
  error?: string;
  children?: React.ReactNode;
  defaultValue?: string;
  onFocus?: (event: any) => void;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
}

const Field = ({
  as: Control,
  name,
  status: initialStatus,
  label,
  error,
  ...props
}: FieldProps) => {
  const [status, setStatus] = useState(getInitialStatus(initialStatus, error));
  const id = unique(name);

  const onFocusChange = (focus) => (e) => {
    setStatus(focus ? "focus" : getInitialStatus(initialStatus, error));

    if (focus && props.onFocus) props.onFocus(e);
    if (!focus && props.onBlur) props.onBlur(e);
  };

  return (
    <Box>
      <Label
        sx={{
          variant: `forms.label.status.${status}`,
        }}
        {...props}
        htmlFor={id}
      >
        {label}
      </Label>
      <Control
        sx={{
          variant: `forms.status.${status}`,
        }}
        {...props}
        onFocus={onFocusChange(true)}
        onBlur={onFocusChange(false)}
        id={id}
        name={id}
      ></Control>
      {error && (
        <Text
          sx={{
            textAlign: "right",
          }}
          pt={1}
          variant="error"
        >
          {error}
        </Text>
      )}
    </Box>
  );
};

Field.defaultProps = {
  as: Input,
  status: "normal",
};

export default Field;
