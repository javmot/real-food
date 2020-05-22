export default {
  buttonSizes: {
    regular: {
      px: 5,
      py: 2,
      fontSize: 2,
      fontWeight: "heading",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "primaries.2",
      },
      "&:active": {
        bg: "primaries.1",
      },
    },
    outline: {
      color: "primary",
      bg: "background",
      boxShadow: (theme) =>
        `inset 0 0 0 ${theme.borderWidths[2]}px ${theme.colors.primary}`,
      "&:hover": {
        bg: "monocolors.0",
        boxShadow: (theme) =>
          `inset 0 0 0 ${theme.borderWidths[2]}px ${theme.colors.primaries[2]}`,
      },
      "&:active": {
        bg: "monocolors.1",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
      "&:hover": {
        bg: "secondaries.2",
      },
      "&:active": {
        bg: "secondaries.0",
      },
    },
  },
};
