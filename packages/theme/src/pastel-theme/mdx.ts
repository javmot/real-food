import { StyledTags } from "theme-ui";
import { SystemStyleObject } from "@styled-system/css";

const styles: {
  [P in StyledTags]?: SystemStyleObject;
} = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: 1,
  },
  h1: {
    variant: "text.heading",
    fontSize: 6,
  },
  h2: {
    variant: "text.heading",
    fontSize: 5,
  },
  h3: {
    variant: "text.heading",
    fontSize: 4,
  },
  h4: {
    variant: "text.heading",
    fontSize: 3,
  },
  h5: {
    variant: "text.heading",
    fontSize: 2,
  },
  h6: {
    variant: "text.heading",
    fontSize: 0,
  },
  p: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
    mt: 3,
    mb: 4,
  },
  a: {
    color: "primary",
    fontWeight: "regular",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover,&:visited": {
      color: "primaries.3",
    },
    "&:active": {
      color: "primaries.1",
    },
  },
  hr: {
    color: "monocolors.1",
    my: [7, 8],
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  img: {
    maxWidth: "100%",
  },
};

export default styles;
