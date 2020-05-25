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
			{/* prettier-ignore */}
			<style jsx global>{`
				@font-face {
					font-family: "Calistoga";
					src: url("/fonts/Calistoga-Regular.woff2") format("woff2"),
						url("/fonts/Calistoga-Regular.woff") format("woff");
					font-weight: normal;
					font-style: normal;
					font-display: swap;
				}
				@font-face {
					font-family: "Lato";
					src: url("/fonts/Lato-Light.woff2") format("woff2"),
						url("/fonts/Lato-Light.woff") format("woff");
					font-weight: light;
					font-style: normal;
					font-display: swap;
				}
				@font-face {
					font-family: "Lato";
					src: url("/fonts/Lato-LightItalic.woff2") format("woff2"),
						url("/fonts/Lato-LightItalic.woff") format("woff");
					font-weight: light;
					font-style: italic;
					font-display: swap;
				}
				@font-face {
					font-family: "Lato";
					src: url("/fonts/Lato-Regular.woff2") format("woff2"),
						url("/fonts/Lato-Regular.woff") format("woff");
					font-weight: normal;
					font-style: normal;
					font-display: swap;
				}
			`}</style>
		</ThemeProvider>
	);
}
