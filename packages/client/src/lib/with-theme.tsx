import React, { FunctionComponent } from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "@real-food/theme-ui";
import { AnyProperties } from "../config/interfaces";

interface WithThemeProps extends AnyProperties {}

const withTheme = (
	WrappedComponent: FunctionComponent<any>
): FunctionComponent<WithThemeProps> => ({ ...props }) => (
	<ThemeProvider theme={theme}>
		<WrappedComponent {...props} />
	</ThemeProvider>
);

export default withTheme;
