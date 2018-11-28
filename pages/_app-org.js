import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import GlobalStyle from 'static/global-styles';
import { ThemeProvider } from 'styled-components';
import DeepCastTheme from 'components/theme/DeepCast';

import initStore from 'store';

/* debug to log how the store is being used */
export default withRedux(initStore, {
	debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: {
					// Call page-level getInitialProps
					...(Component.getInitialProps
						? await Component.getInitialProps(ctx)
						: {})
				}
			};
		}

		render() {
			const { Component, pageProps, store } = this.props;
			return (
				<Container>
					<ThemeProvider theme={DeepCastTheme}>
						<Head>
							<title>Todo App</title>
						</Head>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
					</ThemeProvider>
					<GlobalStyle />
				</Container>
			);
		}
	}
);
