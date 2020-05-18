import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { AppProps } from "next/app";
import withTheme from "../lib/with-theme";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
	whyDidYouRender(React, {
		logOwnerReasons: true,
	});
}

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default withTheme(App);
