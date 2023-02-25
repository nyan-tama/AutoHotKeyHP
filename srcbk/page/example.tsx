import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import Example from '@/components/example/example';

const ExamplePage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Example" description="Example - AutoHotKey" />
      <Example />
    </>
  );
};

ExamplePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExamplePage;
