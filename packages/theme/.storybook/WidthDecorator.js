/** @jsx jsx */
import { jsx, Box } from "../src/index";

const WidthDecorator = (width) => (storyFn) => (
  <Box
    sx={{
      width,
    }}
  >
    {storyFn()}
  </Box>
);

export default WidthDecorator;
