/** @jsx jsx */
import {
  jsx,
  Input,
  Label,
  Box,
  Text,
  FieldOwnProps,
  BoxProps,
} from "theme-ui";
import React, { useState } from "react";
import { getMargin } from "../utils";

let idx = 0;
const unique: (prefix: string) => string = (prefix = "styled-field") =>
  `${prefix}-${idx++}`;
const getInitialStatus = (initial, error) => {
  if (error) return "error";

  return initial;
};
export interface FieldProps extends FieldOwnProps, BoxProps {
  as?: any;
  status?: string;
  error?: string;
}

export const Field = React.forwardRef(
  ({
    as: Control,
    name,
    status: initialStatus,
    label,
    error,
    ...props
  }: FieldProps) => {
    const [status, setStatus] = useState(
      getInitialStatus(initialStatus, error)
    );
    const id = unique(name);

    const onFocusChange = (focus) => (e) => {
      setStatus(focus ? "focus" : getInitialStatus(initialStatus, error));

      if (focus && props.onFocus) props.onFocus(e);
      if (!focus && props.onBlur) props.onBlur(e);
    };

    return (
      <Box {...getMargin(props)}>
        <Label
          sx={{
            variant: `forms.label.status.${status}`,
          }}
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
        />
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
  }
);

Field.defaultProps = {
  as: Input,
  status: "normal",
};
