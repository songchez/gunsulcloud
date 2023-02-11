import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Script from 'next/script';

import { Base } from '../templates/Base';
import { theme } from '../utils/materialUi';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  function Kakao() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Component {...pageProps} />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
          onLoad={Kakao}
        ></Script>
      </Base>
    </ThemeProvider>
  );
}
