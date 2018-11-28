import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
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
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* <script defer src="https://code.getmdl.io/1.3.0/material.min.js" /> */}
				</body>
			</html>
		);
	}
}
