import Head from 'next/head';
import 'keen-slider/keen-slider.min.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';
import '../style/styles.scss';
import axios from 'axios';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

axios.defaults.baseURL = 'http://localhost:5000';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Vollkorn&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
