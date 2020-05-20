/* eslint-disable dot-notation */

const base = {
  space: [0, 4, 8, 12, 20, 28, 36, 48, 72],
  radii: [0, 1, 2, 4],
  borderWidths: [0, 1, 3, 5],
  borders: ["none"],
  zIndices: [-1, 0, 1, 10, 100],
  sizes: [
    0,
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
  ],
  fonts: {
    body: "Lato",
    heading: "Calistoga",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 15, 16, 18, 22, 28, 34],
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    heading: "#526270",
    gray: "#A6A6A6",
    grayLight: "#D9D9D9",
    grayLighter: "#F2F2F2",
    grayDark: "#737373",
    background: "#fff",
    text: "#5F6368",
    textDark: "#3F4C57",
    textLight: "#8AA5BD",
    primary: "#E48C77",
    primaryDark: "#C97C69",
    primaryLight: "#EBAD9E",
    secondary: "#95BFA6",
    secondaryDark: "#63806F",
    secondaryLight: "#9FCCB1",
    muted: "#E2CCA6",
    mutedDark: "#C9B693",
    mutedLight: "#F0D8AF",
    error: "#A36555",
  },
};
// Aliases
base.sizes["full"] = "100%";

export default base;
