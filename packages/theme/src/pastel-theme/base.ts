/* eslint-disable dot-notation */

const base = {
  space: [0, 4, 8, 12, 20, 28, 36, 48, 72],
  radii: [0, 1, 2, 4],
  borderWidths: [0, 1, 3, 5],
  borders: ["none", "1px solid #BFBFBF"],
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
    body: "Lato, 'Lucida Grande', Tahoma, Sans-Serif",
    heading: "'Calistoga', cursive",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 15, 16, 18, 22, 28, 34, 42],
  fontWeights: {
    body: 300,
    light: 300,
    regular: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    heading: "#526270",
    text: "#5F6368",
    background: "#fff",
    primary: "#E48C77",
    primaries: ["#ECD3CD", "#EBAD9E", "#C97C69", "#A36555"],
    monocolor: "#000",
    monocolors: [
      "#F2F2F2",
      "#D9D9D9",
      "#BFBFBF",
      "#A6A6A6",
      "#8C8C8C",
      "#737373",
      "#4D4D4D",
      "#333333",
    ],
    secondary: "#E2CCA6",
    secondaries: ["#F0D8AF", "#C9B693", "#A39377", "#635A49"],
    accent: "#95BFA6",
    accents: ["#9FCCB1", "#81A690", "#63806F", "#324037"],
    error: "#AA5545",
  },
};
// Aliases
base.sizes["full"] = base.sizes[10];
base.sizes["half"] = base.sizes[5];

export default base;
