/** @jsx jsx */
import { jsx, Flex, Box, useThemeUI } from "theme-ui";

export default ({ direction = "row", type, as: Component, text, ...props }) => {
  const { theme } = useThemeUI();
  const variants = theme[type];

  if (!variants) return "";

  return (
    <Flex
      sx={{
        flexDirection: direction,
        flexWrap: "wrap",
      }}
    >
      {Object.keys(variants).map((variant) => (
        <Box mr={3} mb={3} key={variant}>
          <Component variant={variant} children={text} {...props} />
        </Box>
      ))}
    </Flex>
  );
};
