import Document, { Html, Head, Main, NextScript } from 'next/document';

import { KakaoBusiness } from '../hscripts/kakao';
import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="shortcut icon" href="/ms-icon-144x144.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <KakaoBusiness />
      </Html>
    );
  }
}

export default MyDocument;
