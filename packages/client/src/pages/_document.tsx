import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="es">
				<Head />
				<link
					href="/fonts/Calistoga-Regular.woff2"
					rel="preload"
					as="font"
					crossOrigin=""
				/>
				<link
					href="/fonts/Lato-Light.woff2"
					rel="preload"
					as="font"
					crossOrigin=""
				/>
				<link
					href="/fonts/Lato-LightItalic.woff2"
					rel="preload"
					as="font"
					crossOrigin=""
				/>
				<link
					href="/fonts/Lato-Regular.woff2"
					rel="preload"
					as="font"
					crossOrigin=""
				/>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
