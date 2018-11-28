import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();

		const originalRenderPage = ctx.renderPage;
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [...initialProps.styles, ...sheet.getStyleElement()]
		};
	}

	render() {
		return (
			<html style={{ background: '#EEE', color: '#444' }}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/img/favicon.ico" />
					<link
						rel="stylesheet"
						href="../static/scss/custom-bootstrap-4.1.3.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
