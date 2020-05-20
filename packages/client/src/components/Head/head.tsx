import React from "react";
import NextHead from "next/head";

type Head = ({ children }: { children: React.ReactNode }) => JSX.Element;

const Head: Head = ({ children }) => (
	<NextHead>
		<link
			href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
			rel="stylesheet"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
			rel="stylesheet"
		/>
		{children}
	</NextHead>
);

export default Head;
