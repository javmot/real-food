export default {
  baseInput: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    outline: "transparent",
    variant: "forms.status.normal",
  },
  input: {
    variant: "forms.baseInput",
  },
  select: {
    variant: "forms.baseInput",
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
    fontWeight: "heading",
    material: {
      cursor: "text",
      transition: "transform 0.15s ease-in-out",
      zIndex: 0,
      position: "relative",
      transform: "translateY(30px)",
    },
    materialFocus: {
      transition: "transform 0.15s ease-in-out",
      transform: "translateY(0px)",
    },
    status: {
      normal: {
        bolor: "text",
      },
      focus: {
        color: "secondary",
      },
      error: {
        color: "error",
      },
    },
  },
  status: {
    normal: {
      borderBottomColor: "grayLight",
    },
    focus: {
      borderBottomColor: "secondaryLight",
    },
    error: {
      borderBottomColor: "error",
    },
  },
};
