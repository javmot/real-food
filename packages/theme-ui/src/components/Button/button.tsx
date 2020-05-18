/** @jsx jsx */
import { jsx, Button } from "theme-ui";

export default ({ size = "regular", ...props }) => (
  <Button
    sx={{
      outline: "transparent",
      cursor: "pointer",
      variant: `buttonSizes.${size}`,
    }}
    {...props}
  />
);
