import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import Tutorial from '@/components/tutorial/tutorial';

const TutorialPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Tutorial" description="Tutorial - AutoHotKey" />
      <Tutorial />
    </>
  );
};

TutorialPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default TutorialPage;
