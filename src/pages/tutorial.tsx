import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import Tutorial from '@/components/tutorial/tutorial';
import { getPostsData } from '../lib/post';

// SSGのの場合は、getStaticPropsを使用する
export const getStaticProps = async () => {
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
};

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
