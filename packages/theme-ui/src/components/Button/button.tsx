/** @jsx jsx */
import React from "react";
import {
  jsx,
  Button as ThemeUIButton,
  ButtonProps as ThemeUIButtonProps,
} from "theme-ui";

interface ButtonProps extends ThemeUIButtonProps {
  size?: string;
}

const Button = React.forwardRef(
  ({ size = "regular", ...props }: ButtonProps) => (
    <ThemeUIButton
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

export default Button;
