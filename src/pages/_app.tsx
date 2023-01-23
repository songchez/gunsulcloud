import { AppProps } from 'next/app';

import '../styles/global.css';
import { Base } from '../templates/Base';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
}
