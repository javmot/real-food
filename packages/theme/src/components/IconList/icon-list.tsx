/** @jsx jsx */
import React, { MutableRefObject } from "react";
import { jsx, Box, BoxProps } from "theme-ui";
import { BsCheck } from "react-icons/bs";
import { IconType } from "react-icons";

interface IconListProps extends BoxProps {
  children: React.ReactNode;
}

interface IconListItemProps extends BoxProps {
  children: React.ReactNode;
  icon?: IconType;
  iconColor?: string;
}

interface IconListInterface
  extends React.ForwardRefExoticComponent<
    IconListProps & React.RefAttributes<any>
  > {
  [key: string]: any;
}

export const IconList: IconListInterface = React.forwardRef(
  ({ children, ...props }: IconListProps, ref: MutableRefObject<any>) => (
    <Box
      as="ul"
      ref={ref}
      sx={{
        listStyleType: "none",
        variant: "iconList.list",
      }}
      {...props}
    >
      {children}
    </Box>
  )
);

IconList.Item = React.forwardRef(
  (
    { children, icon: Icon, iconColor, ...props }: IconListItemProps,
    ref: MutableRefObject<any>
  ) => (
    <Box
      as="li"
      ref={ref}
      sx={{
        variant: "iconList.item",
      }}
      {...props}
    >
      <Icon
        sx={{
          variant: "iconList.icon",
          ...(iconColor && {
            color: iconColor,
          }),
        }}
      />
      {children}
    </Box>
  )
);

IconList.Item.defaultProps = {
  icon: BsCheck,
};
