/** @jsx jsx */
import React, { MutableRefObject } from "react";
import { jsx, Styled } from "theme-ui";
import { RiCheckLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface IconListProps {
  children: React.ReactNode;
}

interface IconListItemProps {
  children: React.ReactNode;
  as?: IconType;
  color?: string;
}

interface IconListInterface
  extends React.ForwardRefExoticComponent<
    IconListProps & React.RefAttributes<any>
  > {
  [key: string]: any;
}

export const IconList: IconListInterface = React.forwardRef(
  ({ children }: IconListProps, ref: MutableRefObject<any>) => (
    <Styled.ul
      ref={ref}
      sx={{
        listStyleType: "none",
        ml: 0,
        pl: 0,
      }}
    >
      {children}
    </Styled.ul>
  )
);

IconList.Item = React.forwardRef(
  (
    { children, as: Icon, color }: IconListItemProps,
    ref: MutableRefObject<any>
  ) => (
    <Styled.li
      ref={ref}
      sx={{
        my: 2,
        "& > .real-food-icons": {
          color,
          pr: 2,
          fontSize: 4,
        },
      }}
    >
      <Icon />
      {children}
    </Styled.li>
  )
);

IconList.Item.defaultProps = {
  as: RiCheckLine,
  color: "primary",
};
