/** @jsx jsx */
import React, { MutableRefObject } from "react";
import {
  jsx,
  Button as ThemeUIButton,
  ButtonProps as ThemeUIButtonProps,
} from "theme-ui";

interface ButtonProps extends ThemeUIButtonProps {
  size?: string;
}

export const Button = React.forwardRef(
  ({ size = "regular", ...props }: ButtonProps, ref: MutableRefObject<any>) => (
    <ThemeUIButton
      ref={ref}
      sx={{
        outline: "transparent",
        cursor: "pointer",
        variant: `buttonSizes.${size}`,
      }}
      {...props}
    />
  )
);

Button.defaultProps = {
  size: "regular",
};
