import React from "react";
import { Box } from "../src/index";

const ContainerDecorator = (storyFn) => (
  <Box py={4} px={5}>
    {storyFn()}
  </Box>
);

export default ContainerDecorator;
