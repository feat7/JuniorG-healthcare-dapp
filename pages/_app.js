
import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import store from "../stores";
import Header from '../components/header';
import Footer from '../components/footer';

class MainApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}
export default MainApp;