export default {
  baseInput: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    outline: "transparent",
    variant: "text.default",
  },
  input: {
    variant: "forms.baseInput",
  },
  select: {
    variant: "forms.baseInput",
  },
  selectArrow: {
    status: {
      normal: {
        color: "monocolors.1",
      },
      focus: {
        color: "accents.0",
      },
      error: {
        color: "error",
      },
    },
  },
  textarea: {
    variant: "forms.baseInput",
    bg: "rgba(245, 245, 245, 0.4)}",
    borderTop: (theme) =>
      `${theme.space[2]}px solid ${theme.colors.background}`,
    p: 3,
    resize: "none",
  },
  label: {
    fontWeight: "regular",
    status: {
      normal: {
        color: "text",
      },
      focus: {
        color: "accent",
      },
      error: {
        color: "error",
      },
    },
  },
  status: {
    normal: {
      borderBottomColor: "monocolors.1",
    },
    focus: {
      borderBottomColor: "accents.0",
    },
    error: {
      borderBottomColor: "error",
    },
  },
};
