import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';

import { Base } from '../templates/Base';
import { theme } from '../utils/materialUi';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </ThemeProvider>
  );
}
