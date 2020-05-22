import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { AppProps } from "next/app";
import { ThemeProvider, pastelTheme } from "@real-food/theme";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
	whyDidYouRender(React, {
		logOwnerReasons: true,
	});
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={pastelTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
