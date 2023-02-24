import type { AppProps } from 'next/app';
//型定義
import type { NextPageWithLayout } from '@/types';
import Head from 'next/head';

import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';

import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import 'swiper/css';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  // getLayout はNextjsの機能
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        {/* maximum-scale=1でピンチイン・アウトを無効化 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>
          AutoHotKeyJP - AutoHotKey日本語チュートリアル＆コミュニティ
        </title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <ModalsContainer />
      <DrawersContainer />
    </>
  );
}

export default CustomApp;
