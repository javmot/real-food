/** @jsx jsx */
import { jsx, Styled, Box } from "@real-food/theme";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";

export default () => (
  <div>
    <Box sx={{ width: 8 }}>
      <Styled.h2>Color Palette</Styled.h2>
      <ColorPalette />
      <Styled.h2>Type Scale</Styled.h2>
      <TypeScale
        sx={{
          color: "text",
        }}
      />
      <Styled.h2>Links</Styled.h2>
      <Styled.a>Read More</Styled.a>
      <Styled.h2>Font Styles</Styled.h2>
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        fontSize="4"
        lineHeight="heading"
        sx={{
          color: "heading",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        saepe?
      </TypeStyle>
      <TypeStyle
        fontFamily="body"
        fontWeight="body"
        fontSize="3"
        lineHeight="body"
        sx={{
          color: "text",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
        ullam?
      </TypeStyle>
    </Box>
  </div>
);
