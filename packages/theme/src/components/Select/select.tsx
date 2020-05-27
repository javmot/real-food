/** @jsx jsx */
import React, { MutableRefObject } from "react";
import {
  jsx,
  Select as ThemeUISelect,
  SelectProps as ThemeUISelectProps,
  Box,
} from "theme-ui";
import { FaChevronDown } from "react-icons/fa";
import { getMargin, omitMargin } from "../utils";

interface SelectProps extends ThemeUISelectProps {
  status?: string;
}

export const Select = React.forwardRef(
  ({ status, ...props }: SelectProps, ref: MutableRefObject<any>) => (
    <Box
      sx={{
        position: "relative",
      }}
      {...getMargin(props)}
    >
      <Box
        ref={ref}
        as="select"
        variant="forms.select"
        {...omitMargin(props)}
        sx={{
          variant: `forms.status.${status}`,
          display: "block",
          width: "100%",
          p: 2,
          appearance: "none",
          bg: "transparent",
        }}
      />
      <FaChevronDown
        sx={{
          variant: `forms.selectArrow.status.${status}`,
          position: "absolute",
          right: 1,
          top: "50%",
          transform: "translateY(-50%)",
          transition: "transform 200ms ease-out",
          ...(status === "focus" && {
            transform: "translateY(-50%) rotate( 180deg )",
          }),
        }}
      />
    </Box>
  )
);
