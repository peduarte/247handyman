import Router from 'next/router';
import withGA from 'next-ga';
import '../styles.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGA('UA-3592048-1', Router)(MyApp);
