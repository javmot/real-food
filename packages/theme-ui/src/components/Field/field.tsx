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
import React, { useState, MutableRefObject } from "react";
import { getMargin, unique } from "../utils";

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
  (
    {
      as: Control,
      name,
      status: initialStatus,
      label,
      error,
      ...props
    }: FieldProps,
    ref: MutableRefObject<any>
  ) => {
    const [status, setStatus] = useState(
      getInitialStatus(initialStatus, error)
    );
    const id = name || unique("styled-field-");

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
          ref={ref}
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
