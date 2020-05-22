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
    color: "heading",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 6,
  },
  h2: {
    variant: "styles.h1",
    fontSize: 5,
  },
  h3: {
    variant: "styles.h1",
    fontSize: 4,
  },
  h4: {
    variant: "styles.h1",
    fontSize: 3,
  },
  h5: {
    variant: "styles.h1",
    fontSize: 2,
  },
  h6: {
    variant: "styles.h1",
    fontSize: 0,
  },
  p: {
    color: "body",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
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
